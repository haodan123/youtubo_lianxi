import CheckCircle from '@mui/icons-material/CheckCircle'
import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos'
import Loader from './Loader'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  const { id } = useParams()
  useEffect(() => {
    // 获取视频的详细信息
    fetchFromAPI(`videos?part=snippet,statistic&id=${id}`).then(res => setVideoDetail(res.items[0]))
    // 获取右边相关视频的信息
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(data => setVideos(data.items))
  }, [id])
  if (!videoDetail?.snippet) return <Loader />

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount }
  } = videoDetail

  console.log(channelTitle)
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        {/* 左边的视频 */}
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            {/* youtube视屏 */}
            <ReactPlayer
              className="react-player"
              controls={true}
              url={`https://www.youtube.com/watch?v=${id}`}
            ></ReactPlayer>
            {/* 视屏下的标题 */}
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            {/* 标题下的信息 */}
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
              {/* 左边的作品信息 */}
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#fff">
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              {/* 右边的播放数量 */}
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* 右边的相关视频 */}
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}
export default VideoDetail
