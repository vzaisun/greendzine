
import Login from './frontend/login';
import EmployeeDashboard from './frontend/productivity dashboard';
import EmployeeList from './frontend/employeeList';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
          <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Login />}
                    />
                    <Route
                        path="/dashboard"
                        element={<EmployeeDashboard />}
                    />
                    <Route
                        path="/employees"
                        element={<EmployeeList />}
                    />
                </Routes>
            </Router>
        </>
  
  );
}

export default App;
