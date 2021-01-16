import React from 'react'

const Cats = ({breeds}) => {
    if(breeds.image === undefined || breeds.image.url === undefined){
        return (
            <div className="cat" keys={breeds.id}>
                <div className="cat-background">
                    <img src='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg' alt={breeds.name}/>
                </div>
                <div className="cat-text">
                    <h1>{breeds.name}</h1>
                    <h3>{breeds.origin}</h3>
                    <p><span className="cat-text-gray">Temperament: </span>{breeds.temperament}</p>
                    <p><span className="cat-text-gray">Life Span:</span> {breeds.life_span}</p>
                    <p><span className="cat-text-gray">Weight:</span> {breeds.weight.metric}</p>
                    <p><span className="cat-text-gray">Description: </span>{breeds.description}</p>
                </div>
            </div>
        )
    }
    return(
        <div className="cat" keys={breeds.id}>
            <div className="cat-background">
                <img src= {breeds.image.url} alt={breeds.name} />
            </div>
            <div className="cat-text">
                <h1>{breeds.name}</h1>
                <h3>{breeds.origin}</h3>
                <p><span className="cat-text-gray">Temperament: </span>{breeds.temperament}</p>
                <p><span className="cat-text-gray">Life Span:</span> {breeds.life_span}</p>
                <p><span className="cat-text-gray">Weight:</span> {breeds.weight.metric}</p>
                <p><span className="cat-text-gray">Description: </span>{breeds.description}</p>
            </div>
        </div>
    )
}

export default Cats