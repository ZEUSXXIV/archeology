import React, { useState } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import Navbar from "./Navbar";
import { List } from "../assets/JS Data/List";

const SiteTable = () => {
  const [Data, setData] = useState(List);
  const columns = [
    {
      title: "Sr. No",
      dataIndex: "sr",
      key: "sr",
    },
    {
      title: "Name of Monument/Site",
      dataIndex: "site",
      key: "site",
    },
    {
      title: "Village",
      dataIndex: "village",
      key: "village",
    },
    {
      title: "Taluka",
      dataIndex: "taluka",
      key: "taluka",
    },
    {
      title: "Survey No.",
      dataIndex: "sno",
      key: "sno",
    },
    {
      title: "Sub-Div",
      dataIndex: "subdiv",
      key: "subdiv",
    },
    {
      title: "Ownership",
      dataIndex: "own",
      key: "own",
    },
    {
      title: "Police Station",
      dataIndex: "ps",
      key: "ps",
    },
  ];
  return (
    <>
      <Table dataSource={Data} columns={columns} pagination={false} />
    </>
  );
};

export default SiteTable;
