
import Prism from 'prismjs';
import { useState, useEffect } from 'react';
import { JsonEditor } from 'react-jsondata-editor';

const CustomJsonEditor = ({ profile, setProfile }) => {
    const handleProfileChange = (output) => {
        setProfile(output);
        localStorage.setItem('locales', output);
    }
    useEffect(() => {
        Prism.highlightAll();
    }, [profile])
    return (
        <div>
            <div className="json" style={{ height: "600px", width: "850px", border: "solid 1px #dddddd", margin: '20px auto' }}>
                <JsonEditor jsonObject={profile} onChange={(output) => { handleProfileChange(output); }} />
            </div>
        </div>
    );
}
export default CustomJsonEditor;