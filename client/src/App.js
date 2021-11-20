import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./components/Update";
import Create from "./components/Create";
import List from "./components/List";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Auth from "./components/Auth";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Home />}></Route>
					<Route exact path='/login' element={<Auth />}></Route>
					<Route path='/todo' element={<List />}></Route>
					<Route path='/update/:id' element={<Update />}></Route>
					<Route path='/detail/:id' element={<Detail />}></Route>
					<Route path='/create' element={<Create />}></Route>
				</Routes>
			</BrowserRouter>
			<div className='container'></div>
		</div>
	);
}

export default App;
