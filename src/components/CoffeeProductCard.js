import React,{Component} from 'react'
import styled from 'styled-components';
import ProductSingle from './ProductSingle';
import products from '../sampleProducts'

const StyledCoffeeProductCard = styled.div`
  
  
  background: url("https://assets.codepen.io/567707/bg-coffee-bag.jpg") no-repeat center center/cover;
  font-family: "Roboto Mono", sans-serif;
  width: 100%;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 14px;
  min-height: 100vh;
  display: flex;
  align-items: center;



strong {
  font-weight: 500;
}

main {
  line-height: 0;
  position: relative;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  padding: 3% 5%;
}
@media (min-width: 1600px) {
  main {
    margin: auto;
    transform: translateX(-20%);
  }
}
main img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: top left;
  max-width: 1400px;
}
@media (min-width: 1100px) {
  main img {
    height: auto;
  }
}

.coffee-card {
  flex: 1;
  max-width: 430px;
  min-width: 380px;
  display: grid;
  grid-template-columns: 1.2fr 1fr min-content;
  grid-auto-rows: min-content;
  background: #fdfdfd;
  margin: 2rem;
  line-height: 1.5;
  position: relative;
  box-shadow: 0 4px 0 -2px #ddd, 1px 1px 0 0 #f7f7f7;
}
.coffee-card:before, .coffee-card:after {
  z-index: -1;
  position: absolute;
  content: "";
  bottom: 35px;
  left: 10px;
  width: 50%;
  top: 80%;
  max-width: 300px;
  background: #777;
  box-shadow: 0 35px 20px #777;
  transform: rotate(-4deg);
}
.coffee-card::after {
  transform: rotate(4deg);
  right: 10px;
  left: auto;
}
.coffee-card > * {
  padding: 0.6rem 1.2rem;
}
.coffee-card h1 {
  font-size: clamp(2.2rem, 4.2vw, 3rem);
  line-height: 1;
  font-weight: 500;
}
.coffee-card .name {
  grid-column: 1 / -1;
  grid-row: 2;
  padding-bottom: 1.2rem;
}
.coffee-card .info,
.coffee-card .location,
.coffee-card .type,
.coffee-card .pattern {
  grid-column: 1 / span 2;
}
.coffee-card .date,
.coffee-card .weight {
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  padding: 1.2rem 0;
}
.coffee-card .date,
.coffee-card .weight,
.coffee-card .footnote,
.coffee-card .site {
  font-size: 85%;
}
.coffee-card .date {
  grid-row: 3 / span 4;
  grid-column: 3 / 4;
}
.coffee-card .footnote {
  grid-column: 1 / 2;
}
.coffee-card .weight {
  grid-row: 7 / span 1;
  grid-column: 3 / 4;
  min-height: 10rem;
}
.coffee-card .pattern {
  grid-row: 6 / span 2;
  min-height: 16.5rem;
  background-repeat: repeat;
}

.side-title {
  display: inline-block;
  margin-bottom: 0.75rem;
  border-bottom: 0.5px dashed;
  padding: 0 0.8rem 0.75rem;
}

.name,
.info,
.location,
.weight {
  border-bottom: 0.5px dashed;
}

.info,
.location,
.type,
.footnote {
  border-right: 0.5px dashed;
}

.checkbox {
  display: inline-block;
  pointer-events: none;
}
.checkbox:nth-child(1) {
  margin-right: 30px;
}
.checkbox input {
  height: 0;
  width: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.checkbox input:checked + label:after {
  content: "";
  position: absolute;
  width: 22px;
  height: 5px;
  background: black;
  left: 3px;
  transform: rotate(-45deg);
  top: 10px;
  border-radius: 5px;
}
.checkbox label {
  padding: 5px 20px 5px 30px;
  position: relative;
}
.checkbox label:before {
  content: "";
  position: absolute;
  border: 1px dashed;
  width: 18px;
  height: 18px;
  left: 0;
}

.strip {
  grid-column: 1 / 3;
  grid-row: 1;
}

.square {
  background: black;
}
.square.one {
  grid-row: 1;
  grid-column: 3/4;
  height: 2.5rem;
}

.pattern {
  background-image: repeating-radial-gradient(circle at 60%, #eee, #eee 3px, transparent 4px, #eee 5px), repeating-radial-gradient(circle at 45%, #999, #999 3px, transparent 4px, #999 5px);
  background-size: 200%;
}

.pattern-one {
  background-image: radial-gradient(#999 15%, transparent 16%), radial-gradient(#bbbbbb 15%, transparent 16%), linear-gradient(45deg, transparent 48%, #666 48%, #666 52%, transparent 52%), linear-gradient(-45deg, #fff 48%, #999 48%, #999 52%, #fff 52%);
  background-size: 20px 20px, 20px 20px, 10px 10px, 10px 10px;
  background-position: 0 0, 10px 10px, 0 0, 0 0;
}

.pattern-two {
  background-image: repeating-radial-gradient(ellipse at right, #888 10%, #888 1px, transparent 1px, transparent 3px, #888 3px, #888 4px, transparent 4px, transparent 5px, #888 5px, #888 6px, transparent 6px, #888 6px, #888 7px, transparent 7px, transparent 8px, #888 8px, #888 9px, transparent 9px, transparent 10px);
  background-size: 20px 40px;
}

`;
const CoffeeProductCard = ({match}) => {
  // const product = products.find(p=>p._id === match.params.id)
  return (
    <StyledCoffeeProductCard>

<main>
  <div class="coffee-card">
    <h1 class="name">Kaw Kaw <br/>Mountain</h1>
    <div class="info">Haw flakes / Mixed Berries / Chocolate / Raisins</div>
    <div class="location"> <strong>ok</strong>, Eastern Highland</div>
    <div class="type">
      <div class="checkbox">
        <input type="checkbox" id="espresso" checked="checked"/>
        <label for="espresso">Espresso</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="filter"/>
        <label for="filter">Filter</label>
      </div>
    </div>
    <div class="date"><span class="side-title">Roast Date</span>20.08.2020</div>
    <div class="weight"><span class="side-title">Net Wt.</span>250G</div>
    <div class="footnote">Roasted in Malaysia</div>
    <div class="site">www.vcr.my</div>
    <div class="pattern"></div>
    <div class="square one"></div>
    <div class="square two"></div>
    <div class="strip"></div>
  </div>
  <div class="coffee-card">
    <h1 class="name">Santa<br/>Barbara</h1>
    <div class="info">Dark Chocolate / Praline / Hazelnut / Caramel</div>
    <div class="location">Bahia,<strong>Brazil</strong></div>
    <div class="type">
      <div class="checkbox">
        <input type="checkbox" id="espresso"/>
        <label for="espresso">Espresso</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="filter" checked="checked"/>
        <label for="filter">Filter</label>
      </div>
    </div>
    <div class="date"><span class="side-title">Roast Date</span>20.08.2020</div>
    <div class="weight"><span class="side-title">Net Wt.</span>250G</div>
  <div class="footnote">Roasted in Malaysia</div>
    <div class="site">www.vcr.my</div>
    <div class="pattern pattern-two"></div>
    <div class="square one"></div>
    <div class="square two"></div>
    <div class="strip"></div>
  </div>
</main>
  </StyledCoffeeProductCard>
  )
}

export default CoffeeProductCard




