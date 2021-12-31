import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

const Error = () => {
    return (
        <Hero>
            <Banner title="404" subTitle="Page not found">
                <Link to="/" className="btn-primary">
                    return Home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Error
