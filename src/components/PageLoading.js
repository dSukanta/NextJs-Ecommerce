import React from "react";

function PageLoading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
      <img
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        className="rounded-full h-28 w-28 absolute"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        alt="Loading"
      />
    </div>
  );
}

export default PageLoading;
