import React, { Component } from 'react'
import styled from 'styled-components';
const StyledCountdownSale = styled.div`
  * {
  margin: 0;
  padding: 0;
  font-family: 'Arimo', sans-serif;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

img {
  width: 95%;
  display: inline-block;
}

body {
  background: #02203C;
  color: white;
  text-align: center;
}

/*=================
* TIMER
*=================*/
.timer {
  width: 550px;
  height: 248px;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -275px;
  margin-top: -124px;
  color: white;
}
.timer * {
  cursor: default;
}
.timer h3 {
  width: 100%;
  font-size: 26px;
  letter-spacing: 4px;
  text-align: center;
}
.timer--clock {
  width: 100%;
  position: relative;
  padding-left: 6px;
  margin-top: 22px;
  overflow: hidden;
}
.timer--clock .clock-display-grp {
  width: 100%;
  position: relative;
}
.timer--clock .clock-display-grp .number-grp {
  width: auto;
  display: block;
  height: 156px;
  float: left;
  overflow: hidden;
}
.timer--clock .clock-display-grp .number-grp .number-grp-wrp {
  width: 100%;
  position: relative;
}
.timer--clock .clock-display-grp .number-grp .number-grp-wrp .num {
  width: 100%;
  position: relative;
  height: 156px;
}
.timer--clock .clock-display-grp .number-grp .number-grp-wrp .num p {
  width: auto;
  display: table;
  font-size: 205px;
  line-height: 150px;
  font-weight: bold;
}
.timer--clock .clock-separator {
  width: auto;
  float: left;
  display: block;
  height: 156px;
}
.timer--clock .clock-separator p {
  width: auto;
  display: table;
  font-size: 205px;
  line-height: 150px;
  font-weight: bold;
}
.timer h4 {
  width: 100%;
  font-size: 10px;
  letter-spacing: 6px;
  text-align: center;
  padding-top: 25px;
  float: left;
}

.reload {
  width: 125px;
  height: 14px;
  position: absolute;
  bottom: 50vh;
  left: 50%;
  margin-left: -62.5px;
  opacity: 0;
  display: none;
  cursor: pointer;
  z-index: 9999;
}
.reload:hover svg path {
  fill: #666666;
}
.reload:hover p {
  color: #666666;
}
.reload svg {
  width: 12px;
  height: 12px;
  float: left;
  margin-right: 10px;
}
.reload p {
  color: #2b2b2b;
  font-size: 12px;
  float: left;
  line-height: 11px;
}

`;

export class CountdownSale extends Component {
  render() {
    return (
      <StyledCountdownSale>
        <div class="timer">
   <h3>Save 50% if you order in the next -------------------------------------------</h3>
   <div class="timer--clock">
      <div class="minutes-group clock-display-grp">
         <div class="first number-grp">
            <div class="number-grp-wrp">
               <div class="num num-0"><p>0</p></div>
               <div class="num num-1"><p>1</p></div>
               <div class="num num-2"><p>2</p></div>
               <div class="num num-3"><p>3</p></div>
               <div class="num num-4"><p>4</p></div>
               <div class="num num-5"><p>5</p></div>
               <div class="num num-6"><p>6</p></div>
               <div class="num num-7"><p>7</p></div>
               <div class="num num-8"><p>8</p></div>
               <div class="num num-9"><p>9</p></div>
            </div>
         </div>
         <div class="second number-grp">
            <div class="number-grp-wrp">
               <div class="num num-0"><p>0</p></div>
               <div class="num num-1"><p>1</p></div>
               <div class="num num-2"><p>2</p></div>
               <div class="num num-3"><p>3</p></div>
               <div class="num num-4"><p>4</p></div>
               <div class="num num-5"><p>5</p></div>
               <div class="num num-6"><p>6</p></div>
               <div class="num num-7"><p>7</p></div>
               <div class="num num-8"><p>8</p></div>
               <div class="num num-9"><p>9</p></div>
            </div>
         </div>
      </div>
      <div class="clock-separator"><p>:</p></div>
      <div class="seconds-group clock-display-grp">
         <div class="first number-grp">
            <div class="number-grp-wrp">
               <div class="num num-0"><p>0</p></div>
               <div class="num num-1"><p>1</p></div>
               <div class="num num-2"><p>2</p></div>
               <div class="num num-3"><p>3</p></div>
               <div class="num num-4"><p>4</p></div>
               <div class="num num-5"><p>5</p></div>
               <div class="num num-6"><p>6</p></div>
               <div class="num num-7"><p>7</p></div>
               <div class="num num-8"><p>8</p></div>
               <div class="num num-9"><p>9</p></div>
            </div>
         </div>
         <div class="second number-grp">
            <div class="number-grp-wrp">
               <div class="num num-0"><p>0</p></div>
               <div class="num num-1"><p>1</p></div>
               <div class="num num-2"><p>2</p></div>
               <div class="num num-3"><p>3</p></div>
               <div class="num num-4"><p>4</p></div>
               <div class="num num-5"><p>5</p></div>
               <div class="num num-6"><p>6</p></div>
               <div class="num num-7"><p>7</p></div>
               <div class="num num-8"><p>8</p></div>
               <div class="num num-9"><p>9</p></div>
            </div>
         </div>
      </div>
   </div>
</div>
<div class="reload">
   <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 65 65" enable-background="new 0 0 65 65" xml:space="preserve">
      <path fill="#2b2b2b" d="M60.2,2.5c-2.3-0.2-4.4,1.5-4.6,3.9l-0.2,2.3c-6-5.6-13.8-8.7-22-8.7C15.5,0,0.9,14.5,0.9,32.4c0,17.9,14.5,32.4,32.4,32.4
         c12.3,0,23.5-6.9,29-17.9c1.1-2.1,0.2-4.7-1.9-5.7c-2.1-1.1-4.7-0.2-5.7,1.9c-4.1,8.1-12.3,13.2-21.4,13.2
         c-13.2,0-23.9-10.7-23.9-23.9c0-13.2,10.7-23.9,23.9-23.9c6.1,0,11.9,2.3,16.4,6.5l-3.4-0.3c-2.3-0.2-4.4,1.5-4.6,3.9
         c-0.2,2.3,1.5,4.4,3.9,4.6l12.7,1.1c0.1,0,0.3,0,0.4,0c1,0,2-0.3,2.7-1c0.9-0.7,1.4-1.8,1.5-2.9l1.2-13.4
         C64.3,4.7,62.5,2.7,60.2,2.5z"/>
    </svg>
</div>
      </StyledCountdownSale>
    )
  }
}

export default CountdownSale
