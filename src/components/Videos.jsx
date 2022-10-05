import { Box, Stack } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({ videos ,direction}) => {
if(!videos?.length)return 'loading....'
  return (
    <Stack direction={direction||"row"} flexWrap="wrap" alignItems="start" justifyContent="start" gap={2}>
      {videos.map((item,idx)=>(
        <Box key={idx}>
          {item.id.videoId&& <VideoCard video={item}></VideoCard>}
          {item.id.channelId && <ChannelCard channelDetail={item}></ChannelCard>}
        </Box>
      ))}
    </Stack>
  )
}
export default Videos
