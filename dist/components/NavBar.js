"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const Dashboard_1 = __importDefault(require("@mui/icons-material/Dashboard"));
const HealthAndSafety_1 = __importDefault(require("@mui/icons-material/HealthAndSafety"));
const LocalHospital_1 = __importDefault(require("@mui/icons-material/LocalHospital"));
const LocalCafe_1 = __importDefault(require("@mui/icons-material/LocalCafe"));
const Bedtime_1 = __importDefault(require("@mui/icons-material/Bedtime"));
const Brightness4_1 = __importDefault(require("@mui/icons-material/Brightness4"));
const Brightness7_1 = __importDefault(require("@mui/icons-material/Brightness7"));
const Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
const DeleteForever_1 = __importDefault(require("@mui/icons-material/DeleteForever"));
const NavBar = ({ value, onChange, darkMode, toggleDarkMode }) => {
    const [menuAnchorEl, setMenuAnchorEl] = (0, react_1.useState)(null);
    const [confirmOpen, setConfirmOpen] = (0, react_1.useState)(false);
    const handleMenuOpen = (e) => setMenuAnchorEl(e.currentTarget);
    const handleMenuClose = () => setMenuAnchorEl(null);
    const handleRequestReset = () => {
        // close menu first, then open confirmation
        handleMenuClose();
        setConfirmOpen(true);
    };
    const handleConfirmReset = () => {
        // Clear localStorage (app persisted data) and reload the app
        try {
            localStorage.clear();
        }
        catch (err) {
            // ignore
        }
        setConfirmOpen(false);
        // reload to reset in-memory state
        window.location.reload();
    };
    return ((0, jsx_runtime_1.jsx)(material_1.AppBar, { position: "static", color: "primary", elevation: 3, children: (0, jsx_runtime_1.jsxs)(material_1.Toolbar, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, { edge: "start", color: "inherit", "aria-label": "menu", onClick: handleMenuOpen, sx: { mr: 1 }, children: (0, jsx_runtime_1.jsx)(Menu_1.default, {}) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", component: "div", sx: { mr: 3 }, children: "Health AI Assistant" }), (0, jsx_runtime_1.jsxs)(material_1.Tabs, { value: value, onChange: (_, newVal) => onChange(newVal), textColor: "inherit", sx: { flexGrow: 1 }, TabIndicatorProps: { style: { backgroundColor: '#FFD600' } }, children: [(0, jsx_runtime_1.jsx)(material_1.Tab, { value: "dashboard", label: "Dashboard", icon: (0, jsx_runtime_1.jsx)(Dashboard_1.default, {}), iconPosition: "start", sx: { minHeight: 64 } }), (0, jsx_runtime_1.jsx)(material_1.Tab, { value: "input", label: "Input Health", icon: (0, jsx_runtime_1.jsx)(LocalHospital_1.default, {}), iconPosition: "start", sx: { minHeight: 64 } }), (0, jsx_runtime_1.jsx)(material_1.Tab, { value: "ai", label: "AI Recs", icon: (0, jsx_runtime_1.jsx)(HealthAndSafety_1.default, {}), iconPosition: "start", sx: { minHeight: 64 } }), (0, jsx_runtime_1.jsx)(material_1.Tab, { value: "caffeine", label: "Caffeine", icon: (0, jsx_runtime_1.jsx)(LocalCafe_1.default, {}), iconPosition: "start", sx: { minHeight: 64 } }), (0, jsx_runtime_1.jsx)(material_1.Tab, { value: "sleep", label: "Sleep", icon: (0, jsx_runtime_1.jsx)(Bedtime_1.default, {}), iconPosition: "start", sx: { minHeight: 64 } })] }), (0, jsx_runtime_1.jsx)(material_1.IconButton, { onClick: toggleDarkMode, color: "inherit", sx: { ml: 2 }, children: darkMode ? (0, jsx_runtime_1.jsx)(Brightness7_1.default, {}) : (0, jsx_runtime_1.jsx)(Brightness4_1.default, {}) }), (0, jsx_runtime_1.jsx)(material_1.Menu, { anchorEl: menuAnchorEl, open: Boolean(menuAnchorEl), onClose: handleMenuClose, anchorOrigin: { vertical: 'bottom', horizontal: 'left' }, transformOrigin: { vertical: 'top', horizontal: 'left' }, children: (0, jsx_runtime_1.jsxs)(material_1.MenuItem, { onClick: handleRequestReset, children: [(0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { children: (0, jsx_runtime_1.jsx)(DeleteForever_1.default, { fontSize: "small" }) }), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { children: "Reset All User Data" })] }) }), (0, jsx_runtime_1.jsxs)(material_1.Dialog, { open: confirmOpen, onClose: () => setConfirmOpen(false), children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: "Reset all user data?" }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: (0, jsx_runtime_1.jsx)(material_1.DialogContentText, { children: "This will clear all locally stored user settings and data (localStorage) and reload the app. This action cannot be undone." }) }), (0, jsx_runtime_1.jsxs)(material_1.DialogActions, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, { onClick: () => setConfirmOpen(false), children: "Cancel" }), (0, jsx_runtime_1.jsx)(material_1.Button, { color: "error", onClick: handleConfirmReset, children: "Reset" })] })] })] }) }));
};
exports.default = NavBar;
