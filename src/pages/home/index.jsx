import { useState, useEffect } from "react";
import { StandardContext, SpelExpressionEvaluator } from 'spel2js';
import { filterOnCondition, showTree } from './services';
import Split from 'react-split'
import './home.css';
import Toolbar from '../../components/toolbar';
import Editor from "@monaco-editor/react";
import { useRef } from "react";
import jsonLocal from "../../data/locals.json"
import Prism from "prismjs";

const Home = () => {
    const [result, setResult] = useState("");
    const editorRef = useRef(null);
    const spelContext = StandardContext.create();
    const [error, setError] = useState("");

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    useEffect(() => {
        Prism.highlightAll();
    }, [result])

    const handleFiltering = () => {
        try {
            const TreeObject = JSON.parse(editorRef.current.getValue());
            let filteredTree = filterOnCondition(TreeObject, jsonLocal);
            setResult(showTree(filteredTree));
            localStorage.setItem('tree', editorRef.current.getValue());
        } catch (e) {
            alert(e);
        }
    }

    const print = result;
    const savedText = localStorage.getItem('tree');
    return (
        <div className="container">
            <Split sizes={[60, 30]} minSize={400}
                className="split"
                gutterSize={20}
            >
                <div className="split-item code">
                    <Toolbar handleAction={handleFiltering} />
                    <div className="editor">
                        <p className="mt-0">Paste your tree here</p>
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
        </div>
    );
}
export default Home; 