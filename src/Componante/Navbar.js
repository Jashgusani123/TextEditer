import React from 'react'

const Navbar = (props) => {
    
    return (
        <>
            <nav className={`navbar bg-${props.mode}`}>
                <div className="container-fluid">
                    <a href='/' className={`navbar-brand text-${props.mode==="dark" ? "light":"dark"}`}>TextEditer</a>
                            <button type="button" className={`btn btn-outline-${props.mode==="dark" ? "light":"dark"} ` }onClick={props.modeset}>{props.mode==="dark" ? "Light":"Dark"}</button>
                </div>
            </nav>
        </>

    )
}

export default Navbar