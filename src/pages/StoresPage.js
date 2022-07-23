import React from "react";
import StoreTable from '../components/StoreTable';
import ZipSearch from '../components/ZipSearch';

function StoresPage({ stores }) {
    return (
        <>
            <h2>Locate a store near you!</h2>
            <p>Use the form below to find a store near you.</p>
            <StoreTable stores={stores}/><br />
            <ZipSearch />
        </>
    );
}

export default StoresPage;