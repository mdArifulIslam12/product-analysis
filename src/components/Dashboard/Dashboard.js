import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6">
          <LineChart width={500} height={400} data={datas}>
            <Line type="monotone" dataKey="sell"></Line>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
          </LineChart>
        </div>
        <div className="col-lg-6">
          <BarChart width={500} height={400} data={datas}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" stackId="a" fill="#8884d8"></Bar>
            <Bar dataKey="revenue" stackId="a" fill="#82ca9d"></Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
