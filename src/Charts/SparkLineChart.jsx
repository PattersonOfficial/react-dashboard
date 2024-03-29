import React from 'react';
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

const SparkLineChart = ({
  id,
  height,
  width,
  color,
  currentColor,
  data,
  type,
}) => {
  // console.log({data});
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName='x'
      yName='yval'
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${yval}',
        trackLineSettings: {
          visible: true,
        },
      }}
      >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLineChart;
