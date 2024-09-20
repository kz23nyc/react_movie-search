import { useState, useEffect } from "react";
import "./App.css";

//Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const apiKey = "47114b30"; // API Key
  const [movie, setMovie] = useState(null);//State to hold movie data
 
  //Function to fetch movies
  const getMovie = async (searchTerm) => {
    try{
    //Make fetch request and store the response
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=47114b30&t=${searchTerm}`);

    //Parse JSON response into a Javascript object
    const data = await response.json();

    //set the Movie state to the received data
    setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  // useEffect to fetch a default movie on initial render
  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Barbie"); // Default movie to fetch
  }, []); // Empty dependency array ensures this runs only once


  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

