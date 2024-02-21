"use client";
type TabsT = {
  id: number;
  title: string;
  onClick: () => void;
};
type Props = {
  tabs: TabsT[];
};

const Tabs = (props: Props) => {
  const { tabs } = props;
  const renderTabs = tabs?.map((tab: TabsT) => {
    return (
      <div className="tab" key={tab.id} onClick={tab.onClick}>
        {tab.title}
      </div>
    );
  });
  return <div className="flex items-center">{renderTabs}</div>;
};

export default Tabs;
