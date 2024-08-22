import React from "react";
import first from "../img/firstMeet.jpg";
import second from "../img/firstDate.jpg";
import third from "../img/whoProposed.jpg";
import "../css/Story.css";

function Story() {
  const Box = ({ details, reverse }) => {
    const { topic, topicDate, topicDetails, imgUrl } = details;

    return (
      <div className={`divContain ${reverse ? "reverse" : ""}`}>
        <div className="storyDetails">
          <h1 className="storyTopic">{topic}</h1>
          <span className="storyDate">{topicDate}</span>
          <p className="storyDetail">{topicDetails}</p>
        </div>
        <div className="storyImage">
          <img src={imgUrl} alt={topic} />
        </div>
      </div>
    );
  };

  return (
    <div className="storyContainer">
      <h1 className="storyHeading">Our Love Story</h1>
      <Box
        details={{
          topic: "First Meet",
          topicDate: "January 14, 2020",
          topicDetails:
            "We met on a cold winter day at a cozy café. It was an unexpected encounter that sparked a connection we couldn’t ignore. Little did we know, this was the beginning of something truly special.",
          imgUrl: first,
        }}
      />
      <Box
        reverse
        details={{
          topic: "First Date",
          topicDate: "February 20, 2020",
          topicDetails:
            "Our first date was a blend of laughter, deep conversations, and a shared love for adventure. We spent the evening exploring a hidden gem of a restaurant, where time seemed to fly by.",
          imgUrl: second,
        }}
      />
      <Box
        details={{
          topic: "He Proposed",
          topicDate: "November 12, 2021",
          topicDetails:
            "On a beautiful autumn evening, under a sky full of stars, he got down on one knee and asked the question that changed our lives forever. It was a moment filled with love, joy, and the promise of a future together.",
          imgUrl: third,
        }}
      />
    </div>
  );
}

export default Story;
