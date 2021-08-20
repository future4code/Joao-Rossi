import React from 'react';
import { useProtectPage } from '../hooks/UseProtectPage'


export default function AdminHomePage () {
    useProtectPage()
    return <h1>AdminHomePage</h1>

}