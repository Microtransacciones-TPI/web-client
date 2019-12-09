import React from 'react';
import Badge from "./Badge";
import Icon from "./Icon";
import "./styles/styles.css";
import { connect } from "react-redux";
import { Navbar, Button, FormControl, Form } from "react-bootstrap";
import { GoogleLogout } from 'react-google-login';
import { history } from "../../redux/helpers/history";
import { userActions } from "../../redux/actions/user-actions";
import ScrollableList from '../ScrollableList/ScrollableList';
import Card from "../Card/Card";
import RegisterCardModal from "../RegisterCard/RegisterCard";
import TransactionList from "../Transactions/TransactionsList";

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            registerCard: false,
            transactionList: false,
            transactionsId: undefined
        }
    }

    componentWillMount() {
        this.setState({word: this.props.baseWord});
        this.timeout = null;
    }
    
    onMouseOver(word) {
       clearTimeout(this.timeout);
       this.setState({word: word});
    }
    
    onMouseOut() {      
        // Don't leave, if they enter a different active state quickly.
        this.timeout = setTimeout(function() {
            this.setState({word: this.props.user.firstname});      
        }.bind(this), 10);
    }

    logout = (e) => {
        const { dispatch } = this.props;
        history.push("/");
        dispatch(userActions.logout());
    }

    registerCard = (e) => {
        this.setState({
            registerCard: true,
            transactionList: false,
            transactionsId: undefined
        });
    }

    hideModals = (e) => {
        this.setState({
            registerCard: false,
            transactionList: false,
            transactionsId: undefined
        });
    }

    showTransactionListModal = (id) => {
        console.log("Showing modal with id " + id);
        this.setState({
            registerCard: false,
            transactionList: true,
            transactionsId: id
        });
    }

    submitNewCard = (value) => {
        console.log("Submitting new card with id");
        console.log(value);
    }

    render() {

        let cardList = [];
        for (let i = 0; i < 5; i++) {
            cardList.push({ 
                id: i, 
                content: (<Card id={"2F:5D:4X:2I"} balance={12900} onClick={(id) => this.showTransactionListModal(id)}/>) 
            })
        }

        return (
            <div>
                <Navbar className="bg-light">
                    <Navbar.Brand href="#home">MicroTransacciones UN</Navbar.Brand>
                    <GoogleLogout 
                        clientId="559277341660-h7e8nbn28ti8ldn4uvkgi9l389sid45f.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={this.logout}
                        render={renderProps => (
                            <button className="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
                        )}>
                    </GoogleLogout>
                </Navbar>
                <div className="card">
                    <h1>{this.props.user.firstname} {this.props.user.lastname}</h1>
                    <h2>{this.props.user.username}</h2>
                    <p>Tus tarjetas:</p>
                    {(cardList && cardList.length > 0) && (
                        <ScrollableList 
                            listItems={cardList}
                            heightOfItem={40}
                            maxItemsToRender={30}
                            style={{ color: '#333' }}
                        />
                    )}
                    {(!cardList || cardList.length == 0) &&
                        <p>No tienes tarjetas registradas</p>
                    }
                    <button className="button add-card"
                        onClick={this.registerCard}>
                        Registra Una tarjeta
                    </button>
                </div>
                <RegisterCardModal 
                    smShow={this.state.registerCard} 
                    onHide={this.hideModals}
                    onSubmit={this.submitNewCard}/>
                <TransactionList 
                    show={this.state.transactionList}
                    hide={this.hideModals}
                    id={this.state.transactionsId}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const user = state.authentication.user;
    return {
        user
    };
}
  
const connectedProfile = connect(mapStateToProps)(Profile);
export default connectedProfile;