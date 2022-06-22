import React from 'react'
import { Link } from 'react-router-dom'
export default function Tabs({
    to,letter, name
}) {
    return (
        <div>
            <Link class="slide" to={to}>
                <span class="element">{letter}</span>
                <span class="name">{name}</span>
            </Link>
        </div>
    )
}
