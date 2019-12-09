import React from "react";
import { Modal, Button, FormControl, Form } from "react-bootstrap";

class RegisterCard extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            id: ""
        }
    }

    onSubmit = (value) => {
        this.props.onSubmit(value);
    }

    onChange = (e) => {
        let val = e.target.value;
        this.setState({
            id: val
        });
    }

    hide = () => { 
        this.props.onHide();
        this.setState({
            id: ""
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
                            <Form.Control type="text" 
                                placeholder="UID"
                                value={this.state.id}
                                onChange={this.onChange} />
                            <Form.Text className="text-muted">
                                Introduce el UID CON los dos puntos (:).
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" 
                            type="submit"
                            onClick={() => this.props.onSubmit(this.state.id)}>
                            Registrar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default RegisterCard;