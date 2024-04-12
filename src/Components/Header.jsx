import React from 'react'
import NavBar from './NavBar'
import TopBar from './TopBar'
export default function Header() {
    return (
        <header className="header">
            <TopBar />
            <NavBar />
        </header>
    )
}
