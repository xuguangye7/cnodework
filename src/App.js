import React, { Component } from 'react'
import Header from './components/header';
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home'
import Api from './container/Api'
import Start from './container/Start'
import About from './container/About'
import InLogin from './container/InLogin'
import Login from './container/Login'
import Details from './container/Details'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="main">
                        <div className="content">
                            <Route path='/home' component={Home} />
                            <Route path='/start' component={Start} />
                            <Route path='/api' component={Api} />         
                            <Route path='/about' component={About} />
                            <Route path='/inlogin' component={InLogin} />
                            <Route path='/login' component={Login}/>
                            <Route path={'/topics/'} component={Details}/>
                        </div>
                        <div className="sider">
                            
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
