import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <Link to="/">Home page</Link>
      <Link to="/astronomy">Astronomy picture of the day</Link>
      <Link to="/mars">Mars Rover Photos</Link>
      <Link to="/neo">Near Earth Object Tracker</Link>
      <Link to="/earth">Earth Imagery</Link>
    </nav>
  );
};
