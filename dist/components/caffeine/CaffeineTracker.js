"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const CaffeineChart_1 = __importDefault(require("./CaffeineChart"));
const CaffeineRecipes_1 = __importDefault(require("./CaffeineRecipes"));
const defaultDrinks = [
    { name: 'Espresso (1 shot)', caffeine: 64 },
    { name: 'Brewed Coffee (8 oz)', caffeine: 95 },
    { name: 'Cold Brew (8 oz)', caffeine: 200 },
    { name: 'Green Tea (8 oz)', caffeine: 28 },
    { name: 'Black Tea (8 oz)', caffeine: 47 },
    { name: 'Energy Drink (8 oz)', caffeine: 80 },
    { name: 'Cola (12 oz)', caffeine: 34 },
];
const CaffeineTracker = () => {
    const [selectedDrink, setSelectedDrink] = (0, react_1.useState)('');
    const [customDrink, setCustomDrink] = (0, react_1.useState)('');
    const [customCaffeine, setCustomCaffeine] = (0, react_1.useState)('');
    const [dailyTotal, setDailyTotal] = (0, react_1.useState)(0);
    const [error, setError] = (0, react_1.useState)('');
    const handleAddDrink = () => {
        if (!selectedDrink) {
            setError('Please select a drink');
            return;
        }
        let caffeineAmount = 0;
        if (selectedDrink === 'custom') {
            if (!customDrink || !customCaffeine) {
                setError('Please fill in all custom drink details');
                return;
            }
            caffeineAmount = Number(customCaffeine);
        }
        else {
            const drink = defaultDrinks.find(d => d.name === selectedDrink);
            caffeineAmount = drink ? drink.caffeine : 0;
        }
        const newTotal = dailyTotal + caffeineAmount;
        setDailyTotal(newTotal);
        // persist the daily total so other components (like SleepTracker) can read it
        try {
            localStorage.setItem('dailyCaffeine', String(newTotal));
            // dispatch a custom event so same-window listeners can update
            window.dispatchEvent(new CustomEvent('caffeineUpdate', { detail: newTotal }));
        }
        catch (err) {
            // ignore storage errors
        }
        if (newTotal > 400) {
            setError('Warning: You have exceeded the recommended daily caffeine intake of 400mg');
        }
        else {
            setError('');
        }
        // Reset form
        setSelectedDrink('');
        setCustomDrink('');
        setCustomCaffeine('');
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { p: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h4", gutterBottom: true, children: "Caffeine Tracker" }), (0, jsx_runtime_1.jsxs)(material_1.Grid, { container: true, spacing: 3, children: [(0, jsx_runtime_1.jsxs)(material_1.Grid, { item: true, xs: 12, md: 6, children: [(0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 3, mb: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", gutterBottom: true, children: "Add Caffeine Intake" }), error && (0, jsx_runtime_1.jsx)(material_1.Alert, { severity: "warning", sx: { mb: 2 }, children: error }), (0, jsx_runtime_1.jsxs)(material_1.FormControl, { fullWidth: true, sx: { mb: 2 }, children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, { children: "Select Drink" }), (0, jsx_runtime_1.jsxs)(material_1.Select, { value: selectedDrink, onChange: (e) => setSelectedDrink(e.target.value), label: "Select Drink", children: [defaultDrinks.map((drink) => ((0, jsx_runtime_1.jsxs)(material_1.MenuItem, { value: drink.name, children: [drink.name, " (", drink.caffeine, "mg)"] }, drink.name))), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "custom", children: "Custom Drink" })] })] }), selectedDrink === 'custom' && ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { mb: 2 }, children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: true, label: "Custom Drink Name", value: customDrink, onChange: (e) => setCustomDrink(e.target.value), sx: { mb: 2 } }), (0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: true, label: "Caffeine Content (mg)", type: "number", value: customCaffeine, onChange: (e) => setCustomCaffeine(e.target.value) })] })), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", onClick: handleAddDrink, fullWidth: true, sx: { mt: 2 }, children: "Add Drink" }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { variant: "h6", sx: { mt: 3 }, children: ["Today's Total: ", dailyTotal, "mg"] })] }), (0, jsx_runtime_1.jsx)(CaffeineChart_1.default, {})] }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, md: 6, children: (0, jsx_runtime_1.jsx)(CaffeineRecipes_1.default, {}) })] })] }));
};
exports.default = CaffeineTracker;
