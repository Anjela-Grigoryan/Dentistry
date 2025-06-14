import React from 'react';
import Banner from './Banner/Banner';
import Images from './Images/Images';
import Cards from './Cards/Cards';
import Comments from './Comments/Comments';
import Promotion from './Self-Promotion/Promotion';
import Footer from './../Footer/Footer';

const Home = (props) => {
    return (
        <div>
            < Banner />
            < Images />
            < Cards state = {props.state.cards}/>
            < Comments state = {props.state.comments}/>
            < Promotion state = {props.state.promotion}/>
            < Footer />
        </div>
    );
}

export default Home;
