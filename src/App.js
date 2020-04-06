import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Context from './Context';
import Navigation from './components/Navigation/Navigation';

//Views
import Root from './views/Root/Root';
import AddProductView from './views/AddProduct/AddProduct';
import ShoppingListView from './views/ShoppingList/ShoppingList';
import SettingsView from './views/Settings/Settings';
import EditProductView from './views/EditProduct/EditProduct';
import Modal from './components/Modal/Modal';

class App extends React.Component {
    state = JSON.parse(localStorage.getItem('pantry')) || { products: [], modal: { isOpen: false, data: {}} };

    newProduct = (item) => {
        this.setState(prevState => ({
            products: [...prevState.products, item]
        }))
    }

    editProduct = (id, data) => {
        this.setState({
            products: this.state.products.map((product) => {
                if (product.id !== id) return product;
                return data;
            })
        })
    }

    removeProduct = (id) => {
        this.setState(prevState => ({
            products: prevState.products.filter(product => product.id !== id)
        }), this.toggleModal);
    }

    addQuantity = (id, quantity) => {
        this.setState(prevState => ({
            products: prevState.products.map(product => {
                if (product.id !== id) return product;
                return ({
                    ...product,
                    quantity: (quantity ? quantity >= product.max - product.quantity
                            ? product.max
                            : product.quantity + quantity
                        : product.max)
                    })
                }
            )
        }))
    }

    removeQuantity = (id, quantity) => {
        this.setState(prevState => ({
            products: prevState.products.map(product => {
                if (product.id !== id) return product;
                return ({
                    ...product,
                    quantity: product.quantity ? product.quantity - quantity <= 0
                                                    ? 0
                                                    : product.quantity - quantity || product.quantity - 1
                                               : 0
                    })
                }
            )
        }))
    }

    toggleModal = (id = '', name = '') => {
        this.setState(prevState => ({
            modal: {
                isOpen: !prevState.modal.isOpen,
                data: {
                    id,
                    name
                }
            }
        }))
    }

    componentDidUpdate() {
        localStorage.setItem('pantry', JSON.stringify(this.state));
    }

    render() {        
        return (
            <Context.Provider value={
                {
                    ...this.state,
                    newProduct: this.newProduct,
                    editProduct: this.editProduct,
                    removeProduct: this.removeProduct,
                    addQuantity: this.addQuantity,
                    removeQuantity: this.removeQuantity,
                    toggleModal: this.toggleModal
                }
            }>
                <BrowserRouter>
                    <Navigation />
                    <Switch>
                        <Route exact path="/">
                            <Root />
                        </Route>
                        <Route path="/new">
                            <AddProductView />
                        </Route>
                        <Route path="/shopping-list">
                            <ShoppingListView />
                        </Route>
                        <Route path="/settings">
                            <SettingsView />
                        </Route>
                        <Route path="/edit/:id" render={(props) => <EditProductView {...props} />} />
                    </Switch>
                    <Modal />
                </BrowserRouter>
            </Context.Provider>
        )
    }
}

export default App;