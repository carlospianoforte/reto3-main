import PropTypes from "prop-types";

const Card = ({ registration }) => {
    return (
        <div className="registration-card">
            <h2>Nombre de la mascota:</h2>
            <h3>{registration.name}</h3>
            <h2>Edad de la mascota:</h2>
            <h4>{registration.age}</h4>
            <h2>Sexo:</h2>
            <p>{registration.gender}</p>
            <h2>Día de la cita:</h2>
            <h3>{registration.date}</h3>
            <h2>Nombre del dueño:</h2>
            <h4>{registration.owner}</h4>
        </div>
    )
}

Card.propTypes = {
    registration: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        gender: PropTypes.string,
        date: PropTypes.string.isRequired,
        owner: PropTypes.string,
    }),
};

Card.defaultProps = {
    registration: {
        age: "1"
    }
}

export default Card;