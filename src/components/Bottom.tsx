import {
    Stack, Typography
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Bottom = () => {
    return (
        <Stack direction='column' spacing={2} mb={5}>
            <Stack direction='row' spacing={5} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: {md:20,xs:10},
            }}>
                <FacebookIcon fontSize='large' />
                <InstagramIcon fontSize='large' />
                <TwitterIcon fontSize='large' />
                <LinkedInIcon fontSize='large' />
            </Stack>
            <Typography sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            variant='subtitle2' >Copyright ©2020 All rights reserved </Typography>
        </Stack>

    )
}
