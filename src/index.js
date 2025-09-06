import React from 'react';
import ReactDOM from 'react-dom/client';

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

const h1 = React.createElement("h1", {}, "Hello World");
const p = React.createElement("p", {}, "This is a paragraph");
const div = React.createElement("div", {}, [h1,p]);

rootElement.render(div);
