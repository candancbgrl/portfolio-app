import React from 'react'
import { Button } from '@mui/material'
import { height } from '@mui/system'
export const HomeDownloadButton = () => {
  return (
    <Button variant="contained"
      sx={{
        backgroundColor: ' #FF6464',
        marginTop: 4,
        height: '70px', width: '250px', 
        fontSize: '18px', fontWeight: 'bold',

      }} >Download Resume</Button>
  )
}
