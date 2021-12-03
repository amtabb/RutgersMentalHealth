import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./InspirationPage.css";
import Axios from 'axios'
import { useCallback } from "react";

const url = 'http://localhost:3001/';
//getting allposts
export function InspirationPage(props) {
    const [postData, setPostData] = useState(undefined);

    useEffect(() => {
        Axios({url:url+'inspirationposts' , method:'get'})
        .then((response) => {
            
            const allposts = response.data;
            setPostData(allposts);
        })
    }, []);

    return postData !== undefined ? (<RenderInspirationPosts data={postData} inspirationPageData={props.inspirationPageData} />) : null;
}
// post functionality
function Poster({postAnomyously}) {
    
    const [inspirationpost, setInspirationPost] = useState('');

   const submitpost = () => {
  
    Axios.get(url+'insertinspirationposts', {
      params: {
        'post': inspirationpost,
      }
      })
      //reload page after post
      window.location.reload();
  }
    return (
        <div className="overlap-group4">
          <div className="overlap-group-2">
            <div className="rectangle-21" >
            <input type="text" name="txtinspirationpost" onChange={(e)=> {setInspirationPost(e.target.value)}} style={{ height: '100%', width: '100%',textAlignVertical: "top",paddingTop: 0,paddingBottom: 0}}></input>
            </div>
            <div className="post-anomyously">{postAnomyously}</div>
            
          </div>
          
          <div className="overlap-group1-1">
            
            <div className="post mulish-bold-white-24px"><button onClick={submitpost} style={
                  {
                    fontSize: "18px",
                    fontBold: true
                  }
                }>Post!</button></div>
          </div>
        </div>)
}


function RenderInspirationPosts(props) {
    const { data, inspirationPageData} = props;
    const { logo,
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
        postAnomyously } = inspirationPageData;

        
    return (<div className="container-center-horizontal">
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
        
        <div className="usertexts">
          <div className="flex-col-3 mulish-bold-black-14px">

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
        </div>
        <Poster postAnomyously={postAnomyously}/>
      </div>
    </div>
  </div>);
}
