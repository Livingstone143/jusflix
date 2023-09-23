import React from 'react'
import { CssBaseline } from '@mui/material';
import {Routes ,Route} from 'react-router-dom';


const App = () => {
  return (
    
    <div>
        <CssBaseline />
<main>
  <Routes>
    <Route exact path="/movie/:id">
      movie info
    </Route>
    <Route exact path="/actor/:id">
      Actors
    </Route>  <Route exact path="/">
      movies
    </Route>  <Route exact path="/profile/:id">
      [Profile]
    </Route>
  </Routes>
</main>
        </div>
  )
}

export default App