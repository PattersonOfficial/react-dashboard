import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import './App.css';

// all imports from components
import { Navbar, ThemeSettings, Footer, Sidebar } from './Components';

// all imports from pages
import { Customers, Orders, Employees, Ecommerce } from './Pages';

// all imports from Apps
import { Calender, ColorPicker, Kanban, Editor } from './Apps';

// all imports from charts
import {
  PieChart,
  BarChart,
  AreaChart,
  LineChart,
  SparkLineChart,
  StackedChart,
  PyramidChart,
  FinancialChart,
  ColorMappingChart,
} from './Charts';

import { useStateContext } from './Contexts/ContextProvider';

const App = () => {
  const { activeMenu } = useStateContext();

  console.log({ activeMenu });
  return (
    // Main Content Div
    <div>
      <BrowserRouter>
        {/* Main Content Itself */}
        <div className='flex relative dark:bg-main-dark-bg'>
          {/* Tooltip component */}
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings'>
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ borderRadius: '50%', background: 'blue' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/*  Left SideBar Component */}
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}

          {/* Navigation Component */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </div>

          {/* Main Routes */}
          <div>
            <Routes>
              {/* Dashboard */}
              <Route exact path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Ecommerce />} />

              {/* Pages */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />

              {/* Apps */}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calendar' element={<Calender />} />
              <Route path='/color-picker' element={<ColorPicker />} />

              {/* Charts */}
              <Route path='/bar' element={<BarChart />} />
              <Route path='/pie' element={<PieChart />} />
              <Route path='/line' element={<LineChart />} />
              <Route path='/area' element={<AreaChart />} />
              <Route path='/stacked' element={<StackedChart />} />
              <Route path='/pyramid' element={<PyramidChart />} />
              <Route path='/financial' element={<FinancialChart />} />
              <Route path='/sparked-line' element={<SparkLineChart />} />
              <Route path='/color-mapping' element={<ColorMappingChart />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
