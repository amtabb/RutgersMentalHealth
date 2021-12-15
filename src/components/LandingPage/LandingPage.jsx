import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import Axios from 'axios'

const url = 'http://localhost:3001/';

export function LandingPage(props) {
  const [postData, setPostData] = useState(undefined);

  useEffect(() => {
      Axios({url:url+'mainposts' , method:'get'})
      .then((response) => {
          
          const allposts = response.data;
          setPostData(allposts);
      })
  }, []);

  return postData !== undefined ? (<RenderLandibgPosts data={postData} landingPageData={props.landingPageData} />) : null;
}

function Poster({postAnomyously}) {
  
  const [mainpost, setMainPost] = useState('');

 const submitpost = () => {

  Axios.get(url+'insertmainposts', {
    params: {
      'post': mainpost,
    }
    })
    //reload page after post
    window.location.reload();
}
  return (

    
          
    <div className="overlap-group3-1">
    <div className="maindiv"></div>
    <div className="post-anomyously-1 mulish-bold-black-24px">{postAnomyously}</div>
    
    <div className="post-button mulish-bold-white-24px"><button onClick={submitpost} style={
               {
                 fontSize: "22px",
                 fontBold: true
               }
             }>Post!</button></div>
    <div className="textbox-div"><input type="text" name="txtinspirationpost" onChange={(e)=> {setMainPost(e.target.value)}} style={{ height: '100%', width: '100%',textAlignVertical: "top"}}></input></div>
    <div className="insert-test"></div>
    </div>
    
      
      )
}

function RenderLandibgPosts(props) {
  const { data, landingPageData} = props;
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
  } = landingPageData;
  const [tabledata,settabledata]=useState([]);
  const [q,setQ]=useState("");
  const search=(rows)=>{
  return rows.filter(row=>row.post.indexOf(q)>-1);
  }
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
            <input className="searchplaceholde-2 mulish-bold-roman-24px" type="text" placeholder={searchPlaceholde}
              value={q} onChange={e=>setQ(e.target.value)}/>
          </div>
          <div className="main-div-for-user-divs">
          {
        data.map((d) => {
            return (
              
                <div id="postdiv" style={
                  {
                   border: '4px solid grey',
                   padding: "5px"
                  }
                }>
                  <div id="type" style={
                    {
                      fontSize: "18px",
                      fontBold: true
                    }
                  }><p>{d.usertype}</p></div>
                  <div id="post" style={
                    {
                    border: '2px solid grey'
                    }
                  }><p className="text-7">{d.post}</p>
                  </div>
                </div>
               
            );
        })
        }
          </div>
          <Poster postAnomyously={postAnomyously}/>
         
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
