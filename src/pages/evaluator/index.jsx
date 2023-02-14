import { useState, useRef } from "react";
import { StandardContext, SpelExpressionEvaluator } from 'spel2js';
import CustomJsonEditor from "../../components/CustomJsonEditor/CustomJsonEditor";
import jsonLocal from "../../data/locals.json";
import Split from 'react-split'
import '../../assets/css/customJsonEditor.css';
import Editor from '@monaco-editor/react';
import Toolbar from '../../components/toolbar';



const Evaluator = () => {
    const stored = localStorage.getItem('locales');
    const [result, setResult] = useState(" ");
    const spelContext = StandardContext.create();
    const [profile, setProfile] = useState(stored ? stored : JSON.stringify(jsonLocal, null, ' '));
    const editorRef = useRef("");

    function handleEditorDidMount(editor) {
        editorRef.current = editor;
    }

    const handleEvaluation = () => {
        if (!editorRef.current.getValue()) return;
        try {
            const compiledExpression = SpelExpressionEvaluator.compile(editorRef.current.getValue());
            let Pageresult = compiledExpression.eval(spelContext, JSON.parse(profile));
            if (!Pageresult) {
                setResult("hidden")
            } else {
                setResult("SHowed")
            }

        } catch (e) {
            alert(e.message)
        }
    }
    const showResult = () => {
        alert(result)
    }
    return (
        <div className="container">
            <Split sizes={[50, 50]} minSize={400}
                className="split"
                gutterSize={20}
            >
                <div className="split-item code">
                    <div className="editor">
                        <Toolbar text={result} handleAction={showResult} />
                        <CustomJsonEditor profile={profile} setProfile={setProfile} />
                    </div>
                </div>
                <div className="split-item jsonResult">
                    {/* need json validator */}
                    <Toolbar text={'evaluate'} handleAction={handleEvaluation} />
                    <p className="ml-1" style={{ color: 'white' }}>Write your expression and press the evaluate button to run it</p>
                    <div class="split-child">
                        <Editor language="kotlin"
                            theme="vs-dark"
                            onMount={handleEditorDidMount}
                        />
                    </div>
                </div>
            </Split>
        </div>
    );
}
export default Evaluator; 