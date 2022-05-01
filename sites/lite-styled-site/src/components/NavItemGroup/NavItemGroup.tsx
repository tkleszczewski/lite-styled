import NavItem, { NavItemProps } from "../NavItem/NavItem";

import styles from "./NavItemGroup.module.scss";

interface NavItemGroupProps {
  groupName: string;
  navItems: NavItemProps[];
}

const NavItemGroup: React.FC<NavItemGroupProps> = ({ groupName, navItems }) => {
  return (
    <div className={styles.navItemGroup}>
      <p className={styles.groupName}>{groupName}</p>
      <div className={styles.navLinkGroup}>
        {navItems.map((navItem) => {
          const { name, path } = navItem;
          return <NavItem name={name} path={path} />;
        })}
      </div>
    </div>
  );
};

export default NavItemGroup;
export type { NavItemGroupProps };
