import React from 'react'
import {
    Stack, Button, Avatar, Typography, Divider, Chip, Hidden
} from '@mui/material'

type BlogItemProps = {
    item: any
}



export const BlogItem: React.FC<BlogItemProps> = ({ item }) => {
    return (
        <Stack sx={{ marginLeft: { md: 28, xs: 1 }, marginRight: { md: 28, xs: 1 } }}
            direction='column' spacing={3} mt={5}>
            <Stack direction={{ md: 'row', xs: 'column' }} spacing={3} sx={{
                display: 'flex',
                justifyContent: { md: 'flex-start', xs: 'center' }, alignItems: { md: 'flex-start', xs: 'center' }
            }}>

                <Stack direction='column' spacing={3}   >
                    <Typography sx={{ fontWeight: 'bold',fontSize:{md:'32px', xs :'30px'} ,marginLeft: { xs: 5, md: 0 } }} >{item.header}</Typography>
                    <Stack direction='row' spacing={2}>
                        <Typography variant='h5' sx={{ marginLeft: { xs: 5, md: 0 }, fontSize:{xs:'20px', md:'24px'}  }} >{item.date}</Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography variant='h5' sx={{fontSize:{xs:'20px', md:'24px'},color:'#8695A4' }} >{item.department}</Typography>
                    </Stack>
                    <Typography  sx={{ paddingLeft: { xs: 5, md: 0 }, paddingRight: { xs: 2, md: 0 }, fontSize: { md: '22px', xs: '16px' } }} >{item.explanation}</Typography>
                </Stack>
                <Divider />
            </Stack>
            <Divider />
        </Stack>
    )
}
