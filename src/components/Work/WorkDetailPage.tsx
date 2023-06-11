import { Navbar } from '../Navbar'
import { Bottom } from '../Bottom'
import { Typography, Stack, Chip, Avatar } from '@mui/material';
import { useLocation,useParams } from 'react-router-dom';
import * as React from 'react';
import {useContext} from 'react';
import {DataContext} from '../../navigation/DataContext';
import {DataContextType} from '../../navigation/Data';



const useDataContext = (): DataContextType => {
    const context = useContext(DataContext);
    if (!context) {
      throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
  };

export const WorkDetailPage : React.FC = () => {
    const { id } = useParams();
    const { data } = useDataContext();

    var index = parseInt(id || "0");

    return (
        <div>
            <Navbar page='work-detail' />
            <Stack direction='column' sx={{ marginLeft: { md: 40, xs: 5 }, marginRight: { md: 40, xs: 4 }, marginTop: 8 }}>

                <Stack direction='column' spacing={3}   >
                    <Typography sx={{
                        fontSize: { xs: '24pt', md: '24pt' },
                        fontWeight: 'bold', color: '#000',
                    }} >
                        {data[index].header} with usability in mind
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Chip sx={{

                            fontSize: '12pt',
                            backgroundColor: '#FF7C7C', color: '#fff', fontWeight: 'bold'
                        }} label={data[index].year} />
                        <Typography sx={{ fontSize: { xs: '14pt', md: '14pt' }, }}  >{data[index].subtitle}</Typography>
                    </Stack>
                    <Typography variant='h4' sx={{ paddingRight: { xs: 4, md: 0 }, fontSize: '16px', }} >{data[index].comment}</Typography>

                    <Avatar variant="rounded"
                        sx={{
                            height: {md:'500px',xs:'400px'}, width: { xs: '400px', md: '700px' },
                        }}
                        src={process.env.PUBLIC_URL + '/workDetail/1.png'}>
                    </Avatar>
                    <Typography variant='h4'  >Heading 1</Typography>
                    <Typography variant='h5'  >Heading 2</Typography>
                    <Typography variant='h4' sx={{ paddingRight: { xs: 4, md: 0 }, fontSize: '16px', }} >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
                    <Avatar variant="rounded"
                        sx={{
                            height: {md:'500px',xs:'400px'}, width: { xs: '400px', md: '700px' }
                        }}
                        src={process.env.PUBLIC_URL + '/workDetail/2.png'}>
                    </Avatar>
                    <Avatar variant="rounded"
                        sx={{
                            height:{md:'500px',xs:'400px'}, width: { xs: '400px', md: '700px' }
                        }}
                        src={process.env.PUBLIC_URL + '/workDetail/3.jpg'}>
                    </Avatar>
                </Stack>
            </Stack>
            <Bottom />
        </div>
    );
}

