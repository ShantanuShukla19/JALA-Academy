import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Add from "./components/adduser/Add";
import Edit from "./components/updateuser/Edit";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/add" element={<Add/>}/>
			<Route path="/edit/:id" element={<Edit/>}/>
		</Routes>
	);
}

export default App;