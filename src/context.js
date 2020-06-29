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
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    };

    //getData
    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        this.setState({
            rooms,featuredRooms, sortedRooms:rooms, loading:false,maxPrice, maxSize,
            price:maxPrice
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

    handleChnage = event => {
        const target = event.target;
        const value = event.type === 'checkbox'?target.checked:target.value;
        const name = event.target.name;
        console.log(name, value)
        this.setState({
            [name]:value
        },this.filterRooms)
    }
    filterRooms = () => {
        let {rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state;
        let tempRooms = [...rooms];
        if(type !== "all"){
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        this.setState({
            sortedRooms:tempRooms
        })
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state,
            getRoom:this.getRoom,
            handleChange:this.handleChnage}}>
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
                    value =><Component {...props} context={value}/>
                    //   console.log(value)
                    //     return (
                    //         <div>
                    //             <Component context={value}/>
                                
                    //         </div>
                    //         // <Component {...props} context={value}/>
                    //     )
                    // }
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