import React from "react";
import "./styles.css";
import { Modal, Button, FormControl, Form } from "react-bootstrap";

class RegisterCard extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            id1: "",
            id2: "",
            id3: "",
            id4: ""
        }

        this.nameInput1 = React.createRef();
        this.nameInput2 = React.createRef();
        this.nameInput3 = React.createRef();
        this.nameInput4 = React.createRef();
    }

    onSubmit = (value) => {
        this.props.onSubmit(value);
    }

    onChange = (e) => {
        let val = e.target.value;
        let name = e.target.name;
        let num = this.nameHandler(name);
        this.setState({
            [name]: val
        },() => {
            if(val.length >= 2){
                this.focusOn(num);
            }
        });
    }

    nameHandler(name){
        let id = name.charAt(2);
        return id;
    }

    focusOn(toFocus){
        switch(toFocus){
            case '1':
                console.log("Hey dude");
                this.nameInput2.focus();
                break;
            case '2':
                this.nameInput3.focus();
                break;
            case '3':
                this.nameInput4.focus();
                break;
        }
    }

    hide = () => { 
        this.props.onHide();
        this.setState({
            id1: "",
            id2: "",
            id3: "",
            id4: ""
        });
    }

    render(){
        return (
            <Modal
                size="sm"
                show={this.props.smShow}
                onHide={this.hide}
                aria-labelledby="example-modal-sizes-title-sm"
                style={{opacity:1}}>
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Registra una nueva tarjeta
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Introduce el ID de la tarjeta a registrar</Form.Label>
                            <br />
                            <div className="form-div">
                                <Form.Control type="text"
                                    name="id1"
                                    className="col-sm-3"
                                    placeholder="UID"
                                    maxLength={2}
                                    value={this.state.id1}
                                    ref={(input) => { this.nameInput1 = input; }} 
                                    onChange={this.onChange} />
                                <Form.Control type="text" 
                                    name="id2"
                                    className="col-sm-3"
                                    placeholder="UID"
                                    maxLength={2}
                                    value={this.state.id2}
                                    ref={(input) => { this.nameInput2 = input; }} 
                                    onChange={this.onChange} />
                                <Form.Control type="text" 
                                    name="id3"
                                    className="col-sm-3"
                                    placeholder="UID"
                                    maxLength={2}
                                    value={this.state.id3}
                                    ref={(input) => { this.nameInput3 = input; }} 
                                    onChange={this.onChange} />
                                <Form.Control type="text"
                                    name="id4"
                                    className="col-sm-3"
                                    placeholder="UID"
                                    maxLength={2}
                                    value={this.state.id4}
                                    ref={(input) => { this.nameInput4 = input; }} 
                                    onChange={this.onChange} />
                            </div>
                            <br />
                            <br />
                            <Form.Text className="text-muted">
                                Introduce el UID SIN los dos puntos (:).
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" 
                            type="submit"
                            onClick={() => this.props.onSubmit(this.state.id1)}>
                            Registrar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default RegisterCard;