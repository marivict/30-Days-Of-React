import React from 'react'

const TweetBox = ({tweet, deleteMessage, editMessage}) =>{
   
    return(
        <div>
            <p>{tweet}</p>
            <button 
                onClick={()=>{editMessage()}}>
                    Edit
            </button>
             <button 
                onClick={deleteMessage}
            >Delete
            </button>
        </div>
    )
}

export default TweetBox 