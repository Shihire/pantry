import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Button,
    Input
} from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import Context from '../../Context';

class AddProductView extends React.Component {
    state = {
        name: '',
        quantity: '',
        min: '',
        max: ''
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Context.Consumer>
                {
                    ({ newProduct }) => {
                        const handleSubmit = (e) => {
                            e.preventDefault();
                            newProduct({
                                id: uuidv4(),
                                name: this.state.name,
                                quantity: parseInt(this.state.quantity),
                                min: parseInt(this.state.min),
                                max: parseInt(this.state.max)
                            });
                            e.target.reset();
                        }

                        return (
                            <Container className="my-2">
                                <Row>
                                    <Col>
                                        <Form onSubmit={handleSubmit} autoComplete="off">
                                            <FormGroup>
                                                <Label htmlFor="name">Nazwa produktu</Label>
                                                <Input name="name" id="name" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="quantity">Ilość</Label>
                                                <Input name="quantity" id="quantity" type="number" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="min">Minimum</Label>
                                                <Input name="min" id="min" type="number" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="max">Maksimum</Label>
                                                <Input name="max" id="max" type="number" onChange={this.handleChange} />
                                            </FormGroup>
                                            <Button color="success" type="submit" block>Dodaj</Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}

export default AddProductView;