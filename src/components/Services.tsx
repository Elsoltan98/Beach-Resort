import React from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

const Services = () => {
    const icons = [
        {
            id: 1,
            icon: <FaCocktail />,
            title: "Free cocktails",
            info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores.",
        },
        {
            id: 2,
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores.",
        },
        {
            id: 3,
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores.",
        },
        {
            id: 4,
            icon: <FaBeer />,
            title: "Strongest Beer",
            info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores.",
        },
    ]
    return (
        <section className="services">
            <Title title="Services" />
            <div className="services-center">
                {icons.map(item => (
                    <article key={item.id} className="services">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Services

