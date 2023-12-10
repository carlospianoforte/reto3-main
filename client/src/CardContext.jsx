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
      fetchGetCards(); // Obtener las tarjetas actualizadas después de borrar una tarjeta

    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };


  const fetchGetCards = async () => {
    try {
      const response = await fetch('http://localhost:3000/cards');
      if (response.ok) {
        const result = await response.json();
        setUsers(result);
      } else {
        throw new Error('Error al obtener las tarjetas');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchUpdateCard = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:3000/cards/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      
      if (response.ok) {
        alert('Tarjeta actualizada');
        fetchGetCards(); // Actualizar la lista después de la actualización
      } else {
        throw new Error('Error al actualizar la tarjeta');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

/**********/
  const fetchAddCard = async (newCardData) => {
    try {
      const response = await fetch('http://localhost:3000/cards', {
        method: 'POST',
        body: JSON.stringify(newCardData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });

      if (response.ok) {
        alert("Tarjeta creada");
        fetchGetCards(); // Obtener las tarjetas actualizadas después de agregar una nueva
      } else {
        throw new Error("Error al crear la tarjeta");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  /**************** */

  return (
    <CardContext.Provider value={{ users, deleteUser, fetchUpdateCard, fetchGetCards, fetchAddCard  }}>
      {children}
    </CardContext.Provider>
  );
};
