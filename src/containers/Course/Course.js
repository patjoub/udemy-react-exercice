import React, { Component } from 'react';

import './Course.css'

class Course extends Component {

    state={
        title: 'Unknow title',
        id: null
    }

    componentDidUpdate(){
        this.loadDataFromUrl()
    }

    componentDidMount(){
        this.loadDataFromUrl()
    }

    loadDataFromUrl(){
        if(this.state.id !== this.props.match.params.id){
            const query=new URLSearchParams(this.props.location.search)

            for(let param of query.entries()){
                if(param[0] === 'title'){
                    this.setState({id: this.props.match.params.id, title: param[1]})
                }
            }
        }
    }

    render () {
        return (
            <div className="Course">
                {this.state.id &&
                <div>
                    <h1>{this.state.title}</h1>
                    <p>You selected the Course with ID: {this.state.id}</p>
                </div>
                }
            </div>
        );
    }
}

export default Course;