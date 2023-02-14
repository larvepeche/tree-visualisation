import { useState, useEffect } from "react";
import Split from 'react-split'
import '../../assets/css/customJsonEditor.css';
import Prism from "prismjs";
import jsonLocal from "../../data/locals.json";
import { JsonEditor } from 'react-jsondata-editor';
import Editor from '@monaco-editor/react';
import Toolbar from '../../components/toolbar';

const Profile = () => {
    const stored = localStorage.getItem('locales');
    const [profile, setProfile] = useState(stored ? stored : JSON.stringify(jsonLocal, null, ' '));
    useEffect(() => {
        Prism.highlightAll();
    }, [profile])

    const handleProfileChange = (output) => {
        setProfile(output);
        localStorage.setItem('locales', output);
    }

    const saveJson = () => {
        alert("this button doesn't work");
    }
    return (
        <div className="container">
            <Split sizes={[50, 50]} minSize={400}
                className="split"
                gutterSize={20}
            >
                <div className="split-item code">
                    <div className="editor">
                        <Toolbar text={'Save'} handleAction={saveJson} />
                        <div>
                            <div className="json" style={{ height: "600px", width: "850px", border: "solid 1px #dddddd", margin: '20px auto' }}>
                                <JsonEditor jsonObject={profile} onChange={(output) => { handleProfileChange(output); }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-item jsonResult">
                    {/* need json validator */}
                    <Toolbar text={'save'} handleAction={saveJson} />
                    <p className="ml-1" style={{ color: 'white' }}>You can paste your JSON here and press the save button (beta)</p>
                    <div class="split-child">
                        <Editor language="json"
                            value={profile}
                            theme="vs-dark"
                        />
                    </div>
                </div>
            </Split>
        </div>
    );
}
export default Profile; 