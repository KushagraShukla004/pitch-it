import React from "react";

const Ping = () => {
  return (
    <div className="relative">
      <div className="absolute -left-5 top-2">
        <span className="flex size-[11px]">
          <span className="absolute inline-flex size-full">
            <span className="relative inline-flex size-[11px] bg-emerald-400 rounded-full animate-ping"></span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Ping;
