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
import { Redirect } from 'react-router-dom';
import Context from '../../Context';

class EditProductView extends React.Component {
    state = {
        name: '',
        quantity: '',
        min: '',
        max: ''
    }

    redirect = false;

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        const { state } = this.props.location;
        this.setState({
            ...state
        })
    }

    render() {
        const { quantity, max, min, name, id } = this.state;

        return (
            <Context.Consumer>
                {
                    ({ editProduct }) => {
                        const handleSubmit = (e) => {
                            e.preventDefault();
                            editProduct(id, {
                                id,
                                name,
                                quantity: parseInt(quantity),
                                min: parseInt(min),
                                max: parseInt(max)
                            });
                            this.redirect = true;
                        }

                        return !this.redirect ? (
                            <Container className="my-2">
                                <Row>
                                    <Col>
                                        <Form onSubmit={handleSubmit} autoComplete="off">
                                            <FormGroup>
                                                <Label htmlFor="name">Nazwa produktu</Label>
                                                <Input name="name" id="name" onChange={this.handleChange} value={name} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="quantity">Ilość</Label>
                                                <Input name="quantity" id="quantity" type="number" onChange={this.handleChange} value={quantity} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="min">Minimum</Label>
                                                <Input name="min" id="min" type="number" onChange={this.handleChange} value={min} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="max">Maksimum</Label>
                                                <Input name="max" id="max" type="number" onChange={this.handleChange} value={max} />
                                            </FormGroup>
                                            <Button color="success" type="submit" block>Zapisz</Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        ) : <Redirect to="/" />
                    }
                }
            </Context.Consumer>
        )
    }
}

export default EditProductView;