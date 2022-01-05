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
            </section>
        </>
    )
}

export default SingleRoom
