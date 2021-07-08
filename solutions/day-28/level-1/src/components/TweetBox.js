import React from 'react'

const TweetBox = ({
    tweet, 
    deleteMessage, 
    editMessage, 
}) => {
   
    return(
        <div className="tweet-box">
            <div className="tweet-box-header">

            </div>
            <div className="tweet-box-body">
                <p>{tweet}</p>
            </div>
            <div className="tweet-box-footer">
                <button 
                    onClick={()=>{editMessage()}}>
                        Edit
                </button>
                <button 
                    onClick={deleteMessage}
                >Delete
                </button>
            </div>
            
        </div>
    )
}

export default TweetBox 