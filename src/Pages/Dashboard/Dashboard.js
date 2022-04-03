import React, { useEffect } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch("data/sales.json")
      .then((response) => response.json())
      .then((json) => {
        json.map((item) => {
          item.income = item.revenue + item.investment;
        });
        setData(json);
      });
  }, []);
  return (
    <div className="grid grid-cols-2 bg-white pt-4">
      <div className="flex items-center flex-col gap-4">
        <h2 className="text-orange-500 font-semibold">Month Wise Sell</h2>
        {data.length > 0 && (
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <Tooltip />
            <YAxis />
            <Legend />
            <Line
              type="monotone"
              dataKey="sell"
              stroke="#f57542"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        )}
      </div>
      <div className="flex items-center flex-col gap-4">
        <h2 className="text-orange-500 font-semibold">Investment vs Income</h2>
        {data.length > 0 && (
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <Tooltip />
            <YAxis />
            <Legend />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#82ca9d"
              fill="#82ca9d"
              activeDot={{ r: 8 }}
            />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#f57542"
              fill="#f57542"
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        )}
      </div>
      <div className="flex items-center flex-col gap-4">
        <h2 className="text-orange-500 font-semibold">Investment vs Revenue</h2>
        {data.length > 0 && (
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <Tooltip />
            <YAxis />
            <Legend />
            <Bar
              type="monotone"
              dataKey="investment"
              fill="#82ca9d"
              stackId="a"
            />
            <Bar type="monotone" dataKey="revenue" fill="#f57542" stackId="a" />
          </BarChart>
        )}
      </div>
      <div className="flex items-center flex-col gap-4">
        <h2 className="text-orange-500 font-semibold">Investment vs Income</h2>
        {data.length > 0 && (
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="investment"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#f57542"
            />
            <Pie
              data={data}
              dataKey="income"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
          </PieChart>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
