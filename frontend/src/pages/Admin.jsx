import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";

function Admin() {
  const [employers, setEmployers] = useState([]);

  // Fetch employers from backend
  const fetchEmployers = async () => {
    try {
      const res = await axios.get("/employer");
      setEmployers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Update employer status
  const updateStatus = async (id, status) => {
    try {
      await axios.put(`/employer/${id}`, { status });
      alert(`Employer ${status}`);
      fetchEmployers(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Position</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employers.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.company}</td>
              <td>{emp.position}</td>
              <td>{emp.status}</td>
              <td>
                {emp.status === "pending" && (
                  <>
                    <button onClick={() => updateStatus(emp._id, "verified")}>
                      ✅ Verify
                    </button>
                    <button onClick={() => updateStatus(emp._id, "rejected")}>
                      ❌ Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
