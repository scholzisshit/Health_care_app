"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const recharts_1 = require("recharts");
// Sample data - In a real app, this would come from your database
const caffeineData = [
    {
        day: 'Mon',
        coffee: 120,
        energyDrink: 80,
        tea: 40,
        custom: 30
    },
    {
        day: 'Tue',
        coffee: 180,
        energyDrink: 0,
        tea: 60,
        custom: 0
    },
    {
        day: 'Wed',
        coffee: 140,
        energyDrink: 160,
        tea: 30,
        custom: 45
    },
    {
        day: 'Thu',
        coffee: 160,
        energyDrink: 80,
        tea: 40,
        custom: 0
    },
    {
        day: 'Fri',
        coffee: 200,
        energyDrink: 160,
        tea: 20,
        custom: 30
    },
    {
        day: 'Sat',
        coffee: 100,
        energyDrink: 0,
        tea: 80,
        custom: 60
    },
    {
        day: 'Sun',
        coffee: 80,
        energyDrink: 0,
        tea: 100,
        custom: 0
    }
];
const CaffeineChart = () => {
    return ((0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 3, mt: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", gutterBottom: true, children: "Weekly Caffeine Intake (mg)" }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { width: '100%', height: 400 }, children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { children: (0, jsx_runtime_1.jsxs)(recharts_1.BarChart, { data: caffeineData, margin: {
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "day" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, {}), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, {}), (0, jsx_runtime_1.jsx)(recharts_1.Legend, {}), (0, jsx_runtime_1.jsx)(recharts_1.Bar, { dataKey: "coffee", name: "Coffee", fill: "#795548", stackId: "a" }), (0, jsx_runtime_1.jsx)(recharts_1.Bar, { dataKey: "energyDrink", name: "Energy Drinks", fill: "#f44336", stackId: "a" }), (0, jsx_runtime_1.jsx)(recharts_1.Bar, { dataKey: "tea", name: "Tea", fill: "#4caf50", stackId: "a" }), (0, jsx_runtime_1.jsx)(recharts_1.Bar, { dataKey: "custom", name: "Custom Drinks", fill: "#2196f3", stackId: "a" })] }) }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body2", color: "text.secondary", sx: { mt: 2 }, children: "Daily recommended maximum caffeine intake: 400mg for healthy adults" })] }));
};
exports.default = CaffeineChart;
