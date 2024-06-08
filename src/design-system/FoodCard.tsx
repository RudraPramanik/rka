import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { FoodItem } from '../types';

interface FoodCardProps extends FoodItem {
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ id, name, description, price, onDelete, onEdit }) => {
  return (
    <Card className="m-4">
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography>{description}</Typography>
        <Typography>${price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEdit(id)}>Edit</Button>
        <Button size="small" onClick={() => onDelete(id)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default FoodCard;
