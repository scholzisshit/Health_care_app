"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const DirectionsRun_1 = __importDefault(require("@mui/icons-material/DirectionsRun"));
const LocalCafe_1 = __importDefault(require("@mui/icons-material/LocalCafe"));
const Bedtime_1 = __importDefault(require("@mui/icons-material/Bedtime"));
const TrendingUp_1 = __importDefault(require("@mui/icons-material/TrendingUp"));
const Notifications_1 = __importDefault(require("@mui/icons-material/Notifications"));
const Favorite_1 = __importDefault(require("@mui/icons-material/Favorite"));
const Opacity_1 = __importDefault(require("@mui/icons-material/Opacity"));
const HealthMetricCard_1 = __importDefault(require("./HealthMetricCard"));
const PerformanceGraph_1 = __importDefault(require("./PerformanceGraph"));
const Dashboard = () => {
    const theme = (0, material_1.useTheme)();
    const [currentTime, setCurrentTime] = (0, react_1.useState)(new Date());
    const healthMetrics = [
        { title: 'Daily Steps', value: '11,500', unit: 'steps', icon: (0, jsx_runtime_1.jsx)(DirectionsRun_1.default, { color: "primary" }) },
        { title: 'Heart Rate', value: '72', unit: 'bpm', icon: (0, jsx_runtime_1.jsx)(Favorite_1.default, { sx: { color: '#e91e63' } }) },
        { title: 'Sleep', value: '7.7', unit: 'hours', icon: (0, jsx_runtime_1.jsx)(Bedtime_1.default, { sx: { color: '#673ab7' } }) },
        { title: 'Water Intake', value: '2.1', unit: 'L', icon: (0, jsx_runtime_1.jsx)(Opacity_1.default, { sx: { color: '#2196f3' } }) },
    ];
    const quickActions = [
        { title: 'Track Sleep', icon: (0, jsx_runtime_1.jsx)(Bedtime_1.default, {}), color: '#673ab7', route: 'sleep' },
        { title: 'Log Caffeine', icon: (0, jsx_runtime_1.jsx)(LocalCafe_1.default, {}), color: '#795548', route: 'caffeine' },
        { title: 'View Progress', icon: (0, jsx_runtime_1.jsx)(TrendingUp_1.default, {}), color: '#2196f3', route: 'progress' },
    ];
    const dailyInsights = [
        {
            title: 'Sleep Schedule',
            message: 'Optimal bedtime in 2 hours (10:30 PM) for a full 8-hour rest',
            severity: 'info'
        },
        {
            title: 'Caffeine Intake',
            message: 'You\'ve consumed 200mg of caffeine today (50% of daily limit)',
            severity: 'success'
        },
        {
            title: 'Activity Goal',
            message: '1,500 more steps to reach your daily goal',
            severity: 'warning'
        }
    ];
    (0, react_1.useEffect)(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const getTimeBasedGreeting = () => {
        const hour = currentTime.getHours();
        if (hour < 12)
            return 'Good Morning';
        if (hour < 18)
            return 'Good Afternoon';
        return 'Good Evening';
    };
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { flexGrow: 1, p: 3 }, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h3", gutterBottom: true, children: getTimeBasedGreeting() }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", color: "text.secondary", children: formatDate(currentTime) })] }), (0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "large", color: "primary", children: (0, jsx_runtime_1.jsx)(Notifications_1.default, {}) })] }), (0, jsx_runtime_1.jsx)(material_1.Grid, { container: true, spacing: 3, sx: { mb: 4 }, children: healthMetrics.map((metric, index) => ((0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: 6, md: 3, children: (0, jsx_runtime_1.jsx)(HealthMetricCard_1.default, { title: metric.title, value: metric.value, unit: metric.unit }) }, index))) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h5", gutterBottom: true, sx: { mb: 2 }, children: "Quick Actions" }), (0, jsx_runtime_1.jsx)(material_1.Grid, { container: true, spacing: 2, sx: { mb: 4 }, children: quickActions.map((action, index) => ((0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: 4, children: (0, jsx_runtime_1.jsx)(material_1.Card, { sx: {
                            cursor: 'pointer',
                            transition: '0.3s',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: theme.shadows[4]
                            }
                        }, children: (0, jsx_runtime_1.jsxs)(material_1.CardContent, { sx: { textAlign: 'center' }, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                                        backgroundColor: `${action.color}20`,
                                        borderRadius: '50%',
                                        width: 60,
                                        height: 60,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 16px auto'
                                    }, children: (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { color: action.color }, children: action.icon }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", children: action.title })] }) }) }, index))) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h5", gutterBottom: true, sx: { mb: 2 }, children: "Daily Insights" }), (0, jsx_runtime_1.jsx)(material_1.Grid, { container: true, spacing: 2, sx: { mb: 4 }, children: dailyInsights.map((insight, index) => ((0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, children: (0, jsx_runtime_1.jsxs)(material_1.Alert, { severity: insight.severity, sx: { '& .MuiAlert-message': { width: '100%' } }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "subtitle1", fontWeight: "bold", children: insight.title }), insight.message] }) }, index))) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h5", gutterBottom: true, sx: { mb: 2 }, children: "Weekly Performance" }), (0, jsx_runtime_1.jsx)(material_1.Paper, { sx: { p: 2 }, children: (0, jsx_runtime_1.jsx)(PerformanceGraph_1.default, {}) })] }));
};
exports.default = Dashboard;
