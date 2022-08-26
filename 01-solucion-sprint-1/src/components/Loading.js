import "../styles/Loading.scss";
function Loading(props) {
    if (props.isLoading === true) {
        return <span className="loading" />;
    }
};
export default Loading;