import React from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import "./socialIcon.scss";

const SocialIcons = ({ Icon }: { Icon: typeof dynamicIconImports }) => {
  return (
    <div className="bg-slate-700 rounded-full p-3 icon">
      <Icon strokeWidth="1" className="w-[17px] h-[17px]" />
    </div>
  );
};

export default SocialIcons;
