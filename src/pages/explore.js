import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

import Section from '../components/section';
import FlexShow from '../components/flexShow';

import BBGame from '../images/games/bbGame.jpg';
import PortfolioDisplay from '../components/portfolioDisplay';
import StationaryButton from '../components/buttons/stationaryButton';
import PortfolioButton from '../components/portfolioButtonContain.js';

const amountOfRows = 1;

const STYLE = {
    main: {
        margin: '48px 0 64px 0',
    }
}

class Explore extends React.Component{
    constructor() {
        super();
        this.state = {
            height: 0,
        }
        this.updatePortfolioContainer = this.updatePortfolioContainer.bind(this);
    }

    componentDidMount(){
        window.addEventListener('resize', this.updatePortfolioContainer);
        this.updatePortfolioContainer();
    }

    
    updatePortfolioContainer() {
        if (typeof window !== `undefined`){
        this.setState({
                height: (window.innerWidth > 1200) ? 25 : (window.innerWidth > 960) ? 33.33 : (window.innerWidth > 768) ? 50 : 100,
        })
        }
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updatePortfolioContainer);
    }

    render(){
        return(
            <div>
                <Navbar />
                <main style={STYLE.main}>
                    <Section header="JS Web Games" actionName="Play Games" link="/games">
                        <FlexShow>
                            <PortfolioDisplay image={BBGame}>
                                <PortfolioButton>
                                    <StationaryButton title="Play" link="https://owenbean400.github.io/3dworld/" isNewTab={true}/>
                                    <StationaryButton title="Github Code" link="https://github.com/owenbean400/3dworld" isNewTab={true}/>
                                </PortfolioButton>
                            </PortfolioDisplay>
                        </FlexShow>
                    </Section>
                    <Section header="Blog Posts" actionName="More Blogs" link="/blog">

                    </Section>
                    <Section header="React Components" actionName="View More" link="/reactui">

                    </Section>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Explore