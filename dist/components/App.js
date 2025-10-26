"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const Dashboard_1 = __importDefault(require("./dashboard/Dashboard"));
const HealthInputForm_1 = __importDefault(require("./dashboard/HealthInputForm"));
const AIRecommendations_1 = __importDefault(require("./dashboard/AIRecommendations"));
const CaffeineTracker_1 = __importDefault(require("./caffeine/CaffeineTracker"));
const SleepTracker_1 = __importDefault(require("./sleep/SleepTracker"));
const NavBar_1 = __importDefault(require("./NavBar"));
const App = () => {
    const [activeComponent, setActiveComponent] = (0, react_1.useState)('dashboard');
    const [darkMode, setDarkMode] = (0, react_1.useState)(() => {
        const saved = localStorage.getItem('darkMode');
        // default to dark theme if nothing saved
        return saved ? JSON.parse(saved) : true;
    });
    (0, react_1.useEffect)(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);
    const theme = (0, react_1.useMemo)(() => (0, material_1.createTheme)({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            // Use yellow as the accent (primary) color
            primary: {
                main: '#FFD600', // bright yellow accent
                contrastText: '#000000',
            },
            // keep secondary subtle
            secondary: {
                main: '#FFC107',
            },
        },
        components: {
            MuiAppBar: {
                defaultProps: {
                    color: 'primary',
                },
            },
        },
    }), [darkMode]);
    const handleHealthDataSubmit = (data) => {
        console.log('Health data submitted:', data);
        // Here you would typically save this data to your database
    };
    const renderContent = () => {
        switch (activeComponent) {
            case 'dashboard':
                return (0, jsx_runtime_1.jsx)(Dashboard_1.default, {});
            case 'input':
                return (0, jsx_runtime_1.jsx)(HealthInputForm_1.default, { onSubmit: handleHealthDataSubmit });
            case 'ai':
                return (0, jsx_runtime_1.jsx)(AIRecommendations_1.default, {});
            case 'caffeine':
                return (0, jsx_runtime_1.jsx)(CaffeineTracker_1.default, {});
            case 'sleep':
                return (0, jsx_runtime_1.jsx)(SleepTracker_1.default, {});
            default:
                return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { p: 4, textAlign: 'center' }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h3", gutterBottom: true, children: "Welcome to Health AI Assistant" }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h5", color: "text.secondary", children: "Your personal health companion" })] }));
        }
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.ThemeProvider, { theme: theme, children: [(0, jsx_runtime_1.jsx)(material_1.CssBaseline, {}), (0, jsx_runtime_1.jsx)(NavBar_1.default, { value: activeComponent, onChange: (v) => setActiveComponent(v), darkMode: darkMode, toggleDarkMode: () => setDarkMode((d) => !d) }), (0, jsx_runtime_1.jsx)(material_1.Container, { maxWidth: "lg", sx: { mt: 4 }, children: renderContent() })] }));
};
exports.default = App;
