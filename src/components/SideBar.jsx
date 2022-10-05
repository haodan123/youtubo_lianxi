import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

// const selectedCategory = "New"
const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{ overflowY: 'auto', height: { sx: 'auto', dm: '95%' }, flexDirection: { md: 'column' } }}
    >
      { categories.map((item)=>(
        <button 
        onClick={()=>setSelectedCategory(item.name)}
        key={item.name} style={{ background:item.name===selectedCategory&&'#FC1503',color:'#fff'}} className='category-btn'>
          <span style={{ color:item.name===selectedCategory?'#fff':'red'}}>{item.icon}</span>
          <span style={{ opacity: item.name === selectedCategory ? "1" : "0.8" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}
export default SideBar
