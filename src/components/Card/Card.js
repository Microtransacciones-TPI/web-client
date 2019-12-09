import React from 'react';
// import "styles.css";
import { connect } from "react-redux";
import { Card, ListGroup, Button } from 'react-bootstrap';
import tiun from "../../img/tiun.png";

class TCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: '2F:5D:4X:2I'
        }
    }

    onClick = () => {
        this.props.onClick(this.props.id);
    }

    render() {
        return (
            <div >
                <div width="50%">
                    <p>{this.props.id}</p>
                </div>
                <div width="50%" className="card-div">
                    <Card border="success" style={{ width: '60%' }}>
                        <Card.Body>
                            <Card.Title>Saldo: </Card.Title>
                            <Card.Text> ${this.props.balance} </Card.Text>
                            <br />
                            <button className="button"
                                onClick={this.onClick}>
                                    Ver Transacciones
                            </button>
                        </Card.Body>
                    </Card>
                </div>
            </div>  
        );
    }
}

export default TCard;

// function mapStateToProps(state) {
//     const user = state.authentication.user;
//     return {
//         user
//     };
// }
  
// const connectedTCard = connect(mapStateToProps)(TCard);
// export default connectedTCard;