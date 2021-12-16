import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./InspirationPage.css";
import Axios from 'axios'

function Index(props) {
  
  const [posts, getPosts] = useState('');
  const url = 'http://localhost:3001/'
  useEffect(() => { getAllPosts();},[]);

  const [inspirationpost, setInspirationPost] = useState('')
  const submitpost = () => {
    //Axios.get(url+'insertinspirationposts', {post: inspirationpost}).then(() => {alert("success");});
    //Axios.post('http://localhost:3001/inspirationposts').then(() => {alert("success");});
    //Axios({url:'http://localhost:3001/inspirationposts' , method:'get'});
    //Axios({url:'http://localhost:3001/inspirationposts1' , method:'post'});
    /*
    Axios.get(url+'insertinspirationposts', {
    headers: {
      'Content-Type': 'application/json',
    }
    })
  */
    Axios.get(url+'insertinspirationposts', {
      params: {
        'post': inspirationpost,
      }
      })
/*
  Axios.get(url+'insertinspirationposts', {'post': inspirationpost })       
      .then(response => {
          console.log(response.data);
  });
    */
  }
  // load the post on page
  const getAllPosts = () => {
    Axios({url:url+'inspirationposts' , method:'get'})
    .then((response) => {
      const allposts = response.data
      
      if(allposts.length > 0){
        
        return(
          allposts.map((post,index) => {
            console.log(post);
            return(
              <div id="postdiv" width = "1000px" height="200px" visible= "true">
              <h3 >{post.usertype}</h3>
              <p >{post.post}</p>
              </div>
            )

            
          })
        )
        
      } else {
        return (<h3>No notes yet</h3>)
      }
    })
    .catch(error => console.error('Error: ${error}'));
   
  }
  
  

  
  

  
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
            
            <p className="text-8">{text8}</p>
          </div>
          <div className="overlap-group4">
            <div className="overlap-group-2">
              <div className="rectangle-21" >
                <input type="text" name="txtinspirationpost" onChange={(e)=> {setInspirationPost(e.target.value)}}  ></input>
                
              </div>
              <div className="post-anomyously">{postAnomyously}</div>
              
            </div>
            
            <div className="overlap-group1-1">
              
              <div className="post mulish-bold-white-24px"><button onClick={submitpost}>Post!</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
