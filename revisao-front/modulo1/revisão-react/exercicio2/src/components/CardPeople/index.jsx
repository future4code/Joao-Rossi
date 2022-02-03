import React from 'react';

export default function index({ item }) {
    return (
        <ul>
            <li> {item.height} </li>
            <li> {item.mass} </li>
            <li> {item.birth_year} </li>
            <li> {item.gender} </li>
        </ul>
    );
}
