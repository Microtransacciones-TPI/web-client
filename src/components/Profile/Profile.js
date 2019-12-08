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

class Profile extends React.Component{
    constructor(props){
        super(props);
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
        // history.push("#");
    }

    render() {

        let listItems = []
        for (let i = 0; i < 10000; i++) {
            listItems.push({ id: i, content: i })
        }

        let newList = [];
        for (let i = 0; i < 5; i++) {
            newList.push({ 
                id: i, 
                content: (<Card />) 
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
                    <ScrollableList 
                        listItems={newList}
                        heightOfItem={40}
                        maxItemsToRender={30}
                        style={{ color: '#333' }}
                    />
                </div>
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