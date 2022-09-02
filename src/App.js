import './App.css';
import {BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'

import Navigation from './components/navbar';
import Home from './pages/Home';
import Question from './pages/Question';
import Users from './pages/Users';

function App() {
	return (
		<div className="App container">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Navigation />}>
						<Route index element={<Home/>}></Route>
						<Route path='users' element={<Users/>}></Route>
						<Route path='question' element={<Question/>}></Route>
						<Route path='*' element={<Navigate replace to='/'/>}></Route>
					</Route>
					
				</Routes>
			</BrowserRouter>	

		</div>
	);
}

export default App;
