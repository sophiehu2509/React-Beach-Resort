import React, { Component }  from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer, RoomConsumer} from '../context'
import Loading from './Loading';

function V({context} ){
    return(
        <div>
           
     
        </div>
    )
}
const A = withRoomConsumer(V);
export default function RoomsContainer(){
    // console.log(context)
    // const {loading, sortedRooms, rooms} = context;
   
    // if(loading){
    //     return <Loading />
    // }
    console.log(A)
    return(
        <div>
            {/* <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/> */}
            {/* <RoomFilter />
            <RoomList /> */}
            <V />
        </div>
    )
    

};



// class RoomsContainer extends Component {
//     componentDidMount(){
//         console.log("333")
//     }
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }


// export default withRoomConsumer(RoomsContainer)

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




