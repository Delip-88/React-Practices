import React, { forwardRef } from "react";
import e1 from "../img/event/e1.jpg";
import e2 from "../img/event/e2.jpg";
import e3 from "../img/event/e3.jpg";
import "../css/Events.css";



const Events = forwardRef((props,ref)=> {
  const EventCard = ({ data }) => {
    const { topic, topicInfo, imageUrl, ani} = data;

    return (
      <div className="eventCard" data-aos={ani} data-aos-offset="10" data-aos-duration="1200">
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
    <div className="eventsContainer" ref={ref}>
      <h1 className="MainTopic" data-aos="fade-down">Wedding Events</h1>
      <div className="Events">
        <EventCard
          data={{
            topic: "Bride Shower",
            imageUrl: e1,
            topicInfo:
              "The Bride Shower is a joyful celebration filled with love, laughter, and meaningful moments. Friends and family come together to shower the bride with affection and thoughtful gifts, creating memories that will be cherished.",
              ani :"fade-right"
          }}
        />
        <EventCard
          data={{
            topic: "Wedding Reception",
            imageUrl: e2,
            topicInfo:
              "The Wedding Reception is an elegant affair where the newlyweds are surrounded by loved ones. The evening features touching speeches, joyful dancing, and a feast that brings everyone together to celebrate the union of two hearts.",
              ani:"zoom-in-up"
          }}
        />
        <EventCard
          data={{
            topic: "After Party",
            imageUrl: e3,
            topicInfo:
              "The After Party is an energetic and lively continuation of the celebrations. Guests let loose on the dance floor, enjoying the vibrant atmosphere and creating unforgettable memories as the night progresses.",
              ani: "fade-left"
          }}
        />
      </div>
    </div>
  );
})

export default Events;
