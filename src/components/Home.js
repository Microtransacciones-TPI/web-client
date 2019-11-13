import React from 'react';
import tiun from "../img/tiun.png";
import Image from "./Image/Image";
import "./Image/Image.css";
import { TestRequest } from "../services/user_services";

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            response_text: false,
            response: null
        }

        this.callback = this.callback.bind(this);
    }

    onKeyDown = (e) => {
        console.log(e.key);
        if(e.key == 32) {
            console.log("space pressed");
        }
    }

    onClick = (e) => {
        TestRequest(12, this.callback);
    }

    callback(data){
        console.log(data);
        if(data.test){
            this.setState({ 
                response_text: true ,
                response: data.test
            });
        }
    }

    render(){
        return (
        <div className="App-header">
            <Image src={tiun} height="15em" width="10em"/>
            <p onKeyDown={this.onKeyDown}>Acerca tu tarjeta al lector</p>
            {this.state.response_text && this.state.response}
            <button onClick={this.onClick}>Click me!</button>
        </div>);
    }
}

export default Home;