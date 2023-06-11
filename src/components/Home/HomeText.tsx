import React from 'react'
import {
    Grid, Avatar, Typography, Box
} from '@mui/material'
import { HomeDownloadButton } from './HomeDownloadButton'
import { styled } from '@mui/system';

const StyledAvatar = styled(Avatar)`
  position: relative;
  overflow: hidden;
`;

export const HomeText = () => {
    return (
        <>
            <Grid container my={4}   >
                <Grid item xs={12} sm={7} order={{ xs: 2, sm: 1 }}>
                    <Grid item lg={11} xs={13} sx={{ marginLeft: { xs: 0, lg: 10 }, marginTop: { md: 5, } }} >
                        <Box sx={{ textAlign: { xs: 'center', md: 'start' } }} >
                            <Typography variant='h2' sx={{
                                pl: { xs: 15, md: 20, },
                                pr: { xs: 15, md: 20, },
                                pt: { xs: 10, md: 15, },
                                fontSize: { xs: '40px', md: '70px', },
                                fontWeight: 'bold', fontFamily: "'Heebo'", lineHeight: { md: '70px', xs: '60px', }
                            }}
                            >Hi, I am John, Creative Technologist </Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={10} xs={12} sx={{ marginLeft: { xs: 0, lg: 10 }, marginTop: { md: 5 } }}>
                        <Box sx={{ marginTop: '20px', textAlign: { xs: 'center', md: 'start' }, marginLeft: { xs: '15px', md: '155px' }, marginRight: { xs: '15px', md: '50px' } }}>
                            <Typography sx={{ fontFamily: "'Heebo'", fontSize: { md: '20px', xs: '20px' }, lineHeight: { md: '28px', xs: '30px' } }}
                            >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={9} xs={12} sx={{ marginLeft: { xs: 0, lg: 10 } }} >
                        <Box sx={{ marginTop: { md: 5, xs: 5 }, marginLeft: { md: 20 }, textAlign: { xs: 'center', md: 'start' } }}
                        >
                            <HomeDownloadButton />
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={5} order={{ xs: 1, sm: 2 }}

                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                        <Box
                            sx={{

                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                width: '200px',
                                height: '200px',
                            }}
                        >
                            <Box
                                sx={{
                                    marginTop: { md: 44, xs: 4 },
                                    position: 'absolute',
                                    height: { md: '300px', xs: '250px' }, width: { md: '300px', xs: '250px' },
                                    borderRadius: '50%',
                                    backgroundColor: '#EDF7FA',
                                }}
                            />
                            <Avatar sx={{
                                marginTop: { md: 40 },
                                height: { md: '300px', xs: '250px' }, width: { md: '300px', xs: '250px' },
                                justifyContent: { xs: 'center', md: 'start' },
                            }}
                                src={process.env.PUBLIC_URL + '/avatar.png'} />
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
