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
  ResponsiveContainer,
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-4">
      <div className="flex items-center flex-col gap-4 w-80 h-80 md:w-96 md:h-96">
        <h2 className="text-orange-500 font-semibold">Month Wise Sell</h2>
        {data.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
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
          </ResponsiveContainer>
        )}
      </div>
      <div className="flex items-center flex-col gap-4 w-80 h-80 md:w-96 md:h-96">
        <h2 className="text-orange-500 font-semibold">Investment vs Income</h2>
        {data.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
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
          </ResponsiveContainer>
        )}
      </div>
      <div className="flex items-center flex-col gap-4 w-80 h-80 md:w-96 md:h-96">
        <h2 className="text-orange-500 font-semibold">Investment vs Revenue</h2>
        {data.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
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
              <Bar
                type="monotone"
                dataKey="revenue"
                fill="#f57542"
                stackId="a"
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
      <div className="flex items-center flex-col gap-4 w-80 h-80 md:w-96 md:h-96">
        <h2 className="text-orange-500 font-semibold">Investment vs Income</h2>
        {data.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
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
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
