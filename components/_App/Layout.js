import React from 'react';
import Head from "next/head";
import GoTop from './GoTop';

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Tarn - IT Business Startup & Agency React Next Template</title>
                <meta 
                    name="description" 
                    content="Tarn - IT Business Startup & Agency React Next Template" 
                />
            </Head>

            {children}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;