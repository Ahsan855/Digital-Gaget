import AreaCharts from "../AreaChart/AreaChart";
import BarCharts from "../BarChart/BarChart";
import LineCharts from "../LineChart/LineChart";
import ReaderChart from "../RedarChart/RedarChart";

const DashBord = () => {
  return (
    <div className="grid grid-rows-2 gap-4 m-4 grid-cols-2 border-2 rounded-lg">
      <div className="w-full mx-auto m-4 p-2">
        <LineCharts></LineCharts>
      </div>
      <div className="w-full mx-auto m-4 p-2">
        <AreaCharts></AreaCharts>
      </div>
      <div className="w-full mx-auto m-4 p-2">
        <BarCharts></BarCharts>
      </div>
      <div className="w-full mx-auto m-4 p-2">
        <ReaderChart></ReaderChart>
      </div>
    </div>
  );
};

export default DashBord;
