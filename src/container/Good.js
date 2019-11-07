import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Good extends Component {
    constructor(){
        super();
        this.state = {
            a: [],
            page:1
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?tab=good&page='+this.state.page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({a:res.data});
        })
    }
    componentDidUpdate(prevProps,prevState){
        fetch('https://cnodejs.org/api/v1/topics?tab=good&page='+this.state.page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({a:res.data});
        })
    }
    onChange=(e)=>{
        var page = e.target.innerHTML
        this.setState({
            page:page
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.a.map((item)=>{
                        return(
                            <ul>
                                <li style={{width:900,height: 30,float:"left",overflow:"hidden"}}>
                                    <img src={item.author.avatar_url} style={{width:'30px',height:'30px',float:'left'}}></img>    
                                    <p className='one'>{item.reply_count}/{item.visit_count}</p>
                                    <button>{item.tab}</button>
                                    <Link className='two' to={'/topics/'+item.id}>{item.title}</Link>
                                </li>
                            </ul>
                        )     
                    })
                }
                <button onClick={(e)=>this.onChange(e)} className='page'>1</button>
                <button onClick={(e)=>this.onChange(e)} className='page'>2</button>
                <button onClick={(e)=>this.onChange(e)} className='page'>3</button>
                <button onClick={(e)=>this.onChange(e)} className='page'>4</button>
                <button onClick={(e)=>this.onChange(e)} className='page'>5</button>
                <button onClick={(e)=>this.onChange(e)} className='page'>6</button>
                <button onClick={(e)=>this.onChange(e)} className='page'>7</button>
                <button onClick={(e)=>this.onChange(e)} className='page'>8</button>
                <button onClick={(e)=>this.onChange(e)} className='page'>9</button>
                <button onClick={(e)=>this.onChange(e)} className='page'>10</button> 
            </div>
        )
    }
}
