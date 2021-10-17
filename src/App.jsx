import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import InspirationPage from "./components/InspirationPage";
import LandingPage from "./components/LandingPage";
import EventsPage from "./components/EventsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/inspiration-page">
          <InspirationPage {...inspirationPageData} />
        </Route>
        <Route path="/:path(|landing-page)">
          <LandingPage {...landingPageData} />
        </Route>
        <Route path="/events-page">
          <EventsPage {...eventsPageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const inspirationPageData = {
  logo: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/logo@2x.png",
  image4: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/image-4@2x.png",
  image5: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/image-5@2x.png",
  image6: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/image-6@2x.png",
  image7: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/image-7@2x.png",
  image8: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/image-8@2x.png",
  image3: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/image-3@2x.png",
  image9: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/image-9@2x.png",
  image1: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/image-1@2x.png",
    anonymous: "anonymous",
    anonymous2: "anonymous",
    anonymous3: "anonymous",
    anonymous4: "anonymous",
    anonymous5: "anonymous",
    place: "POST",
    text1: "|",
    inspiration: "INSPIRATION",
    text2: "|",
    events: "EVENTS",
    searchPlaceholde: "Search Events...",
    text7: "“If you are broken, you do not have to stay broken.” — Selena Gomez",
    text4: "“My dark days made me stronger. Or maybe I already was strong, and they made me prove it.” — Emery Lord",
    text3: "“This feeling will pass. The fear is real but the danger is not.” ― Cammie McGovern",
    text6: "“Tough times never last, but tough people do!” — Robert Schuller",
    text5: "“There is a crack in everything, that’s how the light gets in” ― Leonard Cohen",
    text8: "Write your favourite quotes to inspire......",
    postAnomyously: "Post Anomyously!",
    post: "Post!",
};

const landingPageData = {
  logo: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/logo@2x.png",
  image4: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/image-4@2x.png",
  image3: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/image-3@2x.png",
  image1: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/image-1@2x.png",
    text9: "|",
    text10: "|",
    place: "POST",
    inspiration: "INSPIRATION",
    events: "EVENTS",
    searchPlaceholde: "Search Events...",
    anonymous: "anonymous",
    anonymous2: "anonymous",
    anonymous3: "anonymous",
    anonymous4: "anonymous",
    anonymous5: "anonymous",
    stressed: "stressed..",
    text11: "these exams r getting too much",
    text12: "do professors give a curve often?",
    text13: "destress event happening soon!",
    text14: "advice on studying methods?",
    postAnomyously: "Post Anomyously!",
    postButton: "Post!",
    insertTest: "Insert test...",
};

const eventsPageData = {
  logo: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/logo@2x.png",
  image4: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/image-4@2x.png",
  searchPlaceholde: "Search Events...",
  image3: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/image-3@2x.png",
  place: "POST",
  text1: "|",
  inspiration: "INSPIRATION",
  text2: "|",
  events: "EVENTS",
  rectangle28: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/rectangle-28@2x.png",
  text3: <>Date<br />25th July. 2021</>,
  rectangle29: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/rectangle-29@2x.png",
  location: "location",
  rectangle30: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/rectangle-30@2x.png",
  seat25People: <>seat<br />25 people</>,
  rectangle31: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/rectangle-31@2x.png",
  speakers4Exerts: <>speakers<br />4 exerts</>,
  aboutTheEvent: "About the event",
  whatYouWillLearn: "What you will learn",
  title: "expert speakers:",
  rectangle33: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/rectangle-33@1x.png",
  rectangle32: "https://anima-uploads.s3.amazonaws.com/projects/616aefdea0da141d1d1257f2/releases/616aefedfb3cbe0f950cdb69/img/rectangle-32@2x.png",
};

