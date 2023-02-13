import { useState, useEffect } from "react";
import Split from 'react-split'
import './profileEdit.css';
import Prism from "prismjs";
import jsonLocal from "../../data/locals.json";
import { JsonEditor } from 'react-jsondata-editor';
import Editor from '@monaco-editor/react';
import Toolbar from '../../components/toolbar';

const Profile = () => {
    const [profile, setProfile] = useState(JSON.stringify(jsonLocal));
    useEffect(() => {
        Prism.highlightAll();
    }, [profile])
    return (
        <div className="container">
            <Split sizes={[50, 50]} minSize={400}
                className="split"
                gutterSize={20}
            >
                <div className="split-item code">
                    <div className="editor">
                        <Toolbar text={'Save'} />
                        <div>
                            <div className="json" style={{ height: "600px", width: "850px", border: "solid 1px #dddddd" }}>
                                <JsonEditor jsonObject={profile} onChange={(output) => { setProfile(output) }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-item result">
                    <Editor language="json"
                        value={profile}
                        theme="vs-dark" />
                </div>
            </Split>
        </div>
    );
}
export default Profile; 