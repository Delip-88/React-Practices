import React from 'react'

function Home(props) {
  return (
    <header>
        <center>
            <h2>Cates Buy 7 Sell</h2>
            <h3>Project I</h3>
            <h2>Cat Paradise</h2>
            <p>There are <strong>{props.breed}</strong> cat breeds.</p>
            <p>On average a cat can weight about <strong>{props.weight}</strong> kg & lives <strong>{props.years} years.</strong></p>
        </center>

    </header>
  )
}

export default Home