import React from "react";

export default function footer() {
  let colorBg = localStorage.getItem("color");

  return (
    <div
      style={{
        background: colorBg,
      }}
    >
      <p className="p-2">@ COPYRIGHT - MEGAMART TEMPLATE BY DESIGNFALLS</p>
    </div>
  );
}
