import Navigation from "./Navigation";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <><Head>
            <meta keywords={"first project, next " + keywords}></meta>
            <title>First Project on NextJS</title>
        </Head>
            <div>
            <Navigation/>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;