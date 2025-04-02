
import './App.css'
import '@mantine/core/styles.css';
import { BrowserRouter, Routes, Route } from "react-router";

import { MantineProvider, createTheme } from '@mantine/core';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App() {
  return <MantineProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </MantineProvider>;
}

