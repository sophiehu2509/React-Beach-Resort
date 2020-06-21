import React,{ Component }from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'


export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            // defaultBcg
        }
    }
    static contextType = RoomContext;
    render() {
        
        const {getRoom} = this.context;
        console.log(getRoom);
        const room = getRoom(this.state.slug);
        if(!room) {
            return <div className="error">
                <h3>no such room could be found</h3>
            </div>
        }
        return (
            <div>
            This is the single Room page
        </div>
        )
    }
}

