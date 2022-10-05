import { IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchText,setSearchText] =useState('')
  const navigate= useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!searchText)return
    navigate(`/search/${searchText}`)
    setSearchText('')
    
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{ borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 } }}
    >
      <input placeholder='请肥仔输入搜索内容' type="search" className="search-bar" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search></Search>
      </IconButton>
    </Paper>
  )
}

export default SearchBar
