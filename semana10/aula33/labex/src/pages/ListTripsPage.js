import React from 'react';
import { useProtectPage } from '../hooks/UseProtectPage'


export default function ListTripPage () {
    useProtectPage()
    return <h1>ListTripPage</h1>;

}