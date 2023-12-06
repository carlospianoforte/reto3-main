import React, { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const useCardContext = () => {
  return useContext(CardContext);
};

export const CardProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:3000/cards/${id}`, {
        method: 'DELETE',
      });
      // Actualiza la lista de usuarios después de la eliminación
      alert("Tarjeta BORRADA");

    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  return (
    <CardContext.Provider value={{ users, deleteUser }}>
      {children}
    </CardContext.Provider>
  );
};
