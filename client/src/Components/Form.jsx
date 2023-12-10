import PropTypes from "prop-types";
import "../styles.scss";



const Form = ({ form,
    handleFormSubmit,
    handleInputChange,
    error,
    nameError,
    ageError,
    sexError,
    dateError,
    descriptionError,
    handleUpdateCard, // Agregar handleUpdateCard como prop
}) => {
    const fechaActual = new Date().toISOString().slice(0, 10);

    const hasSelectedCard = form.description !== ''; // Asumiendo que `name` es parte de la tarjeta seleccionada


    return (
        <>
            <form className="cita-form" onSubmit={handleFormSubmit}>
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
                    value={form.age || ''}
                    onChange={handleInputChange}
                />
                {ageError && <p className="error">{ageError}</p>}

                <label htmlFor="sex">Sexo de la mascota</label>
                <select
                    className="w-100 gender"
                    type="text"
                    name="sex"
                    placeholder="Sexo de la mascota"
                    value={form.sex || ''}
                    onChange={handleInputChange}
                >
                    <option value="Null">Null</option>
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>
                </select>
                {sexError && <p className="error-genero">{sexError}</p>}

                <label htmlFor="date">Seleccione fecha de la cita</label>
                <input
                    type="date"
                    name="date"
                    value={form.date || ''}
                    min={fechaActual}
                    onChange={handleInputChange}
                />
                {dateError && <p className="error">{dateError}</p>}

                <label htmlFor="description">Triage de la mascota</label>
                <input
                    type="text"
                    name="description"
                    placeholder="Sintomas de la Mascota"
                    value={form.description || ''}
                    onChange={handleInputChange}
                />
                {descriptionError && <p className="error">{descriptionError}</p>}
                <hr />
                {error && <p className="error">{error}</p>}

                <div className="botones-form">
                    <button
                        className="me-2 border border-white border-1"
                        type="submit">Agregar Cita</button>
                    <button
                        className={`update-button border border-white border-1 ${hasSelectedCard ? 'show' : 'hide'}`}
                        type="button"
                        onClick={handleUpdateCard}>Actualizar Tarjeta</button>
                </div>



            </form>
        </>
    )
}

Form.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    form: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        sex: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
    error: PropTypes.string.isRequired,
};

export default Form