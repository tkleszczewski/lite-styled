import { Outlet } from "react-router-dom";

const ComponentsContainer = () => {
  return (
    <section>
      <header>
        <h2>Components</h2>
      </header>
      <Outlet />
    </section>
  );
};

export default ComponentsContainer;
