import {
    Stack, Button, Avatar, Typography, Divider, Chip, Hidden
} from '@mui/material';
import { Link } from 'react-router-dom';

type WorksItemProps = {
    item: any;
    index: any;
    page: any;
}
export const WorksItem: React.FC<WorksItemProps> = ({ item, index, page }) => {
    return (
        (index != 0 && page == 'home') ? <div style={{ marginLeft: 220, marginRight: 220 }}>
            <Hidden mdDown>
                <Stack direction='column' spacing={3}>
                    <Stack direction='row' spacing={3}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start', alignItems: 'flex-start'
                        }}>
                        <Avatar variant="rounded" sx={{ marginTop: 5, height: '300px', width: '300px' }}
                            src={item.image}>
                        </Avatar>
                        <Stack direction='column' spacing={3}   >
                            <Typography variant='h4' sx={{ marginTop: 5, fontWeight: 'bold' }} >
                                {item.header}
                            </Typography>
                            <Stack direction='row' spacing={2}>
                                <Chip sx={{ backgroundColor: '#142850', color: '#fff', fontWeight: 'bold' }} label={item.year} />
                                <Typography variant='h5' >{item.subtitle}</Typography>

                            </Stack>
                            <Typography sx={{ fontSize: { md: '22px', xs: '18px' } }} >{item.comment}</Typography>
                        </Stack>
                    </Stack>
                    <Divider />
                </Stack>
            </Hidden>
        </div > :
            <Stack sx={{ marginLeft: { md: 28, xs: 0 }, marginRight: { md: 28, xs: 0 } }}
                direction='column' spacing={3} mt={5}>
                <Stack direction={{ md: 'row', xs: 'column' }} spacing={3} sx={{
                    display: 'flex',
                    justifyContent: { md: 'flex-start', xs: 'center' }, alignItems: { md: 'flex-start', xs: 'center' }
                }}>
                    <Avatar variant="rounded"
                        sx={{
                            height: '300px', width: { xs: '470px', md: '300px' },
                        }}
                        src={item.image}>
                    </Avatar>
                    <Stack direction='column' spacing={3}   >
                        <Link to={`/work-detail-page/${index}`} style={{ textDecoration: 'none' }}>
                            <Button sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', }}
                            >
                                <Typography sx={{
                                    fontSize: { xs: '20pt', md: '24pt' },
                                    fontWeight: 'bold', color: '#000', marginLeft: { xs: 5, md: 0 }
                                }} >
                                    {item.header}
                                </Typography>
                            </Button>
                        </Link>
                        <Stack direction='row' spacing={2}>
                            <Chip sx={{
                                marginLeft: { xs: 5, md: 0 },
                                backgroundColor: '#142850', color: '#fff', fontWeight: 'bold'
                            }} label={item.year} />
                            <Typography variant='h5' >{item.subtitle}</Typography>
                        </Stack>
                        <Typography variant='h4' sx={{ paddingLeft: { xs: 5, md: 0 }, paddingRight: { xs: 2, md: 0 }, fontSize: { md: '22px', xs: '18px' } }} >{item.comment}</Typography>
                    </Stack>
                </Stack>
                <Divider />
            </Stack >
    )
}
