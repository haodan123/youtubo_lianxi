import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'

// 把video对象再解构一遍
const VideoCard = ({
  video: {
    id: { videoId },
    snippet
  }
}) => {
  console.log( snippet)
  return (
    <Card sx={{width:{xs: '100%', sm: '358px', md: "320px"},boxShadow:'none',borderRadius:0}}>
      {/* 上面的图片 */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url||demoThumbnailUrl} alt={snippet?.title} sx={{ width:{xs: '100%', sm: '358px', md: "320px"} , height: 180 }} />
      </Link>
      {/* 下面的标题和介绍 */}
      <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
        {/* 内容标题 */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      {/* width='320px' */}
        <Typography variant='subtitle1' fontWeight='bold' color='#fff' >
          {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>
      {/* n内容 */}
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight='bold' color='gray'>
          {snippet?.channelTitle||demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />

        </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
