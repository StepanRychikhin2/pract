import { Outlet, Link } from "react-router-dom";

const HomePage = () => {
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
        </ul>
      </nav>
<img src="https://www.buyrentkenya.com/discover/wp-content/uploads/2022/06/brk-blog-4reasons-why.png"></img>
      <Outlet />
    </>
  )
};

export default HomePage;