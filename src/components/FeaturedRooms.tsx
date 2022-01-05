import React, { useContext } from 'react'
import { RoomContext } from '../context'

const FeaturedRooms = () => {
    const {rooms}: any= useContext(RoomContext);
    console.log(rooms);
    return (
        <div>
           <p>Hello from featured rooms</p> 
        </div>
    )
}

export default FeaturedRooms
