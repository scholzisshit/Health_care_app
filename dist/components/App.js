"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
const Dashboard_1 = __importDefault(require("@mui/icons-material/Dashboard"));
const HealthAndSafety_1 = __importDefault(require("@mui/icons-material/HealthAndSafety"));
const LocalHospital_1 = __importDefault(require("@mui/icons-material/LocalHospital"));
const LocalCafe_1 = __importDefault(require("@mui/icons-material/LocalCafe"));
const Bedtime_1 = __importDefault(require("@mui/icons-material/Bedtime"));
const App = () => {
    const [isDrawerOpen, setIsDrawerOpen] = (0, react_1.useState)(false);
    const [activeComponent, setActiveComponent] = (0, react_1.useState)('dashboard');
    const handleHealthDataSubmit = (data) => {
        console.log('Health data submitted:', data);
        // Here you would typically save this data to your database
    };
    const renderContent = () => {
        return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { p: 4, textAlign: 'center' }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h3", gutterBottom: true, children: "Welcome to Health AI Assistant" }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h5", color: "text.secondary", children: "Your personal health companion" })] }));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.AppBar, { position: "static", children: (0, jsx_runtime_1.jsxs)(material_1.Toolbar, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, { edge: "start", color: "inherit", onClick: () => setIsDrawerOpen(true), sx: { mr: 2 }, children: (0, jsx_runtime_1.jsx)(Menu_1.default, {}) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: "Personal Health AI Assistant" })] }) }), (0, jsx_runtime_1.jsx)(material_1.Drawer, { anchor: "left", open: isDrawerOpen, onClose: () => setIsDrawerOpen(false), children: (0, jsx_runtime_1.jsxs)(material_1.List, { sx: { width: 250 }, children: [(0, jsx_runtime_1.jsxs)(material_1.ListItem, { button: true, onClick: () => { setActiveComponent('dashboard'); setIsDrawerOpen(false); }, children: [(0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { children: (0, jsx_runtime_1.jsx)(Dashboard_1.default, {}) }), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: "Dashboard" })] }), (0, jsx_runtime_1.jsxs)(material_1.ListItem, { button: true, onClick: () => { setActiveComponent('input'); setIsDrawerOpen(false); }, children: [(0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { children: (0, jsx_runtime_1.jsx)(LocalHospital_1.default, {}) }), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: "Input Health Data" })] }), (0, jsx_runtime_1.jsxs)(material_1.ListItem, { button: true, onClick: () => { setActiveComponent('ai'); setIsDrawerOpen(false); }, children: [(0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { children: (0, jsx_runtime_1.jsx)(HealthAndSafety_1.default, {}) }), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: "AI Recommendations" })] }), (0, jsx_runtime_1.jsxs)(material_1.ListItem, { button: true, onClick: () => { setActiveComponent('caffeine'); setIsDrawerOpen(false); }, children: [(0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { children: (0, jsx_runtime_1.jsx)(LocalCafe_1.default, {}) }), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: "Caffeine Tracker" })] }), (0, jsx_runtime_1.jsxs)(material_1.ListItem, { button: true, onClick: () => { setActiveComponent('sleep'); setIsDrawerOpen(false); }, children: [(0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { children: (0, jsx_runtime_1.jsx)(Bedtime_1.default, {}) }), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: "Sleep Tracker" })] })] }) }), (0, jsx_runtime_1.jsx)(material_1.Container, { maxWidth: "lg", sx: { mt: 4 }, children: renderContent() })] }));
};
exports.default = App;
