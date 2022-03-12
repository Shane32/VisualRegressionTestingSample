import * as React from "react";
import styles from "./App.module.scss";
import "./scss/styles.scss";
import "./index.css";
import cat from "./images/cat.jpg";
import visa from "./images/visa.svg";
import wifi from "./images/wifi.png";

const App = () => {
	return (
		<>
			<p style={{ fontFamily: "Train One", fontSize: 40 }}>FONT SAMPLE</p>
			<table>
				<tbody>
					<tr>
						<th>Plain</th>
						<th>CSS</th>
					</tr>
					<tr>
						<td>
							<p>Black on white</p>
						</td>
						<td className="css">
							<p>Black on Aqua</p>
						</td>
					</tr>
					<tr>
						<th>SCSS</th>
						<th>Module</th>
					</tr>
					<tr>
						<td className="sass">
							<p>White on Red</p>
						</td>
						<td className={styles.sass_module}>
							<p>White on Blue</p>
						</td>
					</tr>
					<tr>
						<th>Inline</th>
						<th>Cat (jpg)</th>
					</tr>
					<tr>
						<td>
							<p style={{ color: "blue" }}>Blue on White</p>
						</td>
						<td>
							<img src={cat} width={200} alt="cat" />
						</td>
					</tr>
					<tr>
						<th>Visa (svg)</th>
						<th>WiFi (png)</th>
					</tr>
					<tr>
						<td>
							<img src={visa} width={200} alt="visa" />
						</td>
						<td>
							<img src={wifi} width={200} alt="wifi" />
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default App;
