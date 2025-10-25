"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const HealthAndSafety_1 = __importDefault(require("@mui/icons-material/HealthAndSafety"));
const AIRecommendations = () => {
    const recommendations = [
        "Based on your sleep pattern, try going to bed 30 minutes earlier",
        "Your step count is below target. Consider a 15-minute walk after lunch",
        "Water intake is good! Keep maintaining this level",
        "Your blood pressure readings suggest you might benefit from stress-reduction activities",
        "Consider adding more protein to your breakfast based on your energy levels"
    ];
    return ((0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 3, mt: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", gutterBottom: true, children: "AI Health Recommendations" }), (0, jsx_runtime_1.jsx)(material_1.List, { children: recommendations.map((recommendation, index) => ((0, jsx_runtime_1.jsxs)(material_1.ListItem, { children: [(0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { children: (0, jsx_runtime_1.jsx)(HealthAndSafety_1.default, { color: "primary" }) }), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: recommendation })] }, index))) })] }));
};
exports.default = AIRecommendations;
