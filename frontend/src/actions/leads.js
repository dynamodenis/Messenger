import axios from 'axios'
import {GET_LEADS, DELETE_LEAD,ADD_LEAD,GET_ERRORS } from './types'
import {createMessage, returnErrors} from './messages'
import { configHeader } from './auth'
// get leads action

export const getLeads = () => (dispatch,getState) =>{
    axios.get('/api/leads/',configHeader(getState))
        .then(res=>{
            dispatch({
                type:GET_LEADS,
                payload:res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

// Deletes a user
export const deleteLead = (id) => (dispatch,getState) =>{
    axios.delete(`/api/leads/${id}/`,configHeader(getState))
        .then(res=>{
            dispatch(createMessage({leadDeleted:'Lead Deleted'}))
            dispatch({
                type:DELETE_LEAD,
                payload:id
            })
        })
        .catch(err => console.log(err))
}

// Add a lead 
export const addLead = (lead) => (dispatch,getState) =>{
    axios.post("/api/leads/", lead,configHeader(getState))
        .then(res=>{
            dispatch(createMessage({leadAdded:'Lead Added'}))
            dispatch({
                type:ADD_LEAD,
                payload:res.data
            })
        })
        // returnErrors from thee action
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}
