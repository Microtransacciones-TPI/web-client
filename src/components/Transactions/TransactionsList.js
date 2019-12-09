import React from "react";
import ScrollableList from '../ScrollableList/ScrollableList';
import { Modal, Button, FormControl, Form } from "react-bootstrap";
import Card from "../Card/Card";
import Transaction from "./Transaction";
// import "./styles.css";

class TransactionsList extends React.Component{
    constructor(props){
        super(props);
    }

    hideModal = () => {
        this.props.hide();
    }

    render(){

        let cardList = [];
        for (let i = 0; i < 50; i++) {
            cardList.push({ 
                id: i, 
                content: (<Transaction />) 
            })
        }

        return (
            <Modal
                size="lg"
                show={this.props.show}
                onHide={this.hideModal}
                aria-labelledby="example-modal-sizes-title-lg"
                style={{opacity:1}}>
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Lista de transacciones de {this.props.id}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        style={{
                            height: `400px`,
                            overflow: "scroll",
                        }}
                        >
                        {cardList.map(item => (
                            <div>
                                <Transaction value={12000} store={"McDonalds"} date={"12-12-2019 12:28pm"}/>
                                <br />
                            </div>
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default TransactionsList;