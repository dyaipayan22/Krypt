import React from 'react';

interface NavbarItemProps {
  title: string;
  classprops?: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, classprops }) => {
  return <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>;
};

export default NavbarItem;
