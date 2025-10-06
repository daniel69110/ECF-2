import React, { useState, useContext } from "react";
import "./EmployeeList.css";
import { Link } from "react-router-dom";
import { EmployeesContext } from "../EmployeesContext";

const EmployeeList = () => {
    const { employees, setEmployees } = useContext(EmployeesContext);
    const [searchTerm, setSearchTerm] = useState("");

    const handleDelete = (id) => {
        setEmployees(employees.filter((emp) => emp.id !== id));
    };

    const filteredEmployees = employees.filter((emp) =>
        `${emp.firstName} ${emp.lastName} ${emp.email}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="employee-container">
            <h1>Employees</h1>
            <Link to="/add-employee">
                <button className="add-btn">ADD EMPLOYEE</button>
            </Link>

            <input
                type="text"
                placeholder="Search"
                className="search-bar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <table className="employee-table">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredEmployees.map((emp) => (
                    <tr key={emp.id}>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.email}</td>
                        <td>{emp.age}</td>
                        <td>{emp.department}</td>
                        <td className="actions">
                            <Link to={`/edit-employee/${emp.id}`}>
                                <button className="edit-btn">EDIT</button>
                            </Link>
                            <button className="delete-btn" onClick={() => handleDelete(emp.id)}>
                                DELETE
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
