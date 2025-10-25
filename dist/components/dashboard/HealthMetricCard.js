"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const HealthMetricCard = ({ title, value, unit }) => ((0, jsx_runtime_1.jsx)(material_1.Card, { children: (0, jsx_runtime_1.jsxs)(material_1.CardContent, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { color: "textSecondary", gutterBottom: true, children: title }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { variant: "h4", component: "div", children: [value, unit && (0, jsx_runtime_1.jsxs)(material_1.Typography, { variant: "subtitle1", component: "span", children: [" ", unit] })] })] }) }));
exports.default = HealthMetricCard;
