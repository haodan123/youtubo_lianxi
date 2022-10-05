import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import Feed from './components/Feed';
import ChannelDetail from './components/ChannelDetail.jsx';
import Navbar from './components/Navbar.jsx';
import SearchFeed from './components/SearchFeed.jsx';
import VideoDetail from './components/VideoDetail.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
          <Navbar></Navbar>

          <Routes>
            <Route exact path='/' element={<Feed />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetail />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  )
}
export default App