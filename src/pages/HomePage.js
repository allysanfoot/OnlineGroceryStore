import React from "react";
import {MdCatchingPokemon} from "react-icons/md";

function HomePage() {
    return (
        <>
            <h2>Order groceries from your local store!</h2>
            <p>Use the tabs above to search for a store and order groceries.</p>
            <MdCatchingPokemon className="Products" />
        </>
    );
}

export default HomePage;