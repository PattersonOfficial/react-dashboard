import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import './App.css';

const App = () => {
  const activeMenu = false;
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

          {/* SideBar Component */}
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              Sidebar
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>Sidebar</div>
          )}

          {/* Navigation Component */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              Navbar
            </div>
          </div>

          {/* Main Routes */}
          <div>
            <Routes>
              {/* Dashboard */}
              <Route exact path='/' element='Dashboard' />
              <Route path='/ecommerce' element='Dashboard' />

              {/* Pages */}
              <Route path='/orders' element='Orders' />
              <Route path='/employees' element='Employees' />
              <Route path='/customers' element='Customers' />

              {/* Apps */}
              <Route path='/calendar' element='CalenderApp' />
              <Route path='/kanban' element='KanbanApp' />
              <Route path='/editor' element='EditorApp' />
              <Route path='/color-picker' element='ColorPickerApp' />

              {/* Charts */}
              <Route path='/line' element='LineChart' />
              <Route path='/area' element='AreaChart' />
              <Route path='/bar' element='BarChart' />
              <Route path='/pie' element='PieChart' />
              <Route path='/financial' element='FinancialChart' />
              <Route path='/color-mapping' element='ColorMappingChart' />
              <Route path='/pyramid' element='PyramidChart' />
              <Route path='/stacked-line' element='StackedLineChart' />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
