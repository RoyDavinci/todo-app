import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./components/Update";
import Create from "./components/Create/Create";
import List from "./components/List/List";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import User from "./components/User/User";
import ProjectList from "./components/project/List/List";
import ProjectCreate from "./components/project/Create/Create";
import ProjectUpdate from "./components/project/Update/Update";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Home />}></Route>
					<Route exact path='/login' element={<Auth />}></Route>
					<Route exact path='/user/:id' element={<User />}></Route>
					<Route path='/:id/todo/:id' element={<List />}></Route>
					<Route path='/update/:id/:id' element={<Update />}></Route>
					<Route path='/:id/detail/:id' element={<Detail />}></Route>
					<Route path='/create/:id' element={<Create />}></Route>
					<Route path='/projects/:id' element={<ProjectList />}></Route>
					<Route
						path='/projects/create/:id'
						element={<ProjectCreate />}
					></Route>
					<Route path='/projects/:id/:id' element={<ProjectUpdate />}></Route>
				</Routes>
			</BrowserRouter>
			<div className='container'></div>
		</div>
	);
}

export default App;
