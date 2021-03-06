import React, { Component } from 'react'
import {Link} from "react-router-dom"
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'

export default class Room extends Component{

    render() {
        return (
            <article className="room">
                <div className="img-container">
                    <img src={this.props.room.images[0] || defaultImg} alt ="single room" />
                    <div className="price-top">
                        <h6>${this.props.room.price}</h6>
                        <p>per night</p>
                    </div>
                    <Link to={`/rooms/${this.props.room.slug}`}  className="btn-primary room-link">Features</Link>
                </div>  
            <p className="room-info">{this.props.room.name}</p>
            </article>
        )
    }
}


Room.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
}