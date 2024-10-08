import React from "react";
import { deleteFeedback } from "../api/feedbackApi";

// Die FeedbackItem-Komponente nimmt zwei Props entgegen: feedback (das Feedback-Objekt) und onDeleted (eine Callback-Funktion).
const FeedbackItem = ({ feedback, onDeleted }) => {

    // Funktion, um das Feedback zu löschen.
    const handleDelete = async () => {
        // Ruft die deleteFeedback Funktion auf und löscht das Feedback anhand des Titels.
        await deleteFeedback(feedback.title);

        // Ruft die onDeleted Callback-Funktion auf, um die Elternkomponente darüber zu informieren,
        // dass das Feedback gelöscht wurde (z.B. um die Feedback-Liste zu aktualisieren).
        onDeleted();
    }

    return(
         // Darstellung eines Feedback-Items mit Titel, Text und einem Button zum Löschen.
        <div className="feedback-item">
            <h3>{feedback.title}</h3>
            <p>{feedback.text}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default FeedbackItem;