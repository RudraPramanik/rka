'use client';
import React, { useState } from 'react';
import { FoodCard, Form } from '@/design-system';
import { FoodItem } from '@/types';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import { useMenu } from '@/context/MenuContext';

const Home: React.FC = () => {
  const { menuItems, addFood, editFood, deleteFood } = useMenu();
  const [editingFood, setEditingFood] = useState<FoodItem | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const handleDelete = (id: number) => {
    deleteFood(id);
  };

  const handleEdit = (id: number) => {
    const foodToEdit = menuItems.find((item) => item.id === id);
    if (foodToEdit) {
      setEditingFood(foodToEdit);
      setOpen(true);
    }
  };

  const handleSave = (food: Omit<FoodItem, 'id'> & { id?: number }) => {
    if (food.id) {
      editFood(food as FoodItem);
    } else {
      addFood(food);
    }
    setEditingFood(undefined);
    setOpen(false);
  };

  const handleAddNewFood = () => {
    setEditingFood(undefined);
    setOpen(true);
  };

  const handleCancel = () => {
    setEditingFood(undefined);
    setOpen(false);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-end m-4">
          <Button variant="contained" className='bg-[#1a237e]' onClick={handleAddNewFood}>
            Add New Food
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {menuItems.map((food) => (
            <FoodCard key={food.id} {...food} onDelete={handleDelete} onEdit={handleEdit} />
          ))}
        </div>
        <Dialog open={open} onClose={handleCancel}>
          <DialogTitle>{editingFood ? 'Edit Food' : 'Add New Food'}</DialogTitle>
          <DialogContent>
            <Form onSave={handleSave} existingFood={editingFood} onCancel={handleCancel} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Home;

