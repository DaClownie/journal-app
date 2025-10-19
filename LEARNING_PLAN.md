# Journal App - Learning Plan

A phased approach to building a React + TypeScript journaling application.

## Phase 0: Environment Setup ✅

**Status:** Complete

**Accomplishments:**

- ✅ Set up Vite + React + TypeScript project
- ✅ Installed VS Code extensions (ES7 Snippets, Prettier, ESLint, Error Lens)
- ✅ Initialized Git repository
- ✅ Pushed to GitHub
- ✅ Created project documentation

**Concepts Learned:**

- npm and package management
- Vite development server
- Basic project structure

---

## Phase 1: Single Entry Form

**Status:** Complete

**Goals:**

- ✅ Build a form where users can type a journal entry
- ✅ Display the entry below the form
- ✅ Learn component basics

**React Concepts:**

- Components and JSX
- useState hook
- Event handlers
- Controlled inputs

**JavaScript Concepts:**

- Arrow functions
- ❓ Template literals
- Basic objects
- ❓ Ternary operators

**TypeScript Concepts:**

- ❓ Type annotations
- ❓ Props typing

---

## Phase 2: Entry List

**Status:** Completed

**Goals:**

- ✅ Store multiple journal entries
- ✅ Display them as a list
- ✅ Add timestamps to entries

**React Concepts:**

- ❓ Rendering lists
- ❓ Keys in lists
- ❓ Array state management

**JavaScript Concepts:**

- ❓ Array methods (.map)
- Date objects
- ❓ Spread operator

**TypeScript Concepts:**

- Interfaces for data structures
- ❓ Array typing

---

## Phase 3: Local Storage Persistence

**Status:** Completed

**Goals:**

- ✅ Save entries to localStorage
- ✅ Load entries on page refresh
- ✅ Persist data between sessions

**React Concepts:**

- ✅ useEffect hook
- ✅ Side effects
- ✅ Dependency arrays

**JavaScript Concepts:**

- ✅ JSON.stringify and JSON.parse
- ✅ localStorage API

**TypeScript Concepts:**

- ✅ Type assertions
- ✅ Handling potentially null values

---

## Phase 4: Tagging System

**Status:** Not Started

**Goals:**

- Create custom tags
- Apply multiple tags to entries
- Filter entries by tags

**React Concepts:**

- Complex state management
- Forms with multiple inputs
- Conditional rendering

**JavaScript Concepts:**

- .filter() method
- Destructuring
- Set data structure

**TypeScript Concepts:**

- Union types
- Optional properties
- Generic types

---

## Phase 5: Styling with Tailwind CSS

**Status:** Not Started

**Goals:**

- Install and configure Tailwind
- Style all components
- Make the app responsive
- Learn utility-first CSS

**CSS/Tailwind Concepts:**

- Utility classes
- Responsive design
- Color schemes
- Layout (flexbox/grid)

**React Concepts:**

- Conditional className application
- Component composition for styling

---

## Future Phases

### Phase 6: Search & Filtering

- Search entries by content
- Advanced filtering options
- Sort by date/tags

### Phase 7: Tag Analytics

- Visualize tag usage over time
- Mood/emotion tracking
- Entry statistics

### Phase 8: PostgreSQL Backend

- Set up Node.js/Express backend
- Create database schema
- API endpoints for CRUD operations
- Migrate from localStorage

### Phase 9: AI Processing

- Local AI model integration
- Automatic tag suggestions
- Named entity recognition
- Sentiment analysis

---

# Handoff Notes

I'm continuing my React journal app learning project.

Project: React Journal App  
Completed: Phase 0, Phase 1, Phase 2 & Phase 3 ✅  
Repository: https://github.com/DaClownie/journal-app  
Current Branch: main  
Dev Server: npm run dev (runs on http://localhost:5173)

## Phase 3 Completion Summary

**What We Built:**

- Added localStorage persistence to save and load journal entries
- Implemented useEffect hook for side effects
- Created load effect that runs once on component mount
- Created save effect that runs whenever entries change
- Handled Date object serialization/deserialization
- Added type safety for stored data with StoredJournalEntry type
- Deleted unused JournalEntryDisplay component

**Key Files:**

- `src/App.tsx` - Now includes two useEffect hooks: one for loading from localStorage (runs once), one for saving to localStorage (runs when entries change)
- `src/components/JournalEntryForm.tsx` - Unchanged
- `src/components/JournalEntryList.tsx` - Unchanged

**Concepts Mastered:**

- React: useEffect hook, side effects, dependency arrays (empty [] vs [entries]), effect timing (runs after render)
- JavaScript: localStorage API (getItem/setItem), JSON.stringify(), JSON.parse(), Date serialization, constants for magic strings
- TypeScript: Type guards (if (storedData)), type inference, structural typing, helper types for data transformation, handling nullable types (string | null)

**Current Data Structures:**

```ts
export type JournalEntry = {
  id: string;
  text: string;
  timestamp: Date;
};

type StoredJournalEntry = {
  id: string;
  text: string;
  timestamp: string; // ISO string in localStorage
};
```

**Key Implementation Patterns:**

```ts
const STORAGE_KEY = 'journal-entries';

// Load effect - runs once on mount
useEffect(() => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (storedData) {
    const parsedEntries: StoredJournalEntry[] = JSON.parse(storedData);
    const entriesWithDates = parsedEntries.map((entry: StoredJournalEntry) => ({
      ...entry,
      timestamp: new Date(entry.timestamp),
    }));
    setEntries(entriesWithDates);
  }
}, []); // Empty array = run once

// Save effect - runs when entries change
useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}, [entries]); // Dependency on entries
```

**Next Phase: Phase 4**
Add tagging system:

- Create custom tags
- Apply multiple tags to entries
- Filter entries by tags
- Learn complex state management
- Use .filter() method and Set data structure

I'm a React/TypeScript beginner and need instructional explanations with links to docs.
