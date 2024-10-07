import { useState, useContext, createContext } from "react";

const tabContext = createContext({
  activeTabValue: null,
  setActiveTabValue: () => {},
});

const TabProvider = ({ children, defaultValue }: any) => {
  const [activeTabValue, setActiveTabValue] = useState(defaultValue);

  return (
    //@ts-ignore
    <tabContext.Provider value={{ activeTabValue, setActiveTabValue }}>
      {children}
    </tabContext.Provider>
  );
};

const TabTrigger = ({ value, children }: any) => {
  const { activeTabValue, setActiveTabValue } = useContext(tabContext);

  const handleSetActiveTabValue = () => {
    //@ts-ignore
    setActiveTabValue(value);
  };

  return (
    <button
      onClick={handleSetActiveTabValue}
      className={` ${
        activeTabValue === value ? "underline text-[orange]" : ""
      }`}
    >
      {children}
    </button>
  );
};

const TabContent = ({ children, value }: any) => {
  const { activeTabValue } = useContext(tabContext);

  if (activeTabValue !== value) {
    return null;
  }

  return children;
};

const Challange30 = () => {
  return (
    <section className="text-[white] flex flex-col justify-center items-center h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-[22px] font-semibold">TABS</h1>
        <TabProvider defaultValue="tab-1">
          <div className="flex gap-3">
            <TabTrigger value="tab-1">Tab 1</TabTrigger>
            <TabTrigger value="tab-2">Tab 2</TabTrigger>
            <TabTrigger value="tab-3">Tab 3</TabTrigger>
          </div>
          <TabContent value="tab-1">Tab Content 1</TabContent>
          <TabContent value="tab-2">Tab Content 2</TabContent>
          <TabContent value="tab-3">Tab Content 3</TabContent>
        </TabProvider>
      </div>
    </section>
  );
};

export default Challange30;
