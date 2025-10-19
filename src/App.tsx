import { useState, useEffect } from 'react';
import './App.css';
import JournalEntryForm from './components/JournalEntryForm';
import JournalEntryList from './components/JournalEntryList';

// Constant for our localStorage key - prevents typos
const STORAGE_KEY = 'journal-entries';

// Define the shape of a journal entry using a TypeScript type
export type JournalEntry = {
  id: string;
  text: string;
  timestamp: Date;
};

type StoredJournalEntry = {
  id: string;
  text: string;
  timestamp: string;
};

function App() {
  // Declare a state variable called "entry" with initial value ""
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [currentText, setCurrentText] = useState<string>('');

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (storedData) {
      const parsedEntries: StoredJournalEntry[] = JSON.parse(storedData);

      const entriesWithDates = parsedEntries.map(
        (entry: StoredJournalEntry) => ({
          ...entry,
          timestamp: new Date(entry.timestamp),
        })
      );

      setEntries(entriesWithDates);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

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
      <p>Number of entries saved: {entries.length}</p>
    </div>
  );
}

export default App;
