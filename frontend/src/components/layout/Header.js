import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../actions/auth'

class Header extends Component {
    render() {
        const {isAuthenticated, user}=this.props.auth

        // for logged in user
        const authLinks = (
            
            <ul className="navbar-nav mr-auto">
                <span className="navbar-text mr-2 text-light">
                    <strong><small>{user ? `Welcome ${user.username}` : ''}</small> </strong> 
                </span>
                <li >
                    <button className="nav-item btn btn-info btn-sm" onClick={this.props.logout}>Logout</button> 
                </li>
            </ul>
        )
        // for new users
        const guestLinks = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>
        )
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Messenger Manager</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto float-right">
                        {isAuthenticated ? authLinks : guestLinks}
                    </ul>
                </div>
            </nav>

        )
    }
}
const mapStateToProps= state=>({
    auth:state.auth
})

export default connect(mapStateToProps,{logout})(Header)
