import * as React from "react";

const ControlAppCss = () => {
    return (<>
        <style>* {"{"} margin: 0 {"}"}</style>
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
            </tr>
            <tr>
                <td><p style={{ color: "blue" }}>Blue on White</p></td>
            </tr>
            </tbody>
        </table></>);
}

export default ControlAppCss;
