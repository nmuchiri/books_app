import React from 'react'
import { seeEvent } from '../services/event.service'

const EventList =(props)=>{
    const eventInfo=props.location.state
console.log(props.location)
        return (
            
            <div>
                <h1>Your Events</h1>
                <div>
                    ship name: {eventInfo.name}
                </div>
                <div>
                  ship model: {eventInfo.model}
                </div>
            </div>
        )
}

export default EventList