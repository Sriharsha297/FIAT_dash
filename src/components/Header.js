import React from "react";
import "../header.css"

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar bg-light padding sticky-top header-padding">
                <div className="container-fluid">
                <span style={{margin:'0 auto'}}>
                <h2 >FIAPL SALES YARD MANAGEMENT SYSTEM DASHBOARD</h2>
                </span>
                </div>
            </nav>
        )
    }
}
export default Header;