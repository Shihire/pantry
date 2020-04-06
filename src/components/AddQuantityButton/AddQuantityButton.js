import React from 'react';
import {
    Input,
    Button
} from 'reactstrap';
import Context from '../../Context';

class AddQuantityButton extends React.Component {
    state = {
        quantity: null
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
                    ({ addQuantity }) => {
                        const addQuantityFn = () => {
                            addQuantity(id, quantity);
                        }
                        return (
                            <Button color="success" block onClick={addQuantityFn}>
                                Uzupełnij
                                <Input type="number" onClick={stopPropagation} onChange={handleChange} />
                            </Button>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}

export default AddQuantityButton;