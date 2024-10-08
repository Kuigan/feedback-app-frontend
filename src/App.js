import React, { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { getFeedback } from './api/feedbackApi';
import './styles/App.css'; // Stylesheet für das Layout und Design der App.


function App() {
  // Zustand für die Liste der Feedbacks. Am Anfang ist sie leer.
  const [feedbacks, setFeedbacks] = useState([]);

   // useEffect Hook: Lädt die Feedbacks, sobald die Komponente das erste Mal gerendert wird.
  useEffect(() => {
      loadFeedback(); // Lädt die Feedbacks vom Backend.
  }, []); // Der leere Abhängigkeits-Array sorgt dafür, dass der Effekt nur einmal beim Mounten ausgeführt wird.

  // Funktion, die die Feedbacks vom Backend holt und in den Zustand setzt.
  const loadFeedback = async () => {
    const feedbackData = await getFeedback(); // Ruft die Feedbacks vom Backend ab.
    setFeedbacks(feedbackData); // Aktualisiert den Zustand mit den abgerufenen Feedbacks.
  }

  return (
    // JSX zur Darstellung der App-UI.
    <div className='container'>
      <h1>Feedback App</h1>
      <FeedbackForm onFeedbackAdded={loadFeedback}/>
      <FeedbackList feedbacks={feedbacks} onFeedbackDeleted={loadFeedback}/>
    </div>
  );
}

export default App;