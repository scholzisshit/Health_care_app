"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SleepChart_1 = __importDefault(require("./SleepChart"));
const SleepAnalysis_1 = __importDefault(require("./SleepAnalysis"));
const material_1 = require("@mui/material");
const TimePicker_1 = require("@mui/x-date-pickers/TimePicker");
const AdapterDateFns_1 = require("@mui/x-date-pickers/AdapterDateFns");
const LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
const date_fns_1 = require("date-fns");
const SleepTracker = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        bedTime: null,
        wakeTime: null,
        quality: 0,
        mood: '',
        notes: ''
    });
    const [sleepGoals, setSleepGoals] = (0, react_1.useState)({
        targetBedtime: null,
        targetWakeTime: null,
        targetDuration: 8,
        targetQuality: 85
    });
    const [showGoalSettings, setShowGoalSettings] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    // Sample caffeine data - In a real app, this would come from your CaffeineTracker
    const [recentCaffeineIntake, setRecentCaffeineIntake] = (0, react_1.useState)(0);
    const calculateSleepDuration = () => {
        if (formData.bedTime && formData.wakeTime) {
            const duration = (formData.wakeTime.getTime() - formData.bedTime.getTime()) / (1000 * 60 * 60);
            return Math.round(duration * 10) / 10;
        }
        return null;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.bedTime || !formData.wakeTime) {
            setError('Please fill in both bed time and wake time');
            return;
        }
        const duration = calculateSleepDuration();
        if (duration && (duration < 0 || duration > 24)) {
            setError('Sleep duration must be between 0 and 24 hours');
            return;
        }
        // Here you would typically save the sleep data
        console.log('Sleep data:', {
            ...formData,
            duration,
            bedTime: formData.bedTime ? (0, date_fns_1.format)(formData.bedTime, 'HH:mm') : null,
            wakeTime: formData.wakeTime ? (0, date_fns_1.format)(formData.wakeTime, 'HH:mm') : null,
        });
        // Reset form
        setFormData({
            bedTime: null,
            wakeTime: null,
            quality: 0,
            mood: '',
            notes: ''
        });
        setError('');
    };
    const sleepTips = [
        "Maintain a consistent sleep schedule",
        "Avoid screens 1 hour before bedtime",
        "Keep your bedroom cool and dark",
        "Avoid caffeine in the evening",
        "Exercise regularly, but not close to bedtime"
    ];
    return ((0, jsx_runtime_1.jsx)(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDateFns_1.AdapterDateFns, children: (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { p: 3 }, children: (0, jsx_runtime_1.jsxs)(material_1.Grid, { container: true, spacing: 3, children: [(0, jsx_runtime_1.jsxs)(material_1.Grid, { item: true, xs: 12, md: 6, children: [(0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", gutterBottom: true, children: "Log Sleep" }), error && (0, jsx_runtime_1.jsx)(material_1.Alert, { severity: "error", sx: { mb: 2 }, children: error }), (0, jsx_runtime_1.jsxs)(material_1.Box, { component: "form", onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)(TimePicker_1.TimePicker, { label: "Bed Time", value: formData.bedTime, onChange: (newValue) => setFormData({ ...formData, bedTime: newValue }), sx: { mb: 2, width: '100%' } }), (0, jsx_runtime_1.jsx)(TimePicker_1.TimePicker, { label: "Wake Time", value: formData.wakeTime, onChange: (newValue) => setFormData({ ...formData, wakeTime: newValue }), sx: { mb: 2, width: '100%' } }), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { mb: 2 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { gutterBottom: true, children: "Sleep Quality" }), (0, jsx_runtime_1.jsx)(material_1.Rating, { name: "sleep-quality", value: formData.quality, onChange: (event, newValue) => {
                                                            setFormData({ ...formData, quality: newValue || 0 });
                                                        }, size: "large" })] }), (0, jsx_runtime_1.jsxs)(material_1.FormControl, { fullWidth: true, sx: { mb: 2 }, children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, { children: "Morning Mood" }), (0, jsx_runtime_1.jsxs)(material_1.Select, { value: formData.mood, label: "Morning Mood", onChange: (e) => setFormData({ ...formData, mood: e.target.value }), children: [(0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "energized", children: "Energized" }), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "refreshed", children: "Refreshed" }), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "neutral", children: "Neutral" }), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "tired", children: "Tired" }), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "exhausted", children: "Exhausted" })] })] }), (0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: true, multiline: true, rows: 3, label: "Notes", value: formData.notes, onChange: (e) => setFormData({ ...formData, notes: e.target.value }), sx: { mb: 2 } }), (0, jsx_runtime_1.jsx)(material_1.Button, { type: "submit", variant: "contained", fullWidth: true, size: "large", children: "Save Sleep Log" })] })] }), (0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 3, mt: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", gutterBottom: true, children: "Sleep Tips" }), (0, jsx_runtime_1.jsx)(material_1.Box, { component: "ul", sx: { pl: 2 }, children: sleepTips.map((tip, index) => ((0, jsx_runtime_1.jsx)(material_1.Typography, { component: "li", gutterBottom: true, children: tip }, index))) })] })] }), (0, jsx_runtime_1.jsxs)(material_1.Grid, { item: true, xs: 12, md: 6, children: [(0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 3, mb: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", gutterBottom: true, children: "Sleep Goals & Recommendations" }), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { mb: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "subtitle1", gutterBottom: true, children: "Sleep Goal Settings" }), (0, jsx_runtime_1.jsxs)(material_1.Grid, { container: true, spacing: 2, children: [(0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, children: (0, jsx_runtime_1.jsx)(TimePicker_1.TimePicker, { label: "Target Bedtime", value: sleepGoals.targetBedtime, onChange: (newValue) => setSleepGoals({ ...sleepGoals, targetBedtime: newValue }), sx: { width: '100%', mb: 2 } }) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, children: (0, jsx_runtime_1.jsx)(TimePicker_1.TimePicker, { label: "Target Wake Time", value: sleepGoals.targetWakeTime, onChange: (newValue) => setSleepGoals({ ...sleepGoals, targetWakeTime: newValue }), sx: { width: '100%', mb: 2 } }) })] })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { mb: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "subtitle1", gutterBottom: true, children: "Smart Recommendations" }), recentCaffeineIntake > 100 && ((0, jsx_runtime_1.jsx)(material_1.Alert, { severity: "warning", sx: { mb: 2 }, children: "Your recent caffeine intake may affect your sleep. Consider avoiding caffeine after 2 PM." })), formData.bedTime && ((0, jsx_runtime_1.jsxs)(material_1.Alert, { severity: "info", sx: { mb: 2 }, children: ["Based on your bedtime, optimal wake times for complete sleep cycles:", (0, jsx_runtime_1.jsxs)(material_1.Box, { component: "ul", sx: { mt: 1, pl: 2 }, children: [(0, jsx_runtime_1.jsxs)(material_1.Typography, { component: "li", children: ["First option: ", (0, date_fns_1.format)(calculateOptimalWakeTime(formData.bedTime, 5), 'HH:mm')] }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { component: "li", children: ["Second option: ", (0, date_fns_1.format)(calculateOptimalWakeTime(formData.bedTime, 6), 'HH:mm')] })] })] }))] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { mb: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "subtitle1", gutterBottom: true, children: "Sleep Cycle Analysis" }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body2", paragraph: true, children: "A complete sleep cycle lasts about 90 minutes, with 5-6 cycles recommended per night. Your current sleep pattern shows:" }), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { pl: 2 }, children: [(0, jsx_runtime_1.jsxs)(material_1.Typography, { variant: "body2", children: ["\u2022 Average cycles per night: ", ((dailyAverage || 8) / 1.5).toFixed(1)] }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { variant: "body2", children: ["\u2022 Deep sleep percentage: ", ((deepSleepAverage || 2.5) / (dailyAverage || 8) * 100).toFixed(1), "%"] }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { variant: "body2", children: ["\u2022 REM sleep percentage: ", ((remSleepAverage || 1.5) / (dailyAverage || 8) * 100).toFixed(1), "%"] })] })] })] }), (0, jsx_runtime_1.jsx)(SleepChart_1.default, {}), (0, jsx_runtime_1.jsx)(SleepAnalysis_1.default, { sleepData: sleepData, caffeineData: caffeineData })] })] }) }) }));
};
// Helper function to calculate optimal wake time based on sleep cycles
const calculateOptimalWakeTime = (bedTime, cycles) => {
    const cycleLength = 90; // minutes
    const fallAsleepBuffer = 15; // minutes
    return new Date(bedTime.getTime() + ((fallAsleepBuffer + (cycleLength * cycles)) * 60 * 1000));
};
// Mock data - In a real app, these would be calculated from actual sleep records
const dailyAverage = 7.8;
const deepSleepAverage = 2.4;
const remSleepAverage = 1.8;
const sleepData = [];
const caffeineData = [];
exports.default = SleepTracker;
