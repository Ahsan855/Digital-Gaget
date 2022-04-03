import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
const data = [
  {
    id: 1,
    month: "Mar",
    investment: 100000,
    sell: 241,
    revenue: 10401,
  },
  {
    id: 2,
    month: "Apr",
    investment: 200000,
    sell: 423,
    revenue: 24500,
  },
  {
    id: 3,
    month: "May",
    investment: 500000,
    sell: 726,
    revenue: 67010,
  },
  {
    id: 4,
    month: "Jun",
    investment: 500000,
    sell: 529,
    revenue: 40405,
  },
  {
    id: 5,
    month: "Jul",
    investment: 600000,
    sell: 601,
    revenue: 50900,
  },
  {
    id: 6,
    month: "Aug",
    investment: 700000,
    sell: 670,
    revenue: 61000,
  },
];

const LineCharts = () => {
  return (
    <>
      <h1 className="chart-heading text-red-500 text-2xl">Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" interval={"preserveStartEnd"}  tickFormatter ={(value)=>value +' Month'}/>
          <YAxis />
          <Tooltip contentStyle={{background:'cyan'}}/>
          <Legend />
          <Line type='monotone' dataKey="revenue" stroke="red" activeDot={{r:8}}/>
          <Line type='monotone' dataKey="id" stroke="green"  activeDot={{r:8}}/>
          <Line type='monotone' dataKey="investment" stroke="blue"  activeDot={{r:8}}/>
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineCharts;
