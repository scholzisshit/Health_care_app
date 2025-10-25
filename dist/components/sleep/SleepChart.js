"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const recharts_1 = require("recharts");
// Sample data - In a real app, this would come from your database
const sleepData = [
    {
        date: '10/12',
        hoursSlept: 7.5,
        deepSleep: 2.3,
        lightSleep: 4.2,
        remSleep: 1.0,
        quality: 85
    },
    {
        date: '10/13',
        hoursSlept: 6.8,
        deepSleep: 1.8,
        lightSleep: 4.0,
        remSleep: 1.0,
        quality: 75
    },
    {
        date: '10/14',
        hoursSlept: 8.2,
        deepSleep: 2.5,
        lightSleep: 4.5,
        remSleep: 1.2,
        quality: 90
    },
    {
        date: '10/15',
        hoursSlept: 7.2,
        deepSleep: 2.0,
        lightSleep: 4.2,
        remSleep: 1.0,
        quality: 80
    },
    {
        date: '10/16',
        hoursSlept: 7.8,
        deepSleep: 2.4,
        lightSleep: 4.3,
        remSleep: 1.1,
        quality: 88
    },
    {
        date: '10/17',
        hoursSlept: 7.5,
        deepSleep: 2.2,
        lightSleep: 4.1,
        remSleep: 1.2,
        quality: 85
    },
    {
        date: '10/18',
        hoursSlept: 8.0,
        deepSleep: 2.6,
        lightSleep: 4.2,
        remSleep: 1.2,
        quality: 92
    }
];
const SleepChart = () => {
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { width: '100%' }, children: [(0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 3, mb: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", gutterBottom: true, children: "Sleep Duration & Quality" }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { width: '100%', height: 300 }, children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, { data: sleepData, margin: { top: 5, right: 30, left: 20, bottom: 5 }, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "date" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { yAxisId: "left" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { yAxisId: "right", orientation: "right" }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, {}), (0, jsx_runtime_1.jsx)(recharts_1.Legend, {}), (0, jsx_runtime_1.jsx)(recharts_1.Line, { yAxisId: "left", type: "monotone", dataKey: "hoursSlept", stroke: "#8884d8", name: "Hours Slept" }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { yAxisId: "right", type: "monotone", dataKey: "quality", stroke: "#82ca9d", name: "Sleep Quality %" })] }) }) })] }), (0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", gutterBottom: true, children: "Sleep Stages" }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { width: '100%', height: 300 }, children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { children: (0, jsx_runtime_1.jsxs)(recharts_1.AreaChart, { data: sleepData, margin: { top: 5, right: 30, left: 20, bottom: 5 }, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "date" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, {}), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, {}), (0, jsx_runtime_1.jsx)(recharts_1.Legend, {}), (0, jsx_runtime_1.jsx)(recharts_1.Area, { type: "monotone", dataKey: "deepSleep", stackId: "1", stroke: "#3f51b5", fill: "#3f51b5", name: "Deep Sleep" }), (0, jsx_runtime_1.jsx)(recharts_1.Area, { type: "monotone", dataKey: "lightSleep", stackId: "1", stroke: "#2196f3", fill: "#2196f3", name: "Light Sleep" }), (0, jsx_runtime_1.jsx)(recharts_1.Area, { type: "monotone", dataKey: "remSleep", stackId: "1", stroke: "#03a9f4", fill: "#03a9f4", name: "REM Sleep" })] }) }) })] })] }));
};
exports.default = SleepChart;
