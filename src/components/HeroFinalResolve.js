import React, { Component } from 'react'
import styled from 'styled-components';
import CoffeeProductCard from './CoffeeProductCard';

const StyledHeroFinalResolve = styled.div`
  * {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: sub;
}

a {
  text-decoration: none;
  color: rgba(105, 105, 105, 0.88);
  transition: color .3s ease;
}
a:hover {
  color: #fc6e51;
}

body {
  font-family: 'Open Sans', sans-serif;
  background: #f9f9f9;
}

.flexslider {
  border: none;
  box-shadow: none;
}

.flex-direction-nav a {
  background: url(https://flexslider.woothemes.com/images/bg_direction_nav.png) no-repeat 0 0;
  width: 30px;
  height: 30px;
  margin: -20px 0 0;
  display: block;
  position: absolute;
  top: 50%;
  cursor: pointer;
  text-indent: -9999px;
  opacity: 0;
  -webkit-transition: all .3s ease;
}
.flex-direction-nav a:before {
  content: '';
}

.flex-direction-nav .flex-next {
  background-position: 100% 0;
  right: -36px;
  text-align: left;
}
.flex-direction-nav .flex-next:before {
  content: '';
}

.heading h3 {
  font-weight: 300;
  color: #888888;
}

.nav ul {
  margin: 0;
  padding: 0;
}
.nav li {
  list-style: none;
  margin: 0;
}

.btn-navbar {
  margin-top: 10px;
  margin-bottom: 10px;
}
.btn-navbar li {
  float: left;
  margin: 0 5px;
}
.btn-navbar li:first-child {
  margin-left: 0;
}

.btn {
  display: inline-block;
  padding: 6px 14px;
  background: #f2f2f2;
  border-radius: 3px;
  font-size: 0.8125em;
  color: #b9bcbc;
  transition: background .3s ease, color .3s ease;
}
.btn:hover {
  background: #e5e5e5;
  color: #929797;
}
.btn.btn-primary {
  background: #a1d36e;
  color: #fff;
}
.btn.btn-primary:hover, .btn.btn-primary.active {
  background: #94cd5a;
}
.btn.btn-secondary {
  background: #6ad1dd;
  color: #fff;
}
.btn.btn-secondary:hover, .btn.btn-secondary.active {
  background: #55cbd8;
}
.btn.btn-tertiary {
  background: #fc6e51;
  color: #fff;
}
.btn.btn-tertiary:hover, .btn.btn-tertiary.active {
  background: #fc5938;
}
.btn.btn-quaternary {
  background: #48cfad;
  color: #fff;
}
.btn.btn-quaternary:hover, .btn.btn-quaternary.active {
  background: #35c9a4;
}
.btn.btn-white {
  background: #fff;
}
.btn.btn-white:hover {
  /* background: #fafafa; */
}
.btn.btn-grey {
  background: #dddddd;
}
.btn.btn-grey:hover {
  background: #cccccc;
}
.btn.btn-large {
  padding: 12px 28px;
}
.btn.btn-caps {
  text-transform: uppercase;
}
.btn.btn-block {
  display: block;
  width: 100%;
  text-align: center;
}

.btn-group {
  position: relative;
  display: inline-block;
  margin: 10px 0;
}
.btn-group:before {
  content: attr(data-grouptype);
  color: #999;
  display: block;
  font-size: 0.8125em;
  width: 19px;
  height: 19px;
  padding: 5px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 6px;
  margin-left: -18px;
}
.btn-group a + a {
  margin-left: 5px;
}

.btn-navbar .btn {
  font-size: 0.6875em;
}
.btn-navbar .active {
  background: #6ad1dd;
  color: #fff;
}
.btn-navbar .active:hover {
  background: #55cbd8;
}

.post {
  font-family: 'Source Sans Pro', sans-serif;
  box-shadow: 0 2px 0 rgba(204, 204, 204, 0.15);
  margin-bottom: 20px;
}
.post .post-image {
  display: block;
}
.post .icon-attachment {
  color: #fff;
}
.post .details {
  position: relative;
  background: #fff;
  text-align: center;
  padding: 0 10px 10px;
}
.post .details h2 {
  font-size: 0.90625em;
  font-weight: 600;
  color: #696969;
  margin: 0;
  padding: 5px 0;
}
.post .details p {
  font-size: 0.8125em;
  color: #aaaaaa;
  margin: 0 0 5px;
  padding: 0;
}
.post .details .intents {
  text-align: right;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.6875em;
  color: #aaaaaa;
  line-height: 14px;
}
.post .details .intents [class*="icon-"] {
  font-size: 14px;
}
.post .details .intents .count {
  line-height: 14px;
  display: inline-block;
  position: relative;
  top: -3px;
  margin: 0 5px;
}
.post .details .intents .icon-star {
  color: #fc6e51;
}
.post .actions {
  height: 20px;
}
.post .actions [class*="icon-"] {
  font-size: 18px;
  font-weight: normal;
}
.post .actions .btn-round {
  position: relative;
  border-radius: 50%;
  padding: 10px 0;
  width: 38px;
  height: 38px;
  top: -19px;
  text-align: center;
}
.post.post-blog .details {
  font-family: 'Open Sans', sans-serif;
  padding: 10px 20px;
  text-align: left;
}
.post.post-blog .details h2 {
  font-size: 1.375em;
  font-weight: 300;
}
.post.post-blog .details strong {
  color: #888888;
}
.post.post-product .details {
  text-align: left;
  padding: 0 20px 20px;
}
.post.post-product .product-actions {
  margin: 20px 0 0;
}
.post.post-product .download-count {
  margin: 0 20px;
}

.slider img {
  border-radius: 3px;
}

.widget {
  font-family: 'Source Sans Pro', sans-serif;
  box-shadow: 0 2px 0 rgba(204, 204, 204, 0.15);
  margin-bottom: 20px;
  border-radius: 0 0 3px 3px;
  background: #fff;
  position: relative;
}
.widget .header {
  height: 100px;
  border-radius: 3px 3px 0 0;
  font-size: 1.25em;
  font-weight: 600;
  color: #fff;
  line-height: 100px;
  padding: 0 20px;
  overflow: hidden;
  position: relative;
}
.widget .header h2 {
  margin: 0;
}
.widget .header h3 {
  font-size: 0.6875em;
  text-transform: uppercase;
  margin: 0;
  line-height: 100px;
  text-align: center;
  font-weight: 300;
}
.widget .header.header-tertiary {
  background: #fc6e51;
}
.widget .header.header-quaternary {
  background: #48cfad;
}
.widget .header.header-twitter {
  background: #55acee;
}
.widget .header .background-icon [class*="icon-"] {
  color: rgba(0, 0, 0, 0.05);
  position: absolute;
  top: -20px;
  left: -40px;
  font-size: 7.5em;
}
.widget .actions {
  height: 20px;
  text-align: center;
}
.widget .actions [class*="icon-"] {
  font-size: 18px;
  font-weight: normal;
}
.widget .actions .btn-round {
  position: relative;
  border-radius: 50%;
  padding: 10px 0;
  width: 38px;
  height: 38px;
  top: -19px;
  text-align: center;
}
.widget .actions .btn-twitter {
  background: #55acee;
  color: #fff;
}
.widget .actions .btn-twitter:hover {
  background: #3ea1ec;
}

.weather .weather-icon {
  position: absolute;
  right: 20px;
  top: 35px;
  font-size: 1.25em;
  line-height: 1em;
}
.weather .weather-icon-shadow {
  position: absolute;
  color: rgba(0, 0, 0, 0.05);
  font-size: 6.25em;
  top: -20px;
  right: -20px;
  -webkit-transform: rotate(-20deg);
}
.weather ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.weather .day {
  padding: 20px 30px;
  border-bottom: 1px solid #f2f2f2;
  color: #888;
  font-family: 'Source Sans Pro', sans-serif;
}
.weather .day:last-child {
  border-bottom: none;
}
.weather .image {
  display: block;
  float: left;
  margin-right: 10px;
}
.weather .day-title {
  text-transform: uppercase;
  color: #555;
  font-weight: 600;
}
.weather .day-icon {
  line-height: 50px;
  color: #aaaaaa;
  font-size: 1.25em;
}

.twitter ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.twitter li {
  border-bottom: 1px solid #f2f2f2;
  padding: 20px 30px;
}
.twitter li:last-child {
  border-bottom: none;
}
.twitter .avatar {
  margin-right: 10px;
}
.twitter .avatar img {
  border-radius: 50%;
}
.twitter .message {
  display: inline-block;
  margin-top: 12px;
  font-size: 0.8125em;
  color: #999999;
}
.twitter .message strong {
  color: #555555;
}

.storage .meta {
  text-align: right;
  text-transform: uppercase;
  font-size: 0.875em;
  font-weight: 300;
  color: #888888;
  padding: 10px 20px 20px;
}
.storage ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.storage li {
  padding: 20px 30px 20px 20px;
  border-bottom: 1px solid #f2f2f2;
  color: #999999;
}
.storage li:last-child {
  border-bottom: none;
}
.storage li:before {
  content: '';
  width: 20px;
  height: 20px;
  background: #f2f2f2;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  top: 5px;
  margin-right: 10px;
}
.storage li.active {
  color: #555555;
}
.storage li.active:before {
  content: '\e60c';
  font-family: icomoon;
  background: #48cfad;
  color: #fff;
  box-sizing: border-box;
  padding: 2px;
}

.tags {
  margin: 10px 0;
}

.social {
  margin-bottom: 10px;
}
.social [class*="icon-"] {
  margin-left: 10px;
  display: inline-block;
}
.social .btn {
  color: #fff;
}
.social .btn-facebook {
  background: #3b5998;
  color: #fff;
}
.social .btn-facebook:hover, .social .btn-facebook.active {
  background: #344e86;
}
.social .btn-twitter {
  background: #55acee;
  color: #fff;
}
.social .btn-twitter:hover, .social .btn-twitter.active {
  background: #3ea1ec;
}
.social .btn-dribbble {
  background: #ea4c89;
  color: #fff;
}
.social .btn-dribbble:hover, .social .btn-dribbble.active {
  background: #e7357a;
}

.feedback .details {
  padding: 20px;
  text-align: left;
}
.feedback .details p {
  font-size: 0.875em;
}
.feedback .details .image {
  float: left;
  margin-right: 10px;
}
.feedback .details .meta {
  text-align: right;
  color: #cccccc;
  font-size: 1.25em;
}
.feedback .details .meta .icon-star {
  color: #fecd5f;
}

.alert {
  background: #FCF8E3;
  padding: 15px 0 15px 15px;
  margin-bottom: 10px;
  font-size: 0.8125em;
  color: #888;
  border-radius: 3px;
  position: relative;
}
.alert .icon-checkmark, .alert .icon-exclamation {
  display: inline-block;
  margin-right: 10px;
}
.alert .close {
  background: rgba(0, 0, 0, 0.1);
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0 3px 3px 0;
  padding: 10px 30px;
}
.alert .close [class*="icon-"] {
  font-size: 1.875em;
  color: #fff;
}
.alert.alert-success {
  background: #a1d36e;
  color: #fff;
}
.alert.alert-info {
  background: #6ad1dd;
  color: #fff;
}

.verified:before {
  content: '\e60c';
  font-family: icomoon;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;
  background: #a1d36e;
  color: #fff;
  box-sizing: border-box;
  padding: 3px;
}

footer {
  height: 100px;
}

`;
export class HeroFinalResolve extends Component {
componentDidMount(){
  this.animatedLoad();
}
animatedLoad = () => {
  setTimeout(function(){window.document.getElementById('baby').style.display='none'}, 12000);
  setTimeout(function(){window.document.getElementById('baby2').style.display='none'}, 12000);
  // setTimeout(function(){window.document.getElementById('baby3').style.display='block'}, 12000);
  setTimeout(function(){window.document.getElementById('splashy').style.display='none'}, 12000);
  function clicky (){window.location="#"};
  
}

