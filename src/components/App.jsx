import React from 'react'
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { NavBar, MovieInfo, Movies, Actors, Profile ,Not} from './ind';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (<div className={classes.root}>
    <CssBaseline />
    <NavBar />
    <main className={classes.content}>
     <div className={classes.toolbar} />
      
      
      <Routes>

        <Route path="/" element={<Movies />} />
        <Route path="/Movie/:id" element={<MovieInfo />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="*" element={<Not />} />
        

      </Routes>

    </main>
  </div>
  );
};

export default App;