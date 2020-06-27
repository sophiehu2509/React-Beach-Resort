import React from 'react'
import {useContext} from 'react'
import Title from './Title'
import {RoomContext} from '../context'


export default function RoomFilter() {
    const context = useContext(RoomContext);
    const{
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfase,
        pets
    } = context;

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type </label>
                    <select name="type" id="type" value={type} className='form-control' onChange={handleChange}></select>
                </div>
            </form>

        </section>
    )
}
