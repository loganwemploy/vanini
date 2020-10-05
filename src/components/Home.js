import React, {useState} from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import sampleProducts1 from '../sampleProducts';
import ProductSingle from "./ProductSingle";


const StyledHome = styled.div`
.wrapper {
  width: 1180px;
  height: auto;
  margin: 0 auto;
  padding-bottom: 40px;
}

nav {
  width: 100%;
  height: 140px;
  display: grid;
  grid-template-columns: 105px 5fr 105px;
  -webkit-box-align: center;
          align-items: center;
}

#logo {
  cursor: pointer;
}

#menu {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
          justify-content: center;
}

#menu li {
  display: inline;
  padding: 0 10px;
  position: relative;
}

#menu li:after {
  content: "";
  border-radius: 50%;
  width: 4px;
  height: 4px;
  background: #e3e1e1;
  position: absolute;
  top: 50%;
  right: -2px;
  -webkit-transform: translate();
          transform: translate();
}

#menu li:last-child:after {
  display: none;
}

#menu li a {
  font-family: HK Grotesk, sans-serif;
  color: #15454f;
  font-weight: 600;
  position: relative;
}

#menu li a:after {
  content: "";
  width: 0;
  height: 2px;
  background: #15454f;
  position: absolute;
  left: 0;
  bottom: -5px;
  -webkit-transform: translate();
          transform: translate();
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}

#menu li a:hover:after {
  width: 100%;
}

#store {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: end;
          align-items: flex-end;
  position: relative;
  -webkit-transition: 0.4s linear;
  transition: 0.4s linear;
}

#store a {
  width: 105px;
  height: 42px;
  background: #7495e8;
  border-radius: 4px;
  line-height: 45px;
  color: #fff;
  padding: 0 15px;
  font-family: HK Grotesk, sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
}

#store a i {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  font-size: 20px;
  margin-left: 5px;
}

#store:hover {
  -webkit-transform: translateY(-4px);
          transform: translateY(-4px);
  box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.3);
}

#hero {
  width: 100%;
  height: 557px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  position: relative;
  overflow: hidden;
}

#hero-desc {
  z-index: 10;
}

#hero-desc #hero-date {
  margin-bottom: 20px;
}

#hero-desc #hero-date span {
  color: #7495e8;
  font-family: HK Grotesk, sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.5px;
}

#hero-desc #hero-title {
  margin-bottom: 60px;
  width: 600px;
}

#hero-desc #hero-title h1 {
  color: #fff;
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  background: #7495e8;
  display: inline;
  padding: 10px 15px;
  border-radius: 5px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  -moz-box-decoration-break: clone;
}

#hero-desc #hero-cta a,
#hero-desc #hero-title h1 {
  font-family: HK Grotesk, sans-serif;
  letter-spacing: 0.5px;
}

#hero-desc #hero-cta a {
  color: #7495e8;
  font-weight: 500;
  position: relative;
}

#hero-desc #hero-cta a:after {
  content: "";
  width: 412px;
  height: 3px;
  background: #7495e8;
  position: absolute;
  left: 0;
  bottom: -15px;
  -webkit-transform: translate();
          transform: translate();
}

#hero-image {
  height: inherit;
  right: 0;
  position: absolute;
}

#hero-image:after {
  content: "";
  width: 100%;
  height: 100%;
  background: -webkit-gradient(linear, left top, right top, from(rgba(247, 130, 130, 0.46)), to(rgba(116, 149, 232, 0.46)));
  background: linear-gradient(90deg, rgba(247, 130, 130, 0.46), rgba(116, 149, 232, 0.46));
  position: absolute;
  top: 0;
  left: 0;
}

#content {
  width: 100%;
  height: auto;
  margin-top: 140px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 20px;
}

#articles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px 20px;
}

.article .thumb {
  width: auto;
  height: 250px;
  background: #e8e8e8;
  margin-bottom: 20px;
  border-radius: 4px;
}

.article h4 {
  color: #15454f;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}

.article h4,
.article p {
  font-family: HK Grotesk, sans-serif;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
}

.article p {
  color: rgba(21, 69, 79, 0.7);
}

.article a,
.article p {
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
}

.article a {
  color: #2ccef2;
  font-family: HK Grotesk, sans-serif;
  letter-spacing: 0.5px;
  text-decoration: underline;
}

#end {
  grid-column: 1/3;
  margin: 70px 0 30px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
          justify-content: center;
  -webkit-box-align: center;
          align-items: center;
  position: relative;
}

#end:after {
  content: "";
  width: 100%;
  height: 2px;
  background: #f2f2f2;
  position: absolute;
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

#end p {
  color: #d4d4d4;
  z-index: 10;
  font-family: HK Grotesk, sans-serif;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.5px;
  background-color: #fff;
  padding: 0 10px;
}

#sidebar {
  width: auto;
  height: 588px;
  background: rgba(202, 206, 217, 0.1);
  padding: 20px;
}

#sidebar hr {
  height: 2px;
  background: #eaeaea;
  border: none;
  margin-bottom: 20px;
}

#sidebar h4 {
  color: #15454f;
  font-family: HK Grotesk, sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.5px;
}

#sidebar h4,
#top-articles,
.sidebar-article {
  margin-bottom: 20px;
}

.sidebar-article {
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-column-gap: 20px;
}

.sidebar-article .sidebar-thumb {
  width: 60px;
  height: 60px;
  background: #e8e8e8;
}

.sidebar-article h5 {
  color: #15454f;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 8px;
}

.sidebar-article .date,
.sidebar-article h5 {
  font-family: HK Grotesk, sans-serif;
  letter-spacing: 0.5px;
}

.sidebar-article .date {
  color: rgba(21, 69, 79, 0.3);
  font-weight: medium;
  font-size: 12px;
}

#subscribe input {
  width: 100%;
  height: 56px;
  background: #fff;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0 3px 15px -6px rgba(0, 0, 0, 0.2);
  padding-left: 20px;
}

#subscribe input::-webkit-input-placeholder {
  color: rgba(21, 69, 79, 0.3);
  font-family: HK Grotesk, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

#subscribe input::-moz-placeholder {
  color: rgba(21, 69, 79, 0.3);
  font-family: HK Grotesk, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

#subscribe input:-ms-input-placeholder {
  color: rgba(21, 69, 79, 0.3);
  font-family: HK Grotesk, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

#subscribe input::-ms-input-placeholder {
  color: rgba(21, 69, 79, 0.3);
  font-family: HK Grotesk, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

#subscribe input::placeholder {
  color: rgba(21, 69, 79, 0.3);
  font-family: HK Grotesk, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

#subscribe input:focus {
  outline: none;
}

#subscribe button {
  width: 115px;
  height: 42px;
  background: #7495e8;
  line-height: 42px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-family: HK Grotesk, sans-serif;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}

#subscribe button:hover {
  -webkit-transform: translateY(-4px);
          transform: translateY(-4px);
  box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.3);
}

#subscribe button:focus {
  outline: none;
}

#cta {
  width: 100%;
  height: 150px;
  background: linear-gradient(95.46deg, #98b3f5 -0.14%, #476dcc 99.6%);
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
          justify-content: center;
}

#cta,
#cta #center {
  -webkit-box-align: center;
          align-items: center;
}

#cta #center {
  width: 1180px;
  display: grid;
  grid-template-columns: 1fr 167px;
}

#cta p {
  font-size: 24px;
  line-height: 32px;
  padding-right: 30px;
}

#cta a,
#cta p {
  color: #fff;
  font-family: HK Grotesk, sans-serif;
  letter-spacing: 0.5px;
}

#cta a {
  border: 2px solid #fff;
  height: 47px;
  line-height: 47px;
  text-align: center;
  font-weight: 400;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}

#cta a:hover {
  background: #fff;
  color: #7495e8;
}

footer {
  width: 100%;
  height: 370px;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-align: center;
          align-items: center;
  padding-top: 80px;
}

#footer-logo {
  margin-bottom: 80px;
  cursor: pointer;
}

#footer-menu {
  width: 450px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

#footer-menu a {
  text-align: center;
  font-family: HK Grotesk, sans-serif;
  color: #15454f;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.4;
  letter-spacing: 0.5px;
}

#scroll-up {
  width: 100%;
  margin: 80px 0 40px;
  position: relative;
}

#scroll-up:after {
  content: "";
  width: 100%;
  height: 2px;
  background: #f2f2f2;
  position: absolute;
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

#scroll-up span {
  width: 46px;
  height: 46px;
  background: #7495e8;
  margin: 0 auto;
  z-index: 10;
  position: relative;
  border-radius: 50%;
  display: block;
  line-height: 44px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}

#scroll-up span:hover {
  -webkit-transform: translateY(-4px);
          transform: translateY(-4px);
  box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.3);
}

#credit {
  margin-bottom: 40px;
  color: rgba(116, 149, 232, 0.7);
  font-size: 16px;
  font-family: HK Grotesk, sans-serif;
}

@media screen and (max-width: 1180px) {
  .wrapper {
    width: 95%;
  }

  #cta #center {
    width: 90%;
  }
}
@media screen and (max-width: 980px) {
  #hero {
    -webkit-box-align: end;
            align-items: flex-end;
  }

  #hero-desc {
    margin: 0 0 40px 20px;
  }

  #hero-desc #hero-cta a,
  #hero-desc #hero-date span {
    color: #fff;
  }

  #hero-desc #hero-cta a:after {
    background: #fff;
  }
}
@media screen and (max-width: 767px) {
  #hero-image {
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
  }

  #hero-image:after {
    width: 100%;
  }

  #content {
    margin-top: 20px;
    grid-template-columns: 1fr;
  }

  #articles {
    grid-gap: 20px;
  }

  #end {
    margin: 20px 0;
  }

  #sidebar {
    width: 60%;
    margin: 0 auto 40px;
  }

  #cta p {
    font-size: 20px;
  }
}
@media screen and (max-width: 567px) {
  .wrapper {
    width: 90%;
  }

  nav {
    grid-template-columns: 45px 5fr 105px;
  }

  #hero {
    height: 340px;
  }

  #hero-desc {
    margin: 0 0 25px 20px;
  }

  #hero-desc #hero-title {
    width: 400px;
    margin-bottom: 0;
  }

  #hero-desc #hero-title h1 {
    font-size: 32px;
    line-height: 52px;
    letter-spacing: 0.5px;
    background: #7495e8;
    display: inline;
    padding: 10px 15px;
    border-radius: 5px;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }

  #hero-desc #hero-cta {
    display: none;
  }

  #hero-image {
    height: auto;
  }

  #hero-image img {
    width: 100%;
  }

  #articles {
    display: block;
  }

  #articles .article {
    margin-bottom: 20px;
  }

  #articles .article .thumb {
    height: 350px;
  }

  #sidebar {
    height: auto;
    width: 100%;
    margin-bottom: 20px;
  }
}


`;
const Home = props => {
  const [count, setCount] = useState(0);
  const [sampleProducts, setSampleProducts] = useState(sampleProducts1
  );

  const onButtonClick = () => {
    props.history.push("/form");
  };
  const onButtonClickAbout = () => {
    props.history.push("/about");
  };

  

  return (
    <StyledHome>
      <div className="wrapper">
	<header>
		<nav>
			<div id="logo"><img src="https://res.cloudinary.com/prvnbist/image/upload/v1519887546/blog-logo.svg" alt="logo"/></div>
			<div id="menu">
				<ul>
          
					<li><a href="/"><button onClick={onButtonClick}>Pushing to Form</button></a></li>
					<li><a href="/about"><button onClick={onButtonClickAbout}>Pushing to About</button></a></li>
					<li><Link to="/coffee">coffee</Link></li>
					<li><a href="#">Culture</a></li>
          <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>clcik me to increcment </button>
				</ul>
			</div>
			<div id="store"><a href="#">STORE<i className="material-icons">store</i></a></div>
		</nav>
		<section id="hero">
			<div id="hero-desc">
				<div id="hero-date"><span>FEB 20, 2018</span></div>
				<div id="hero-title"><a href="#">
						<h1>Google's AI can now<br/>predict heart disease just by scanning your eyes.</h1>
					</a></div>
				<div id="hero-cta"><a href="#">Read Article</a></div>
			</div>
			<div id="hero-image"><img src="https://res.cloudinary.com/prvnbist/image/upload/v1598357022/header-article-img_bexaxb.png" alt="Google's AI can now predict heart disease just by scanning your eyes."/></div>
		</section>
	</header>
	<section id="content">
		<div id="articles">
      {/* {sampleProducts.map(sampleProd => (<h1>yooo</h1>))} */}
   {sampleProducts.map((product,index)=>(<div key={index} className="article">
			<ProductSingle product={product} />
			</div>))} 
			<div id="end">
				<p>You've reached the end of the list.</p>
			</div>
		</div>
		<div id="sidebar">
			<div id="top-articles">
				<h4>TOP ARTICLES</h4>
				<hr/>
				<div className="sidebar-article">
					<div className="sidebar-thumb"></div>
					<div className="sidebar-article-desc">
						<h5>Chile’s pollution problem has led to green startups.</h5><span className="date">Feb 10, 2018</span>
					</div>
				</div>
				<div className="sidebar-article">
					<div className="sidebar-thumb"></div>
					<div className="sidebar-article-desc">
						<h5>This DIY game console is as much fun to build as it is to play.</h5><span className="date">Feb 9, 2018</span>
					</div>
				</div>
				<div className="sidebar-article">
					<div className="sidebar-thumb"></div>
					<div className="sidebar-article-desc">
						<h5>How blockchain is streamlining business operations.</h5><span className="date">Feb 5, 2018</span>
					</div>
				</div>
				<div className="sidebar-article">
					<div className="sidebar-thumb"></div>
					<div className="sidebar-article-desc">
						<h5>This $29 JavaScript eBook helps you learn with ease.</h5><span className="date">Feb 1, 2018</span>
					</div>
				</div>
			</div>
			<div id="subscribe">
				<hr/>
				<h4>GET WEEKLY UPDATES</h4>
				<form><input type="text" placeholder="Enter your email..."/><button type="submit">SUBSCRIBE</button></form>
			</div>
		</div>
	</section>
</div>
<section id="cta">
	<div id="center">
		<p>Interested in writing for us? Shoot us an email with your work!</p><a href="#">LEAVE US A NOTE</a>
	</div>
</section>
<div className="wrapper">
	<footer>
		<div id="footer-logo"><img src="https://res.cloudinary.com/prvnbist/image/upload/v1519887546/blog-logo.svg" alt="Logo"/></div>
		<div id="footer-menu"><a href="#">TECH</a><a href="#">SCIENCE</a><a href="#">REVIEW</a><a href="#">CULTURE</a></div>
		<div id="scroll-up"><span><i className="fa fa-chevron-up"></i></span></div>
		<div id="credit">
			
		</div>
	</footer>
</div>

   
    </StyledHome>
  );
};

export default Home;
