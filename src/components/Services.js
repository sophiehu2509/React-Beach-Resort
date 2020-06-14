import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail />,
                title:"Free cocktails",
                info:'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.'
            },
            {
                icon:<FaHiking />,
                title:"Endless Hiking",
                info:'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.'
            },
            {
                icon:<FaShuttleVan />,
                title:"Free shuttle",
                info:'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.'
            },
            {
                icon:<FaBeer />,
                title:"Strongest Beer",
                info:'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.'
            }

        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article> 
                    })}
                </div>
                
            </section>
        )
    }
}
