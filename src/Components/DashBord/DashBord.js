import AreaCharts from "../AreaChart/AreaChart";
import BarCharts from "../BarChart/BarChart";
import LineCharts from "../LineChart/LineChart";

const DashBord = () => {
  return (
      <div className="grid md:grid-cols-3 sm:grid-cols-1 p-44 m-8 border-2 rounded-lg">
        <div className="w-full border-2 border-red-500 p-4">
          <LineCharts></LineCharts>
        </div>
        <div>
          <AreaCharts></AreaCharts>
        </div>
        <div>
        <BarCharts></BarCharts>
        </div>
      </div>
  );
};

export default DashBord;
