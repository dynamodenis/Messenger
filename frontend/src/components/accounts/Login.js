import React, { Component } from 'react'
import { Link,Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../actions/auth'

class Login extends Component {
    state={
        email:'',
        password:""
    }

    onSubmit = e =>{
        e.preventDefault()
        this.props.login(this.state.email, this.state.password)
        console.log(this.state.username, this.state.password)
    }

    onChange= e => this.setState({
        [e.target.name]:e.target.value
    })
    render() {
        if (this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        const {email, password} =this.state
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h5 className="text-center">Welcome Back</h5>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" onChange={this.onChange} value={email}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" onChange={this.onChange} value={password}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-muted">Don't  have an account? <Link to="/register">Register</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}

// get the state of user isAuthenticated
const mapStateToProps = state =>({
    isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps,{login})(Login)
