"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const LocalCafe_1 = __importDefault(require("@mui/icons-material/LocalCafe"));
const recipes = [
    {
        name: "Cold Brew Coffee",
        caffeineContent: 200,
        difficulty: 2,
        ingredients: [
            "100g coarse ground coffee",
            "1L cold water",
            "Optional: milk or sweetener"
        ],
        instructions: [
            "Combine coffee grounds and cold water in a large jar",
            "Stir gently to ensure all grounds are saturated",
            "Cover and refrigerate for 12-24 hours",
            "Strain through a fine-mesh sieve lined with cheesecloth",
            "Dilute with water or milk to taste"
        ],
        preparationTime: "12-24 hours"
    },
    {
        name: "Matcha Green Tea Latte",
        caffeineContent: 70,
        difficulty: 3,
        ingredients: [
            "2 tsp ceremonial grade matcha powder",
            "2 oz hot water (175°F)",
            "6 oz steamed milk",
            "Optional: honey or sweetener"
        ],
        instructions: [
            "Sift matcha powder into a bowl to remove clumps",
            "Add hot water and whisk in a 'W' motion until frothy",
            "Steam milk until warm and slightly frothy",
            "Combine matcha mixture with steamed milk",
            "Add sweetener if desired"
        ],
        preparationTime: "5 minutes"
    },
    {
        name: "Homemade Energy Drink",
        caffeineContent: 120,
        difficulty: 2,
        ingredients: [
            "1 green tea bag",
            "1 cup hot water",
            "1 tbsp honey",
            "1/4 tsp ginger powder",
            "Juice of 1/2 lemon",
            "Pinch of salt"
        ],
        instructions: [
            "Steep green tea in hot water for 3 minutes",
            "Remove tea bag and let cool slightly",
            "Add honey and stir until dissolved",
            "Add ginger powder, lemon juice, and salt",
            "Stir well and serve over ice"
        ],
        preparationTime: "10 minutes"
    }
];
const CaffeineRecipes = () => {
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Paper, { sx: { p: 3, mt: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", gutterBottom: true, children: "Caffeine Drink Recipes" }), recipes.map((recipe, index) => ((0, jsx_runtime_1.jsxs)(material_1.Accordion, { expanded: expanded === `panel${index}`, onChange: handleChange(`panel${index}`), children: [(0, jsx_runtime_1.jsx)(material_1.AccordionSummary, { expandIcon: (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}), sx: { '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' } }, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { display: 'flex', alignItems: 'center', width: '100%' }, children: [(0, jsx_runtime_1.jsx)(LocalCafe_1.default, { sx: { mr: 2 } }), (0, jsx_runtime_1.jsx)(material_1.Typography, { sx: { flexGrow: 1 }, children: recipe.name }), (0, jsx_runtime_1.jsx)(material_1.Chip, { label: `${recipe.caffeineContent}mg caffeine`, size: "small", sx: { mr: 1 } }), (0, jsx_runtime_1.jsx)(material_1.Rating, { value: recipe.difficulty, readOnly: true, size: "small", max: 5, sx: { ml: 1 } })] }) }), (0, jsx_runtime_1.jsxs)(material_1.AccordionDetails, { children: [(0, jsx_runtime_1.jsxs)(material_1.Typography, { variant: "subtitle2", gutterBottom: true, children: ["Preparation Time: ", recipe.preparationTime] }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "subtitle1", sx: { mt: 2 }, children: "Ingredients:" }), (0, jsx_runtime_1.jsx)(material_1.List, { dense: true, children: recipe.ingredients.map((ingredient, i) => ((0, jsx_runtime_1.jsx)(material_1.ListItem, { children: (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: ingredient }) }, i))) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "subtitle1", sx: { mt: 2 }, children: "Instructions:" }), (0, jsx_runtime_1.jsx)(material_1.List, { dense: true, children: recipe.instructions.map((instruction, i) => ((0, jsx_runtime_1.jsx)(material_1.ListItem, { children: (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: `${i + 1}. ${instruction}` }) }, i))) })] })] }, index)))] }));
};
exports.default = CaffeineRecipes;
