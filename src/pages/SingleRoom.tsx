import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom'
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { RoomContext } from '../context';
import {Header} from './../components/StyledHero'

const SingleRoom = () => {
    const params = useParams();
    const {getRoom}:any = useContext(RoomContext);

    const room = getRoom(params.slug);

    if(!room) {
        return <div className="error">
            <h3>No such room could be found...</h3>
            <Link to="/rooms" className="btn-primary">
                Back to rooms
            </Link>
        </div>
    }

    const {name, price, description, id, capacity, breakfast, size, pets, extras, images} = room;

    return (
        <>
            <Header img={images[0]}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        Back to rooms
                    </Link>
                </Banner>
            </Header>
            <section className="single-room">
                <div className="single-room-images">
                    {
                        images.map((img, index) => (
                            <img key={index} src={img} alt="" />
                        ))
                    }
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>price: $ {price}</h6>
                        <h6>size: {size} SQFT</h6>
                        <h6>max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                        <h6>{pets ? "Pets allowed" : "Not pets allowed"}</h6>
                        <h6>{breakfast && "Free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item,index) => (
                        <li key={index}>- {item}</li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default SingleRoom
