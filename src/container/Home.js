import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import All from './All';
import Good from './Good';
import Share from './Share';
import Question from './Question';
import Job from './Job';
import Kehu from './Kehu';
// import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
export default class Home extends Component {
    render() {
        let url = this.props.match.url
        return (
            <div>
                <div className="home">
                    <Link to={url+'/all'}>全部</Link>
                    <Link to={url+'/good'}>精华</Link>
                    <Link to={url+'/share'}>分享</Link>
                    <Link to={url+'/question'}>问答</Link>
                    <Link to={url+'/job'}>招聘</Link>
                    <Link to={url+'/kehu'}>客户端测试</Link>
                </div>
                <div>
                    <Route path={`${url}/all`} component={All}/>
                    <Route path={`${url}/good`} component={Good}/>
                    <Route path={`${url}/share`} component={Share}/>
                    <Route path={`${url}/question`} component={Question}/>
                    <Route path={`${url}/job`} component={Job}/>
                    <Route path={`${url}/kehu`} component={Kehu}/>
                </div>
            </div>
        )
    }
}
