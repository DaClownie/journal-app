import { useState } from 'react';
import './App.css';
import JournalEntryForm from './components/JournalEntryForm';
import JournalEntryList from './components/JournalEntryList';
// import JournalEntryDisplay from './components/JournalEntryDisplay';

// Define the shape of a journal entry using a TypeScript type
export type JournalEntry = {
  id: string;
  text: string;
  timestamp: Date;
};

function App() {
  // Declare a state variable called "entry" with initial value ""
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [currentText, setCurrentText] = useState<string>('');

  const handleEntryChange = (newText: string) => {
    setCurrentText(newText);
  };

  // Don't save empty entries
  const handleSubmit = () => {
    if (currentText.trim() === '') {
      return;
    }

    // Create a new journal entry object
    const newEntry: JournalEntry = {
      id: crypto.randomUUID(),
      text: currentText,
      timestamp: new Date(),
    };

    // Add the new entry to the beginning of the array
    setEntries([newEntry, ...entries]);
    // Clear the textarea
    setCurrentText('');
  };

  return (
    <div className='App'>
      <h1>My Journal</h1>

      <JournalEntryForm
        entry={currentText}
        onEntryChange={handleEntryChange}
        onSubmit={handleSubmit}
      />

      <JournalEntryList entries={entries} />
      {/* <JournalEntryDisplay text={entry.text} timestamp={entry.timestamp} /> */}
      <p>Number of entries saved: {entries.length}</p>
    </div>
  );
}

export default App;
