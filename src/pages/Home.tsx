import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <Hero hero="defaultHero">
            <Banner title="Luxurios rooms" subTitle="deluxe rooms starting at 299$">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
    )
}

export default Home
