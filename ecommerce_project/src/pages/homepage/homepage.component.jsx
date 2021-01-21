import React from 'react';
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div className="homepage">
        <Directory></Directory>
    </div>
);

//we want to share this const homepage to other files so we must export it
export default HomePage;