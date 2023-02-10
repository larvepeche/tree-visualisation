import Split from 'react-split'
import '../../assets/pane.css'

const Tutorial = () => {
    return (
        <div>
            <Split
                className="split"
                gutterSize={12}
            >
                <div>ABC</div>
                <div>DEF</div>
            </Split>
        </div>
    )
}
export default Tutorial;