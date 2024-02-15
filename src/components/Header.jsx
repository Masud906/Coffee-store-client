import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user">Users</NavLink>
            <NavLink to="/signup">sign Up</NavLink>
            <NavLink to="/">Home</NavLink>
        </div>
    );
};

export default Header;