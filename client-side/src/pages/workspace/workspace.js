import { React, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

import "./workspace.css";

function Workspace() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            log(editorRef.current.getContent());
        }
    }
    return (
        <div className='container'>
            <Editor
                tinymceScriptSrc={'/tinymce/tinymce.min.js'}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue='Start typing here...'
                init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | preview',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <button className="btn btn-success" onClick={log} >Log Content</button>


        </div>
    )
}

export default Workspace