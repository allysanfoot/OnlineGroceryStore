import React, { useState } from "react";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

function SelectQuantity() {
    const [quantity, setQuantity] = useState(0);
    const increment = () => setQuantity(quantity === 10 ? quantity : quantity + 1);
    const decrement = () => setQuantity(quantity === 0 ? 0 : quantity - 1);

    return (
        <div className="control">
            <span className="qv">{quantity}</span>
            <MdArrowUpward onClick={increment} />
            <MdArrowDownward onClick={decrement} />
        </div>
    );
}

export default SelectQuantity;