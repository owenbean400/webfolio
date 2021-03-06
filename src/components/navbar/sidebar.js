import React from 'react';
import { Link } from 'gatsby';

class Sidebar extends React.Component{

    

    render(){
        const LINKS = this.props.sidelinks.map((string) => 
            <Link className="nav-side-link" to={`/${string.toLowerCase().replace(/\s/g, '')}`} style={{color: 'white'}} key={string}>{string.charAt(0).toUpperCase() + string.substring(1, string.length)}</Link>
        );

        return(
            <div className="sidebar-container" style={this.props.sidebarCss}>
                <div className="sidebar-header-container">
                    <h1 onClick={this.props.clickHide}>Owen Bean</h1>
                    <div className="spacer"></div>
                    <div className="x-container" onClick={this.props.clickHide}>
                        <div className="x-bar-left"></div>
                        <div className="x-bar-right"></div>
                    </div>
                </div>
                <div className='sidebar-links-container' onClick={this.props.clickHide}>
                    {LINKS}
                </div>
            </div>
        )
    }
}

export default Sidebar