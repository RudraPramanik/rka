import React, { createContext, useState, useContext, ReactNode } from 'react';
import { FoodItem } from '../types';
import { foodItems } from '@/utils/data';

interface MenuContextProps {
  menuItems: FoodItem[];
  addFood: (food: Omit<FoodItem, 'id'>) => void;
  editFood: (food: FoodItem) => void;
  deleteFood: (id: number) => void;
  getFood: (id: number) => FoodItem | undefined;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const useMenu = (): MenuContextProps => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<FoodItem[]>(foodItems);

  const addFood = (food: Omit<FoodItem, 'id'>) => {
    const newFood = { ...food, id: Date.now() };
    setMenuItems((prevItems) => [...prevItems, newFood]);
  };

  const editFood = (updatedFood: FoodItem) => {
    setMenuItems((prevItems) => prevItems.map((item) => (item.id === updatedFood.id ? updatedFood : item)));
  };

  const deleteFood = (id: number) => {
    setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getFood = (id: number) => {
    return menuItems.find((item) => item.id === id);
  };

  return (
    <MenuContext.Provider value={{ menuItems, addFood, editFood, deleteFood, getFood }}>
      {children}
    </MenuContext.Provider>
  );
};

