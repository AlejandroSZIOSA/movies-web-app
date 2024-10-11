import { useState } from "react";

export default function SearchBar({ movies }) {
  // State to hold the search input
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle search term changes
  const handleChange = (event) => {
    setSearchTerm(event.target.value); // Update the search term state
  };

  // Filter the MOVIES_JSON based on the search input
  const filteredData = movies.filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange} // Call handleChange on input change
      />

      {/* Render the filtered list */}
      <ul>
        {filteredData.map((m) => (
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
    </>
  );
}
