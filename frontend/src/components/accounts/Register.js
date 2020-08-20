import React, { Component } from 'react'
import { Link,Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../../actions/auth'
import {createMessage }from '../../actions/messages'

export class Register extends Component {
    state={
        username:'',
        email:'',
        password:"",
        password2:''
    }

    onSubmit = e =>{
        e.preventDefault() 
        const {username,email, password, password2} = this.state;
        if(password !=password2){
            this.props.createMessage({passwordNotMatch:"Passwords Do Not Match"})
        }else{
            const newUser = { 
                username,
                email,
                password
            }
            this.props.register(newUser)
        }
    }

    onChange= e => this.setState({
        [e.target.name]:e.target.value
    })
    render() {
        const {username, email , password, password2} =this.state
        if (this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h5 className="text-center">Register Member</h5>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" name="username" className="form-control" onChange={this.onChange} value={username}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" onChange={this.onChange} value={email}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" onChange={this.onChange} value={password}/>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" name="password2" className="form-control" onChange={this.onChange} value={password2}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-muted">Already have an account <Link to="/login">Login</Link></p>
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

export default connect(mapStateToProps,{register,createMessage})(Register)

