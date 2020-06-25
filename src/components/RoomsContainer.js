import React, { Component }  from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer, RoomConsumer} from '../context'
import Loading from './Loading';

// const A = withRoomConsumer(RoomsContainer);
// function RoomsContainer({context}){
//     // console.log(context)
//     // const {loading, sortedRooms, rooms} = context;
   
//     // if(loading){
//     //     return <Loading />
//     // }
//     return(
//         <div>
//             {/* <RoomFilter rooms={rooms}/>
//             <RoomList rooms={sortedRooms}/> */}
//             {/* <RoomFilter />
//             <RoomList /> */}
//         </div>
//     )
    

// };



class RoomsContainer extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


export default withRoomConsumer(RoomsContainer)

// export default withRoomConsumer(RoomsContainer);


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




