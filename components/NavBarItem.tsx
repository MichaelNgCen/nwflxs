import React from "react";

interface NavBarItemProps {
  label: string;
  onClick?: () => void;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ label, onClick }) => {
  return (
    <div className="text-white cursor-pointer hover:text-grey-300 transition" onClick={onClick}>
      {label}
    </div>
  );
};

export default NavBarItem;
