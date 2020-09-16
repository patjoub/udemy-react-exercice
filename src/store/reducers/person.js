import *  as actionTypes from '../actions/PersonActions'

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
  
    switch (action.type) {
        case actionTypes.PERSON_ADD:
            return {
                ...state,
                persons: state.persons.concat({id: action.payload.person.id, person: action.payload.person})
            }
        case actionTypes.PERSON_DELETE:          
            const updatedPersons=state.persons.filter(item => item.person.id!== action.payload.personId)

            return {
                ...state,
                persons: updatedPersons
            }
    }
    return state
}

export default reducer