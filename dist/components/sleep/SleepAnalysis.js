"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const recharts_1 = require("recharts");
const SleepAnalysis = ({ sleepData, caffeineData }) => {
    // Combine sleep and caffeine data for correlation analysis
    const correlationData = sleepData.map(sleep => {
        const matchingCaffeine = caffeineData.find(c => c.date === sleep.date);
        return {
            date: sleep.date,
            sleepQuality: sleep.quality,
            caffeineIntake: matchingCaffeine ?
                matchingCaffeine.coffee + matchingCaffeine.energyDrink + matchingCaffeine.tea + matchingCaffeine.custom : 0,
            hoursSlept: sleep.hoursSlept
        };
    });
    // Calculate optimal wake time based on sleep cycles (90 minutes each)
    const calculateOptimalWakeTime = (bedTime) => {
        const sleepCycleDuration = 90; // minutes
        const idealSleepCycles = 5; // 5-6 cycles is optimal
        const fallAsleepTime = 15; // average time to fall asleep in minutes
        const wakeTime = new Date(bedTime.getTime() +
            ((fallAsleepTime + (sleepCycleDuration * idealSleepCycles)) * 60 * 1000));
        return wakeTime;
    };
    // Calculate sleep score based on various factors
    const calculateSleepScore = (data) => {
        const factors = {
            duration: 0.4, // 40% weight
            quality: 0.3, // 30% weight
            consistency: 0.2, // 20% weight
            caffeineImpact: 0.1 // 10% weight
        };
        const durationScore = Math.min(100, (data.hoursSlept / 8) * 100);
        const qualityScore = data.quality;
        const consistencyScore = 85; // This would be calculated based on sleep schedule regularity
        const caffeineImpact = Math.max(0, 100 - (data.caffeineIntake / 4)); // Reduce score for high caffeine intake
        return (durationScore * factors.duration +
            qualityScore * factors.quality +
            consistencyScore * factors.consistency +
            caffeineImpact * factors.caffeineImpact);
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { width: '100%' }, children: [(0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 3, mb: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", gutterBottom: true, children: "Sleep-Caffeine Correlation" }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { width: '100%', height: 300 }, children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { children: (0, jsx_runtime_1.jsxs)(recharts_1.ScatterChart, { margin: { top: 20, right: 20, bottom: 20, left: 20 }, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, {}), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { type: "number", dataKey: "caffeineIntake", name: "Caffeine Intake", unit: " mg" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { type: "number", dataKey: "sleepQuality", name: "Sleep Quality", unit: "%" }), (0, jsx_runtime_1.jsx)(recharts_1.ZAxis, { type: "number", dataKey: "hoursSlept", range: [50, 400], name: "Hours Slept" }), (0, jsx_runtime_1.jsx)(material_1.Tooltip, { cursor: { strokeDasharray: '3 3' }, labelFormatter: (value) => {
                                            return `Sleep Data: ${value}`;
                                            if (payload && payload.length) {
                                                return ((0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 1 }, children: [(0, jsx_runtime_1.jsxs)(material_1.Typography, { variant: "body2", children: ["Caffeine: ", payload[0].value, "mg"] }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { variant: "body2", children: ["Sleep Quality: ", payload[1].value, "%"] }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { variant: "body2", children: ["Hours Slept: ", payload[0].payload.hoursSlept] })] }));
                                            }
                                            return null;
                                        } }), (0, jsx_runtime_1.jsx)(recharts_1.Scatter, { name: "Sleep-Caffeine Correlation", data: correlationData, fill: "#8884d8" })] }) }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body2", color: "text.secondary", children: "Bubble size represents hours slept. This chart shows the relationship between caffeine intake and sleep quality." })] }), (0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 3, mb: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", gutterBottom: true, children: "Sleep Score Trends" }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { width: '100%', height: 300 }, children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, { data: correlationData.map(data => ({
                                    ...data,
                                    sleepScore: calculateSleepScore(data)
                                })), margin: { top: 5, right: 30, left: 20, bottom: 5 }, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "date" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { domain: [0, 100] }), (0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: "Sleep Data", children: (0, jsx_runtime_1.jsx)("span", { children: "Sleep data visualization" }) }), (0, jsx_runtime_1.jsx)(recharts_1.Legend, {}), (0, jsx_runtime_1.jsx)(recharts_1.ReferenceLine, { y: 80, label: "Optimal Score", stroke: "green", strokeDasharray: "3 3" }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", dataKey: "sleepScore", stroke: "#8884d8", name: "Sleep Score" })] }) }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body2", color: "text.secondary", children: "Sleep score is calculated based on duration, quality, consistency, and caffeine impact. A score above 80 indicates optimal sleep patterns." })] })] }));
};
exports.default = SleepAnalysis;
