import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { 
        Link
      } from 'react-router-dom'


const Home=()=>{
    // const [starShip, useStarship]= useState({})

    const [data, setData]=useState([])

    useEffect(()=>{

    axios.get('https://swapi.dev/api/starships/').then((res)=>{
       console.log(res.data)
    setData(res.data.results)
    })

    }, [])


console.log(data)
    const displayStarships =()=>{
        return data.map ((ship, index)=>(
            <div key={ship.name} className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{ship.name}</span>
                </div>
                <div className="card-action">
                    {/* <Link to="/starship">More Info</Link>{' '} */}
                    <Link
                        to={{
                        pathname: `/starship/${index}`,
                        state: ship
                    }}
                    key={ship.name}
                    >
                    More Info
                    </Link>{' '}
                </div>
              </div>
          </div>
          ))
    }


    return(
            <div>
                   
                    <div>
                        <h1>Starship List</h1>
                        <div className= "row">{data.length >0 ? 
                        displayStarships(): null}
                        </div>
                </div>
            </div>
            
    )

}

export default Home