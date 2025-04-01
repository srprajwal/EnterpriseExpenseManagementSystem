import React from 'react';
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

const ExpenseCharts = ({ expenseBreakdown, monthlyExpenses }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card sx={{ 
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          borderRadius: '16px',
          overflow: 'hidden'
        }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
              Expense Breakdown
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie 
                  data={expenseBreakdown} 
                  dataKey="value" 
                  nameKey="category" 
                  cx="50%" 
                  cy="50%" 
                  outerRadius={100}
                  label
                  animationDuration={1500}
                >
                  {expenseBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card sx={{ 
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          borderRadius: '16px',
          overflow: 'hidden'
        }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
              Monthly Expense Trends
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyExpenses}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke="#2196f3" 
                  strokeWidth={3}
                  dot={{ r: 6 }}
                  activeDot={{ r: 8 }}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ExpenseCharts;