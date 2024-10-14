/* import { useParams } from "react-router-dom"; */

import { useLocation } from "react-router-dom";
export default function DetailsPage() {
  /* const { movieId } = useParams(); */

  const location = useLocation(); // Get location object
  const { movie } = location.state || {}; // Extract movie from state

  return (
    <main>
      <h1>Product details page</h1>
      <h2>Details</h2>
      <p>id :{movie.id}</p>
      <p>title:{movie.title}</p>
      <p>Description :{movie.overview}</p>
    </main>
  );
}
