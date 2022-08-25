import ErrorLetters from './ErrorLetters.js';
import Form from './Form.js';
import SolutionLetters from './SolutionLetters.js';
function Main(props) {
    return (
        <section>
            <SolutionLetters word={props.word} userLetters={props.userLetters} />
            <ErrorLetters word={props.word} userLetters={props.userLetters} />


            <Form lastLetter={props.lastLetter}
                handleLastLetter={props.handleLastLetter} />
        </section>
    )

};
export default Main;