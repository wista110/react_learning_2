import React from 'react';
import ReactDOM from 'react-dom';

const root = documentgetElementById('root');
const rootElement = ReactDOM.createRoot(root);

const h1 = React.createElement("h1", {}, "Hello World");
const p =React.createElement("p", {}, "This is a paragraph");
const div = React.createElement("div", {}, [h1,p]);

rootElement.render(div);
