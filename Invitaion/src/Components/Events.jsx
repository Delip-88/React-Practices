import React from "react";
import e1 from "../img/event/e1.jpg";
import e2 from "../img/event/e2.jpg";
import e3 from "../img/event/e3.jpg";
import "../css/Events.css";

function Events() {
  const EventCard = ({ data }) => {
    const { topic, topicInfo, imageUrl } = data;

    return (
      <div className="eventCard">
        <div className="eImgWrap">
          <img src={imageUrl} alt={topic} />
        </div>
        <div className="eInfo">
          <h3 className="eTopic">{topic}</h3>
          <span className="eTopicInfo">{topicInfo}</span>
          <button className="readMore">Read more...</button>
        </div>
      </div>
    );
  };
  return (
    <div className="eventsContainer">
      <h1 className="MainTopic">Wedding Events</h1>
      <div className="Events">
        <EventCard
          data={{
            topic: "Bride Shower",
            imageUrl: e1,
            topicInfo:
              "The Bride Shower is a joyful celebration filled with love, laughter, and meaningful moments. Friends and family come together to shower the bride with affection and thoughtful gifts, creating memories that will be cherished.",
          }}
        />
        <EventCard
          data={{
            topic: "Wedding Reception",
            imageUrl: e2,
            topicInfo:
              "The Wedding Reception is an elegant affair where the newlyweds are surrounded by loved ones. The evening features touching speeches, joyful dancing, and a feast that brings everyone together to celebrate the union of two hearts.",
          }}
        />
        <EventCard
          data={{
            topic: "After Party",
            imageUrl: e3,
            topicInfo:
              "The After Party is an energetic and lively continuation of the celebrations. Guests let loose on the dance floor, enjoying the vibrant atmosphere and creating unforgettable memories as the night progresses.",
          }}
        />
      </div>
    </div>
  );
}

export default Events;
