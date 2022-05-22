import React, { MouseEventHandler } from "react";

interface Props {
  title: string;
  onSubmit: MouseEventHandler;
  id: string;
}

const Button: React.FC<Props> = ({ title, onSubmit, id }) => {
  return (
    <div>
      <button
        id={id}
        onClick={onSubmit}
        type="button"
        className="px-6 py-2 text-sm rounded shadow font-heading bg-emerald-100 hover:bg-emerald-200 text-emerald-500"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
