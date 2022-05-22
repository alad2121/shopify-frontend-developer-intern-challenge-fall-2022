import React from "react";
import "./index.css";

interface Props {
  response: string;
  prompt: string;
  type: string;
  badgeColor: string | undefined;
}

const Card: React.FC<Props> = ({ response, prompt, type, badgeColor }) => {
  return (
    <div className="w-200 h-200 border-2 bg-[whitesmoke] mt-5 mb-5 flex flex-row p-6 rounded-lg font-heading hover:border-blue-200">
      <div className="text-left w-10/12">
        <p className="text-sm">
          <span className="font-bold">Prompt:</span> {prompt}
        </p>

        <p className="text-sm">
          <span className="font-bold">Response:</span> {response}
        </p>
      </div>

      <div className="badge w-4/12">
        <button
          title="Engine"
          className={`badge float-right p-1 font-bold text-sm rounded-sm ${badgeColor}`}
        >
          {type}
        </button>
      </div>
    </div>
  );
};

export default Card;
