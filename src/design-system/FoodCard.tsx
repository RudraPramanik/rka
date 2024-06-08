import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { FoodItem } from '../types';

interface FoodCardProps extends FoodItem {
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ id, name, description, price, onDelete, onEdit }) => {
  return (
    <Card sx={{ backgroundColor: '#1a237e', color: 'white', m: 4 }}>
      <CardContent>
        <Typography variant="h5" sx={{ color: 'white' }}>{name}</Typography>
        <Typography sx={{ color: 'white' }}>{description}</Typography>
        <Typography sx={{ color: 'white' }}>${price}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" sx={{ color: 'white' }} onClick={() => onEdit(id)}>Edit</Button>
        <Button variant="outlined" size="small" sx={{ color: 'white' }} onClick={() => onDelete(id)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default FoodCard;
