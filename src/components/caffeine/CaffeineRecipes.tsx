import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
  Rating
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

interface Recipe {
  name: string;
  caffeineContent: number;
  difficulty: number;
  ingredients: string[];
  instructions: string[];
  preparationTime: string;
}

const recipes: Recipe[] = [
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

const CaffeineRecipes: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Caffeine Drink Recipes
      </Typography>
      {recipes.map((recipe, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' } }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <LocalCafeIcon sx={{ mr: 2 }} />
              <Typography sx={{ flexGrow: 1 }}>{recipe.name}</Typography>
              <Chip
                label={`${recipe.caffeineContent}mg caffeine`}
                size="small"
                sx={{ mr: 1 }}
              />
              <Rating
                value={recipe.difficulty}
                readOnly
                size="small"
                max={5}
                sx={{ ml: 1 }}
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2" gutterBottom>
              Preparation Time: {recipe.preparationTime}
            </Typography>
            
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Ingredients:
            </Typography>
            <List dense>
              {recipe.ingredients.map((ingredient, i) => (
                <ListItem key={i}>
                  <ListItemText primary={ingredient} />
                </ListItem>
              ))}
            </List>

            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Instructions:
            </Typography>
            <List dense>
              {recipe.instructions.map((instruction, i) => (
                <ListItem key={i}>
                  <ListItemText primary={`${i + 1}. ${instruction}`} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
};

export default CaffeineRecipes;