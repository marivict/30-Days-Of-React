import React from 'react'

const Loader = () =>{
    const newDiv = new Array(0,1,2,3,4,5,6,7,8,9,10,11)
    return(
        <div className="loader">
            <div className="lds-ring">
                <div className="lds-spinner">
                    {newDiv.map(newDiv => (
                        <div></div>
                    ))}
                </div>
            </div>
        </div>

        
    )
}

export default Loader