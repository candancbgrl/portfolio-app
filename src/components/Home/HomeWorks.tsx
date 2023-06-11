import { WorksItem } from '../WorksItem'
import {
    Typography,
} from '@mui/material'

const workData = [
    {
        image: 'https://s3-alpha-sig.figma.com/img/1c6b/bc0b/e719e9d93c02a87ba51308ebb0297cdf?Expires=1687132800&Signature=T9v4pgRj3ZNPZ3aXDVZTSitF46i07TBawBUIOz0oRbYwlaebVKVAJdfqgReoJy~a~MssBq31vGq9btrxAuLdpVhQGVm6XZZ9ofnru2IzBjPgURhShFbMwro3DOl2qWTnTAJHHfLuHtzFze7yskaHxaXAmQN81qmbus5W2VEwePVJ7kk54Yw64~dkouWQdKLrBORzgTVOQnk-YtdmewtEIGDCsL4csKhTpXSshxHO9MEtfZ8DVJ6jOlO0psb~p~g9RiLph0i11-yyDBmcnCXzhy9TZ8k1gG9YnN1Hp6gdkQ6mOoZ5prVEJiWOmaWj1Bbqyq4wYzMcMDyyT2s70e4Swg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        header: 'Designing Dashboards',
        subtitle: 'Dashboard',
        year: '2020',
        comment: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/44dc/7799/6f359e2db24fc4e08bfd61cf50427139?Expires=1687132800&Signature=aiqWsMBxXmDgBQFyH1zlbqKS9mjvb6daUWCd2IzlmkutQ03h03dPqM8a8-pJqAHXmAkeXqrp05e7Kw1rCAPWy4~d-SA7u8V46bByUsuN3OiXsOnVB3g3bC-en0PVc0NZ6MCn~rj8O3dtWn-7tE-rIFzhE71MFH0rusVlOOxhjBOWq--HFMUjoyoqxo6af~eHaR9T3mbUPAVRaak669nRlYFf1tSydn9nvx~xWUPg~xiO81ToVzC1FtCLlbwl7u64FaUxkqQjSe83guP~9JEMel8XUQsX9Pgox08on8zDrsX3ODFmI7tlgp79uR5rCX-hY2Bdoqibx05aWybXcGCXjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        header: 'Vibrant Portraits of 2020',
        subtitle: 'Illustration',
        year: '2018',
        comment: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/a511/7cdc/a561b38768fbe6667854fc00641b25fb?Expires=1687132800&Signature=UE1FFYzakvcNBzVmv8dzUCEk~eAPuwU5JobxyB3iBnF1LL02wxPicqeGyWqyd5SReFUz7MTRsE62OpGGscbSRmHQdsXGVNfoXn-2L9NGKM5ayxaWy3EZFldEaDWHbbfEAIbaoxqQzmKNcH6W7imF~1LKOGfPeq5Q~gsatqWdAf-xuxJxqf7lhdmN5o7b8nDoezbF5~o75xrN-6Ea4Oe-KiuJnK7jz7Ggq530VMbTHZHH2oGvkUkcBfYFA9Bilku3iu5~5smilDGP63RuAUjrWHEhj-C04b0Ymv8m0DgQQnM7jyvzwykb4z-fEmNuVFR4h6K-foO38gtZJfHIps-vpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        header: '36 Days of Malayalam type',
        subtitle: 'Typography',
        year: '2018',
        comment: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/c493/dd85/ae266af13b0a7129c8191f3efbfe12b5?Expires=1687132800&Signature=JPlFkgUAIKwZw5CdwVslW94KLXca6-uGlymMqmFSQX9DGavV66q416tartpzCpNRW5coG~69W4u5nDVi05iOM0rtsZkTtQ2lGh-RUncL22KCagycW-Z3HCS1OUVk1g0-NI23OImMUuhvEOXttlwBCoPfhEmad1RgjqmY-SacgvgBvF1lJjqtVSvxT5AuCzTskMb0rqdOPNDFqiI7jB4jl-zUWeCnHXSo6AIxD7Xjet31vmAn8C-qmzE2lJ0VQhfiwc7xWNOfQVDX4Qh9PzjYeQ0L23qELoerzp1aUEaFFV6Sv0puGQYW0kuiU0utCvwD8F4470aXUDn1~h9o2vwJwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        header: 'Components',
        subtitle: 'Components, Design',
        year: '2018',
        comment: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
   
  ];
export const HomeWorks = () => {
    
    return (
        <>
            <Typography variant="h5" sx={{
                marginLeft: { md: 28 },
                textAlign: { md: 'left', xs: 'center' }, minWidth: 275, maxWidth: 600,
            }} >Featured Works</Typography>
            {
                workData.map((item,index) => (
                    <WorksItem page='home' index={index} item={item} />
            ))
            }
        </>

    )
}
