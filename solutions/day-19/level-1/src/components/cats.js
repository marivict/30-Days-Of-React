import React from 'react'

const Cats = ({breeds}) => {
    let url
    if(breeds.image === undefined || breeds.image.url === undefined){
        url = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
    }else{
        url= breeds.image.url
    }    
    return(
        <div className="cat-card" keys={breeds.id}>
            <div className="cat-card-image">
                <img src= {url} alt={breeds.name} />
            </div>
            <div className="cat-card-description">
                <h1>{breeds.name}</h1>
                <h3>{breeds.origin}</h3>
                <p><span className="cat-card-description-color-gray">Temperament: </span>{breeds.temperament}</p>
                <p><span className="cat-card-description-color-gray">Life Span:</span> {breeds.life_span}</p>
                <p><span className="cat-card-description-color-gray">Weight:</span> {breeds.weight.metric}</p>
                <p><span className="cat-card-description-color-gray">Description: </span>{breeds.description}</p>
            </div>
        </div>
    )
}

export default Cats