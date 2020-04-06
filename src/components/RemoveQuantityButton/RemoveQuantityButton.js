import React from 'react';
import {
    Input,
    Button
} from 'reactstrap';
import Context from '../../Context';

class RemoveQuantityButton extends React.Component {
    state = {
        quantity: 1
    }

    stopPropagation(e) {
        e.stopPropagation();
    }

    handleChange = (e) => this.setState({ quantity: parseInt(e.target.value) })

    render() {
        const { id } = this.props;
        const { quantity } = this.state;
        const { stopPropagation, handleChange } = this;
        return (
            <Context.Consumer>
                {
                    ({ removeQuantity }) => {
                        const removeQuantityFn = () => {
                            removeQuantity(id, quantity);
                        }
                        return (
                            <Button color="danger" block onClick={removeQuantityFn}>
                                Odejmij
                                <Input type="number" onClick={stopPropagation} onChange={handleChange} />
                            </Button>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}

export default RemoveQuantityButton;