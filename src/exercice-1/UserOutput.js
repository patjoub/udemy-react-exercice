import React from 'react'

const userOutput=(props)=>{

   const styles={
    border: '1px solid #ccc',
    width: '25%',
    margin: '1%',
    display: 'inline-block'

    
   }

    return(
        <div style={styles}>

               <p>Welcome {props.username} ...</p>
               <p>This is a paragraph</p>
        </div>

    )


}

export default userOutput

