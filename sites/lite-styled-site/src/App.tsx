import React, { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavItemGroup from "./components/NavItemGroup/NavItemGroup";

import ContentContainer from "./containers/ContentContainer/ContentContainer";
import SectionContainer from "./containers/SectionContainer/SectionContainer";
import AboutContainer from "./containers/AboutContainer/AboutContainer";
import InstallationContainer from "./containers/InstallationContainer/InstallationContainer";
import ComponentContainer from "./containers/ComponentContainer/ComponentContainer";
import UsageContainer from "./containers/UsageContainer/UsageContainer";
import IndexContainer from "./containers/IndexContainer/IndexContainer";

import styles from "./App.module.scss";

const conceptNavItemOptions = {
  groupName: "concept",
  navItems: [
    {
      name: "about",
      path: "/concept/about",
    },
    // {
    //   name: "useful links",
    //   path: "/concept/useful-links",
    // },
  ],
};

const gettingStartedNavItemOptions = {
  groupName: "getting started",
  navItems: [
    {
      name: "installation",
      path: "/getting-started/installation",
    },
    {
      name: "usage",
      path: "getting-started/usage",
    },
  ],
};

const componentsdNavItemOptions = {
  groupName: "components",
  navItems: [
    {
      name: "dialog (modal)",
      path: "components/dialog",
    },
    {
      name: "side-drawer",
      path: "components/side-drawer",
    },
    {
      name: "switch (WIP)",
      path: "components/switch",
    },
    {
      name: "select (WIP)",
      path: "components/select",
    },
    {
      name: "accordion (WIP)",
      path: "components/accordion",
    },
    {
      name: "button (WIP)",
      path: "components/button",
    },
    {
      name: "input (WIP)",
      path: "components/input",
    },
    {
      name: "tabs (WIP)",
      path: "components/tabs",
    },
    {
      name: "tooltip (WIP)",
      path: "components/tooltip",
    },
    {
      name: "menu-button (WIP)",
      path: "components/menu-button",
    },
    {
      name: "checkbox (WIP)",
      path: "components/checkbox",
    },
    {
      name: "combobox (WIP)",
      path: "components/combobox",
    },
  ],
};

const navGroups = [
  conceptNavItemOptions,
  gettingStartedNavItemOptions,
  componentsdNavItemOptions,
];

const dialog = {
  componentTitle: "Dialog",
  componentTag: `<Dialog isOpen={isDialogOpen} onClose={handleCloseDialog}> Dialog Content </Dialog>`,
  componentProps: [
    "isOpen: boolean",
    "onClose: () => void",
    "onBackdropClick?: () => void = () => {}",
    "shouldBackdropClickClose?: boolean = true",
    `backdropClassNames?: string = ""`,
    `dialogClassNames?: string = ""`,
    "children?: JSX.Element",
  ],
  stackBlitzLinks: [
    {
      description: "basic",
      url: "https://stackblitz.com/edit/react-ts-xueaxf?file=App.tsx",
    },
    {
      description: "advanced",
      url: "https://stackblitz.com/edit/react-ts-bfdamw?file=App.tsx",
    },
  ],
};

const sideDrawer = {
  componentTitle: "SideDrawer",
  componentTag: `<SideDrawer isOpen={isDialogOpen} onClose={handleCloseDialog}> SideDrawer Content </SideDrawer>`,
  componentProps: [
    "isOpen: boolean",
    "onClose: () => void",
    `sideDrawerPosition?: "left" | "right" ="right"`,
    `shouldBackdropClickClose?: boolean = true`,
    `onBackdropClick?: () => void = () => {}`,
    `backdropClassNames?: string = ""`,
    `sideDrawerClassNames?: string = ""`,
    `children?: JSX.Element`,
  ],
  stackBlitzLinks: [
    {
      description: "basic",
      url: "https://stackblitz.com/edit/react-ts-isrpct?file=App.tsx",
    },
    {
      description: "advanced",
      url: "https://stackblitz.com/edit/react-ts-fggxxp?file=App.tsx",
    },
  ],
};

function App() {
  const colorThemeFromLS = localStorage.getItem("color-theme");
  const [colorTheme, setColorTheme] = useState<string>(
    colorThemeFromLS || "dark"
  );

  const handleColorThemeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      localStorage.setItem("color-theme", e.target.value.toString());
      setColorTheme(e.target.value);
    },
    []
  );

  return (
    <>
      <div color-theme={colorTheme} className="main-container">
        <header className={styles.header}>
          <h1 className={styles.logoText}>lite-styled</h1>
          <div>
            <label htmlFor="color-theme-select">Color theme</label>
            <select
              id="color-theme-select"
              onChange={handleColorThemeChange}
              value={colorTheme}
            >
              <option value="light">light</option>
              <option value="dark">dark</option>
            </select>
          </div>
        </header>
        <main className={styles.main}>
          <nav className={styles.nav}>
            {navGroups.map((navGroup) => {
              const { groupName, navItems } = navGroup;
              return <NavItemGroup groupName={groupName} navItems={navItems} />;
            })}
          </nav>
          <div className={styles.contentContainer}>
            <Routes>
              <Route path="/" element={<ContentContainer />}>
                <Route index element={<IndexContainer />} />
                <Route
                  path="concept"
                  element={<SectionContainer title="Concept" />}
                >
                  <Route path="about" element={<AboutContainer />} />
                </Route>
                <Route
                  path="getting-started"
                  element={<SectionContainer title="Getting started" />}
                >
                  <Route
                    path="installation"
                    element={<InstallationContainer />}
                  />
                  <Route path="usage" element={<UsageContainer />} />
                </Route>
                <Route
                  path="components"
                  element={<SectionContainer title="Components" />}
                >
                  <Route
                    path="dialog"
                    element={
                      <ComponentContainer
                        componentTitle={dialog.componentTitle}
                        componentTag={dialog.componentTag}
                        componentProps={dialog.componentProps}
                        stackBlitzLinks={dialog.stackBlitzLinks}
                      />
                    }
                  />
                  <Route
                    path="side-drawer"
                    element={
                      <ComponentContainer
                        componentTitle={sideDrawer.componentTitle}
                        componentTag={sideDrawer.componentTag}
                        componentProps={sideDrawer.componentProps}
                        stackBlitzLinks={sideDrawer.stackBlitzLinks}
                      />
                    }
                  />
                </Route>
              </Route>
            </Routes>
          </div>
        </main>
        <footer className={styles.footer}>
          <p>npm: lite-styled</p>
        </footer>
      </div>
    </>
  );
}

export default App;
