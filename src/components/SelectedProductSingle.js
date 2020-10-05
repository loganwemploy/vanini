import React , {useState,useEffect} from 'react'
import products from '../sampleProducts'
import styled from 'styled-components';


const StyledSelectedProductSingle = styled.div`
  background-color:white;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* background-image: url("https://images.unsplash.com/photo-1601205343500-69822f1ffac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"); */
  background-size: cover;
  background-position: center;
  


.calendar {
  position: absolute;
  width: 200px;
  height: 250px;
  bottom: 100px;
  right:0;
  background: #fff;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #000400);
}

.calendar #monthName {
  position: relative;
  padding: 5px 10px;
  background: #000000;
  color: #fff;
  font-size: 30px;
}

.calendar #dayName {
  margin: 20px;
  font-size: 20px;
  font-weight: 300;
  color: #464646;
}

.calendar #dayNumber {
  margin: 0;
  line-height: 1em;
  font-size: 80px;
  font-weight: 700;
  color: #2c2c2c;
}

.calendar #year {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: #999;
}



@supports not (mix-blend-mode: screen) {
  body:before {
    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(35%, #64c8c8), color-stop(65%, #64c8c8), to(rgba(255, 255, 255, 0)));
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #64c8c8 35%, #64c8c8 65%, rgba(255, 255, 255, 0) 100%);
    content: 'mix-blend-mode is not supported in this browser';
    display: block;
    font-size: .825rem;
    left: 0;
    letter-spacing: 0.02rem;
    padding: .25rem 0;
    position: absolute;
    right: 0;
    text-align: center;
    text-transform: uppercase;
    top: 0;
    width: 100%;
  }
}
.bg {
  -webkit-filter: sepia(30%);
          filter: sepia(30%);
}

h1 {
  background-color: white;
  /* mix-blend-mode: screen; */
}

.bg {

  transform: translate3d(8.4%,0,0);
  background-image: url("//s3-us-west-2.amazonaws.com/s.cdpn.io/150150/barack-obama-5_copy.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: -webkit-box;
  display: flex;
  align-self: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
}

h1 {
  box-sizing: border-box;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: calc(3.2rem + 9.25vw);
  font-weight: 700;
  letter-spacing: -0.25rem;
  line-height: .9;
  margin: 0;
  text-align: right;
  text-transform: uppercase;
}

.content {
  box-sizing: border-box;
  padding: 0 1rem 1rem;
  width: 40vw;
}
@media (min-width: 40em) {
  .content {
    padding-left: 2rem;
    padding-right: 2rem;
    width: 67vw;
  }
}

.text {
  height: 100vh;
  width: auto;
}

.flat {
  background-color: white;
  color: #584158;
}
.flat p {
  margin: auto 0;
  padding: 0;
}

main {
  font-family: "Merriweather", Arial Black, sans-serif;
  font-size: calc(.8rem + .15vw);
  min-height: 100vh;
  height: 100%;
  line-height: 1.5;
}


`;

const SelectedProductSingle = ({match}) => {
  
  const [dogs, setdogs] = useState([{name:'bailey',age:1},{name:'bella',age:3},{name:'piper',age:10},])
useEffect(() => {
 console.log('ok did a thing hook effect')
}, [dogs])
useEffect(() => {
  const lang = navigator.language;

  let date = new Date();

  let dayNumber = date.getDate();
  let month = date.getMonth();
  let dayName = date.toLocaleString(lang, {
      weekday: 'long'
  })
  let monthName = date.toLocaleString(lang, {
      month: 'long'
  })
  let year = date.getFullYear()

  document.getElementById('monthName').innerHTML = monthName;

  document.getElementById('dayName').innerHTML = dayName;

  document.getElementById('dayNumber').innerHTML = dayNumber;

  document.getElementById('year').innerHTML = year;
}, [])

  const product = products.find(p=>p._id === match.params.id)
  return (
    <StyledSelectedProductSingle>
     {/* i am {product ? product.name : <><p>Select a product or view all here <button>Click to view all products</button></p></>} */}
     {/* <button onClick={()=>{setdogs([{name:'bailey',age:2},{name:'bella',age:3},{name:'piper',age:10},])}} style={{color:'white'}}>add a yr</button> */}<main>
	<div class="bg">
		<div class="text" style={{marginTop:'0vh',}}>
			<h1 class="content" style={{textAlign:'left',marginLeft:'0.07rem'}}>Vanini's</h1>
	
			<div class="flat content">
			<img style={{width:'48.32vw',height:'50vh'}} src={product?product.picUrl:'https://placehold.it/200x200.jpg'} alt='placehold' />
        <h2><strong>{product?product.name:'loadingg'}</strong></h2>
				<p>That we can tuck in our children at night and know that they are fed and clothed and safe from harm. It is that fundamental belief, it is that fundamental belief, I am my brother's keeper, I am my sister's keeper that makes this country work ...</p>
			</div>
		</div>
	</div>
</main>

    
  {/* {dogs.map((dog,index)=>(
    <>
    
  
  </>))} */}
   {/* { index === 0 ? <> <h4 style={{color:'aqua'}} key={index}>{dog.name}, {dog.age}</h4></> : <div>dog age {dog.age}</div>}
   </div>
    </>
  ))} */}
     <div className="calendar">
        <p id="monthName"></p>
        <p id="dayName"></p>
        <p id="dayNumber"></p>
        <p id="year"></p>
    </div>
    </StyledSelectedProductSingle>
  )
}

export default SelectedProductSingle
