import React from "react";
import BarGraph from "./BarGraph"
import Stack from "./Stack"
import "../header.css"
class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2 spacing">
                        <div className="card">
                            <div className="card-header">
                                ENTERED IN SALES YARD
                            </div>
                            <div className="card-body text-center">
                                <h4 style={{ color: 'blue' }}>61</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 spacing">
                        <div className="card">
                            <div className="card-header">
                                WAITING FOR INSPECTION
                            </div>
                            <div className="card-body">
                                <h4 style={{ color: 'violet' }}>26</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 spacing">
                        <div className="card">
                            <div className="card-header">
                                INSPECTED
                            </div>
                            <div className="card-body">
                                <h4 style={{ color: 'red' }}>41</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 spacing">
                        <div className="card">
                            <div className="card-header">
                                SFLT
                        </div>
                            <div className="card-body">
                                <h4 style={{ color: 'red' }}>41</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 spacing">
                        <div className="card">
                            <div className="card-header">
                                SCM STOCK
                    </div>
                            <div className="card-body">
                                <h4 style={{ color: 'red' }}>199</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 spacing">
                        <div className="card">
                            <div className="card-header">
                                INVOICED
                    </div>
                            <div className="card-body">
                                <h4 style={{ color: 'red' }}>27</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 spacing">
                    <div className="card">
                        <div className="card-header">
                            DELIVERED
                    </div>
                        <div className="card-body">
                        <h4 style={{color:'red'}}>17</h4>
                    </div>
                    </div>
                </div>
                <div className="col-md-2 spacing">
                    <div className="card">
                        <div className="card-header">
                            IBNL
                </div>
                        <div className="card-body spacing">
                        <h4 style={{color:'red'}}>186</h4>
                </div>
                    </div>
                </div>
                <div className="col-md-2 spacing">
                    <div className="card">
                        <div className="card-header">
                            EXITED FROM SALES YARD
                    </div>
                        <div className="card-body">
                        <h4 style={{color:'blue'}}>3</h4>
                    </div>
                    </div>
                </div>
                <div className="col-md-2 spacing">
                    <div className="card">
                        <div className="card-header">
                        REJECTION INSPECTION
                </div>
                        <div className="card-body">
                        <h4 style={{color:'red'}}>0</h4>
                </div>
                    </div>
                </div>
                </div>
                <hr />
                <BarGraph />
            </div>
        )
    }
}
export default Main;