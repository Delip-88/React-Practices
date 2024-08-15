// import React from "react";
// import "./App.css";

// const Header = ({tutorial,title}) => {
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>{tutorial}</h1>
//       <h2 style={{ textAlign: "center" }}>{title}</h2>
//     </>
//   );
// };
// const boxStyle = {
//   aspectRatio: "1/1",
//   minWidth: "100px",
//   backgroundColor: "gray",
//   display: "grid",
//   placeContent: "center",
//   border: "1px solid white",
// };
// const containerStyle = {
//   backgroundColor: "white",
//   width: "fit-content",
//   margin: "auto",
//   display: "grid",
//   gridTemplateColumns: "repeat(8,1fr)",
//   padding: "20px",
//   overflow: "hidden",
//   gap: "0",
// };
// const Box = ({ data, primes_up_to_32 }) => {
//   const getBoxStyle = (num) => {
//     if (primes_up_to_32.includes(num)) {
//       return { ...boxStyle, backgroundColor: '#FC5F53' }; // Color for prime numbers
//     } else if (num % 2 === 0) {
//       return { ...boxStyle, backgroundColor: '#20BF72' }; // Color for even numbers
//     } else {
//       return { ...boxStyle, backgroundColor: '#FCDA3A' }; // Color for odd numbers
//     }
//   };

//   const box = data.map((num) => (
//     <div className="box" key={num} style={getBoxStyle(num)}>
//       {num}
//     </div>
//   ));

//   return (
//     <div className="box_container" style={{ ...containerStyle }}>
//       {box}
//     </div>
//   );
// };
// function App() {
//   const arr = Array.from({ length: 32 }, (_, i) => i);
//   // console.log(arr);
//   const primes_up_to_32 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];

//   return (
//     <>
//       <Header tutorial ="30 Days Of React" title = "Bar chart based on prime, even , odd numbers"/>
//       <Box data={arr} primes_up_to_32= {primes_up_to_32}/>
//     </>
//   );
// }

// export default App;


import React from "react";
import "./App.css";

const Header = ({tutorial,title}) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{tutorial}</h1>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
    </>
  );
};
const boxStyle = {
  aspectRatio: "1/1",
  minWidth: "100px",
  backgroundColor: "gray",
  display: "grid",
  placeContent: "center",
  border: "1px solid white",
};
const containerStyle = {
  backgroundColor: "white",
  width: "fit-content",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "repeat(8,1fr)",
  padding: "20px",
  overflow: "hidden",
  gap: "0",
};

const Box = ({ data }) => {

  const  hexa = ()=>{
    let str = '0123456789abcdef';
    let clr = '';
    for (let i = 0; i < 6; i++) {
      let ind = Math.floor(Math.random()*str.length)
      clr += str[ind];
    }
    return '#'+clr;
  }
  const box = data.map((num) => (
    <div className="box" key={num} style={{...boxStyle,backgroundColor: hexa(),color : 'white'}}>
      {hexa()}
    </div>
  ));

  return (
    <div className="box_container" style={{ ...containerStyle }}>
      {box}
    </div>
  );
};
function App() {
  const arr = Array.from({ length: 32 }, (_, i) => i);
  // console.log(arr);
  return (
    <>
      <Header tutorial ="30 Days Of React" title = "Hexadecimal Colors"/>
      <Box data={arr}/>
    </>
  );
}

export default App;


