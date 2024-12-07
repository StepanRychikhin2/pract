import { Outlet, Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/TodeyPage">TodeyPage</Link>
					</li>
					<li>
						<Link to="/HomePage">HomePage</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	)
}

export default Header
