import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SideBar from './SideBar'
import Videos from './Videos'
import { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
  // 选中的左边侧边栏
  const [selectedCategory, setSelectedCategory] = useState('New')
  // 视屏数组
  const [videos, setVideos] = useState([])
  useEffect(() => {
    // 掉接口用左边侧边栏的选中 获取视屏
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data => {
      setVideos(data.items)
    })
  }, [selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      {/* 左侧侧边栏 小于650px变成变成 cloumn */}
      <Box sx={{ minHeight: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></SideBar>
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>
      {/* 右侧的视频 */}
      <Box p={2} sx={{ overflowY: 'auto', minHeight: '90vh', flex: 2 }}>
        {/* 标题部分 */}
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
          {selectedCategory} <span style={{ color: '#FC1503' }}>肥仔视频</span>
        </Typography>
        {/* 视频部分 */}
        <Videos videos={videos}></Videos>
      </Box>
    </Stack>
  )
}
export default Feed
