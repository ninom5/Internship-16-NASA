import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const [underlineStyle, setUnderlineStyle] = useState<{
    left: string;
    width: string;
  }>({
    left: "0px",
    width: "0px",
  });

  const navRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const updateUnderline = (element: HTMLAnchorElement | null) => {
    if (navRef.current && element) {
      const navOffset = navRef.current.getBoundingClientRect().left;
      const { left, width } = element.getBoundingClientRect();

      setUnderlineStyle({
        left: `${left - navOffset}px`,
        width: `${width}px`,
      });
    }
  };

  const handleHover = (event: React.MouseEvent<HTMLAnchorElement>) => {
    updateUnderline(event.currentTarget);
  };

  const handleMouseLeave = () => {
    const activeLink = document.querySelector(
      `.header-navigation a.active`
    ) as HTMLAnchorElement;
    updateUnderline(activeLink);
  };

  useEffect(() => {
    const activeLink = document.querySelector(
      `.header-navigation a[href="${location.pathname}"]`
    ) as HTMLAnchorElement;
    updateUnderline(activeLink);
  }, [location.pathname]);

  return (
    <header className="header fixed-header" onMouseLeave={handleMouseLeave}>
      <nav ref={navRef} className="header-navigation">
        <div className="underline" style={underlineStyle}></div>

        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onMouseEnter={handleHover}
        >
          Home
        </Link>
        <Link
          to="/astronomy"
          className={location.pathname === "/astronomy" ? "active" : ""}
          onMouseEnter={handleHover}
        >
          Astronomy
        </Link>
        <Link
          to="/marsRoverPhotos"
          className={location.pathname === "/marsRoverPhotos" ? "active" : ""}
          onMouseEnter={handleHover}
        >
          Mars Rover
        </Link>
        <Link
          to="/neo"
          className={location.pathname === "/neo" ? "active" : ""}
          onMouseEnter={handleHover}
        >
          NEO Tracker
        </Link>
        <Link
          to="/earth"
          className={location.pathname === "/earth" ? "active" : ""}
          onMouseEnter={handleHover}
        >
          Earth Imagery
        </Link>
      </nav>
    </header>
  );
};
