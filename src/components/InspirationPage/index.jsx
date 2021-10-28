import React from "react";
import { Link } from "react-router-dom";
import "./InspirationPage.css";

function InspirationPage(props) {
  const {
    logo,
    image4,
    image5,
    image6,
    image7,
    image8,
    image3,
    image9,
    image1,
    anonymous,
    anonymous2,
    anonymous3,
    anonymous4,
    anonymous5,
    place,
    text1,
    inspiration,
    text2,
    events,
    searchPlaceholde,
    text7,
    text4,
    text3,
    text6,
    text5,
    text8,
    postAnomyously,
    post,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="inspiration-page screen">
        <div className="overlap-group5">
          <div className="images">
            <div className="flex-col">
              <div className="flex-row">
                <img className="logo" src={logo} />
                <img className="image-4" src={image4} />
              </div>
              <div className="flex-row-1">
                <img className="image-5" src={image5} />
                <img className="image-6" src={image6} />
                <img className="image-7" src={image7} />
              </div>
            </div>
            <div className="flex-col-1">
              <div className="flex-row-2">
                <img className="image-8" src={image8} />
                <div className="flex-col-2">
                  <img className="image-3" src={image3} />
                  <img className="image-9" src={image9} />
                </div>
              </div>
              <img className="image-1" src={image1} />
            </div>
          </div>
          <div className="overlap-group">
            <div className="rectangle"></div>
            <div className="rectangle-8"></div>
            <div className="rectangle-7"></div>
            <div className="rectangle-6"></div>
            <div className="rectangle-4"></div>
            <div className="rectangle"></div>
            <div className="text-boxes-for-users">
              <div className="rectangle-11"></div>
              <div className="rectangle-12"></div>
              <div className="rectangle-13"></div>
              <div className="rectangle-14"></div>
              <div className="rectangle-15"></div>
            </div>
            <div className="users mulish-bold-black-24px">
              <div className="anonymous">{anonymous}</div>
              <div className="anonymous-1">{anonymous2}</div>
              <div className="anonymous-2">{anonymous3}</div>
              <div className="anonymous-3">{anonymous4}</div>
              <div className="anonymous-4">{anonymous5}</div>
            </div>
          </div>
          <div className="overlap-group1">
            <Link to="/landing-page" className="align-self-flex-end">
              <div className="place mulish-bold-desert-storm-24px">{place}</div>
            </Link>
            <div className="overlap-group-1">
              <div className="text mulish-bold-desert-storm-36px">{text1}</div>
              <div className="inspiration mulish-bold-desert-storm-24px">{inspiration}</div>
            </div>
            <div className="overlap-group2">
              <div className="text mulish-bold-desert-storm-36px">{text2}</div>
              <Link to="/events-page">
                <div className="events mulish-bold-desert-storm-24px">{events}</div>
              </Link>
            </div>
          </div>
          <div className="overlap-group3">
            <img className="icon-search-icon" src="/img/icon-search-icon@2x.svg" />
            <div className="searchplaceholde mulish-bold-roman-24px">{searchPlaceholde}</div>
          </div>
          <div className="usertexts">
            <div className="flex-col-3 mulish-bold-black-14px">
              <p className="text-7">{text7}</p>
              <p className="text-4">{text4}</p>
              <p className="text-3">{text3}</p>
              <p className="text-6">{text6}</p>
              <p className="text-5">{text5}</p>
            </div>
            <p className="text-8">{text8}</p>
          </div>
          <div className="overlap-group4">
            <div className="overlap-group-2">
              <div className="rectangle-21"></div>
              <div className="post-anomyously">{postAnomyously}</div>
            </div>
            <div className="overlap-group1-1">
              <div className="post mulish-bold-white-24px">{post}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InspirationPage;
