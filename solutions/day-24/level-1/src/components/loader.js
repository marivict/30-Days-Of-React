import React from 'react'

const Loader = () =>{
    return(
        <div class="loader">
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div>Cargando</div>
            </div>
        </div>
    )
}

export default Loader