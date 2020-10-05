import React, { Component } from 'react'
import styled from 'styled-components';
import HeroFinalResolve from './HeroFinalResolve';
const StyledAbout = styled.div`
 padding:0 5px 0 5px;
/* color:#FAFAFA; */
background-color:#efefef;
font-size:16px;
font-size:162.5%;

	
	#cont {margin-top:0;width: 100%;padding-top:0;border:5px 5px 7px 5px solid #fff;}
	#boat {padding-top:0;padding-left:25%;padding-right: 25%;}
	#colm {text-align: center; max-width: 100%;max-height:100%; background:none;}
#slide-1 {width:100%;
height:1375px;
  background-image: url("QuinonesBae/testing9.jpg"); 
  background-position: center center; 
  background-repeat: none;
  background-size: cover !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-attachment: fixed;
}

/* */

	/* */
		.menu {
  font-weight: 100;
  background: #efefef;
  width: 150px;
  height: 100%;
  padding-left: 50px;
  position: fixed;
  z-index: 100;
  -webkit-box-shadow: -3px 0px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: -3px 0px 5px 0px rgba(0, 0, 0, 0.2);
  right: -130px;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  color: #FD5E54;
}
.menu:hover, .menu:focus {
  transform: translate3d(-130px, 0, 0);
  animation-timing-function: 2s ease-in;
}
.menu .title {
  top: 50%;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  transform: rotate(270deg);
  left: 10px;
  font-weight: 800;
  font-size: 15px;
}
.menu .nav {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-weight: 100;
}
.menu .nav li {
  padding-bottom: 30px;
  list-style-type: none;
}
.menu .nav li a {
  display: block;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
}
.menu .nav li a:hover {
  color: #aaa;
}

.intro {
  position: absolute;
  top: 30%;
  margin: 0 auto;
  left: 0;
  right: 0;
  font-size: 45px;
  text-align: center;
  font-style: italic;
}
/* */
.text {
  opacity: 0;
  position: absolute;
  z-index: 7;
  text-align: left;
  margin: -50px 0 0 -150px;
  width: 300px;
  height: 100px;
  top: 50%;
  left: 50%;
  font-size: 48px;
  font-weight: 700;
  -webkit-animation: on .6s ease-in-out 3.7s forwards;
  -moz-animation: on .6s ease-in-out 3.7s forwards;
  -o-animation: on .6s ease-in-out 3.7s forwards;
  animation: on .6s ease-in-out 3.7s forwards;
}
.text p {
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  -webkit-animation: type .3s steps(60, end) 3.7s;
  -moz-animation: type .3s steps(60, end) 3.7s;
  -o-animation: type .3s steps(60, end) 3.7s;
  animation: type .3s steps(60, end) 3.7s;
}
.text p:nth-child(2) {
  -webkit-animation: type2 .5s steps(60, end) 3.7s;
  -moz-animation: type2 .5s steps(60, end) 3.7s;
  -o-animation: type2 .5s steps(60, end) 3.7s;
  animation: type2 .5s steps(60, end) 3.7s;
}
.text button {
  border: 0;
  opacity: 0;
  background: #191919;
  color: #fefefe;
  border: 1px solid #191919;
  letter-spacing: 2px;
  padding: .5rem 2.5rem;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: color 0.5s, background-color 0.5s;
  -moz-transition: color 0.5s, background-color 0.5s;
  -ms-transition: color 0.5s, background-color 0.5s;
  -o-transition: color 0.5s, background-color 0.5s;
  transition: color 0.5s, background-color 0.5s;
  -webkit-animation: on .6s ease-in-out 4s forwards;
  -moz-animation: on .6s ease-in-out 4s forwards;
  -o-animation: on .6s ease-in-out 4s forwards;
  animation: on .6s ease-in-out 4s forwards;
}
.text button:hover {
  background: #fefefe;
  color: #191919;
  border: 1px solid #191919;
}

.splash {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
}
.splash_logo {
  position: absolute;
  margin: -15px 0 0 -25px;
  top: 50vh;
  z-index: 5;
  left: 50vw;
  width: 50px;
  text-align: center;
  height: 30px;
  font-size: 26px;
  font-weight: 600;
  color: #ffffff;
  opacity: 1;
  will-change: opacity;
  -webkit-animation: logo .3s ease-in 1.5s forwards, off .6s ease-in-out 3.2s forwards;
  -moz-animation: logo .3s ease-in 1.5s forwards, off .6s ease-in-out 3.2s forwards;
  -o-animation: logo .3s ease-in 1.5s forwards, off .6s ease-in-out 3.2s forwards;
  animation: logo .3s ease-in 1.5s forwards, off .6s ease-in-out 3.2s forwards;
}
.splash_logo:before {
  display: block;
  position: absolute;
  left: 15px;
  bottom: -5px;
  width: 20px;
  height: 1px;
  background-color: #757474;
  content: "";
}
.splash_logo:after {
  display: block;
  position: absolute;
  left: 15px;
  top: -5px;
  width: 20px;
  height: 1px;
  background-color: #757474;
  content: "";
  will-change: width;
}
.splash_svg {
  position: relative;
  margin: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
  right: 0;
}
.splash_svg svg {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
}
.splash_svg svg rect {
  width: 100%;
  height: 100%;
  fill: #222;
  stroke: 0;
  -webkit-clip-path: polygon(45vw 40vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
  clip-path: polygon(45vw 40vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
  -webkit-animation: expand .7s ease-in forwards 2.7s;
  -moz-animation: expand .7s ease-in forwards 2.7s;
  -o-animation: expand .7s ease-in forwards 2.7s;
  animation: expand .7s ease-in forwards 2.7s;
}
.splash_minimize {
  position: absolute;
  margin: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 4;
}
.splash_minimize svg {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
}
.splash_minimize svg rect {
  width: 100%;
  height: 100%;
  -webkit-clip-path: polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh);
  clip-path: polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh);
  -webkit-animation: scale .2s ease-out forwards 1s, hide 1.3s ease-out forwards 1.2s;
  -moz-animation: scale .2s ease-out forwards 1s, hide 1.3s ease-out forwards 1.2s;
  -o-animation: scale .2s ease-out forwards 1s, hide 1.3s ease-out forwards 1.2s;
  animation: scale .2s ease-out forwards 1s, hide 1.3s ease-out forwards 1.2s;
}

@-webkit-keyframes scale {
  100% {
    -webkit-clip-path: polygon(45vw 40vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
    clip-path: polygon(45vw 40vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
  }
}
@-moz-keyframes scale {
  100% {
    -webkit-clip-path: polygon(45vw 40vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
    clip-path: polygon(45vw 40vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
  }
}
@-o-keyframes scale {
  100% {
    -webkit-clip-path: polygon(45vw 40vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
    clip-path: polygon(45vw 40vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
  }
}
@keyframes scale {
  100% {
    -webkit-clip-path: polygon(45vw 40vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
    clip-path: polygon(45vw 40vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
  }
}
@-webkit-keyframes hide {
  100% {
    fill: transparent;
  }
}
@-moz-keyframes hide {
  100% {
    fill: transparent;
  }
}
@-o-keyframes hide {
  100% {
    fill: transparent;
  }
}
@keyframes hide {
  100% {
    fill: transparent;
  }
}
@-webkit-keyframes off {
  100% {
    opacity: 0;
  }
}
@-moz-keyframes off {
  100% {
    opacity: 0;
  }
}
@-o-keyframes off {
  100% {
    opacity: 0;
  }
}
@keyframes off {
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes on {
  100% {
    opacity: 1;
  }
}
@-moz-keyframes on {
  100% {
    opacity: 1;
  }
}
@-o-keyframes on {
  100% {
    opacity: 1;
  }
}
@keyframes on {
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes logo {
  100% {
    color: #efefef;
  }
}
@-moz-keyframes logo {
  100% {
    color: #efefef;
  }
}
@-o-keyframes logo {
  100% {
    color: #efefef;
  }
}
@keyframes logo {
  100% {
    color: #efefef;
  }
}
@-webkit-keyframes type {
  0% {
    width: 0;
  }
}
@-moz-keyframes type {
  0% {
    width: 0;
  }
}
@-o-keyframes type {
  0% {
    width: 0;
  }
}
@keyframes type {
  0% {
    width: 0;
  }
}
@-webkit-keyframes type2 {
  0% {
    width: 0;
  }
  50% {
    width: 0;
  }
  100% {
    width: 100;
  }
}
@-moz-keyframes type2 {
  0% {
    width: 0;
  }
  50% {
    width: 0;
  }
  100% {
    width: 100;
  }
}
@-o-keyframes type2 {
  0% {
    width: 0;
  }
  50% {
    width: 0;
  }
  100% {
    width: 100;
  }
}
@keyframes type2 {
  0% {
    width: 0;
  }
  50% {
    width: 0;
  }
  100% {
    width: 100;
  }
}
@-webkit-keyframes expand {
  25% {
    -webkit-clip-path: polygon(0vw 0vh, 55vw 40vh, 55vw 58vh, 45vw 58vh);
    clip-path: polygon(0vw 0vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
    fill: red;
  }
  50% {
    -webkit-clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 45vw 60vh);
    clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 45vw 60vh);
    fill: orange;
  }
  75% {
    -webkit-clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 0vw 100vh);
    clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 0vw 100vh);
    fill: yellow;
  }
  100% {
    -webkit-clip-path: polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh);
    clip-path: polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh);
    fill: #fff;
  }
}
@-moz-keyframes expand {
  25% {
    -webkit-clip-path: polygon(0vw 0vh, 55vw 40vh, 55vw 58vh, 45vw 58vh);
    clip-path: polygon(0vw 0vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
    fill: red;
  }
  50% {
    -webkit-clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 45vw 60vh);
    clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 45vw 60vh);
    fill: orange;
  }
  75% {
    -webkit-clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 0vw 100vh);
    clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 0vw 100vh);
    fill: yellow;
  }
  100% {
    -webkit-clip-path: polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh);
    clip-path: polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh);
    fill: #fff;
  }
}
@-o-keyframes expand {
  25% {
    -webkit-clip-path: polygon(0vw 0vh, 55vw 40vh, 55vw 58vh, 45vw 58vh);
    clip-path: polygon(0vw 0vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
    fill: red;
  }
  50% {
    -webkit-clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 45vw 60vh);
    clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 45vw 60vh);
    fill: orange;
  }
  75% {
    -webkit-clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 0vw 100vh);
    clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 0vw 100vh);
    fill: yellow;
  }
  100% {
    -webkit-clip-path: polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh);
    clip-path: polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh);
    fill: #fff;
  }
}
@keyframes expand {
  25% {
    -webkit-clip-path: polygon(0vw 0vh, 55vw 40vh, 55vw 58vh, 45vw 58vh);
    clip-path: polygon(0vw 0vh, 55vw 40vh, 55vw 60vh, 45vw 60vh);
    fill: red;
  }
  50% {
    -webkit-clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 45vw 60vh);
    clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 45vw 60vh);
    fill: orange;
  }
  75% {
    -webkit-clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 0vw 100vh);
    clip-path: polygon(0vw 0vh, 100vw 0vh, 55vw 60vh, 0vw 100vh);
    fill: yellow;
  }
  100% {
    -webkit-clip-path: polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh);
    clip-path: polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh);
    fill: #fff;
  }
}
#baby3 {display:none;font-family:LogieFont;color:#FD584E !important;background:transparent;border:medium solid #FD584E; margin:auto !important; padding:7 5 7 5;margin-top:6.25% !important; font-size:36px;}
#baby4 {z-index:3;}
#baby4:hover {color:#000 !important;}
#mobileMenufix{font-size:58px; margin-left:-100%;}
@media(max-width:450px){
	#mobileMenufix{font-size:28px; margin-top:95% !important;margin-left:-55%;color:#ccc;}
}
`;
export class About extends Component {
    render() {
        return (
            <StyledAbout>
               <div className="menu" style={{marginLeft: '100%'}}>
    <div className="title" id="mobileMenufix"><i className="fa fa-sort"> </i> MENU</div>
    <ul className="nav" style={{marginLeft:'-21%'}}>
      <li><a href="#">Our Story</a></li>
      <li><a href="#">What We Offer</a></li>
      <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSchz7cmKLXBcwCfskLqJllrfhLwXseE5HlLZ5JMFR-XhpATlw/viewform">Personalized Consultation Form</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
</div>



<div className="splash" id="splashy">
  <div className="splash_logo" style={{marginTop:'-1.35em'}}>
   GQ B&amp;E
   </div>
  <div className="splash_svg" id="baby2">
    <svg width="100%" height="100%">
      <rect width="100%" height="100%" />
	  </svg>
  </div>
  <div className="splash_minimize">
    <svg width="100%" height="100%">
      <rect width="100%" height="100%" />
	  </svg>
  </div>
</div>
<div className="row">
<div><img className="img-responsive" id='mama' style={{margin:'auto',float:'center',zIndex:'9999999'}} src="https://placehold.it/200x200.jpg"/>
{/* <button id='baby3'><a id='baby4' style={{color:'#FD5B52'}} href="https://docs.google.com/forms/d/e/1FAIpQLSchz7cmKLXBcwCfskLqJllrfhLwXseE5HlLZ5JMFR-XhpATlw/viewform">Free Consultation Here</a></button> */}
<HeroFinalResolve />
{/*  */}
<div id='baby' className="text col-lg-12 col-xs-offset-0" style={{color:'#030303',padding:'5px 7px 5px 7px'}}>

<img style={{transform:'scale(1.67)'}} src="https://lh3.googleusercontent.com/sLFON78cVZg-Yg5L7P8ORCNXi7ahmlufla7melyqterGOKixYh7ZARzJ0rrx6fxvm63oNboysNTpjJcBICMPYhIDOT8=s192" alt="logopics" id="logoPicture"/>
<br/>
  <button style={{padding:'5px 7px 5px 7px', marginTop:'3px'}}>View Products</button>
</div>
</div> 
</div>
            </StyledAbout>
        )
    }
}

export default About



  



 

