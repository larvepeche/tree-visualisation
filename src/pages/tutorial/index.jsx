
import '../../assets/pane.css'
import { JsonEditor } from "react-jsondata-editor";
import jsonLocal from "../../data/locals.json";
import { useState } from 'react';
import Editor from "@monaco-editor/react";

const Tutorial = () => {
    const [profile, setProfile] = useState(JSON.stringify(jsonLocal))
    return (
        <div>
            <div className="json" style={{ height: "500px", width: "750px", border: "solid 1px #dddddd" }}>
                <JsonEditor jsonObject={profile} onChange={(output) => { setProfile(output) }} />
            </div>
        </div>
    )
}
export default Tutorial;