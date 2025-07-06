import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const submitFeedback = async () => {
    await axios.post('/feedback', { name, message });
    alert('Feedback submitted!');
  };

  return (
    <div>
      <h2>Submit Feedback</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <br />
      <textarea placeholder="Message" onChange={e => setMessage(e.target.value)} />
      <br />
      <button onClick={submitFeedback}>Submit</button>
    </div>
  );
}

export default App;
