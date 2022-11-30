import React from 'react';
import AllOrder from './AllOrder/AllOrder';
import Banner from './Banner/Banner';
import Candle from './CandleSection/Candle';
import CorporateGift from './CorporateGift/CorporateGift';
import Footer from './Footer/Footer';
import Formulation from './Formulation/Formulation';
import GiftFinder from './GiftFinder/GiftFinder';
import GiftToDelight from './GiftToDelight/GiftToDelight';
import OnlineOffer from './OnlineOffer/OnlineOffer';
import Privacy from './Privacy/Privacy';
import Products from './Products/Products';
import StorLocator from './StoreLocator/StorLocator';

const Home = () => {
    return (
        <div>
            <Privacy></Privacy>
            <AllOrder></AllOrder>
            <Banner></Banner>
            <Products></Products>
            <Candle></Candle>
            <GiftToDelight></GiftToDelight>
            <Formulation></Formulation>
            <CorporateGift></CorporateGift>
            <GiftFinder></GiftFinder>
            <StorLocator></StorLocator>
            <OnlineOffer></OnlineOffer>
            <Footer></Footer>
        </div>
    );
};

export default Home;