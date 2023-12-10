import { useEffect, useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { useCardContext } from './CardContext';

import "./styles.scss";

function App() {
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [sexError, setsexError] = useState('');
  const [dateError, setDateError] = useState('');
  const [descriptionError, setdescriptionError] = useState('');


  const { fetchUpdateCard, fetchGetCards, fetchAddCard, deleteUser} = useCardContext();


  const [form, setForm] = useState({
    name: "",
    age: "",
    sex: "",
    date: "",
    description: "",
  });

  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  /**** */

  const [selectedRegistration, setSelectedRegistration] = useState(null);

  const handleSelectCard = (registration) => {
    setSelectedRegistration(registration);
    setForm({ ...registration }); 
  };

  const handleUpdateCard = async () => {
    if (selectedRegistration) {
      const updatedData = { ...form };
      await fetchUpdateCard(selectedRegistration.id, updatedData); 
      await fetchGetCards();

      

      const updatedUsers = users.map((user) =>
        user.id === selectedRegistration.id ? { ...user, ...form } : user
      );
      setUsers(updatedUsers);
      setForm({ name: "", age: "", sex: "", date: "", description: "" });
    }
  };


  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    await fetchGetCards();
    setUsers(users.filter(user => user.id !== id));
  };


/*** */

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, age, sex, date, description } = form
    if (!name || !age || !sex || !date || !description) {
      setError('Revisa los campos que te falta llenar.')

      if (name.length < 3) {
        setNameError('El nombre debe tener mas de 3 caracteres.');
      } if (age < 1) {
        setAgeError('La edad debe ser mayor de 1.');
      } if (sex !== 'Macho' || sex !== 'Hembra') {
        setsexError('Debes escoger el genero.')
      }  // Validación de fecha

      const currentDate = new Date();
      const selectedDate = new Date(date);
      if (selectedDate > currentDate || selectedDate.getFullYear() > 2023 || !date) {
        setDateError('Debes ingresar una fecha válida.');
      }
      if (description.length < 3) {
        setdescriptionError('Debes de ingresar el nombre del dueño.');
      }

      return
    }


    /**************** */

    const newCardData = {
      id: window.crypto.randomUUID(),
      name,
      age,
      sex,
      date,
      description
    };
    await fetchAddCard(newCardData);
    await fetchGetCards();


    setForm({ name: "", age: "", sex: "", date: "", description: "" });
    setNameError("");
    setAgeError("");
    setsexError("");
    setDateError("");
    setdescriptionError("");
  };

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch('http://localhost:3000/cards')
      const result = await response.json()
      setUsers(result)
    }
    getPost()
  }, [form])

  return (
    <div className="app">
      <Form
        form={form}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        error={error}
        nameError={nameError}
        ageError={ageError}
        sexError={sexError}
        dateError={dateError}
        descriptionError={descriptionError}
        handleUpdateCard={handleUpdateCard} // Pasar la función para actualizar la tarjeta desde el formulario
      />
      <h2>Calendario de citas:</h2>
      <section className="lista-citas">
        {users.map((registration) => (
          <Card
            key={`${registration.date}${registration.name}`}
            registration={registration}

            handleFormSubmit={handleFormSubmit}
            form={form}
            handleDeleteUser={handleDeleteUser}
            handleInputChange={handleInputChange}
            handleSelectCard={handleSelectCard}

          />
        ))}
      </section>
      <Footer />

    </div>
  );
}

export default App;
