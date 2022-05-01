import clsx from "clsx";
import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.scss";

interface NavItemProps {
  name: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ name, path }) => {
  return (
    <p>
      <NavLink
        className={({ isActive }) =>
          clsx(styles.navItem, { [styles.navItemActive]: isActive })
        }
        to={path}
      >
        {name}
      </NavLink>
    </p>
  );
};

export default NavItem;
export type { NavItemProps };
