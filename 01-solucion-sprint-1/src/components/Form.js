
import "../styles/Letters.scss";
import "../styles/Form.scss";
import InputForm from "./InputForm.js";
function Form(props) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <InputForm lastLetter={props.lastLetter}
                name="last-letter"
                id="last-letter"
                htmlFor="last-letter"
                handleLastLetter={props.handleLastLetter} />
        </form>
    )

};
export default Form;