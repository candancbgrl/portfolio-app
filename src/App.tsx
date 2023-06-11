import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage'
import BlogPage from './components/Blog/BlogPage'
import WorkPage from './components/Work/WorkPage'
import { WorkDetailPage } from './components/Work/WorkDetailPage'
import { DataContextProvider } from './navigation/DataContext';

const App = () => (
  <DataContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/works-page" element={<WorkPage />} />
        <Route path="/work-detail-page" element={<WorkDetailPage />} />
        <Route path="/work-detail-page/:id" element={<WorkDetailPage />} />
      </Routes>
    </Router>
  </DataContextProvider>
);

export default App;
