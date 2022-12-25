const ReactDOM = require('react-dom/client');
const React = require('react');
const ExampleA = require('./example-a/example-a.jsx').default;

function initApplication() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(ExampleA));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initApplication();
    }); 
} else if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initApplication();
}