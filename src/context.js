import React, { Component } from 'react'
import items from './data'
import RoomFilter from './components/RoomFilter'
import RoomList from './components/RoomList'
import Loading from './components/Loading';

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    };

    //getData
    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,featuredRooms, sortedRooms:rooms, loading:false
        })
    }

    formatData(items){
        let tempItem = items.map((item) => {
            let id = item.sys.id;
            let images = item.fields.images.map((image) => {
                return image.fields.file.url;
            })

            let room = {
                ...item.fields, 
                id,
                images:images
            }

            return room;
        });
        return tempItem;
    }

    getRoom = (slug) => {
        console.log("sss")
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.slug === slug);
        return room;
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state,
            getRoom:this.getRoom}}>
              {this.props.children}  
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;
export function withRoomConsumer(component){
    return function ConsumerWrapper(props){
        
            return(
                <RoomConsumer>
                {
                    value =>{
                        console.log( <Component />)
                        return (
                            <div>
                                <Component />
                                
                            </div>
                            // <Component {...props} context={value}/>
                        )
                    }
                    // {
                    //     const {loading, sortedRooms, rooms} = value;
       
                    //     if(loading){
                    //         return <Loading />
                    //     }
                    //     return(
                    //         <div>
                    //             <Component {...props} context={value}/>
                    //             <RoomFilter rooms={rooms}/>
                    //             <RoomList rooms={sortedRooms}/>
                    //         </div>
                    //     )
                    // }
                     
                            
    
                }
              </RoomConsumer>
            )
    
    }
}
export {RoomProvider, RoomConsumer, RoomContext}