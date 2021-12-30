import React from 'react'

const Hero = ({children, hero = "defaultHero"}: any) => {
    return (
        <header className={hero}>{children}</header>
    )
}

export default Hero
