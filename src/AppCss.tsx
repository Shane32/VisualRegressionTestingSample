import * as React from "react";
import styles from "./App.module.scss";
import "./scss/styles.scss";
import "./index.css";

const AppCss = () => {
    return (<>
        <table>
            <tbody>
            <tr>
                <th>Plain</th>
                <th>CSS</th>
            </tr>
            <tr>
                <td><p>Black on white</p></td>
                <td className="css"><p>Black on Aqua</p></td>
            </tr>
            <tr>
                <th>SCSS</th>
                <th>Module</th>
            </tr>
            <tr>
                <td className="sass"><p>White on Red</p></td>
                <td className={styles.sass_module}><p>White on Blue</p></td>
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

export default AppCss;
