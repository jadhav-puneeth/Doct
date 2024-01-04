import { useNavigate } from "react-router-dom";
const Mainlr = () => {
	const navigate = useNavigate()
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
		navigate("/Bookings")
	};

	return (
		<div>
			<nav>
				<h1>Home Page</h1>
				<button onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Mainlr;