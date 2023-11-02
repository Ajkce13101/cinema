import React from "react";
import "./socialIcon.scss";

interface IconProps {
  strokeWidth: string;
  className: string;
}

const SocialIcons = ({ Icon }: { Icon: React.ComponentType<IconProps> }) => {
  return (
    <div className="bg-slate-700 rounded-full p-3 icon">
      <Icon strokeWidth="1" className="w-[17px] h-[17px]" />
    </div>
  );
  
};

export default SocialIcons;
