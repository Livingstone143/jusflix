import React from 'react'
import { CssBaseline } from '@mui/material';
import {BrowserRouter , Routes ,Route} from 'react-router-dom';


const App = () => {
  return (<main>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie:id" element={<About />} />
        <Route path="/contact:id" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </main>
  );
};

export default App;