import React from 'react';
import LineCharts from '../LineChart/LineChart';

const DashBord = () => {
    return (
       <div className='grid md:grid-cols-2 sm:grid-cols-1 p-8 m-8 border-2 rounded-lg'>
           <div className='w-full border-2 border-red-500 p-4'>
           <LineCharts></LineCharts>
           </div>
           <div>good job</div>
       </div>
    );
};

export default DashBord;