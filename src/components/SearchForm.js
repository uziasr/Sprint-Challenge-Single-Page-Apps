import React, { useState } from "react";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  // searchResults is used to set the search result.
  const [searchResults, setSearchResults] = useState([]);
  return (
    <section className="search-form">
     <form>
       <input type='text' placeholder='Look me up' value={props.searchTerm} onChange={props.handleChange}/>
       </form>
    </section>
  );
}
