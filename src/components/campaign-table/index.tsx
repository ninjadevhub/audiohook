import { ListItemIcon } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { ICampaignTableData, ICampaignTableItem } from '../../models';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import LinearProgress from '@material-ui/core/LinearProgress';
import './style.scss';
export interface IPropsForCampaignTable {
  tableData: ICampaignTableData;
}
const CampaignTable: React.FC<IPropsForCampaignTable> = ({ tableData }) => {
  const [data, setData] = useState<ICampaignTableData>([]);

  const onEdit = (item: { [key: string]: any }) => {
    console.log(item);
  };
  const onAdd = () => {
    console.log('add...');
  };
  const progressType = (val: number) => {
    if (val >= 65) return 'percentage high';
    else if (val < 65 && val >= 35) return 'percentage mid';
    else return 'percentage low';
  };
  const tableContentTemplate = tableData.map(
    (item: ICampaignTableItem, id: number) => (
      <tr key={'tr-' + id}>
        <td>
          <span className="play-status stop"></span>
          {item.campaign}
        </td>
        <td>{item.budget}</td>
        <td>{item.duration}</td>
        <td>{item.days_left}</td>
        <td>{item.days_passed}</td>
        <td>{item.impressions}</td>
        <td>${item.cost}</td>
        <td>{item.roas}%</td>
        <td>
          <LinearProgress
            className={progressType(item.roas)}
            variant="determinate"
            value={item.roas}
          />
        </td>
        <td>
          <a className="action-btn" onClick={() => onEdit({ ...item })}>
            <EditIcon className="edit-icon" />
          </a>
        </td>
      </tr>
    )
  );
  const header = [
    'Сampaign',
    'Budget',
    'Duration',
    'Days left',
    'Days passed',
    'Impressions',
    'Cost',
    'ROAS',
    'Budget pacing indica',
    '',
  ];
  const headerTemplate = header.map((item, id) => (
    <th key={'th-' + id}>{item}</th>
  ));
  useEffect(() => {
    setData(tableData);
  }, []);
  return (
    <div className="campaign">
      <div className="campaign-wrapper">
        <div className="table-wrapper">
          <table className="campaign-table">
            <thead>
              <tr>{headerTemplate}</tr>
            </thead>
            <tbody>{tableContentTemplate}</tbody>
          </table>
        </div>
        <div className="tfoot">
          <div className="add" onClick={() => onAdd()}>
            <AddIcon className="add-icon" />
            Create New Campaign
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignTable;
