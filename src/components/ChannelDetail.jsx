import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ChannelCard from './ChannelCard'
import Videos from './Videos'

const ChannelDetail = () => {
  const [videos, setVideos] = useState([])
  const [channelDetail, setChannelDetail] = useState(null)
  const { id } = useParams()

  console.log(channelDetail, videos)
  useEffect(() => {
    // 获取频道数据
    fetchFromAPI(`channels?part=snippet&id=${id}`).then(res => setChannelDetail(res?.items[0]))
    // 获取视频数据
    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(res => setVideos(res?.items))
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: '300px',
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10
          }}
        />
        <ChannelCard marginTop="-110px" channelDetail={channelDetail}></ChannelCard>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '90px' } }} />
        {/* <Box sx={{ margin:  '0 auto' } }} /> */}
        <Videos videos={videos}></Videos>
      </Box> 
    </Box>
  )
}
export default ChannelDetail
