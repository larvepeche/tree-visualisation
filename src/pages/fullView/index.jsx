import { useState, useEffect, useRef } from "react";
import Split from 'react-split'
import '../../assets/css/customJsonEditor.css';
import Prism from "prismjs";
import jsonLocal from "../../data/locals.json";
import { JsonEditor } from 'react-jsondata-editor';
import Editor from '@monaco-editor/react';
import Toolbar from '../../components/toolbar';
import { filterOnCondition, showTree } from '../../service/services';
import { StandardContext } from 'spel2js';
import CustomJsonEditor from "../../components/CustomJsonEditor/CustomJsonEditor";


const FullView = () => {
    const stored = localStorage.getItem('locales');
    const [profile, setProfile] = useState(stored ? stored : JSON.stringify(jsonLocal, null, ' '));
    const [result, setResult] = useState("");
    const editorRef = useRef(null);
    const spelContext = StandardContext.create();
    const [error, setError] = useState("");

    useEffect(() => {
        Prism.highlightAll();
    }, [profile, result])

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    const saveJson = () => {
        alert("this button doesn't work");
    }
    const handleFiltering = () => {
        try {
            // update locale Storage to persist writed code
            localStorage.setItem('tree', editorRef.current.getValue());

            const TreeObject = JSON.parse(editorRef.current.getValue());

            //use the default profile if the user dont have a profile in his locale storage
            if (localStorage.getItem('locales') !== null) jsonLocal = JSON.parse(localStorage.getItem('locales')); else alert("no profile detected, default profile used");
            // filter the pages
            let filteredTree = filterOnCondition(TreeObject, jsonLocal);
            setResult(showTree(filteredTree));

        } catch (e) {
            alert(e);
        }
    }

    const print = result;
    const savedText = localStorage.getItem('tree');
    return (
        <div className="container">
            <Split sizes={[30, 50, 20]} minSize={0}
                className="split"
                gutterSize={20}
            >
                <div className="split-item code">
                    <div className="editor">
                        <Toolbar text={'Save'} handleAction={saveJson} />
                        <CustomJsonEditor profile={profile} setProfile={setProfile} />
                    </div>
                </div>

                <div className="split-item code">
                    <Toolbar text={'Visualize'} handleAction={handleFiltering} />
                    <p className="ml-1">Paste your tree here</p>
                    <div className="pt-0 editor">
                        <Editor
                            value={savedText !== null ? savedText : null}
                            language="json"
                            onMount={handleEditorDidMount}
                            theme="vs-dark"
                        />
                    </div>
                </div>


                <div className="split-item result">
                    <p>selected pages</p>
                    {print}
                </div>
            </Split>
        </div >
    );
}
export default FullView; 