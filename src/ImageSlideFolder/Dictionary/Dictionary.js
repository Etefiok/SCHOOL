import React, { useState, useEffect } from 'react';

function Dictionary() {
  const [dictionary, setDictionary] = useState({});

  useEffect(() => {
    fetch('')
      .then(response => response.json())
      .then(data => setDictionary(data))
      .catch(error => console.error('Error fetching dictionary:', error));
  }, []);

  return (
    <div>
      <h1>Dictionary</h1>
      <ul>
        {Object.keys(dictionary).map((term, index) => (
          <li key={index}>
            <strong>{term}</strong>: {dictionary[term]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dictionary;
