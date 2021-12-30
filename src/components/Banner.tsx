import React from 'react'

const Banner = ({children, title, subTitle}: any) => {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div />
            <p>{subTitle}</p>
            {children}
        </div>
    )
}

export default Banner
