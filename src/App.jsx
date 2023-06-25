import "./App.css";
import data from "./assets/data.json";
import logo from "./assets/logo-M6.png";
import Main from "./assets/Components/Main";

function App() {
	return (
		<>
			<header>
				<img src={logo} alt="logo M6" />
			</header>
			<Main data={data} />
		</>
	);
}

export default App;
