import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeads, deleteLead } from '../../actions/leads'
import leads from '../../reducers/leads'

class Leads extends Component {
    // set the expected proptypes
    // static propTypes = {
    //     leads: PropTypes.array.isRequired
    // }
    // cal the get leads reducer
    componentDidMount(){
        this.props.getLeads()
    }
    render() {
        this.props.getLeads()
        return (
            <Fragment>
                <h1>Messenger List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(lead=>(
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td><button className='btn btn-danger btn-small' onClick={this.props.deleteLead.bind(this, lead.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </Fragment>
        )
    }
}

const mapStateToProps =state=>({
    leads:state.leads.leads
})

export default connect(mapStateToProps,{getLeads, deleteLead})(Leads)
