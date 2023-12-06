import PropTypes from "prop-types";



    const handleDeleteUser = async (id) => {
      try {
        await fetch(`http://localhost:3000/cards/${id}`, {
          method: 'DELETE',
        });
        // // Actualiza la lista de usuarios después de la eliminación
        // const updatedUsers = users.filter(user => user.id !== id);
        // setUsers(updatedUsers);
      } catch (error) {
        console.error('Error al eliminar el usuario:', error);
      }
    };

const Card = ({ registration }) => {
    return (
    <>
        <div className="registration-card">
            <h2>Nombre de la mascota:</h2>
            <h3>{registration.name}</h3>
            <h2>Edad de la mascota:</h2>
            <h4>{registration.age}</h4>
            <h2>Sexo:</h2>
            <p>{registration.sex}</p>
            <h2>Día de la cita:</h2>
            <h3>{registration.date}</h3>
            <h2>Triage de la mascota:</h2>
            <h4>{registration.description}</h4>
            <button onClick={() => handleDeleteUser(registration.id)}>Delete</button>
        </div>
    </>



    )
}

Card.propTypes = {
    handleDeleteUser: PropTypes.func,
    registration: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        sex: PropTypes.string,
        date: PropTypes.string.isRequired,
        description: PropTypes.string,
    }),
};

Card.defaultProps = {
    registration: {
        age: "1"
    }
}

export default Card;