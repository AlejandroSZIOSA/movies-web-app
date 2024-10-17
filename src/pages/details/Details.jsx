/* import { useParams } from "react-router-dom"; */
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../components/common/Button/BackBtn";
import { BASE_POSTER_URL } from "../../services/api-host";

export default function DetailsPage() {
  /* const { movieId } = useParams(); */
  const location = useLocation(); // Get location object
  const { movie } = location.state || {}; // Extract movie from state
  const { id, title, overview, poster_path } = movie;

  const navigate = useNavigate();

  return (
    <main>
      <h1>Movie Details</h1>
      <img
        src={`${BASE_POSTER_URL}/${poster_path}`}
        width="500"
        height="500"
        alt={title}
      />
      <h2>Details</h2>
      <p>id :{id}</p>
      <p>title:{title}</p>
      <p>Description :{overview}</p>
      <BackBtn onClickFn={() => navigate("..")} />
    </main>
  );
}
