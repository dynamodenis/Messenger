import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import { Provider,connect } from 'react-redux'
import { transitions, positions,Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic' 
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
// Components
import store from '../store'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import Alert from './layout/Alert'
import Register from './accounts/Register'
import Login from './accounts/Login'
import PrivateRoute from './common/PrivateRoute'
import {loadUser} from '../actions/auth'

// react-alert tempalates settings
const options = {
    timeout: 3000,
    position: positions.TOP_CENTER,
    
  };
  

class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser())
    }
    render() {
        return (

            <Provider store={store}>
                 <AlertProvider template={AlertTemplate} {...options} >
                     <Router>
                        <Fragment>
                        <Header></Header>
                        <Alert></Alert>
                        <div className="container">
                            <Switch>
                                <PrivateRoute exact path="/" component={Dashboard}/>
                                <Route exact path="/login" component={Login}/>
                                <Route exact path="/register" component={Register}/>
                            </Switch>
                        </div>
                        </Fragment>
                     </Router>
                 </AlertProvider>
            </Provider>
            
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));
