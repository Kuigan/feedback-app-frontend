import React, { useState } from 'react';
import { createFeedback } from '../api/feedbackApi';

// Die Komponente FeedbackForm empfängt eine Callback-Funktion onFeedbackAdded als Prop.
const FeedbackForm = ({ onFeedbackAdded }) => {
    // Lokale Zustandsvariablen für den Titel und den Text des Feedbacks.
    const [title, setTitle] = useState('');
    const [text, setText] = useState(''); 

    // Event-Handler für das Absenden des Formulars.
    const handleSubmit = async (e) => {
        e.preventDefault(); // Verhindert das automatische Neuladen der Seite bei Formular-Absenden.

        // Ruft die createFeedback Funktion auf und übergibt das Feedback (Titel und Text).
        await createFeedback({ title, text });

        // Setzt die Felder zurück, nachdem das Feedback erfolgreich erstellt wurde. 
        setTitle('');
        setText('');

        // Ruft die onFeedbackAdded Callback-Funktion auf, um den Elternkomponenten mitzuteilen,
        // dass ein neues Feedback hinzugefügt wurde.
        onFeedbackAdded();
    };

    return (
        // Das Formular ruft bei Absenden die handleSubmit-Funktion auf.
        <form onSubmit={handleSubmit}>
            <h2>Add New Feedback</h2>
            <input
                type="text"
                placeholder="Add Feedback Title Here"
                value={title} 
                onChange={(e) => setTitle(e.target.value)} // Aktualisiert die title-Zustandsvariable.
                required
            />
            <br/>
            <textarea 
                placeholder="Add Feedback Text Here"
                value={text}
                onChange={(e) => setText(e.target.value)} // Aktualisiert die text-Zustandsvariable.
                required
            />
            <br/>
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;