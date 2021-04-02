import * as React from "react";
const AppLazyLoaded2 = React.lazy(() => import("./AppLazyLoaded2"));

const AppLazyLoaded = () => {
    return (<AppLazyLoaded2/>);
}

export default AppLazyLoaded;
