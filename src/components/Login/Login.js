import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GoogleLogin from 'react-google-login';
import { history } from "../../redux/helpers/history";
import { userActions } from "../../redux/actions/user-actions";
import { connect } from "react-redux";
import tiun from "../../img/tiun.png";
import Image from "../Image/Image";

// import classes from "./styles";
import "./styles.css";

class Login extends React.Component{
    constructor(props){
        super(props);
    }

    onSuccess = (response) => {
        const { dispatch } = this.props;
        if(response){
            const user = {
                firstname: response.profileObj.givenName,
                lastname: response.profileObj.familyName,
                email: response.profileObj.email,
                photoUrl: response.profileObj.imageUrl
            }
            dispatch(userActions.login(user));
            history.push("/Profile");
        }
    }

    onFailure = (response) => {
        console.log("failure");
    }  

    render(){
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="cont">
                    <h1>MicroTransacciones UN</h1>
                    <h2>Inicia sesión con tu cuenta institucional</h2>
                    <GoogleLogin
                        className="button"
                        clientId="559277341660-h7e8nbn28ti8ldn4uvkgi9l389sid45f.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={(response) => this.onSuccess(response)}
                        onFailure={(response) => this.onFailure(response)}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => (
                            <button className="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
                        )}/>
                    <Image src={tiun} height="20em" className="image"/> 
                </div>
            </Container>
        );
    }
}

function mapStateToProps(state) {
  return {};
}

const connectedLogin = connect(mapStateToProps)(Login);
export default connectedLogin;

// cliet secret: YKIPxU9R1Cx5HcXKsJx-wdbj