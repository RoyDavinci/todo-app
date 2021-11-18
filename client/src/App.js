import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./components/Update";
import Create from "./components/Create";
import List from "./components/List";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<List />}></Route>
					<Route path='/update/:id' element={<Update />}></Route>
					<Route path='/create' element={<Create />}></Route>
				</Routes>
			</BrowserRouter>
			<div className='container'></div>
		</div>
	);
}

export default App;
