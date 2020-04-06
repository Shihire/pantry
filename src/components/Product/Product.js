import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Progress,
    Button,
    Badge,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Product.module.scss';
import AddQuantityButton from '../AddQuantityButton/AddQuantityButton';
import RemoveQuantityButton from '../RemoveQuantityButton/RemoveQuantityButton';
import RemoveProductButton from '../RemoveProductButton/RemoveProductButton';

const returnClassNameByValues = (min, max, quantity) => {
    if (quantity <= max && quantity > min) 
        return 'success';
    else if (quantity === min)
        return 'warning';
    else
        return 'danger';
}

const Product = ({ name, quantity, min, max, id }) => {
    const checkedClassName = returnClassNameByValues(min, max, quantity);
    
    return (
        <Card inverse color="dark">
            <CardBody>
                <CardTitle>
                    <h5>{name}</h5>
                </CardTitle>
                <CardSubtitle>
                    <Badge color="info">Min: {min}</Badge>&nbsp;
                    <Badge color="info">Max: {max}</Badge>&nbsp;
                    <Badge color={checkedClassName}>Posiadane: {quantity}</Badge>
                </CardSubtitle>
                <br/>
                <Progress value={quantity} max={max} color={checkedClassName}/>
                <br/>
                <div className={styles.buttons}>
                    <div className={styles.buttonItem}>
                        <AddQuantityButton id={id}/>
                    </div>
                    &nbsp;
                    <div className={styles.buttonItem}>
                        <RemoveQuantityButton id={id}/>
                    </div>
                    &nbsp;
                    <div className={styles.buttonItem}>
                        <Button color="warning" block tag={Link} to={{
                            pathname: `/edit/${id}`,
                            state: {
                                name,
                                quantity,
                                max,
                                min,
                                id
                            }
                        }}>Edytuj</Button>
                    </div>
                    &nbsp;
                    <div className={styles.buttonItem}>
                        <RemoveProductButton id={id} name={name} />
                    </div>
                </div>
            </CardBody>
        </Card>)
};

export default Product;