import React, { Component } from 'react'

export default class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            a: [],
            path:this.props.location.pathname.toString().replace(/\/topics\//,"")           
        }
        
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topic/'+this.props.location.pathname.toString().replace(/\/topics\//,""))
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({a:res.data});
        })
    }
    componentDidUpdate(){
        fetch('https://cnodejs.org/api/v1/topic/'+this.props.location.pathname.toString().replace(/\/topics\//,""))
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({a:res.data});
        })
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.a.content}}> 
            </div>
        )
    }
}
