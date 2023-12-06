import { useCardContext } from '../CardContext';
import PropTypes from "prop-types";


const Card = ({ registration }) => {

    const { deleteUser } = useCardContext();

  const handleDeleteUser = async (id) => {
    deleteUser(id);
  };

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
            <button onClick={() => handleUpdateCard(registration.id)}>Update</button>
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