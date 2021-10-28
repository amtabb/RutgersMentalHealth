import React from "react";
import { Link } from "react-router-dom";
import "./EventsPage.css";

function EventsPage(props) {
  const {
    logo,
    image4,
    searchPlaceholde,
    image3,
    place,
    text15,
    inspiration,
    text16,
    events,
    rectangle28,
    text17,
    rectangle29,
    location,
    rectangle30,
    seat25People,
    rectangle31,
    speakers4Exerts,
    aboutTheEvent,
    whatYouWillLearn,
    title,
    rectangle33,
    rectangle32,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="events-page screen">
        <div className="overlap-group4-2">
          <div className="images-2">
            <img className="logo-2" src={logo} />
            <img className="image-4-2" src={image4} />
            <div className="overlap-group-4">
              <img className="icon-search-icon-2" src="/img/icon-search-icon@2x.svg" />
              <div className="searchplaceholde-2 mulish-bold-roman-24px">{searchPlaceholde}</div>
            </div>
            <img className="image-3-2" src={image3} />
          </div>
          <div className="overlap-group1-3">
            <Link to="/landing-page" className="align-self-flex-center">
              <div className="place-2 mulish-bold-wild-sand-24px">{place}</div>
            </Link>
            <div className="overlap-group-5">
              <div className="text-1 mulish-bold-wild-sand-36px">{text15}</div>
              <div className="inspiration-2 mulish-bold-wild-sand-24px">{inspiration}</div>
            </div>
            <div className="overlap-group2-2">
              <div className="text-1 mulish-bold-wild-sand-36px">{text16}</div>
              <Link to="/inspiration-page">
                <div className="events-2 mulish-bold-wild-sand-24px">{events}</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-row-3">
          <div className="overlap-group6">
            <img className="rectangle-28" src={rectangle28} />
            <div className="text-17 roboto-normal-black-25px">{text17}</div>
          </div>
          <div className="overlap-group5-1">
            <img className="rectangle-29" src={rectangle29} />
            <div className="location roboto-normal-black-25px">{location}</div>
          </div>
          <div className="overlap-group3-2">
            <img className="rectangle-30" src={rectangle30} />
            <div className="seat-25-people roboto-normal-black-25px">{seat25People}</div>
          </div>
          <div className="overlap-group7">
            <img className="rectangle-31" src={rectangle31} />
            <div className="speakers-4-exerts roboto-normal-black-25px">{speakers4Exerts}</div>
          </div>
        </div>
        <div className="flex-row-4">
          <div className="flex-col-5">
            <div className="flex-row-5 roboto-normal-black-25px">
              <div className="about-the-event">{aboutTheEvent}</div>
              <div className="what-you-will-learn">{whatYouWillLearn}</div>
            </div>
            <div className="rectangle-34"></div>
            <div className="rectangle-35"></div>
            <div className="rectangle-36"></div>
            <h1 className="title">{title}</h1>
          </div>
          <div className="flex-col-6">
            <img className="rectangle-33" src={rectangle33} />
            <img className="rectangle-32" src={rectangle32} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
