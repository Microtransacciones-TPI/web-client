import React from 'react';
import { Card } from 'react-bootstrap';

class Transaction extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Card border="success" style={{ width: '60%' }}>
                    <Card.Body>
                        <Card.Text>Tienda: {this.props.store}</Card.Text>
                        <br />
                        <Card.Text>Valor: ${this.props.value} </Card.Text>
                        <br />
                        <Card.Text>Fecha: {this.props.date} </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Transaction;