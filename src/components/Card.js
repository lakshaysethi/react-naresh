import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Card({title,img_src,btn_txt}) {
  return (
    <Box sx={{width:300}}>

        <div style={{border:"1px solid black"}}> 
            <h3>{title}</h3>
            <div><img src={img_src} height="150px" /></div>
            <div><Button variant="outlined">{btn_txt}</Button></div>

        </div>
    </Box>
  )
}

export default Card