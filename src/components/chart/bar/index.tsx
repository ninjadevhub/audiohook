import React, { useEffect, useRef, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { IBarChartDataItem } from '../../../models';
import './style.scss';
export interface IBarChart {
  data: IBarChartDataItem[];
  width?: number;
}

const BarChart: React.FC<IBarChart> = ({ data, width }) => {
  const barChartRef = useRef(null);
  const [title, setTitle] = useState<string>('TOP LOCATIONS');
  useEffect(() => {}, [width]);
  return (
    <div className="bar-chart chart" ref={barChartRef} style={{ width: width }}>
      <div className="wrapper">
        <div className="title">{title}</div>
        <div className="progress-wrapper">
          <table>
            <tbody>
              {data.map((item: IBarChartDataItem, index: number) => (
                <tr
                  className="progress-wrapper-item"
                  key={'progressbar-' + index}
                >
                  <td className="label">{item.label}</td>
                  <td className="progress-bar">
                    <LinearProgress
                      className={index === 0 ? 'first' : ''}
                      variant="determinate"
                      value={(item.value / 49) * 100}
                    />
                  </td>
                  <td className="percent">{item.value}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default BarChart;
