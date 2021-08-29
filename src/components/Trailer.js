import React from 'react'

const Trailer = (movies,match,history) => {
    const movie=movies.find((x)=>x.id==match.params.id)
    return (
        
        <div>
            <h1>video</h1>
                       <iframe width="500" height="506" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    )
}

export default Trailer
