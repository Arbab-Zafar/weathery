import { useState, useEffect, useRef } from "react";
import { useFirebase } from "../context/Firebase";

export default function SearchBar({ setIsDropdownSelected }) {
  const firebase = useFirebase();

  const [query, setQuery] = useState(firebase.locationName || "");
  const [suggestions, setSuggestions] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!query && firebase.locationName) {
      setQuery(firebase.locationName);
    }
  }, [firebase.locationName]);

  // Function to fetch city suggestions
  const fetchCitySuggestions = async (input) => {
    if (input.length < 1) {
      setSuggestions([]); // Hide dropdown if input is too short
      return;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${input}&format=json&limit=4`,
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
    }
  };

  // Debounced Input Handler
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setIsDropdownSelected(false); // User is typing manually

    // Clear previous timeout
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set a new timeout to fetch results after 500ms
    setTypingTimeout(setTimeout(() => fetchCitySuggestions(value), 500));
  };

  // Show dropdown again when input is clicked if query is not empty
  const handleInputFocus = () => {
    if (query.length >= 2) {
      fetchCitySuggestions(query);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSuggestions([]); // Hide dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mt-8 flex w-full items-center justify-center px-4">
      <div className="relative flex w-full items-center" ref={dropdownRef}>
        <input
          type="text"
          name="search"
          id="search"
          className="flex h-10 w-full items-center justify-center rounded-2xl border border-gray-600 bg-transparent pl-11 text-sm text-white placeholder-gray-400 shadow-sm shadow-gray-600 outline-none"
          placeholder="Enter city name"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <span className="material-symbols-outlined absolute left-4 text-xl text-gray-400">
          search
        </span>

        {/* Autocomplete Dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute left-0 top-12 w-full overflow-hidden rounded-xl border border-white/20 bg-white/10 text-sm text-white shadow-lg backdrop-blur-md transition-all duration-200">
            {suggestions.map((city, index) => (
              <li
                key={city.place_id}
                className={`cursor-pointer px-4 py-2 transition-all duration-200 hover:bg-white/20 
                ${index === 0 ? "rounded-t-xl" : ""} 
                ${index === suggestions.length - 1 ? "rounded-b-xl" : ""}`}
                onClick={() => {
                  setQuery(city.display_name);
                  firebase.setLocationName(city.name);
                  setIsDropdownSelected(true);
                  setSuggestions([]);
                }}
              >
                {city.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
