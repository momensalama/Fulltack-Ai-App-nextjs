'use client';
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from 'recharts';
import CustomToolTip from './CustomToolTip';
import { DataItem } from '@/types';

function HistoryChart({ data }: { data: DataItem[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={data}>
        <Line
          type="monotone"
          dataKey="sentimentScore"
          stroke="#8884d8"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <XAxis dataKey="updatedAt" />
        <Tooltip content={<CustomToolTip />} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default HistoryChart;
