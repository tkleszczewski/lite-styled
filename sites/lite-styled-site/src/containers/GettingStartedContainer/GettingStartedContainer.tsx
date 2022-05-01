import { Outlet } from "react-router-dom";

const GettingStartedContainer = () => {
  return (
    <section>
      <header>
        <h2>Getting started</h2>
      </header>
      <Outlet />
    </section>
  );
};

export default GettingStartedContainer;
