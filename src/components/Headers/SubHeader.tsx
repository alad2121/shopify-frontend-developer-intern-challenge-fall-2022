import React from "react";

interface Props {
  title: string;
}

const SubHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className={`text-base font-heading text-[black]`}>
      <h1>{title}</h1>
    </div>
  );
};

export default SubHeader;
