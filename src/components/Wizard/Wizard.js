import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { throwStatement } from '@babel/types';

//handles input change and post new house to database.  

export default class Wizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0
        }

    }

postNewHouse() {
    axios.post("/api/house")
    .then(() => {
        this.setState({
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0
        })
    })
}



    render(){
        const {name, address, city, state, zip} = this.state;
        return (
        <div>
            <nav>
            <Link to="/"><button>Cancel</button></Link>
            </nav>
            <input type="text" value={name}/>
            <input type="text" value={address}/>
            <input type="text" value={city} />
            <input type="text" value={state}/>
            <input type="text" value={zip}/>
            <button onClick={() =>this.postNewHouse()}>Complete</button>
        </div>
        )
    }
}