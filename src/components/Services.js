import React, { useEffect, useState } from "react";

export default function Services() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [table, setTable] = useState(5);
  const [toggle, setToggle] = useState(false);

  const [bgColor, setBgColor] = useState(localStorage.getItem("color"));

  let colorBg = localStorage.getItem("color");
  console.log("type ", typeof colorBg);
  const handleUpClick = () => {
    console.log("upper case was clicked");
    setText("");
    setToggle(!toggle);
    setCount(count + 1);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  function multiplicationTable() {
    for (let i = 1; i <= table; i++) {
      console.log(`${"5"}*${i}=${i * 5}`);
    }
  }

  useEffect(() => {
    let bg = localStorage.getItem("color");
    console.log("bg", bg);
    setBgColor(bg);
  }, [localStorage.getItem("color")]);

  return (
    <>
      <div
        className=" height text-dark text-center p-5"
        style={{
          backgroundColor: localStorage.getItem("color"),
        }}
      >
        <h2>Services {count}</h2>
        <p
          style={{
            display: toggle ? "none" : "block",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          totam aut obcaecati beatae et ad soluta aperiam dolor quas vitae?
        </p>
        <textarea
          className="form-control mt-5"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-danger mt-4" onClick={handleUpClick}>
          {/* {toggle ? "Clicked" : "Submit"} */} submit
        </button>
        {multiplicationTable()}
        <button
          className="btn btn-warning mt-4 ms-4"
          onClick={() => setTable(table + 5)}
        >
          {" "}
          show 5
        </button>
      </div>
    </>
  );
}
