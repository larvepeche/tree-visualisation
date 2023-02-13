const Toolbar = ({ handleFiltering }) => {
    return (
        <div className="toolbar">
            <button className="dark" onClick={handleFiltering}>
                <div>
                    Executer
                    <img src="./" />
                </div>
            </button>
        </div>
    );
}
export default Toolbar;