// import { Button } from 'bootstrap'
import React from 'react'
import {Card,Button} from "react-bootstrap"
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
    // const myStyle ={
    //     color: "black",
    //     backgroundColor: "white"
    // }
    return (
        <Card style={{ width: '18rem', marginBottom:"40px" }}> {/* style={myStyle} */}
            <Card.Img variant="top" src={movie.posterUrl} />
            <Card.Body>
                <Card.Title> {movie.title} </Card.Title>
                <Card.Text>
                {movie.description}
                </Card.Text>
                <p> {movie.rate} </p>
                <Button variant="primary"> <Link to={`/movie/${movie.id}`} >trailer </Link> </Button>
            </Card.Body>
            
        </Card>
        
    )
}
//default props for posterUrl 
export default MovieCard
