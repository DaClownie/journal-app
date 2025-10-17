interface JournalEntryDisplayProps {
  text: string;
  timestamp: Date;
}

function JournalEntryDisplay({ text, timestamp }: JournalEntryDisplayProps) {
  // Template literal = uses backticks and ${} for interpolation
  const formattedDate = `Last updated: ${timestamp.toLocaleDateString()} at ${timestamp.toLocaleTimeString()}`;

  return (
    <div>
      <h2> Yourn Entry:</h2>
      {text ? (
        <>
          <p>{text}</p>
          <p style={{ color: '#666', fontSize: '0.9em' }}>{formattedDate}</p>
        </>
      ) : (
        <p style={{ color: '#999' }}>Start writing to see your entry here...</p>
      )}
    </div>
  );
}

export default JournalEntryDisplay;
