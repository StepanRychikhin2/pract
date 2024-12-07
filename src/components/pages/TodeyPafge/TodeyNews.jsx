import { Outlet, Link } from "react-router-dom";

const TodeyPage = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/HomePage">HomePage</Link>
          </li>
        </ul>
      </nav>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB31L1sQz8YxbMdBIes0cxJecQM2F-zuZkRw&s"></img>
      <Outlet />
    </>
  )
};

export default TodeyPage;