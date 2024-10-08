import React from "react";
import FeedbackItem from "./FeedbackItem";

// Die FeedbackList-Komponente empfängt zwei Props: feedbacks (eine Liste von Feedback-Objekten) 
// und onFeedbackDeleted (eine Callback-Funktion für das Löschen eines Feedbacks).
const FeedbackList = ({ feedbacks, onFeedbackDeleted }) => {

    return(
        <div>
            <h2>Feedback</h2>
            {feedbacks.length === 0 ? (
                <p>No feedback available.</p> // Wenn die Liste leer ist, wird diese Nachricht angezeigt.
            ) : (
                // Wenn Feedbacks vorhanden sind, wird jedes Feedback-Objekt in der Liste gerendert.
                feedbacks.map((feedback) => (
                    <FeedbackItem 
                        key={feedback.id} // Jeder Feedback-Item muss einen eindeutigen Schlüssel (id) haben.
                        feedback={feedback} // Übergibt das Feedback-Objekt an die FeedbackItem-Komponente.
                        onDeleted={onFeedbackDeleted} // Callback-Funktion, die bei erfolgreichem Löschen aufgerufen wird.
                    />
                ))
            )}
        </div>
    )
}

export default FeedbackList;