import { useCallback, useState } from "react";

import "../node_modules/lite-styled/dist/style.css";

import { Dialog, SideDrawer } from "lite-styled";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState<boolean>(false);

  const onDialogClose = useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  const onSideDrawerClose = useCallback(() => {
    setIsSideDrawerOpen(false);
  }, []);

  return (
    <div>
      <button onClick={() => setIsDialogOpen(true)}>Open dialog</button>
      <button onClick={() => setIsSideDrawerOpen(true)}>
        Open Side drawer
      </button>
      <Dialog
        isOpen={isDialogOpen}
        onClose={onDialogClose}
        shouldBackdropClickClose={false}
      >
        <section>
          <header>
            <button onClick={onDialogClose}>Close modal</button>
          </header>
          <div>Modal Content</div>
        </section>
      </Dialog>

      <SideDrawer isOpen={isSideDrawerOpen} onClose={onSideDrawerClose}>
        <section>
          <header>
            <button onClick={onSideDrawerClose}>Close Drawer</button>
          </header>
          <h1>Side Drawer title</h1>
          <p>Side drawer content</p>
        </section>
      </SideDrawer>
    </div>
  );
}

export default App;
