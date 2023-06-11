import React from 'react'
import { HomeCard } from './HomeCard'
import {
    Grid,
} from '@mui/material'

const cardDatas = [
    {
        header: 'Making a design system from scratch',
        date: '12 Feb 2020',
        department: 'Design, Pattern',
        explanation: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        header: 'Creating pixel perfect icons in Figma',
        date: '12 Feb 2020',
        department: 'Figma, Icon Design',
        explanation: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
]

export const HomeCards = () => {
    return (
        <Grid sx={{ marginTop: { md: 50, xs: 20 }, }} style={{ backgroundColor: '#EDF7FA', }} container my={4} rowSpacing={2} columnSpacing={1}>
            <Grid sx={{ marginLeft: {md:28}, marginRight: {md:28} }} container rowSpacing={2} columnSpacing={2} >
                <Grid item xs={12} sm={6} style={{
                    display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'
                }} >
                    <HomeCard index='0' data={cardDatas[0]} />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <HomeCard index='1' data={cardDatas[1]} />
                </Grid>
            </Grid>

        </Grid>


    )
}
