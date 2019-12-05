import React from 'react';
import Badge from "./Badge";
import Icon from "./Icon";
import "./styles/styles.css";
import { connect } from "react-redux";
import { Navbar, Button } from "react-bootstrap";
import { GoogleLogout } from 'react-google-login';
import { history } from "../../redux/helpers/history";
import { userActions } from "../../redux/actions/user-actions";

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
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">MicroTransacciones UN</Navbar.Brand>
                    <GoogleLogout 
                        className="logout"
                        clientId="559277341660-h7e8nbn28ti8ldn4uvkgi9l389sid45f.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={this.logout}
                        render={renderProps => (
                            <button className="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
                        )}>
                    </GoogleLogout>
                </Navbar>
                <div className="card">
                    <h1>{this.props.user.firstname} {this.props.user.lastname}</h1>
                    <p>Tu saldo es:</p>
                    <Badge word={this.state.word} />
                    <p>
                        <Icon name="github" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
                        <Icon name="codePen" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
                        <Icon name="twitter" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
                    </p>
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