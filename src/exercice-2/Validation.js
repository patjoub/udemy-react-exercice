import React from 'react'

const Validation = props => {

    const minLength=5
    const maxLength=10
    const validationMessage = props.textLength < minLength ? "Text Too Short" : props.textLength>maxLength ? "Text too long": "nothing noticed"

    return (
        <div>
            <h4>Validation message</h4>
            { validationMessage &&  <p> {validationMessage}</p>}
        </div>
    )
}

export default Validation