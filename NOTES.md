# Learning Notes

Personal discoveries, "aha!" moments, and reference materials while building the Journal App.

## JavaScript Concepts

### Template Literals

- Use backticks: `string here`
- Interpolate with ${expression}
- Same as Python f-strings or C# $""
- Pure JavaScript feature (ES6)

Example:

```js
const name = 'Alice';
const greeting = `Hello, ${name}!`;
```

### Arrow Functions

_To be filled as we learn..._

### Array Methods

_To be filled as we learn..._

### Destructuring

```ts
import React from 'react';
const useState = React.useState;
const useEffect = React.useEffect;

// same as:
import { useState, useEffect } from 'react';
```

The curly braces mean extract these specific named things

---

## TypeScript Concepts

### Type Annotations

_To be filled as we learn..._

### Interfaces

_To be filled as we learn..._

---

## React Concepts

### Components

_To be filled as we learn..._

### Hooks

## useEffect - React's Side Effect Hook

```js
useEffect(() => {
  // Code here runs AFTER component renders
  console.log('Effect is running!');
}, [dependencies]);
```

- With no array, the code within useEffect runs after every Render
- With an empty array it runs only once, after the first render of the component
- With any dependencies it will run after the first render of the component, and anytime one of the dependencies changes.
- **Critical rule** - Put every value from your component that the effect usees into the dependency array.
  - If the component uses `name` and `age`, then the array should show `[name, age]`

_To be filled as we learn..._

---

## Useful Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Vite Guide](https://vitejs.dev/guide/)

---

## Common Patterns & Snippets

```ts
interface JournalEntryFormProps { ... }  // Props = interface
type JournalEntry = { ... }               // Data model = type
```

---

## Questions & Gotchas

_Things that confused me or caught me off guard..._
