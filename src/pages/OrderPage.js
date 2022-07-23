import React from "react";
import GroceryTable from '../components/GroceryTable';

function OrderPage({ items }) {
    return (
        <>
            <h2>Order what you need!</h2>
            <p>Select the quantity of each item</p>
            <GroceryTable items={items} />
        </>
    );
}

export default OrderPage;