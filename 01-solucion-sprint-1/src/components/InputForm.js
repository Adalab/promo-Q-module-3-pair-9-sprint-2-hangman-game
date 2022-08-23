function InputForm(props) {
    const handleKeyDown = (ev) => {
        // Sabrías decir para qué es esta línea
        ev.target.setSelectionRange(0, 1);
    };

    const handleChange = (ev) => {
        let re = /[a-zA-Z]/; //add regular pattern - lesson 3.3 exercise 2
        if (re.test(ev.target.value)) {
            props.handleLastLetter(ev.target.value);
        }
    };
    return (
        <>
            <label className='title' htmlFor={props.htmlFor}>
                Escribe una letra:
            </label>
            <input
                autoFocus
                autoComplete='off'
                className='form__input'
                maxLength='1'
                type='text'
                name={props.name}
                id={props.id}
                value={props.lastLetter}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
            />
        </>

    )

};
export default InputForm;