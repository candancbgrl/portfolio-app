import '../../App.css';
import { Navbar } from '../Navbar'
import { HomeText } from './HomeText'
import { HomeCards } from './HomeCards'
import { HomeWorks } from './HomeWorks'
import { Bottom } from '../Bottom'

function HomePage() {
    return (
        <div>
            <Navbar page='home' />
            <HomeText />
            <HomeCards />
            <HomeWorks />
            <Bottom />

        </div>
    );
}

export default HomePage;