import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import SupportIcon from '@mui/icons-material/HelpOutline';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from 'react-router-dom';
import employees from './data/employees';



const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#191970', 
    },
  },
});


const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate=useNavigate();
  const goToHomePage = () => {
    navigate('/dashboard'); 
  };




  return (
    <div style={{ backgroundImage: 'url("https://i.pinimg.com/474x/06/ee/f0/06eef07b5babf927d5c975741088cebf.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <Typography variant="h6" mt={2} style={{ position: 'absolute', top: '20px', textAlign: 'center', color: 'black', width: '80%', left: '10%', margin: '0 auto' }}>Welcome, this is the employee detail page</Typography>
      <ThemeProvider theme={theme}>
        <TextField
          variant="filled"
          margin="dense"
          required
          name="search"
          placeholder="Search by Name"
          type="search"
          id="search"
          autoComplete="current-search"
          value={searchTerm}
          onChange={handleSearch}
          size="small"
          fullWidth
          style={{
            paddingTop:'2px',
            width: '80%',
            maxWidth: '300px',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {filteredEmployees.map((employee) => (
            <ListItem key={employee.empId}>
              <Card variant="outlined" style={{ backgroundColor: theme.palette.primary.main, width: '350px' }}>
                <CardContent>
                  <ListItemText
                    primary={employee.Name}
                    secondary={`ID: ${employee.empId} | DOB: ${employee.DOB} | Role: ${employee.Role}`}
                    style={{ color: theme.palette.secondary.main }}
                  />
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
        <SupportIcon style={{ position: 'absolute', top: '10px', right: '10px', color: 'black' }} />
        <BottomNavigation style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#B6D0E2' }}>
          <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} onClick={goToHomePage}/>
          <BottomNavigationAction label="User" value="user" icon={<PersonIcon />}  />
        </BottomNavigation>
      </ThemeProvider>
    </div>
  );
};

export default EmployeeList;
