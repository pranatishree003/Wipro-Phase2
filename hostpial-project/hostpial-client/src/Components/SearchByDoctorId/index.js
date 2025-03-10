// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchByDoctorId = () => {
//   const [doctorId, setDoctorId] = useState('');
//   const [doctor, setDoctor] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   return (
//     <div>
//       <h2>Search Doctor by ID</h2>
//       <input
//         type='number'
//         placeholder='Enter Doctor ID'
//         value={doctorId}
//         onChange={(e) => setDoctorId(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {doctor && (
//         <table border='1' cellPadding='10'>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Specialization</th>
//               <th>Qualification</th>
//               <th>Email</th>
//               <th>Mobile</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{doctor.doctor_id}</td>
//               <td>{doctor.doctor_name}</td>
//               <td>{doctor.speciality}</td>
//               <td>{doctor.qualification}</td>
//               <td>{doctor.email}</td>
//               <td>{doctor.mobile}</td>
//             </tr>
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default SearchByDoctorId;

import React from 'react';

function index() {
  return <div>index</div>;
}

export default index;
