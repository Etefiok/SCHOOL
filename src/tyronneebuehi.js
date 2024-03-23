import React from 'react';
import Ss1profileData from "./Ss1profileData";
import './AbdullahiShehu.css'
// import Tyronneebuehibiography from './Tyronneebuehibiography';
import Navba from './NavBar';

const Tyronneebuehi = () => {
  const Students = Ss1profileData[3];

  return (
    
<div className='cardtoppag'>

<div>

      <Navba />

</div>
    <div className='cardpage'>
    <div className="cardbody" >
      <div style={{ width: "15rem", margin: "10px", textAlign: "center", lineHeight: "10px" }}>
        <h5>{Students.title}</h5>

        <div className="card-img-top" >
      <img src={Students.image} alt={Students.title} />
      </div>
        <p>{Students.name}</p>
        <p>{Students.team}</p>
        <p>{Students.nationality}</p>
        <p>{Students.jerseyNumber}</p>
        <p>{Students.age}</p>
  
      </div>
    </div>

{/* <div className='space'></div> */}


{/* <div className="cardbody" >
      <div style={{ width: "15rem", margin: "10px", textAlign: "center", lineHeight: "10px" }}>
        <h5>{Students.title}</h5>

       
      <img src={Students.image} alt={Students.title} />
    
        <p>{Students.name}</p>
        <p>{Students.team}</p>
        <p>{Students.nationality}</p>
        <p>{Students.jerseyNumber}</p>
        <p>{Students.age}</p>

        
  
      </div>
    </div> */}
    <button className='AbdulResult'>Result</button>
    <button className='AbdulResult'>button</button>
    <button className='AbdulResult'>button</button>
    <button className='AbdulResult'>button</button>
    <button className='AbdulResult'>button</button>
    </div>
    <div className='AbdullahiShehuwriteup'>
    <div className='Abdull'>
        <h1>this is Tyronne Ebuehi biography</h1>
        </div>
        <div className='writeup'>
        {/* <Tyronneebuehibiography /> */}
        </div>


    <div className='Abdull'>
        <h1>this is Tyronne Ebuehi biography</h1>
        </div>
        <div className='writeup'>
        {/* <Tyronneebuehibiography /> */}
    </div>


    <div className='Abdull'>
        <h1>this is Tyronne Ebuehi biography</h1>
        </div>
        <div className='writeup'>
        {/* <Tyronneebuehibiography /> */}
    </div>





      
    </div>
</div>


  );

  
}

export default Tyronneebuehi;



// const onlyIndexZero = Ss1profileData.map((item, index) => {
//     if (index === 0) {
//       return item;
//     }
//   });
  
//   console.log(onlyIndexZero);