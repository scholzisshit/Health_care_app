"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const recharts_1 = require("recharts");
// Sample data - In a real app, this would come from your database
const healthData = [
    {
        date: '2025-10-12',
        steps: 7500,
        sleep: 7.2,
        weight: 75,
        wellnessScore: 85
    },
    {
        date: '2025-10-13',
        steps: 8200,
        sleep: 6.8,
        weight: 74.8,
        wellnessScore: 82
    },
    {
        date: '2025-10-14',
        steps: 10000,
        sleep: 7.5,
        weight: 74.5,
        wellnessScore: 88
    },
    {
        date: '2025-10-15',
        steps: 9500,
        sleep: 7.8,
        weight: 74.3,
        wellnessScore: 90
    },
    {
        date: '2025-10-16',
        steps: 11000,
        sleep: 8.0,
        weight: 74.1,
        wellnessScore: 92
    },
    {
        date: '2025-10-17',
        steps: 12000,
        sleep: 7.9,
        weight: 73.8,
        wellnessScore: 95
    },
    {
        date: '2025-10-18',
        steps: 11500,
        sleep: 7.7,
        weight: 73.5,
        wellnessScore: 93
    }
];
const PerformanceGraph = () => {
    return ((0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 3, mt: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", gutterBottom: true, children: "Health Performance Trends" }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { width: '100%', height: 400 }, children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, { data: healthData, margin: {
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "date" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { yAxisId: "left" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { yAxisId: "right", orientation: "right" }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, {}), (0, jsx_runtime_1.jsx)(recharts_1.Legend, {}), (0, jsx_runtime_1.jsx)(recharts_1.Line, { yAxisId: "left", type: "monotone", dataKey: "wellnessScore", stroke: "#8884d8", name: "Wellness Score" }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { yAxisId: "left", type: "monotone", dataKey: "steps", stroke: "#82ca9d", name: "Steps (\u00D7100)" }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { yAxisId: "right", type: "monotone", dataKey: "sleep", stroke: "#ffc658", name: "Sleep (hours)" })] }) }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body2", color: "text.secondary", sx: { mt: 2 }, children: "Your wellness score is calculated based on various factors including daily activity, sleep quality, and other health metrics. A score above 80 indicates excellent health management." })] }));
};
exports.default = PerformanceGraph;
