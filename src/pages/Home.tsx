import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import FeaturedRooms from '../components/FeaturedRooms'
import Hero from '../components/Hero'
import Services from '../components/Services'


const Home = () => {

    return (
        <>
        <Hero hero="defaultHero">
            <Banner title="Luxurios rooms" subTitle="deluxe rooms starting at 299$">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </>
    )
}

export default Home
