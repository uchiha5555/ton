import React, { useEffect } from "react";

import { HomeContainer, Whitespace } from "./style";
import Hero from "./elements/hero";
import Wallet from "./elements/wallet";
import Cryptocurrency from "./elements/cryptocurrency";
import Finance from "./elements/finance";
import Services from "./elements/services";
import Future from "./elements/future";
import Audience from "./elements/audience";
import Movement from "./elements/movement";


const HomePage = () => {
    useEffect(() => {
    }, [])
    return (
        <HomeContainer>
            <Hero />
            <Wallet />
            <Cryptocurrency />
            <Finance />
            <Services />
            <Future />
            <Whitespace />
            <Audience />
            <Movement />
        </HomeContainer>
    )
}

export default HomePage;
