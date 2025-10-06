import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import DepartmentList from './components/DepartmentList';
import DepartmentForm from './components/DepartmentForm';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import VerifyUsername from './components/VerifyUsername';
import NotFoundPage from './components/NotFoundPage';
import { EmployeesContext } from './EmployeesContext';

const App = () => {
  const [employees, setEmployees] = useState([
    { id: 1, firstName: "Linda", lastName: "Quigley", email: "britteny.dooley@hotmail.com", age: 32, department: "HR" },
    { id: 2, firstName: "Sheldon", lastName: "Shanahan", email: "janella.dickinson@yahoo.com", age: 28, department: "IT" },
    { id: 3, firstName: "Kanesha", lastName: "Lind", email: "alisa.beahan@hotmail.com", age: 25, department: "Marketing" },
  ]);

  return (
      <EmployeesContext.Provider value={{ employees, setEmployees }}>
        <Router>
          <Navbar />
          <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/add-employee" element={<EmployeeForm />} />
              <Route path="/edit-employee/:id" element={<EmployeeForm />} />
              <Route path="/departments" element={<DepartmentList />} />
              <Route path="/add-department" element={<DepartmentForm />} />
              <Route path="/edit-department/:id" element={<DepartmentForm />} />
              <Route path="/verify-username" element={<VerifyUsername />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Container>
          <Footer />
        </Router>
      </EmployeesContext.Provider>
  );
};

export default App;
