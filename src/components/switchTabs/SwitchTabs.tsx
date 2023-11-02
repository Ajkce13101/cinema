import { useState } from "react";
import "./switchtabs.scss";

const SwitchTabs = ({
  data,
  onTabChange,
}: {
  data: string[];
  onTabChange: (tab: string) => void;
}) => {
  const [selectedTab, setselectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab: string, index: number) => {
    setLeft(index * 100);
    setTimeout(() => {
      setselectedTab(index);
    }, 300);
    onTabChange(tab);
  };
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left: left }}></span>
      </div>
    </div>
  );
};

export default SwitchTabs;
