import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Table = ({ registrations }) => {
    const { deleteUser } = useCardContext();

    return (
        <div className="hola">
            <section className="m-4 border border-dark border-4 rounded">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th
                                className="p-4 text-primary"
                                scope="col">Nombre de la mascota:</th>
                            <th
                                className="p-4 text-primary"
                                scope="col">Edad de la mascota:</th>
                            <th
                                className="p-4 text-primary"
                                scope="col">Sexo:</th>
                            <th
                                className="p-4 text-primary"
                                scope="col">Día de la cita:</th>
                            <th
                                className="p-4 text-primary"
                                scope="col">Triage de la mascota:</th>
                            <th
                                className="p-4 text-primary"
                                scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registrations.map((registration) => (
                            <tr key={`${registration.date}${registration.name}`}
                            >
                                <td className="ps-4">{registration.name}</td>
                                <td
                                    className="text-center">{registration.age}</td>
                                <td className="ps-4">{registration.sex}</td>
                                <td className="ps-4">{registration.date}</td>
                                <td className="ps-4 description">{registration.description}</td>
                                <td className="ps-4">
                                <button
                                        type="button"
                                        className="btn btn-danger m-2"
                                        onClick={() => deleteUser(registration.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="d-flex justify-content-center bg-white">
                    <Link to="/">
                        <button type="button" className="btn btn-dark m-4">
                            Volver al Home
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

Table.propTypes = {
    registrations: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            sex: PropTypes.string,
            date: PropTypes.string.isRequired,
            description: PropTypes.string,
        })
    ),
};

Table.defaultProps = {
    registrations: [],
};

export default Table;