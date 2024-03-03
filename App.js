import React, { useEffect, useState } from 'react';




const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    // Fetch data from the backend API and update the state
    // axios.get('/api/data?searchTerm=' + searchTerm + '&sortBy=' + sortBy)
    //   .then(response => setData(response.data))
    //   .catch(error => console.error('Error fetching data:', error));
  }, [searchTerm, sortBy]);

  return (
    <div>
      {/* Display data in a table */}
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through data and display rows */}
          {
              data.map(item => (
                <tr key={item.sno}>
                  <td>{item.sno}</td>
                  <td>{item.customerName}</td>
                  <td>{item.age}</td>
                  <td>{item.phone}</td>
                  <td>{item.location}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                </tr>
              ))
          }
        </tbody>
      </table>

      {/* Add search input */}
      <input
        type="text"
        placeholder="Search by Name or Location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Add sorting options */}
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="date">Date</option>
        <option value="time">Time</option>
      </select>
    </div>
  );
};

export default App;
