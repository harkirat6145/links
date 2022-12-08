import React, { useState, useEffect } from "react";
import { Button, Col, Input } from "reactstrap";
import { View } from "../components/view";

const getDataFromLS = () => {
  const dataNW = localStorage.getItem("datas");
  if (dataNW) {
    return JSON.parse(dataNW);
  } else {
    return [];
  }
};

export default function DataBase() {
  let colorBg = localStorage.getItem("color");

  const [datas, setDatas] = useState(getDataFromLS());

  const [name, setName] = useState(" ");
  const [branch, setBranch] = useState(" ");
  const [phoneNo, setPhoneNo] = useState(" ");
  const [address, setAddress] = useState(" ");

  const handleAddData = (e) => {
    e.preventDefault();
    let data = {
      name,
      branch,
      phoneNo,
      address,
    };
    setDatas([...datas, data]);
    setName(" ");
    setBranch(" ");
    setPhoneNo(" ");
    setAddress(" ");
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(datas));
  }, [datas]);

  return (
    <>
      <div
        className=" text-center pt-5"
        style={{
          background: colorBg,
        }}
      >
        <form onSubmit={handleAddData} className="w-sm-50 m-auto p-4 form-col">
          <div className="mt-3">
            <h6>Name:</h6>
            <Col md={6} className="m-auto">
              <Input
                placeholder=""
                name="name"
                className="fntwight rounded-0 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </div>
          <div className="mt-3">
            <h6>Branch:</h6>
            <Col md={6} className="m-auto">
              <Input
                placeholder=""
                name="branch"
                className="fntwight rounded-0 py-2"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
            </Col>
          </div>
          <div className="mt-3">
            <h6>PhoneNo:</h6>
            <Col md={6} className="m-auto">
              <Input
                placeholder=""
                name="phoneNo"
                className="fntwight rounded-0 py-2"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </Col>
          </div>
          <div className="mt-3 w-50 m-auto">
            <h6>Address:</h6>
            <textarea
              className="form-control rounded-0 "
              name="address"
              id="myBox"
              rows="2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
          <Button
            className="bgwhite mt-3 bg-info rounded-0 text-center text-white px-4 py-2"
            color="info"
            type="submit"
          >
            ADD
          </Button>
        </form>
        <div className="border-secondary-1 p-4 mt-5 d-block">
          {datas.length > 0 && (
            <>
              <div className="table-responsive form-col">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Branch</th>
                      <th>Phone No</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View datas={datas} />
                  </tbody>
                </table>
              </div>
            </>
          )}
          <div className="form-col">
            {datas.length < 1 && <div>No Data</div>}
          </div>
        </div>
      </div>
    </>
  );
}
