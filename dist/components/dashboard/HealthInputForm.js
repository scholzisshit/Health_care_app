"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const HealthInputForm = ({ onSubmit }) => {
    const [formData, setFormData] = (0, react_1.useState)({
        weight: '',
        bloodPressure: '',
        glucoseLevel: '',
        mood: ''
    });
    const [error, setError] = (0, react_1.useState)('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.weight || !formData.bloodPressure || !formData.glucoseLevel || !formData.mood) {
            setError('Please fill in all fields');
            return;
        }
        onSubmit(formData);
        setFormData({ weight: '', bloodPressure: '', glucoseLevel: '', mood: '' });
        setError('');
    };
    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 3, maxWidth: 500, mx: 'auto', mt: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", gutterBottom: true, children: "Enter Today's Health Data" }), error && (0, jsx_runtime_1.jsx)(material_1.Alert, { severity: "error", sx: { mb: 2 }, children: error }), (0, jsx_runtime_1.jsxs)(material_1.Box, { component: "form", onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: true, label: "Weight (kg)", value: formData.weight, onChange: handleChange('weight'), margin: "normal", type: "number" }), (0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: true, label: "Blood Pressure (systolic/diastolic)", value: formData.bloodPressure, onChange: handleChange('bloodPressure'), margin: "normal", placeholder: "120/80" }), (0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: true, label: "Glucose Level (mg/dL)", value: formData.glucoseLevel, onChange: handleChange('glucoseLevel'), margin: "normal", type: "number" }), (0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: true, label: "Mood", value: formData.mood, onChange: handleChange('mood'), margin: "normal" }), (0, jsx_runtime_1.jsx)(material_1.Button, { type: "submit", variant: "contained", color: "primary", sx: { mt: 2 }, fullWidth: true, children: "Submit" })] })] }));
};
exports.default = HealthInputForm;
