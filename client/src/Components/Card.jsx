import { useState } from 'react';
import { useCardContext } from '../CardContext';
import PropTypes from "prop-types";
import "../styles.scss";





const Card = ({ registration, handleSelectCard}) => {
    const { deleteUser} = useCardContext();

    const handleDeleteUser = async (id) => {
        deleteUser(id);
      };
    

    return (
    <>
        <div className="cita-card">
            <h3>Nombre de la mascota:</h3>
            <p>{registration.name}</p>
            <h3>Edad de la mascota:</h3>
            <p>{registration.age}</p>
            <h3>Genero:</h3>
            <p>{registration.sex}</p>
            <h3>Día de la cita:</h3>
            <p>{registration.date}</p>
            <h3>Triage de la mascota:</h3>
            <p>{registration.description}</p>

            <div className="botones-card">
                <button className='button-card' onClick={() => handleDeleteUser(registration.id)}>Delete</button>
                <button className='button-card' onClick={() => handleSelectCard(registration)}>Seleccionar</button>
            </div>
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