import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import House from '../House/House';
import axios from 'axios';


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        
        }
    }


componentDidMount() {
    this.getHouses();
}


getHouses() {
    axios.get("/api/houses")
    .then(houses => {
        this.setState({
            houses: {
                ...this.state.houses,
                houses: houses.data
            }
        })
    })
}




    render(){
        const {houses} = this.state;
        const mappedHouses= houses.map((element) => {
            return(
              <House />  
            )
        })
            return (
                <div>
                    <nav>
                   <Link to="/wizard"><button className="newProperty">Add New Property</button></Link> 
                    </nav>
               
                </div>
            )
    }
}