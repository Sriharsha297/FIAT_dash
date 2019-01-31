import React from "react";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar bg-light sticky-top header-padding" style={{marginBottom:'40px'}}>
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