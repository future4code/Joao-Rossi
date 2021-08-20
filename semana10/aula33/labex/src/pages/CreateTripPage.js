import React from 'react';
import { useProtectPage } from '../hooks/UseProtectPage'


export default function CreateTripPage () {
    useProtectPage()
    return <h1>CreateTripPage</h1>

}