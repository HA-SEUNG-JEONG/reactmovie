import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Detail.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [moviedetail, setMoviedetail] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMoviedetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  const detailStyle = {
    backgroundImage: "url(" + moviedetail.background_image_original + ")",
    backgroundSize: "cover",
    height: "100vh",
    width: "1fr",
  };
  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div class="backImg" style={detailStyle}>
          <img src={moviedetail.medium_cover_image} alt={moviedetail.id}></img>
        </div>
      )}
    </div>
  );
}
export default Detail;
