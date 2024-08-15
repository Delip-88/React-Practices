// import { useState, useEffect } from "react";

// import "./App.css";

// function App() {
//   const [users, setusers] = useState([]);
//   const [loading, Setloading] = useState(true);
//   const [errors, setErrors] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users/")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("network response was not ok !");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setusers(data);
//         Setloading(false);
//       })
//       .catch((error) => {
//         setErrors(error);
//         Setloading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (errors) {
//     return <div>Eroor : {errors.message}</div>;
//   }

//   return (
//     <>
//       <h1>Users</h1>
//       {users.map((user) => (
//         <ul>
//           <li key={user.id}>
//             <strong>Name : </strong>
//             {user.name}
//           </li>
//           <li key={user.id}>
//             <strong>UserName : </strong>
//             {user.username}
//           </li>
//           <li key={user.id}>
//             <strong>Address : </strong>
//             {user.address.city}
//           </li>
//           <li key={user.id}>
//             <strong>Email : </strong>
//             {user.email}
//           </li>
//         </ul>
//       ))}
//     </>
//   );
// }

// export default App;


import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [cats, setcats] = useState([])
  const [loading, setloading] = useState(true)
  const [errors, seterrors] = useState(null)
  const [visibleRows, setVisibleRows] = useState(5)

  const handleClick =()=>{
    setVisibleRows(visibleRows+5)
  }
  const showLess =()=>{
    setVisibleRows(5)
  }
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds").then((response)=>{
      if (!response.ok){
        throw new Error("Network response not okay")
      }
      return response.json();
    }).then((data)=>{
      setcats(data)
      setloading(false)
    }).catch((error)=>{
      seterrors(error)
      setloading(false)
    })
  
  }, [])
  
  if(loading){
    return <div>Loading........</div>
  }
  if(errors){
    return <div>Error occured : {error.message}</div>
  }
  return (
    <div className='container'>
      number of cats types : {cats.length}
      <br />
      Names of cats 
      <table>
        <thead>
        <tr>
          <th>S.N</th>
          <th>Name</th>
          <th>Origin / Country Codes</th>
          <th>Lifespan</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody className='fade-in'>
          {
            cats.slice(0,visibleRows).map((cat,index)=>(
              <tr key={cat.id} className='fade-in'>
                <td>{index+1}</td>
                <td>{cat.name}</td>
                <td>{cat.origin +"  ," +cat.country_codes}</td>
                <td>{cat.life_span}</td>
                <td className='disc'>{cat.description}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {visibleRows >5 && (<button onClick={showLess}>...See Less</button>)}
      {visibleRows < cats.length && (<button onClick={handleClick}>...See More</button>)}
    </div>
  )
}

export default App