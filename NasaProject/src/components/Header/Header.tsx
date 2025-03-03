import { Link } from "react-router-dom";
import { SwitchButton } from "../TailwindComponents/SwitchButton";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header-navigation">
        <Link to="/">Home page</Link>
        <Link to="/astronomy">Astronomy picture of the day</Link>
        <Link to="/marsRoverPhotos">Mars Rover Photos</Link>
        <Link to="/neo">Near Earth Object Tracker</Link>
        <Link to="/earth">Earth Imagery</Link>
      </nav>

      <SwitchButton />
    </header>
  );
};
