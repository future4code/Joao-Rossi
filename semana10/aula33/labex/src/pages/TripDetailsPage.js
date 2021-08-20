import React from 'react';
import { useProtectPage } from '../hooks/UseProtectPage'

export default function TripDetailsPage () {
    useProtectPage()
    return <h1>TripDetailsPage</h1>

}