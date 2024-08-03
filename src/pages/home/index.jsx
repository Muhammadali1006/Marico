import React from "react";
import "./home.css";
import style from './home_2.module.css'
import Navbar from "../../components/Navbar";
import screen from "../../assets/Screen.png"
import pink from "../../assets/pink.png"
import image from "../../assets/Image.png"
import logo from "../../assets/img.png"

const Home = () => {
  return (
    <>
      <div className='container'>
        <h1>
          Own your audience. <br />
          <span className="color_h1">So you don't lose them.</span>
        </h1>

        <h4>
          Turn your audience into email and <br />
          text message subscribers.
        </h4>
        <div className={style["btns"]}>
          <button className={style["blue_btn"]}>Get Started Now</button>
          <button className={style["black_btn"]}>View A Demo</button>
        </div>

        <div className="box">
          <div className="green_box"></div>
          <b className="bold_p">1000+</b>
          <p>creators have already started</p>
        </div>

        <h2>Why Creators Love Marico</h2>
        <div className="boxs">
          <div className="little_box">
            <h5>🙂 Reduced Anxiety</h5>
            <p>Never worry about losing your audience.</p>
          </div>
          <div className="little_box">
            <h5>😀 Lower Workload</h5>
            <p>Just share one link. We'll handle the rest.</p>
          </div>
          <div className="little_box">
            <h5>🥳 More Time</h5>
            <p>Spend less time on marketing tools</p>
          </div>
        </div>

        <h2>
          <span className="blue_span">STEP 1</span> <br /> Connect Your Content
        </h2>
        <p>
          Bring all of your content together and get a Homepage that <br />
          automatically updates whenever you create anywhere online.
        </p>
        <button className="black_button">View Avaliable Sources</button>

        <div className="homepage">
          <div className="homepage_text">
            <span className="white_span">Your Homepage</span>
            <h3>Your Content. <br /> All in <b>All in Copy</b></h3>
            <div className="pageone_box">
              <div className="black_box">1</div>
              <p className="white_p">Bring all of your content together into one homepage.</p>
            </div>
            <div className="pageone_box">
              <div className="black_box">2</div>
              <p className="white_p">Your page automatically updates whenever you create.</p>
            </div>
            <div className="btns">
              <button className="blue_btn">Get Started Now</button>
              <button className="black_btn">View A Demo</button>
            </div>
          </div>
          <img src={screen} alt="img" className="screen_img" />
        </div>

        {/* <h2>
          <span className="blue_span">STEP 2</span> <br /> Share Your Homepage
        </h2>
        <p>
        Share your Wavium homepage link with your followers, and <br />
        we'll handle the rest.
        </p> */}

        <h2>
          <span className="blue_span">STEP 2</span> <br /> Send Emails & Text Messages
        </h2>
        <p>
        No more going through a social platform. Reach and engage <br />
        your audience directly over email and text massage.
        </p>
        <button className="black_button">View Avaliable Sources</button>

        <div className="homepage">
          <div className="homepage_text">
            <span className="white_span">Create & Share</span>
            <h3>Reach Your <br /> Audience <b>Directly.</b></h3>
            <div className="pageone_box">
              <div className="black_box">1</div>
              <p className="white_p">Embed content or create something new to share.</p>
            </div>
            <div className="pageone_box">
              <div className="black_box">2</div>
              <p className="white_p">Share content over email, text message or your homepage.</p>
            </div>
            <div className="btns">
              <button className="blue_btn">Get Started Now</button>
              <button className="black_btn">View A Demo</button>
            </div>
          </div>
          <img src={pink} alt="img" className="screen_img" />
        </div>

        <h2>Experts Agree</h2>
        <img className="big_img" src={image} alt="img" />
    </div>
    
        <div className={style["bg_box"]}>
          <h2>We've helped over 1,000 creatorsre <br />
          claim control of their audience.</h2>
        </div>

      <div className="{style[container]}">
          <img className={style.logo_img} src={logo} alt="logo" />
          <h2>Get Started Now</h2>
          <h5>Setup is easy and takes under 5 minutes.</h5>
          <button className="blue_button">View Avaliable Sources</button>
          <div className="box">
          <div className="green_box"></div>
          <b className="bold_p">1000+</b>
          <p>creators have already started</p>
        </div>
      </div>
    </>
  );
};

export default Home;
