import React from "react";
import GroceryRow from "./GroceryRow";
import GroceryTableFinal from './GroceryTableFinal';

function GroceryTable({ items, quantity }) {
    return (
        <table id="grocerylist">
            <caption>Items for Sale</caption>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Choose Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => <GroceryRow item={item} key={i} />)}
            </tbody>
            {/* <tfoot>
                <GroceryTableFinal items={items} quantity={quantity} />
            </tfoot> */}
        </table>
    );
}

export default GroceryTable;