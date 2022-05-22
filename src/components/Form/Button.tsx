import React from "react";

interface Props {
  title: string;
  onSubmit: any;
}

const Button: React.FC<Props> = ({ title, onSubmit }) => {
  return (
    <div>
      <button onClick={onSubmit} type="button">
        <a
          href="#_"
          className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-[whitesmoke] text-blue-600 inline-block"
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
          <span id={title} className={`relative group-hover:text-white`}>{title}</span>
        </a>
      </button>
    </div>
  );
};

export default Button;
