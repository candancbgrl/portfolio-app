import React from 'react'
import {
    Hidden, Typography, Box, Stack, Button,
    Link, Divider
} from '@mui/material'



type HomeCardProps = {
    data: any;
    index: any;
}

export const HomeCard: React.FC<HomeCardProps> = ({ data, index }) => {

    return (
        <>
            <Stack direction='column'>
                {index === '1' ?
                    <Hidden mdDown>
                        <Link sx={{ marginLeft: 30, textAlign: 'right', maxWidth: 650, marginTop: 10 }} href="#">View All</Link>
                    </Hidden>
                    :
                    <Typography variant="h5" sx={{
                        marginTop: { xs: 3 },
                        textAlign: { md: 'left', xs: 'center' },
                    }} >Recents Posts</Typography>}
                <Stack sx={{
                    backgroundColor: '#fff',
                    px: { md: 10, xs: 1 }, paddingTop: 3,
                    marginBottom: { xs: 5, md: 5 }

                }}
                    direction='column' spacing={3} mt={2}>
                    <Stack direction={{ md: 'row', xs: 'column' }} sx={{
                        display: 'flex',
                        justifyContent: { md: 'center', xs: 'center' }, alignItems: { md: 'center', xs: 'center' }
                    }}>

                        <Stack direction='column' spacing={3}   >
                            <Typography sx={{ fontWeight: 'bold', fontSize: { md: '34px', xs: '28px' }, marginLeft: { xs: 5, md: 0 } }} >{data.header}</Typography>
                            <Stack direction='row' spacing={2}>
                                <Typography variant='h5' sx={{ marginLeft: { xs: 5, md: 0 }, fontSize: { xs: '20px', md: '24px' } }} >{data.date}</Typography>
                                <Divider orientation="vertical" flexItem />
                                <Typography variant='h5' sx={{ fontSize: { xs: '20px', md: '24px' }, color: '#8695A4' }} >{data.department}</Typography>
                            </Stack>
                            <Typography sx={{ paddingLeft: { xs: 5, md: 0 }, paddingRight: { xs: 2, md: 0 }, fontSize: { md: '22px', xs: '16px' } }} >{data.explanation}</Typography>
                        </Stack>
                        <Divider />
                    </Stack>
                    <Divider />
                </Stack>
            </Stack>
        </>

    )
}
