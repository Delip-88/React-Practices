import { useState, useRef, useEffect } from 'react';
import './App.css';
import avtar from './img/avtar.png';
import comment from './img/comment.png';
import create from './img/create.png';
import heart from './img/heart.png';
import del from './img/del.png';
import retweet from './img/retweet.png';

function App() {
  const [tweet, setTweet] = useState('');
  const [components, setComponents] = useState([]);
  const [count, setCount] = useState(200);
  const [editingId, setEditingId] = useState(null); // State for tracking which tweet is being edited
  const tweetRef = useRef(null);
  const MAX_LENGTH = 200;

  // Load tweets from localStorage on component mount
  useEffect(() => {
    const savedTweets = JSON.parse(localStorage.getItem('tweets')) || [];
    setComponents(savedTweets);
  }, []);

  // Save tweets to localStorage whenever components state changes
  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(components));
  }, [components]);

  // Handle changes in the textarea
  const handleChange = (e) => {
    const { value } = e.target;
    
    if (value.length <= MAX_LENGTH) {
      setTweet(value);
      setCount(MAX_LENGTH - value.length);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweet.trim() === '') {
      tweetRef.current.focus(); // Focus the textarea if it's empty
      return;
    }
    if (editingId) {
      // Update existing tweet if we're editing
      updateTweet(editingId, tweet);
    } else {
      // Add new tweet if not editing
      addTweet(tweet);
    }
    setTweet(''); // Clear textarea after submission
    setCount(MAX_LENGTH);
    setEditingId(null); // Reset editing ID
  };

  // Add a new tweet to the components state
  const addTweet = (msg) => {
    const newTweet = {
      id: Date.now(), // Use timestamp as a unique ID
      message: msg,
      dateTime: new Date().toLocaleString(), // Include timestamp for display
    };
    setComponents(prevComponents => [...prevComponents, newTweet]); // Add new tweet
  };

  // Update an existing tweet
  const updateTweet = (id, newMessage) => {
    setComponents(prevComponents =>
      prevComponents.map(tweet =>
        tweet.id === id
          ? { ...tweet, message: newMessage, dateTime: new Date().toLocaleString() }
          : tweet
      )
    );
  };

  // Delete a tweet by its ID
  const handleDelete = (id) => {
    setComponents(prevComponents => prevComponents.filter(tweet => tweet.id !== id));
  };

  // Set the tweet content and ID for editing
  const handleEdit = (id, message) => {
    setEditingId(id); // Set the ID of the tweet being edited
    setTweet(message); // Set the content to be edited
  };

  // Tweet component to display individual tweets
  const Tweet = ({ tweet, onEdit, onDelete }) => {
    const { id, message, dateTime } = tweet;

    return (
      <div className="card" key={id}>
        <div className="info">
          <div className="imgwrapper">
            <img src={avtar} className='pfp' alt="avatar" />
          </div>
          <strong>Anonymous</strong>
          <span className='cap'>@Anonymous</span>
        </div>
        <div className="twtmsg">
          {message}
        </div>
        <div className="icons">
          <div className="first">
            <span className='edit'>
              <img src={create} alt="edit" onClick={() => onEdit(id, message)} />
            </span>
            <span className='delete'>
              <img src={del} alt="delete" onClick={() => onDelete(id)} />
            </span>
          </div>
          <div className="second">
            <span><img src={comment} alt="comment" /></span>
            <span><img src={heart} alt="like" /></span>
            <span><img src={retweet} alt="retweet" /></span>
          </div>
          <div className="third">
            {dateTime}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <textarea
          name="tweetInput"
          id="tweet"
          placeholder="What's on your mind?"
          value={tweet}
          onChange={handleChange}
          ref={tweetRef}
          cols={35}
          rows={3}
        />
        <p className='count'>{count}</p>
        <button type="submit" >
          {editingId ? 'Update Post' : 'Add Post'}
        </button>
      </form>

      {components.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
