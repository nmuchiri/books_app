

const Projects=() =>{
return(
<div className= "container">
  <div>
    <h1>Projects Page</h1>
  </div>
  <div>
    <h3>Memory Game</h3>
    <a href="https://github.com/nmuchiri/Memory-Game-2"
       
       >
      <img
      alt="_hats"
        id="hats"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yba1bthMxHOScwZAd-PAxoilPam2HkvMgA&usqp=CAU"
        width="300" height="300"
        />
    </a>
    <p>
    This is a memory game created using Vanilla JS where the user has 
    to match pictures of hats that are similar in as shortest time as possible
    
    </p>
  </div>
  <div>
  <h3>Rick & Morty</h3>
    <a href="https://rickandmortyshowapp.herokuapp.com/"
       alt="_hats"
       >
      <img
        id="rick"
        src="https://resizing.flixster.com/sBJxQAwEVsgCLpbNJkqP0tbphIg=/fit-in/1152x864/v1.bjsyNTA0NTYyO2o7MTg3NzY7MTIwMDsyNTAwOzE4NzU"
        alt="rick and morty"
        width="300" height="300"
        />
    </a>
    <p>
      This is a fun Rick and Morty app created using Node JS 
    </p>
  </div>
  <div>
  <h3>Fomo-Nomo</h3>
    <a href="https://fomo-nomo-frontend.surge.sh/"
       alt="fomo-nomo"
       >
      <img
        id="fomo"
        src="https://static8.depositphotos.com/1386392/883/v/600/depositphotos_8836901-stock-illustration-the-dancing-girl-with-colorful.jpg"
        alt="dancing girl"
        width="300" height="300"
        />
    </a>
    <p>
      This app is created using React on the frontend and Node JS on the backend. It allows users to search for online events happening around them. 
    </p>
  </div>

</div>
)
}

export default Projects