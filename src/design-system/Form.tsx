'use client';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { FoodItem, FormInputs } from '../types';

interface FormProps {
  onSave: (food: Omit<FoodItem, 'id'> & { id?: number }) => void;
  existingFood?: FoodItem;
  onCancel: () => void;
}

const Form: React.FC<FormProps> = ({ onSave, existingFood, onCancel }) => {
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<FormInputs>();

  useEffect(() => {
    if (existingFood) {
      setValue('name', existingFood.name);
      setValue('description', existingFood.description);
      setValue('price', existingFood.price.toString());
    } else {
      reset();
    }
  }, [existingFood, setValue, reset]);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const { name, description, price } = data;
    onSave({ id: existingFood?.id, name, description, price: Number(price) });
    reset();
    onCancel();
  };

  const handleCancel = () => {
    reset();
    onCancel();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} className="m-4">
      <TextField 
        label="Name" 
        fullWidth 
        margin="normal" 
        error={!!errors.name}
        helperText={errors.name ? 'Name is required' : ''}
        {...register('name', { required: true })}
      />
      <TextField 
        label="Description" 
        fullWidth 
        margin="normal" 
        {...register('description')}
      />
      <TextField 
        label="Price" 
        fullWidth 
        margin="normal" 
        error={!!errors.price}
        helperText={errors.price ? 'Price must be a number greater than 0' : ''}
        {...register('price', { 
          required: true, 
          validate: value => !isNaN(Number(value)) && Number(value) > 0
        })}
      />
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button type="submit" variant="contained" className='bg-[#1a237e]' >Save</Button>
        <Button type="button" variant="outlined" color="secondary" onClick={handleCancel}>Cancel</Button>
      </Box>
    </Box>
  );
};

export default Form;
