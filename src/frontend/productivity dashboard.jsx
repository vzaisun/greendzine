import React, { useState } from 'react';
import { Typography, Paper, createTheme, ThemeProvider, Card, Grid, Slider, BottomNavigation, BottomNavigationAction, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SupportIcon from '@mui/icons-material/HelpOutline';
import { useNavigate } from 'react-router-dom';
import daysOfWeek from './data/days';
import initialProductivityData from './data/productivity';


const EmployeeDashboard = () => {

  const navigate=useNavigate();
  const [productivityData, setProductivityData] = useState(initialProductivityData);

  const handleSliderChange = (newValue, index) => {
    const newData = [...productivityData];
    newData[index] = newValue;
    setProductivityData(newData);
  };

  const goToEmployeePage = () => {
    navigate('/employees'); 
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#ADD8E6',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
       <div style={{ backgroundImage: 'url("https://i.pinimg.com/474x/06/ee/f0/06eef07b5babf927d5c975741088cebf.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <Typography component="h4" variant="h6" style={{paddingBottom:'400px',position:'absolute'}}>
          Welcome, this is employee productivity dashboard page
        </Typography>
        <Grid container spacing={0.8}>
          {daysOfWeek.map((day, index) => (
            <Grid item xs={12} key={day}>
              <Paper
                style={{
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  maxWidth: '280px',
                  margin: 'auto',
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                }}
              >
                <Typography style={{ marginRight: '6px', minWidth: '30px' ,color:'black'}}>{day}    </Typography>
                <Slider
                  value={productivityData[index]}
                  onChange={(e, newValue) => handleSliderChange(newValue, index)}
                  min={0}
                  max={100}
                  step={1}
                  valueLabelDisplay="auto"
                  style={{ marginTop: '4px', color: theme.palette.secondary.main, width: '150px' }}
                />
                <Typography style={{ marginLeft: '6px' ,color:'black'}}>{`${productivityData[index]}%`}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <SupportIcon style={{ position: 'absolute', top: '10px', right: '10px', color: 'black' }} />
        <BottomNavigation style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#B6D0E2' }}>
          <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
          <BottomNavigationAction label="User" value="user" icon={<PersonIcon />} onClick={goToEmployeePage} />
        </BottomNavigation>
      </div>
    </ThemeProvider>
  );
};

export default EmployeeDashboard;
