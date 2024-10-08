import React from 'react'; // Importiert das React-Framework
import ReactDOM from 'react-dom/client'; // Importiert die neue Root-API von React für das Rendern in der DOM
import './index.css'; // Importiert die globale CSS-Datei für Styling
import App from './App'; // Importiert die Haupt-App-Komponente
import reportWebVitals from './reportWebVitals'; // Importiert die Performance-Tracking-Funktion (Web Vitals)

const root = ReactDOM.createRoot(document.getElementById('root')); // Erstellt die Root-Rendering-Instanz, die an das DOM-Element mit der ID 'root' gebunden ist.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
