import moment from 'moment';

export const abbreviateNumber = (
  number: number,
  digitsAfterPoint = 0
): number | string => {
  if (number > 1000000000) {
    return `${(number / 1000000000).toFixed(digitsAfterPoint).toString()}B`;
  }
  if (number > 1000000) {
    return `${(number / 1000000).toFixed(digitsAfterPoint).toString()}M`;
  }
  if (number >= 1000) {
    return `${(number / 1000).toFixed(digitsAfterPoint).toString()}K`;
  }
  return number.toString();
};

export const groupByDate = (data) => {
  const dates = {};

  data.forEach((item) => {
    const dayKey = moment(item.node.date).fromNow();
    if (dates && !dates[dayKey]) {
      dates[dayKey] = [];
    }
    dates[dayKey].push(item.node);
  });

  return dates;
};

export const starChartNodeFormatter = (chartData: any[]): any[] => {
  return chartData.map((chartDataItem) => {
    return {
      value: chartDataItem.starCount,
      x: moment(chartDataItem.weekStartedAt).unix(),
    };
  });
};
