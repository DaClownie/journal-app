// Props define what data this component receives from its parent
// This is a TypeScript interface, a way to describe object shapes
interface JournalEntryFormProps {
  entry: string;
  onEntryChange: (newEntry: string) => void;
  onSubmit: () => void;
}

function JournalEntryForm({
  entry,
  onEntryChange,
  onSubmit,
}: JournalEntryFormProps) {
  return (
    <div>
      <h2>Write your Entry</h2>
      <textarea
        value={entry}
        onChange={(e) => onEntryChange(e.target.value)}
        placeholder='Write your journal entry...'
        rows={6}
      />
      <button onClick={onSubmit}>Save Entry</button>
    </div>
  );
}

export default JournalEntryForm;
