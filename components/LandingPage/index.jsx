import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage(props) {
  const {
    logo,
    image4,
    image3,
    image1,
    text9,
    text10,
    place,
    inspiration,
    events,
    searchPlaceholde,
    anonymous,
    anonymous2,
    anonymous3,
    anonymous4,
    anonymous5,
    stressed,
    text11,
    text12,
    text13,
    text14,
    postAnomyously,
    postButton,
    insertTest,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing-page screen">
        <div className="overlap-group4-1 mulish-bold-black-24px">
          <div className="images-1">
            <img className="logo-1" src={logo} />
            <img className="image-4-1" src={image4} />
            <div className="flex-col-4">
              <img className="image-3-1" src={image3} />
              <img className="image-1-1" src={image1} />
            </div>
          </div>
          <div className="overlap-group-3">
            <div className="header"></div>
            <div className="text-9 mulish-bold-white-36px">{text9}</div>
            <div className="text-10 mulish-bold-white-36px">{text10}</div>
            <div className="place-1 mulish-bold-white-24px">{place}</div>
            <Link to="/inspiration-page">
              <div className="inspiration-1 mulish-bold-white-24px">{inspiration}</div>
            </Link>
            <Link to="/events-page">
              <div className="events-1 mulish-bold-white-24px">{events}</div>
            </Link>
          </div>
          <div className="overlap-group1-2">
            <img className="icon-search-icon-1" src="/img/icon-search-icon@2x.svg" />
            <div className="searchplaceholde-1 mulish-bold-roman-24px">{searchPlaceholde}</div>
          </div>
          <div className="main-div-for-user-divs"></div>
          <div className="user-divs">
            <div className="overlap-group2-1">
              <div className="rectangle-3"></div>
            </div>
            <div className="rectangle-1"></div>
            <div className="rectangle-1"></div>
            <div className="rectangle-1"></div>
            <div className="rectangle-8-1"></div>
          </div>
          <div className="users-1">
            <div className="anonymous-5">{anonymous}</div>
            <div className="anonymous-6">{anonymous2}</div>
            <div className="anonymous-7">{anonymous3}</div>
            <div className="anonymous-8">{anonymous4}</div>
            <div className="anonymous-9">{anonymous5}</div>
          </div>
          <div className="text-boxes-for-users-1">
            <div className="rectangle-11-1"></div>
            <div className="rectangle-12-1"></div>
            <div className="rectangle-13-1"></div>
            <div className="rectangle-14-1"></div>
            <div className="rectangle-15-1"></div>
          </div>
          <div className="user-texts">
            <div className="stressed">{stressed}</div>
            <div className="text-11">{text11}</div>
            <div className="text-12">{text12}</div>
            <div className="text-13">{text13}</div>
            <div className="text-14">{text14}</div>
          </div>
          <div className="overlap-group3-1">
            <div className="maindiv"></div>
            <div className="post-anomyously-1 mulish-bold-black-24px">{postAnomyously}</div>
            <img className="post-div" src="/img/post-div@2x.svg" />
            <div className="post-button mulish-bold-white-24px">{postButton}</div>
            <div className="textbox-div"></div>
            <div className="insert-test">{insertTest}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
