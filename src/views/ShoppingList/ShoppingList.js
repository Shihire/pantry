import React from 'react';
import Context from '../../Context';
import {
    Container,
    Row,
    Col,
    Alert,
    Table
} from 'reactstrap';

const ShoppingListView = () => (
    <Context.Consumer>
        {
            ({ products }) => {
                if (!products.length) {
                    return (
                        <Container>
                            <Alert color="danger" className="my-2">Brak produktów.</Alert>
                        </Container>
                    )
                }

                let shoppingList = products.filter(product => product.min >= product.quantity);
                
                if (!shoppingList.length) {
                    return (
                        <Container>
                            <Alert color="success" className="my-2">Brawo! Twoja spiżarnia jest pełna.</Alert>
                        </Container>
                    )
                } else {
                    shoppingList = shoppingList.map((product, index) => (
                        <tr key={index}>
                            <th scope="row">{ index+1 }</th>
                            <td>{ product.name }</td>
                            <td>{ product.max - product.quantity }</td>
                        </tr>
                     ));
                }

                return (
                    <Container>
                        <Row>
                            <Col>
                                <Table className="my-2" dark striped>
                                    <thead>
                                        <tr>
                                            <th>L. p.</th>
                                            <th>Nazwa produktu</th>
                                            <th>Ilość</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { shoppingList }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        }
    </Context.Consumer>
);

export default ShoppingListView;