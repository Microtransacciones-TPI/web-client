import React from 'react';
// import tiun from "../img/tiunT.png";
// import Image from "./Image/Image";
import "./Image/Image.css";
import { TestRequest } from "../services/user_services";

// import { Modal, Button } from "react-bootstrap";
// import Keypad from "./Keypad/Keypad";
// import Display from "./Display/Display";
import Login from "./Login/Login";


class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            response_text: false,
            response: null,
            showModal: false,
            value: "",
            cardRead: false,
            name: null,
            id: null
        }

        this.callback = this.callback.bind(this);
    }

    onKeyDown = (e) => {
        console.log(e.key);
        if(e.key === 32) {
            console.log("space pressed");
        }
    }

    onClick = (e) => {
        TestRequest(12, this.callback);
    }

    opneModal = (e) => {
        this.setState({
            showModal: true
        });
    }

    simulateCard = (e) =>{
        if(this.state.cardRead){
            this.setState({
                cardRead: false,
            });
        }
        else{
            this.setState({
                cardRead: true,
                name: "Nicolás Viveros",
                id: 1234567890
            });
        }
    }

    callback(data){
        if(data.test){
            this.setState({ 
                response_text: true ,
                response: data.test
            });
        }
    }

    handleClose =(e) => {
        this.setState({
            showModal: false,
            value: ""
        });
    }

    recharge = (e) => {
        var { value } = this.state;
        // var intValue = parseInt(value);
    }

    onKeypadPressed = button => {

        if(button === "DEL"){
            var { value } = this.state;
            value =  value.length > 0 ? value.substring(0, value.length - 1) : "";
            this.setState({ value });
        }
        else if(button === "CLR"){
            this.setState({
                value: ""
            });
        }
        else if(button === "0"){
            if(this.state.value.length !== 0){
                this.setState({
                    value: this.state.value + button
                })
            }
        }
        else {
            this.setState({
                value: this.state.value + button
            })
        }
    };

    render(){
        return (
            <Login />
        // <div className="App-header">
        //     <div className="image">
        //         <Image src={tiun} height="15em" width="10em"/>    
        //         {this.state.cardRead && <h2><span>Nicolás Viveros</span></h2>}
        //         {this.state.cardRead && <h3><span>1234567890</span></h3>}
        //     </div>
        //     {!this.state.cardRead && <p onKeyDown={this.onKeyDown}>Acerca tu tarjeta al lector</p>}
        //     {this.state.cardRead &&  <button onClick={this.opneModal}>Recargar saldo</button>}
        // <button onClick={this.simulateCard}>{(this.state.cardRead ? "Quitar tarjeta": "Poner tarjeta")}</button>
        //     <Modal show={this.state.showModal} onHide={this.handleClose} animation={false} centered>
        //         <Modal.Header closeButton>
        //         <Modal.Title>Recarga tu tarjeta</Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body>
        //             <p>Ingresa la cantidad a recargar</p>
        //             <div className="calculator-body">
        //                 <Display result={this.state.value}/>
        //                 <Keypad onClick={this.onKeypadPressed}/>
        //             </div>
        //         </Modal.Body>
        //         <Modal.Footer>
        //         <Button variant="secondary" onClick={this.handleClose}>
        //             Cerrar
        //         </Button>
        //         <Button variant="primary" onClick={this.recharge}>
        //             Recargar
        //         </Button>
        //         </Modal.Footer>
        //     </Modal>
        // </div>
        );
    }
}

export default Home;