import * as React from "react";

const ControlApp = () => {
    return (<>
        <style>* {"{"} margin: 0 {"}"}</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Train+One&display=swap');</style>
        <p style={{fontFamily:"Train One", fontSize:40}}>FONT SAMPLE</p>
        <table>
            <tbody>
            <tr>
                <th>Plain</th>
                <th>CSS</th>
            </tr>
            <tr>
                <td><p>Black on white</p></td>
                <td style={{ backgroundColor: "aqua" }}><p>Black on Aqua</p></td>
            </tr>
            <tr>
                <th>SCSS</th>
                <th>Module</th>
            </tr>
            <tr>
                <td><p style={{ backgroundColor: "red", color: "white" }}>White on Red</p></td>
                <td><p style={{ backgroundColor: "blue", color: "white" }}>White on Blue</p></td>
            </tr>
            <tr>
                <th>Inline</th>
                <th>Cat (jpg)</th>
            </tr>
            <tr>
                <td><p style={{ color: "blue" }}>Blue on White</p></td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg" width={200} alt="cat"/></td>
            </tr>
            <tr>
                <th>Visa (svg)</th>
                <th>WiFi (png)</th>
            </tr>
            <tr>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" width={200} alt="visa"/></td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Wifi_certified_logo.png/1920px-Wifi_certified_logo.png" width={200} alt="wifi"/></td>
            </tr>
            </tbody>
        </table></>);
}

export default ControlApp;
