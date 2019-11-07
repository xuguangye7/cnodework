import React, { Component } from 'react'

export default class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            a: []
        }
        
    }
    componentDidMount(){
        let page = this.props.location.pathname.toString().replace(/\/topics\//,"")           
        fetch('https://cnodejs.org/api/v1/topic/'+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({a:res.data});
        })
    }
    componentDidUpdate(prevProps,prevState){
        fetch('https://cnodejs.org/api/v1/topic/'+this.props.location.pathname.toString().replace(/\/topics\//,""))
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({a:res.data});
        })
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.a.content}}></div>
        )
    }   
}
