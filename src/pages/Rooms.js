import React from 'react'
import Hero from '../components/Hero'
import RoomsContainer from '../components/RoomsContainer'
import { RoomConsumer } from '../context'

export default function Rooms() {
    return (
        <>
        <Hero hero={'roomsHero'}/>
        <RoomsContainer />
        </>
    )
}
