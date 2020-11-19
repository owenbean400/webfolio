import React from "react";

import Navbar from '../components/navbar/navbar.js';
import Section from '../components/section.js';
import Skills from '../components/skills.js';
import FlexShow from '../components/flexShow.js';
import StationaryButton from '../components/buttons/stationaryButton.js';
import PortfolioDisplay from '../components/portfolioDisplay.js';
import Footer from '../components/footer/footer.js';
import ComputerImg from '../images/computerHeader.jpg';
import PortfolioButton from '../components/portfolioButtonContain';
import Meta from '../components/meta'
import '../pageScss/index.scss';
import SkillBar from '../components/skillbar';

import CodeIcon from '../images/expert/code.svg';
import ArtIcon from '../images/expert/art.svg';
import RespondsiveIcon from '../images/expert/respondsive.svg';

import HTMLLogo from '../images/skills/HTML5_Logo.png';
import CSSLogo from '../images/skills/CSS3_logo.png';
import JSLogo from '../images/skills/js.png';
import SassLogo from '../images/skills/sass.png';
import ReactLogo from '../images/skills/react.png';
import GatsbyLogo from '../images/skills/gatsby.png'

import ReliableBoardPort from '../images/portfolio/reliable_board_display.jpg';
import HereTheScoopPort from '../images/portfolio/here_the_scoop_display.jpg';
import BeanJuicePort from '../images/portfolio/bean_juice_display.jpg';
import PortfolioPort from '../images/portfolio/portfolio_display.jpg';
import PropTypes from 'prop-types';
import OwenBeanImage from '../components/imageFixed/owenBeanImage';
import ComputerHeaderImage from '../components/imageFixed/computerHeader';
import OwenBeanImageLaptop from "../components/imageFixed/owenBeanImageLaptop.js";

class Home extends React.Component{
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
            height: (window.innerWidth > 1200) ? 25 : (window.innerWidth > 960) ? 33.33 : (window.innerWidth > 500) ? 50 : 100,
      })
    }
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updatePortfolioContainer);
  }

  render(){
    var STYLE = {
      height: this.state.height + 'vw',
      overflow: 'hidden',
    }

    var portfolioImages = [];
    if (typeof window !== `undefined`){
      portfolioImages.push(
          <PortfolioDisplay image={ReliableBoardPort} title="Reliable Board Webpage">
          </PortfolioDisplay>
      );
      if(window.innerWidth >= 480){
        portfolioImages.push(
            <PortfolioDisplay image={HereTheScoopPort} title="Here The Scoop Website">
              <PortfolioButton>
                <StationaryButton title="URL" link="https://owenbean400.github.io/herethescoop/" isNewTab={true}/>
                <StationaryButton title="GitHub" link="https://github.com/owenbean400/herethescoop" isNewTab={true}/>
              </PortfolioButton>
            </PortfolioDisplay>
        );
      }
      if(window.innerWidth >= 940){
        portfolioImages.push(
            <PortfolioDisplay image={BeanJuicePort} title="Bean Juice Website">
              <PortfolioButton>
                <StationaryButton title="URL" link="https://owenbean400.github.io/beanjuicewebheader/" isNewTab={true}/>
                <StationaryButton title="GitHub" link="https://github.com/owenbean400/beanjuicewebheader" isNewTab={true}/>
              </PortfolioButton>
            </PortfolioDisplay>
        );
      }
      if(window.innerWidth >= 1180){
        portfolioImages.push(
            <PortfolioDisplay image={PortfolioPort} title="My Portfolio">
              <PortfolioButton>
                <StationaryButton title="URL" link="https://owenbean400.github.io/webfolio/" isNewTab={true}/>
                <StationaryButton title="GitHub" link="https://github.com/owenbean400/webfolio" isNewTab={true}/>
              </PortfolioButton>
            </PortfolioDisplay>
        );
      }
    };

    console.log(portfolioImages);

    return(
      <div className="container">
        <Meta
            desc="Owen Guaraldo Bean is a front end developer from Maine. Owen mainly programs with HTML, CSS, JS, React JS, Sass, and Gatsby JS. 
            He creates elegant websites with screen respondsive and has the ability to be scaled up. 
            Additionally, he has knowledge of Graphic Design, and is proficient with Adobe Photoshop and Adobe Illustrator. 
            Feel free to check out Owen G. Bean webpage!"
        />
        <Navbar />
        <main className="index-main">
          <div className="header-container">
            <div className="title-container">
              <h1 className="subtitle">Owen G. Bean</h1>
              <h2 className="title">Front End Developer</h2>
              <h3 className="abouttitle">I am a front end developer in Maine</h3>
              <FlexShow css={{justifyContent: 'space-between'}}>
                <StationaryButton css={{marginTop: '20px'}} title="Portfolio" link="/portfolio"/>
                <StationaryButton css={{marginTop: '20px'}} title="Contact" link="/contact"/>
              </FlexShow>
            </div>
            <OwenBeanImageLaptop />
          </div>
          <div className="expert-container">
              <div className="expert"><img src={CodeIcon} alt="code icon" /><p className="export-text">Code Development</p></div>
              <div className="expert"><img src={RespondsiveIcon} alt="code icon"/><p className="export-text">Respondsive Design</p></div>
              <div className="expert"><img src={ArtIcon} alt="code icon"/><p className="export-text">Creative Design</p></div>
          </div>
          <div className="market-container">
            <div className="market-image-container">
              <ComputerHeaderImage />
            </div>
            <div className="market-info-container">
              <h2>Developing Website Front Ends</h2>
              <ul>
                <li>Attracting People with Elegant and Customized Websites</li>
                <li>Easily Scalable Websites with UI Components</li>
                <li>Responsive Development for Computers and Phones</li>
                <li>Improved Web Load Time with Optimized File Size</li>
              </ul>
            </div>
          </div>
          <Section header="Portfolio" actionName="Portfolio" link="/portfolio">
          <FlexShow css={STYLE}>
            {portfolioImages}
          </FlexShow>
          </Section>
          <Section header="Programs" actionName="My Skills" link="/about">
            <FlexShow css={{backgroundColor: '#eeeeee', alignItems: 'center', padding: '32px 0', gridGap: '32px'}}>
              <SkillBar barWidthPercent="70" header="HTML" image={HTMLLogo}/>
              <SkillBar barWidthPercent="95" header="CSS" image={CSSLogo}/>
              <SkillBar barWidthPercent="60" header="Javascript" image={JSLogo}/>
              <SkillBar barWidthPercent="70" header="React JS" image={ReactLogo}/>
              <SkillBar barWidthPercent="50" header="GatsbyJS"image={GatsbyLogo}/>
              <SkillBar barWidthPercent="60" header="Sass" image={SassLogo}/>
            </FlexShow>
          </Section>
          <Section header="About Me" actionName="More About Me" link="/about">
            <div className="about-container">
              <OwenBeanImage />
              <p className="main-about-p">I am a front end web developer from Maine. I specialize with the React JS framework to create ui and implement these ui in website development. I have developed my own UI and wireframe design and from a prototype. Addtionally, I done Graphic Design for several at CATC, and understand graphic design fundaments. Feel free to contact me if you want a front end website to be developed or to chat.</p>
            </div>
          </Section>
        </main>
        <Footer />
      </div>
    )
  }
}

Home.propTypes = {
  data: PropTypes.object,
};

export default Home