  render() {
    return (
      <StyledHeroFinalResolve>
        <CoffeeProductCard />
        {/* <div class="container">
  <div class="grid_12 heading">
    <h3>Button Navigation</h3>
  </div>
  <nav class="nav btn-navbar grid_12"> 
    <ul>
       <li><a href="#" class="btn active">All</a></li>
       <li><a href="#" class="btn">Photography</a></li>
       <li><a href="#" class="btn">Inspirations</a></li>
       <li><a href="#" class="btn">Illustrations</a></li>
     </ul>
  </nav>
  <div class="grid_12 heading">
    <h3>Portfolio / Product Posts</h3>
  </div>
  <div class="grid_12">
    <div class="inner_container">
      <div class="col_1of3">
        <article class="post">
          <a href="#" class="post-image">
            <img style={{borderTop:'1px solid rgba()'}} src="http://placehold.it/400x200/efefef" />
          </a>
          <div class="details">
            <div class="actions">
              <a href="#" class="btn btn-secondary btn-round">
                <span class="icon-search"></span>
              </a>           
            </div>
            <h2><a href="#">Scarabaeidae</a></h2>
            <p>Rezonum & Collectoris</p>
            <div class="intents">
              <span class="icon-heart"></span>
              <span class="count">678</span>
            </div>
          </div>
        </article>
      </div>
      <div class="col_1of3">
        <article class="post">
          <a href="#" class="post-image">
            <img style={{borderTop:'1px solid rgba(0,0,0,0.32)'}} src="http://placehold.it/400x200/efefef" />
          </a>
          <div class="details">
            <div class="actions">
              <a href="#" class="btn btn-round btn-grey">
                <span class="icon-attachment"></span>
              </a>           
            </div>
            <h2><a href="#">Mexico</a></h2>
            <p>Game Characters</p>
            <div class="intents">
              <span class="icon-heart"></span>
              <span class="count">577</span>
            </div>
          </div>
        </article>        
      </div>
      <div class="col_1of3">
        <article class="post post-product">
          <a href="#" class="post-image">
            <img style={{borderTop:'1px solid rgba(0,0,0,0.32)'}} src="http://placehold.it/400x200/efefef" />
          </a>
          <div class="details">
            <div class="actions">
              <a href="#" class="btn btn-white btn-round">
                <span class="icon-plus"></span>
              </a>           
            </div>
            <h2><a href="#">Zero Character</a></h2>
            <p>Game Character</p>
            <div class="product-actions">
              <a href="#" class="btn btn-tertiary btn-large btn-caps">Buy it now</a>
              <a href="#" class="download-count">
                <span class="icon-in"></span>
                10
              </a>
            </div>            
            <div class="intents">
              <span class="icon-star"></span>
              <span class="icon-star"></span>
              <span class="icon-star2"></span>
              <span class="icon-star2"></span>
              <span class="icon-star2"></span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
  <div class="grid_12 heading">
    <h3>Blog Post</h3>
  </div>
  <div class="grid_12">
    <article class="post post-blog">
      <a href="#" class="post-image">
        <img src="http://placehold.it/960x250/efefef" />
      </a>
      <div class="details">
        <h2><a href="#">iOS Game / Slots</a></h2>
        <div class="meta">
          <p>Written by <strong>Mike | Creative Mints</strong> <span class="verified"></span></p>
        </div>
        <p>Get your coins ready, it's slots time! Check out the attachment for instant jackpot! :) <br />___<br /><br />P.S The game concept is for sale, please contact me if you're interested.</p>
        <div class="btn-group" data-grouptype="OR">
          <a href="#" class="btn btn-primary btn-large btn-caps">Like it now</a>
          <a href="#" class="btn btn-secondary btn-large btn-caps">Learn More</a>
        </div>
        <div class="intents">
          <span class="icon icon-heart"></span>
          <span class="count">1,056</span>
          <span class="icon icon-link"></span>
          <span class="count">14,854</span>
        </div>
      </div>
    </article> 
  </div>
  <div class="grid_12 heading">

  </div>
  <div class="grid_12">

  </div>
  <div class="grid_4">

      
  </div>
  <div class="grid_8">
    <div class="heading">
      <h3>Misc</h3>
    </div>
    <div class="inner_container">
      <div class="col_1of3">
        <a href="#" class="btn btn-primary btn-large btn-block btn-caps">Button one</a>
      </div>
      <div class="col_1of3">
        <a href="#" class="btn btn-secondary btn-large btn-block btn-caps">Button two</a>
      </div>
      <div class="col_1of3">
        <a href="#" class="btn btn-tertiary btn-large btn-block btn-caps">Button three</a>
      </div>
    </div>
    <div class="tags">
      <a href="#" class="btn btn-quaternary btn-caps">Summer</a>
      <a href="#" class="btn btn-quaternary btn-caps">Hot</a>
      <a href="#" class="btn btn-quaternary btn-caps">Party</a>
      <a href="#" class="btn btn-quaternary btn-caps active">Musical</a>
    </div>
    <div class="social">
      <div class="inner_container">
        <div class="col_1of3">
          <a href="#" class="btn btn-facebook btn-large btn-caps btn-block">Facebook <span class="icon-facebook"></span></a>
        </div>
        <div class="col_1of3">
          <a href="" class="btn btn-twitter btn-large btn-caps btn-block">Twitter <span class="icon-twitter"></span></a>
        </div>
        <div class="col_1of3">
          <a href="" class="btn btn-dribbble btn-large btn-caps btn-block">Dribbble <span class="icon-dribbble"></span></a>
        </div>
      </div>
    </div>
    <div class="feedback">
      <article class="post">
        <div class="details">
          <span class="image"><img src="http://placehold.it/50x50/f2f2f2" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A rem libero tempore fugit nulla laborum numquam obcaecati ab dignissimos? Velit minima debitis quo repudiandae ipsum vitae eveniet excepturi aperiam. Qui?</p>
          <div class="meta">
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star2"></span>
            <span class="icon-star2"></span>
            <span class="icon-star2"></span>
          </div>
        </div>
      </article>
    </div>
  </div>
  </div> */}

      </StyledHeroFinalResolve>
    )
  }
}

export default HeroFinalResolve
