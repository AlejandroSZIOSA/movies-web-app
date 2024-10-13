import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const { movieId, movieTitle } = useParams();

  return (
    <main>
      <h1>Product details page</h1>
      <h2>Details</h2>
      <p>id :{movieId}</p>
      <p>title:{movieTitle}</p>
    </main>
  );
}