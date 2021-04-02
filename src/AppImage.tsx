import * as React from "react";
import cat from "./images/cat.jpg";
import visa from "./images/visa.svg";
import wifi from "./images/wifi.png";

const AppImage = () => {
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
                <td><img src={cat} width={200} alt="cat"/></td>
                <td><img src={visa} width={200} alt="visa"/></td>
                <td><img src={wifi} width={200} alt="wifi"/></td>
            </tr>
            </tbody>
        </table></>);
}

export default AppImage;
