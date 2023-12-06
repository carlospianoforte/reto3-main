import PropTypes from "prop-types";

const Form = ({ form, handleFormSubmit, handleInputChange, error, nameError, ageError, sexError, dateError, descriptionError }) => {
    return (
        <form className="form-card" onSubmit={handleFormSubmit}>
            <h2>Solicitud de Citas Veterinario</h2>
            
            
            <label htmlFor="name">Nombre de la mascota</label>
            <input
                type="text"
                name="name"
                placeholder="Nombre de la mascota"
                value={form.name}
                onChange={handleInputChange}
            />
            {nameError && <p className="error">{nameError}</p>}
            <label htmlFor="age">Edad de la mascota</label>
            <input
                type="number"
                name="age"
                placeholder="Edad de la mascota"
                value={form.age}
                onChange={handleInputChange}
            />
            {ageError && <p className="error">{ageError}</p>}
            <label htmlFor="sex">Sexo de la mascota</label>
            <select
                type="text"
                name="sex"
                placeholder="Sexo de la mascota"
                value={form.sex}
                onChange={handleInputChange}
            >
                <option value="Null">Null</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
            </select>
            {sexError && <p className="error">{sexError}</p>}
            <label htmlFor="date">Seleccione fecha de la cita</label>
            <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleInputChange}
            />
            {dateError && <p className="error">{dateError}</p>}
            
            <label htmlFor="description">Triage de la mascota</label>
            <input
                type="text"
                name="description"
                placeholder="Nombre del dueño"
                value={form.description}
                onChange={handleInputChange}
            />
            {descriptionError && <p className="error">{descriptionError}</p>}
            <hr />
            {error && <p className="error">{error}</p>}
            <button type="submit">Agregar Cita</button>
        </form>
    )
}

Form.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    form: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        sex: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
    error: PropTypes.string.isRequired,
};

export default Form