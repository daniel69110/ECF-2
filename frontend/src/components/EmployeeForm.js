import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EmployeesContext } from "../EmployeesContext";
import "./EmployeeForm.css";

const EmployeeForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { employees, setEmployees } = useContext(EmployeesContext);

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        department: "",
    });

    useEffect(() => {
        if (id) {
            const existingEmployee = employees.find(emp => emp.id === parseInt(id));
            if (existingEmployee) setEmployee(existingEmployee);
        }
    }, [id, employees]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (id) {
            // Update employee
            const updatedEmployees = employees.map(emp =>
                emp.id === parseInt(id) ? employee : emp
            );
            setEmployees(updatedEmployees);
        } else {
            // Add new employee
            const newEmployee = {
                ...employee,
                id: employees.length ? employees[employees.length - 1].id + 1 : 1,
            };
            setEmployees([...employees, newEmployee]);
        }

        navigate("/employees");
    };

    return (
        <div className="container">
            <h2>{id ? "Edit Employee" : "Add Employee"}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={employee.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={employee.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={employee.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age *"
                    value={employee.age}
                    onChange={handleChange}
                    required
                />
                <select
                    name="department"
                    value={employee.department}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Department *</option>
                    <option value="HR">HR</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="IT">IT</option>
                </select>

                <button type="submit">{id ? "Update" : "Save"}</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
