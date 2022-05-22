import React from "react";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <div
      className={`text-3xl font-heading font-extrabold text-[black] overflow-hidden`}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
