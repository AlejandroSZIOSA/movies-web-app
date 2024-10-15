/* import { useParams } from "react-router-dom"; */

import { useLocation } from "react-router-dom";
import BackBtn from "../components/common/Button/BackBtn";
import { useNavigate } from "react-router-dom";

export default function DetailsPage() {
  /* const { movieId } = useParams(); */

  const location = useLocation(); // Get location object
  const { movie } = location.state || {}; // Extract movie from state
  const navigate = useNavigate();

  return (
    <main>
      <h1>Product details page</h1>
      <h2>Details</h2>
      <p>id :{movie.id}</p>
      <p>title:{movie.title}</p>
      <p>Description :{movie.overview}</p>
      <BackBtn onClickFn={() => navigate("..")} />
    </main>
  );
}
