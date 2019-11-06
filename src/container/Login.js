import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div style={{width:900,height:400}}>
                <div style={{background:'#444',width:'900px',height:'40px',lineHeight:'40px'}}>
                    <Link to="/home">主页</Link>/登录
                </div>
                <div style={{marginLeft:50,marginTop:50}}>
                    用户名：<input type="text"  style={{width:'200px',height:'30px',borderRadius:5,border:'1px solid black'}}/>
                </div>
                <div style={{marginLeft:66,marginTop:20}}>
                    密码：<input type="password" style={{width:'200px',height:'30px',borderRadius:5,border:'1px solid black'}}/>
                </div>
                <div style={{marginLeft:120,marginTop:20}}>
                    <button style={{width:70,height:40,backgroundColor:"blue",border:'blue',borderRadius:3}}>
                        <Link to="/home"><p style={{color:"white"}}>登陆</p></Link>
                    </button>
                </div>
            </div>
        )
    }
}
