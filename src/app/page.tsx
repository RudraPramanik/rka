'use client';
import { foodItems } from '@/utils/data';
import { FoodCard, Form } from '@/design-system';
import { FoodItem } from '@/types';
import { useState } from 'react';

const Home: React.FC = () => {
  const [menueItems, setMenuItems] = useState<FoodItem[]>(foodItems);
  const [editingFood, setEditingFood] = useState<FoodItem | undefined>(undefined);
  const [showForm, setShowForm] = useState(false);

  const handleDelete = (id: number) => {
    setMenuItems(menueItems.filter(item => item.id !== id));
  };

  const handleEdit = (id: number) => {
    const menueToEdit = menueItems.find(item => item.id === id);
    if (menueToEdit) {
      setEditingFood(menueToEdit);
      setShowForm(true);
    }
  };

  const handleSave = (food: Omit<FoodItem, 'id'> & { id?: number }) => {
    if (food.id) {
      setMenuItems(menueItems.map(item => item.id === food.id ? { ...food, id: food.id as number } : item));
    } else {
      setMenuItems([...menueItems, { ...food, id: Date.now() }]);
    }
    setEditingFood(undefined);
    setShowForm(false);
  };

  const handleAddNewFood = () => {
    setEditingFood(undefined);
    setShowForm(true);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-end m-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddNewFood}>Add New Food</button>
        </div>
        {showForm && <Form onSave={handleSave} existingFood={editingFood} />}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {menueItems.map(food => (
            <FoodCard key={food.id} {...food} onDelete={handleDelete} onEdit={handleEdit} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

