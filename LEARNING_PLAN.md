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

**Status:** Not Started

**Goals:**

- Store multiple journal entries
- Display them as a list
- Add timestamps to entries

**React Concepts:**

- Rendering lists
- Keys in lists
- Array state management

**JavaScript Concepts:**

- Array methods (.map)
- Date objects
- Spread operator

**TypeScript Concepts:**

- Interfaces for data structures
- Array typing

---

## Phase 3: Local Storage Persistence

**Status:** Not Started

**Goals:**

- Save entries to localStorage
- Load entries on page refresh
- Persist data between sessions

**React Concepts:**

- useEffect hook
- Side effects
- Dependency arrays

**JavaScript Concepts:**

- JSON.stringify and JSON.parse
- localStorage API

**TypeScript Concepts:**

- Type assertions
- Handling potentially null values

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
Completed: Phase 0, Phase 1 & Phase 2 ✅  
Repository: https://github.com/DaClownie/journal-app  
Current Branch: main  
Dev Server: npm run dev (runs on http://localhost:5173)

## Phase 2 Completion Summary

**What We Built:**

- Updated state management to store multiple entries in an array
- Added Submit button to JournalEntryForm component
- Created JournalEntryList component to display all entries
- Implemented entry list rendering using .map()
- Added unique IDs to each entry for React keys

**Key Files:**

- `src/App.tsx` - Manages array state with two state variables: `entries` (saved entries) and `currentText` (current draft)
- `src/components/JournalEntryForm.tsx` - Form with textarea and Submit button
- `src/components/JournalEntryList.tsx` - List component using .map() to render entries with keys
- `src/components/JournalEntryDisplay.tsx` - No longer used (can be deleted)

**Concepts Mastered:**

- React: Array state management, rendering lists with .map(), keys for list items, conditional rendering (empty state)
- JavaScript: .map() method, spread operator (...), Date objects with toLocaleDateString/toLocaleTimeString(), .trim() for validation
- TypeScript: Array typing (JournalEntry[]), export type, import type, interfaces for props

**Current Data Structure:**

```ts
export type JournalEntry = {
  id: string;
  text: string;
  timestamp: Date;
};
```

**State Management Pattern:**

```ts
const [entries, setEntries] = useState<JournalEntry[]>([]);
const [currentText, setCurrentText] = useState<string>('');

// Adding new entry to beginning of array
setEntries([newEntry, ...entries]);
```

**Next Phase: Phase 3**
Add localStorage persistence:

- Learn useEffect hook for side effects
- Save entries to localStorage
- Load entries on page refresh
- Handle JSON serialization with Date objects

I'm a React/TypeScript beginner and need instructional explanations with links to docs.
