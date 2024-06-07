import React from 'react'
import NavBar from './NavBar'
import TopBar from './TopBar'
export default function Header({phone,email}) {
    return (
        <header className="header">
            <TopBar phone={phone} email={email} />
            <NavBar />
        </header>
    )
}
