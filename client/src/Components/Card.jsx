import { useState } from 'react';
import { useCardContext } from '../CardContext';
import PropTypes from "prop-types";
import "../styles.scss";

const Card = ({ registration, handleSelectCard, handleDeleteUser}) => {

    return (
    <>
        <div className="cita-card border border-dark boder-2">
            <h4>Nombre de la mascota:</h4>
            <p>{registration.name}</p>
            <h4>Edad de la mascota:</h4>
            <p>{registration.age}</p>
            <h4>Genero:</h4>
            <p>{registration.sex}</p>
            <h4>Día de la cita:</h4>
            <p>{registration.date}</p>
            <h4>Triage de la mascota:</h4>
            <p className='description text-break'>{registration.description}</p>

            <div className="botones-card">
                <button className='button-card btn btn-danger m-2' onClick={() => handleDeleteUser(registration.id)}>Delete</button>
                <button className='button-card btn btn-success m-2' onClick={() => handleSelectCard(registration)}>Update</button>
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