import * as React from "react";

const ControlAppImage = () => {
    return (<>
        <style>* {"{"} margin: 0 {"}"}</style>
        <table>
            <tbody>
            <tr>
                <th>Cat (jpg)</th>
                <th>Visa (svg)</th>
                <th>WiFi (png)</th>
            </tr>
            <tr>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg" width={200} alt="cat"/></td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" width={200} alt="visa"/></td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Wifi_certified_logo.png/1920px-Wifi_certified_logo.png" width={200} alt="wifi"/></td>
            </tr>
            </tbody>
        </table></>);
}

export default ControlAppImage;
