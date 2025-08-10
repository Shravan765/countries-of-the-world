import { useState } from 'react'
import './App.css'

function CountryCard({flag, name, capital, map_location, know_more_link }) {
    return (
      <div className= "card">
        <img className="cardimg" src={flag}></img>
        <p>{name}</p>
        <p>Capital : {capital}</p>
        <img className="cardimg" src={map_location}></img>
        <a href= {know_more_link} >Click here to know more</a>        
      </div>
    )
}

function App() {
  return(
    <div className='grid'>
      <CountryCard
        flag = "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/250px-Flag_of_Brazil.svg.png"
        name="Federative Republic of Brazil"
        capital="Brazilia"
        map_location= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/BRA_orthographic.svg/250px-BRA_orthographic.svg.png"
        know_more_link= "https://en.wikipedia.org/wiki/Brazil"
      />
      <CountryCard
        flag="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/250px-Flag_of_the_People%27s_Republic_of_China.svg.png"
        name ="People's Republic of China"
        capital=  "Beijing"
        map_location= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/CHN_orthographic.svg/250px-CHN_orthographic.svg.png"
        know_more_link="https://en.wikipedia.org/wiki/China"
      />
      <CountryCard
        flag="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/250px-Flag_of_the_United_States_%28Web_Colors%29.svg.png"
        name="United States of America"
        capital="Washington, D.C"
        map_location="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/USA_orthographic.svg/250px-USA_orthographic.svg.png"
        know_more_link="https://en.wikipedia.org/wiki/United_States"
      />
      <CountryCard
        flag="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/250px-Flag_of_India.svg.png"
        name="Republic Of India"
        capital="New Delhi"
        map_location="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/India_%28orthographic_projection%29.svg/250px-India_%28orthographic_projection%29.svg.png"
        know_more_link="https://en.wikipedia.org/wiki/India"
      />
      <CountryCard
        flag="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/250px-Flag_of_Japan.svg.png"
        name="日本国"
        capital="東京都"
        map_location="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Japan_%28orthographic_projection%29.svg/250px-Japan_%28orthographic_projection%29.svg.png"
        know_more_link="https://en.wikipedia.org/wiki/Japan"
      />
      <CountryCard
        flag="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png"
        name="Federal Republic of Germany"
        capital="Berlin"
        map_location="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/EU-Germany_%28orthographic_projection%29.svg/250px-EU-Germany_%28orthographic_projection%29.svg.png"
        know_more_link="https://en.wikipedia.org/wiki/Germany"
      />
    </div>
  )
}

export default App
