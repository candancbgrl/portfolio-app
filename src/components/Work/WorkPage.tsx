import { Navbar } from '../Navbar'
import { Bottom } from '../Bottom'
import { WorksItem } from '../WorksItem'
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../../navigation/DataContext';
import { DataContextType } from '../../navigation/Data';

const useDataContext = (): DataContextType => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};

function WorkPage() {

    const { data } = useDataContext();
    return (
        <>
            <Navbar page='works' />
            <Typography variant='h4' sx={{ marginLeft: { md: 28, xs: 4 }, marginRight: { md: 28, xs: 4 }, fontWeight: 'bold', marginTop: 7 }} >Work</Typography>
            {
                data.map((item, index) => {
                    if (window.innerWidth >= 768) {
                        console.log('md üstü');
                        // Display the values ​​in index 0 and 4 appear on sm devices
                        if (index >= 0 && index < 4) {
                            return <WorksItem key={index} page="works" index={index} item={item} />;
                        }
                    } else {
                        console.log('xs');
                        // Display values ​​in index 0, 1, 2, and 3 on xs devices
                        if (index === 0 || index === 4) {
                            return <WorksItem key={index} page="works" index={index} item={item} />;
                        }
                    }
                })
            }
            <Bottom />
        </>
    );
}

export default WorkPage;