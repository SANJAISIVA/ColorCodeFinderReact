import React from 'react'

export const Footer = (props) => {
    const year = new Date();
    return (
        <footer>
            &copy; {year.getFullYear()} Sanjaisiva N, Inc.
            {/* {props.length} List {props.length <= 1 ? "Item" : "Items"} */}
        </footer>
    )
}
