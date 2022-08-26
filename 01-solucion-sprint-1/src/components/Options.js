function Options(props) {
    const handleChange = (ev) => {
        ev.preventDefault();
        props.setWord(ev.target.value);

    }
    return (
        <form>
            <label className="title" htmlFor="word">
                Escribe aquí la palabra que hay que adivinar:
            </label>
            <input
                autofocus
                autocomplete="off"
                className="form__input"
                maxlength="15"
                type="text"
                id="word"
                name="word"
                onChange={handleChange}
            />
        </form>
    )

};
export default Options;