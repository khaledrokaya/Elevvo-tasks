import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MonthlyEarnings } from '../../types';

interface EarningsChartProps {
  data: MonthlyEarnings[];
}

const EarningsChart: React.FC<EarningsChartProps> = ({ data }) => {
  return (
    <div className="p-6 l36-card">
      <h3 className="mb-4 text-lg font-semibold text-gray-800">Monthly Earnings</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            formatter={(value) => [`$${value}`, 'Earnings']}
            labelStyle={{ color: '#374151' }}
            contentStyle={{
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}
          />
          <Bar
            dataKey="earnings"
            fill="#3B82F6"
            radius={[4, 4, 0, 0]}
            className="transition-opacity hover:opacity-80"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;