import { Navbar } from '../Navbar'
import { Bottom } from '../Bottom'
import {BlogItem} from './BlogItem'
import { Typography } from '@mui/material';

const blogsData = [
    {
        header: 'UI Interactions of the week',
        date: '12 Feb 2019',
        department: 'Express, Handlebars',
        explanation: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
   
]

function BlogPage() {
    return (
        <div>
           <Navbar page='blog'/>
           <Typography variant='h4' sx={{ marginLeft: { md: 28, xs: 5 }, marginRight: { md: 28, xs: 4 }, fontWeight: 'bold', marginTop: 7 }} >Blog</Typography>
           <BlogItem item={blogsData[0]}/>
           <BlogItem item={blogsData[0]}/>
           <BlogItem item={blogsData[0]}/>
           <BlogItem item={blogsData[0]}/>
           <Bottom/>
          

        </div>
    );
}

export default BlogPage;