import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer, RoomConsumer} from '../context'
import Loading from './Loading';

function RoomsContainer({context}){
    const {loading, sortedRooms, rooms} = context;
   
    if(loading){
        return <Loading />
    }
    return(
        <div>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </div>
    )
}

export default withRoomConsumer(RoomsContainer);


// export default function RoomsContainer() {

//         return <RoomConsumer>
//         {
//             value => {
//                 const {loading, sortedRooms, rooms} = value;
   
//                     if(loading){
//                         return <Loading />
//                     }
//                     return(
//                         <div>
//                             <RoomFilter rooms={rooms}/>
//                             <RoomList rooms={sortedRooms}/>
//                         </div>
//                     )
                   
//             }
//         }
//       </RoomConsumer>
    
// }




