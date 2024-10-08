// Importiert die Konstante BACKEND_URL aus der Konfigurationsdatei.
// Diese URL wird für alle Anfragen an das Backend verwendet.
import { BACKEND_URL } from '../config';

/**
 * Funktion zum Erstellen eines Feedbacks.
 * @param {Object} feedback - Das Feedback-Objekt, das an das Backend gesendet werden soll.
 * @returns {Promise<Object>} - Die Antwort vom Backend als JSON-Objekt.
 */
export const createFeedback = async (feedback) => {
    // Senden einer POST-Anfrage an das Backend.
    const response = await fetch(BACKEND_URL, {
        method: 'POST', // Gibt an, dass es sich um eine POST-Anfrage handelt (zum Erstellen von Daten).
        headers: {
            'Content-Type': 'application/json' // Der Inhalt der Anfrage wird im JSON-Format gesendet.
        },
        body: JSON.stringify(feedback) // Das Feedback-Objekt wird in einen JSON-String umgewandelt.
    });
    // Die Antwort wird im JSON-Format zurückgegeben.
    return response.json();
}

/**
 * Funktion zum Abrufen aller Feedbacks.
 * @returns {Promise<Object>} - Die Antwort vom Backend als JSON-Objekt.
 */
export const getFeedback = async () => {
    // Senden einer GET-Anfrage an das Backend, um alle Feedbacks abzurufen.
    const response = await fetch(BACKEND_URL);
    // Die Antwort wird im JSON-Format zurückgegeben.
    return response.json();
}

/**
 * Funktion zum Löschen eines bestimmten Feedbacks basierend auf dem Titel.
 * @param {string} title - Der Titel des Feedbacks, das gelöscht werden soll.
 * @returns {Promise<Object>} - Die Antwort vom Backend als JSON-Objekt.
 */
export const deleteFeedback = async (title) => {
    // Senden einer DELETE-Anfrage an das Backend, um ein Feedback mit dem spezifischen Titel zu löschen.
    const response = await fetch(`${BACKEND_URL}/${title}`, {
        method: 'DELETE' // Gibt an, dass es sich um eine DELETE-Anfrage handelt (zum Löschen von Daten).
    });
    // Die Antwort wird im JSON-Format zurückgegeben.
    return response.json();
}