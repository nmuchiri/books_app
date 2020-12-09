import React from 'react'

const Starship =(props)=>{
    const shipInfo=props.location.state
console.log(props.location)
        return (
            
            <div>
                <h1>Star Ships</h1>
                <div>
                    ship name: {shipInfo.name}
                </div>
                <div>
                  ship model: {shipInfo.model}
                </div>
            </div>
        )
}

export default Starship