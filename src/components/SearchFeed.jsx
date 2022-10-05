import {   Typography,Box } from '@mui/material'
import Videos from './Videos'
import { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const {searchTerm} =useParams()
  // 视屏数组
  const [videos, setVideos] = useState([])
  useEffect(() => {
    // 掉接口用左边侧边栏的选中 获取视屏
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(data => {
      setVideos(data.items)
    })
  }, [searchTerm])
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
    {/* 标题部分 */}
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
      搜索结果： <span style={{ color: '#FC1503' }}>{searchTerm} </span>
    </Typography>
    {/* 视频部分 */}
    <Videos videos={videos}></Videos>
  </Box>
  )
}
export default SearchFeed
