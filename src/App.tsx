import { useState } from 'react';
import './App.css';
import JournalEntryForm from './components/JournalEntryForm';
import JournalEntryDisplay from './components/JournalEntryDisplay';

// Define the shape of a journal entry using a TypeScript type
type JournalEntry = {
  text: string;
  timestamp: Date;
};

function App() {
  // Declare a state variable called "entry" with initial value ""
  const [entry, setEntry] = useState<JournalEntry>({
    text: '',
    timestamp: new Date(),
  });

  const handleEntryChange = (newText: string) => {
    setEntry({
      text: newText,
      timestamp: new Date(),
    });
  };

  return (
    <div className='App'>
      <h1>My Journal</h1>

      <JournalEntryForm entry={entry.text} onEntryChange={handleEntryChange} />

      <JournalEntryDisplay text={entry.text} timestamp={entry.timestamp} />
    </div>
  );
}

export default App;
