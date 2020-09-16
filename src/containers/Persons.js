import React, { Component } from 'react';

import { connect} from 'react-redux'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionTypes from '../store/actions/PersonActions'

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.onAddPerson(newPerson)      
    }

    // personDeletedHandler = (personId) => {
    //     // this.setState( ( prevState ) => {
    //     //     return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     // } );
    // }

    render () {
       
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.pers.map(item => (
                    <Person 
                        key={item.id}
                        name={item.person.name} 
                        age={item.person.age} 
                        clicked={() => this.props.onDeletePerson(item.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps= state => {

    return {
        pers: state.persons
    }

}

const mapDispatchToProps = dispatch => {

    return {
        onAddPerson: (person)=>dispatch({type: actionTypes.PERSON_ADD, payload: { person }}),
        onDeletePerson: (personId)=>dispatch({type: actionTypes.PERSON_DELETE,payload: {personId}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);