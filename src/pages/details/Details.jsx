/* import { useParams } from "react-router-dom"; */
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../components/common/Button/CustomBtn";
import { BASE_POSTER_URL } from "../../services/api-host";
import "./Details.css";

export default function DetailsPage() {
  const location = useLocation(); // Get location object
  const { movie } = location.state || {}; // Extract movie from state
  const {
    id,
    title,
    original_title,
    popularity,
    overview,
    vote_average,
    poster_path,
  } = movie;

  const navigate = useNavigate();

  return (
    <main className="details-container">
      <div>
        <h1>Details</h1>
        <img
          className="poster-img"
          src={`${BASE_POSTER_URL}/${poster_path}`}
          alt={title}
        />
      </div>
      <section>
        <div className="paragraphs-container">
          <p>
            <strong>Tmdb Id:</strong> {id}
          </p>
          <p>
            <strong>Original Title</strong>: {original_title}
          </p>
          <p>
            <strong>Description</strong>: {overview}
          </p>
          <p>
            <strong>Rating</strong>: {vote_average}
          </p>
          <p>
            <strong>Popularity</strong>: {popularity}
          </p>
          <div className="back-btn-hide__container">
            <BackBtn onClickFn={() => navigate("..")} bgColor="green">
              Go Back
            </BackBtn>
          </div>
        </div>
      </section>
      <div className="back-btn__container">
        <BackBtn onClickFn={() => navigate("..")} bgColor="green">
          Go Back
        </BackBtn>
      </div>
    </main>
  );
}
