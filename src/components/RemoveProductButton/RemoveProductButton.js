import React from 'react';
import { Button } from 'reactstrap';
import Context from '../../Context';

const RemoveProductButton = ({ id, name }) => (
    <Context.Consumer>
        {
            ({ toggleModal }) => {
                    const toggleModalFn = () => toggleModal(id, name);
                    return (
                        <Button color="danger" block onClick={toggleModalFn}><strong>Usuń</strong></Button>
                    )
                }
        }
    </Context.Consumer>
)

export default RemoveProductButton;
