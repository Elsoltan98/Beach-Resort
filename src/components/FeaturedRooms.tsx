import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

const FeaturedRooms = () => {
    const {rooms, loading}: any= useContext(RoomContext);

    const renderRooms = rooms.map((room: { id: React.Key | null | undefined; }) => (
        <Room key={room.id} room={room} />
    ))
    return (
        <section className="featured-rooms">
            <Title title="Featured Rooms" />
            <div className="featured-rooms-center">
                {loading? <Loading /> : renderRooms}
            </div>     
        </section>
    )
}

export default FeaturedRooms
