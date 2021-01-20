import React from 'react';
import '../styles/homepage.styles.scss'

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                        Skipping Shoes
                    </h1>
                    <span className="subtitle">
                        Shop Now!
                    </span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                        Power Walking Shoes
                    </h1>
                    <span className="subtitle">
                        Shop Now!
                    </span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                        Running Shoes
                    </h1>
                    <span className="subtitle">
                        Shop Now!
                    </span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                        Walking Shoes
                    </h1>
                    <span className="subtitle">
                        Shop Now!
                    </span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                        Jogging Shoes
                    </h1>
                    <span className="subtitle">
                        Shop Now!
                    </span>
                </div>
            </div>
        </div>
    </div>
);

//we want to share this const homepage to other files so we must export it
export default HomePage;