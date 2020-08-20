import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addLead } from '../../actions/leads'

class Form extends Component {

    state={
        name:'',
        email:'',
        message:''
    }
    // on change method
    onChange = e => this.setState({[e.target.name]:e.target.value})

    // on submit
    onSubmit = e =>{
        e.preventDefault()
        const {name, email, message} = this.state
        const lead =  {name, email , message}
        this.props.addLead(lead)
        // clear the inputs after submission
        this.setState({
            name:'',
            email:'',
            message:'' 
        })
    }
    render() {
        const {name, email, message} = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h1>Add Messenger Form</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label><br/>
                        <input type="text" name="name" className="form-group" onChange={this.onChange} value={name}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label><br/>
                        <input type="email" name="email" className="form-group" onChange={this.onChange} value={email}/>
                    </div>
                    <div className="form-group">
                        <label>Message</label><br/>
                        <input type="text" name="message" className="form-group" onChange={this.onChange} value={message}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-sm">Add Member</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {addLead})(Form)
