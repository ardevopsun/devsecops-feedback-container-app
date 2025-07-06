import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const submitFeedback = async () => {
    try {
      await axios.post('http://44.204.33.146:8080/feedback', { name, message });
      alert('Feedback submitted!');
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to submit feedback');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Submit Feedback</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ width: '300px', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <br />
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        style={{ width: '300px', height: '100px', padding: '0.5rem' }}
      />
      <br />
      <button onClick={submitFeedback} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Submit
      </button>
    </div>
  );
}

export default App;
