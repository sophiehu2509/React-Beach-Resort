import React, { Component } from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {RoomConsumer} from '../context'

export default class RoomsContainer extends Component {
    render() {
        return (
            <RoomConsumer>
                {
                    value => {
                        console.log(value)
                        return (
                            <div>
                                <RoomFilter />
                                <RoomList />
                            </div>
                        )
                    }
                }
            </RoomConsumer>
        )
    }
}
