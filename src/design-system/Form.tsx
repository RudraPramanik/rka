'use client';
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { FoodItem } from '../types';

interface FormProps {
  onSave: (food: Omit<FoodItem, 'id'> & { id?: number }) => void;
  existingFood?: FoodItem;
}

const Form: React.FC<FormProps> = ({ onSave, existingFood }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (existingFood) {
      setName(existingFood.name);
      setDescription(existingFood.description);
      setPrice(existingFood.price);
    } else {
      setName('');
      setDescription('');
      setPrice(0);
    }
  }, [existingFood]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: existingFood?.id, name, description, price });
    setName('');
    setDescription('');
    setPrice(0);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="m-4">
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth margin="normal" />
      <TextField label="Price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">Save</Button>
    </Box>
  );
};

export default Form;
