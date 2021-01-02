import React from 'react'
import { seeEvent } from '../services/event.service'

const EventList =(props)=>{
    const eventInfo=props.location.state
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

export default EventList