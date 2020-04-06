import React from 'react';
import {
    Container,
    Row,
    Col,
    Alert
} from 'reactstrap';
import Context from '../../Context';
import Product from '../../components/Product/Product';

const Root = () => (
    <Context.Consumer>
        {
            ({ products }) => (
                <Container>
                    <Row xs="1" md="2" lg="3">
                            {
                                products.length
                                    ?
                                    <>
                                        <Col className="my-2" xs="12" md="12" lg="12" xl="12">
                                            <Alert color="info"><strong>Info!</strong> Przycisk <strong>Uzupełnij</strong> bez wartości automatycznie uzupełnia produkt do maksimum.</Alert>
                                        </Col>
                                        <Col className="my-2" xs="12" md="12" lg="12" xl="12">
                                            <Alert color="info"><strong>Info!</strong> Przycisk <strong>Usuń</strong> bez wartości automatycznie odejmuje jeden produkt.</Alert>
                                        </Col>
                                        {
                                            
                                            products.map(({ id, ...product }) => (
                                                <Col className="my-2" key={id}>
                                                    <Product id={id} {...product} />
                                                </Col>
                                            ))
                                        }
                                    </>
                                    : (
                                        <Col className="my-2" xs="12" md="12" lg="12" xl="12">
                                            <Alert color="info">Brak produktów w spiżarnii! Kliknij w menu <strong>Nowy produkt</strong>, aby coś dodać.</Alert>
                                        </Col>
                                    )
                            }
                    </Row>
                </Container>
            )
        }
    </Context.Consumer>
);

export default Root;