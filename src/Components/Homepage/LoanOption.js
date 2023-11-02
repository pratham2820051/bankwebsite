import React from "react";

function LoanOption({ icon, title, desc }) {
  return (
    <div className="max-w-[500px] flex space-x-8 justify-center items-center">
      {icon}
      <div className="space-y-2 text-start">
        <div className="font-bold cursor-pointer">{title}</div>
        <div className="text-sm">{desc}</div>
      </div>
    </div>
  );
}

export default LoanOption;
