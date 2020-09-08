import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Course from  '../Course/Course'
import './Courses.css';


class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        currentCourse: null
    }

    componentDidMount(){
        console.log('[Courses ] componentDidMount',this.props.match.url)
    }


    courseSelectHandler(course) {
        console.log('courseSelectHandler', course.id)
        this.props.history.push({
                pathname: '/courses/' + course.id,
                search: '?title=' + course.title
            }
        )
    }

    render() {

        let courses = this.state.courses.map(course => {
            return (
                <article
                    className="Course"
                    key={ course.id }
                    onClick={()=>this.courseSelectHandler(course)}

                >{ course.title }
                </article>
            )
        })

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    { courses }

                </section>
                <Route path={ this.props.match.url +'/:id' } component={ Course } />
            </div>
        );
    }
}

export default Courses;