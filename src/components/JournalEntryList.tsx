import type { JournalEntry } from '../App';

interface JournalEntryListProps {
  entries: JournalEntry[];
}

function JournalEntryList({ entries }: JournalEntryListProps) {
  if (entries.length === 0) {
    return <p>No entries yet. Write your first journal entry above!</p>;
  }

  return (
    <div>
      <h2>Your Journal Entries</h2>
      {entries.map((entry) => (
        <div key={entry.id}>
          <p>{entry.text}</p>
          <small>
            {entry.timestamp.toLocaleDateString()} at{' '}
            {entry.timestamp.toLocaleTimeString()}
          </small>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default JournalEntryList;
