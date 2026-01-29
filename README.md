# ⚛️ React Projects

<div align="center">

![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

*A collection of React applications and components for learning and practice*

[📚 Projects](#-projects) • [🚀 Quick Start](#-quick-start) • [💡 Learning Path](#-learning-path)

</div>

---

## 📖 Overview

This repository contains a curated collection of React projects ranging from beginner to advanced level. Perfect for learning React concepts, practicing component design, and building a portfolio.

## 📚 Projects

### 🎯 Beginner Level

#### 1. Todo App
- **Concepts**: State management, event handling, lists
- **Features**: Add, delete, mark complete
- **Tech**: React Hooks, localStorage

#### 2. Counter App
- **Concepts**: useState, event handlers
- **Features**: Increment, decrement, reset
- **Tech**: Basic React components

#### 3. Weather App
- **Concepts**: API calls, useEffect
- **Features**: City search, real-time weather
- **Tech**: React, fetch API

### 🚀 Intermediate Level

#### 4. E-commerce Cart
- **Concepts**: Context API, complex state
- **Features**: Add to cart, quantity control
- **Tech**: React Context, useReducer

#### 5. Movie Search
- **Concepts**: API integration, routing
- **Features**: Search, details page, favorites
- **Tech**: React Router, TMDB API

#### 6. Recipe Finder
- **Concepts**: Data fetching, filtering
- **Features**: Search recipes, save favorites
- **Tech**: React, Spoonacular API

### 🔥 Advanced Level

#### 7. Social Media Dashboard
- **Concepts**: Authentication, real-time data
- **Features**: Post, like, comment, profile
- **Tech**: React, Firebase, Tailwind CSS

#### 8. Task Management System
- **Concepts**: Drag-and-drop, complex UI
- **Features**: Kanban board, team collaboration
- **Tech**: React DnD, Redux Toolkit

#### 9. E-learning Platform
- **Concepts**: Video streaming, progress tracking
- **Features**: Courses, quizzes, certificates
- **Tech**: React, Video.js, MongoDB

## 🚀 Quick Start

### Prerequisites

- **Node.js** 16+ and npm installed
- Code editor (VS Code recommended)
- Basic JavaScript knowledge

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/React-Projects.git
   cd React-Projects
   ```

2. **Choose a project**:
   ```bash
   cd project-name
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm start
   ```

5. **Open browser**:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
React-Projects/
├── 01-counter-app/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── 02-todo-app/
├── 03-weather-app/
├── 04-ecommerce-cart/
├── 05-movie-search/
├── 06-recipe-finder/
├── 07-social-dashboard/
├── 08-task-management/
└── 09-elearning-platform/
```

## 💡 Learning Path

### Phase 1: React Fundamentals (Weeks 1-2)
- ✅ JSX syntax and components
- ✅ Props and state
- ✅ Event handling
- ✅ Conditional rendering
- ✅ Lists and keys

**Practice Projects**: Counter App, Todo App

### Phase 2: React Hooks (Weeks 3-4)
- ✅ useState, useEffect
- ✅ Custom hooks
- ✅ useContext
- ✅ useReducer
- ✅ useMemo, useCallback

**Practice Projects**: Weather App, Movie Search

### Phase 3: Advanced Concepts (Weeks 5-8)
- ✅ React Router
- ✅ Context API
- ✅ Redux/Redux Toolkit
- ✅ API integration
- ✅ Error boundaries
- ✅ Performance optimization

**Practice Projects**: E-commerce Cart, Recipe Finder

### Phase 4: Production-Ready Apps (Weeks 9-12)
- ✅ Authentication
- ✅ Database integration
- ✅ Real-time features
- ✅ Testing (Jest, React Testing Library)
- ✅ Deployment
- ✅ CI/CD

**Practice Projects**: Social Dashboard, Task Management, E-learning Platform

## 🛠️ Tech Stack

### Core Technologies
- **React 18+** - UI library
- **React Router** - Navigation
- **React Hooks** - State management

### State Management
- **Context API** - Simple state
- **Redux Toolkit** - Complex state
- **Zustand** - Lightweight alternative

### Styling
- **CSS Modules** - Scoped styles
- **Tailwind CSS** - Utility-first CSS
- **Styled Components** - CSS-in-JS
- **Material-UI** - Component library

### Data Fetching
- **Fetch API** - Native browser API
- **Axios** - HTTP client
- **React Query** - Server state management
- **SWR** - Data fetching hooks

### Backend/Database
- **Firebase** - Authentication, Firestore
- **Supabase** - PostgreSQL backend
- **Node.js/Express** - Custom API

### Testing
- **Jest** - Test runner
- **React Testing Library** - Component testing
- **Cypress** - E2E testing

### Build Tools
- **Create React App** - Quick setup
- **Vite** - Fast build tool
- **Webpack** - Custom configuration

## 📖 Component Examples

### Functional Component with Hooks

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

### Custom Hook

```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

### Context Provider

```jsx
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```

## 🎯 Best Practices

### Component Design
- ✅ Keep components small and focused
- ✅ Use functional components with hooks
- ✅ Implement proper prop types
- ✅ Follow single responsibility principle

### State Management
- ✅ Lift state up when needed
- ✅ Use Context for global state
- ✅ Consider Redux for complex apps
- ✅ Avoid prop drilling

### Performance
- ✅ Use React.memo for expensive components
- ✅ Implement code splitting with lazy loading
- ✅ Optimize re-renders with useMemo/useCallback
- ✅ Use production build for deployment

### Code Quality
- ✅ Follow ESLint rules
- ✅ Write unit tests
- ✅ Use TypeScript for type safety
- ✅ Document complex logic

## 🐛 Common Issues & Solutions

### Issue: Component Not Re-rendering
```jsx
// ❌ Wrong - Mutating state
const [items, setItems] = useState([]);
items.push(newItem); // Don't do this!

// ✅ Correct - Create new array
setItems([...items, newItem]);
```

### Issue: Infinite Loop in useEffect
```jsx
// ❌ Wrong - Missing dependencies
useEffect(() => {
  fetchData();
}, []); // If fetchData uses props/state

// ✅ Correct - Include all dependencies
useEffect(() => {
  fetchData();
}, [fetchData, userId]);
```

### Issue: Stale Closure
```jsx
// ❌ Wrong - Stale state reference
const [count, setCount] = useState(0);
const increment = () => setCount(count + 1);

// ✅ Correct - Use functional update
const increment = () => setCount(c => c + 1);
```

## 📚 Learning Resources

### Official Documentation
- [React Docs](https://react.dev) - Official React documentation
- [React Router Docs](https://reactrouter.com) - Routing library

### Tutorials & Courses
- [React Tutorial](https://react.dev/learn) - Official tutorial
- [FreeCodeCamp React Course](https://www.freecodecamp.org)
- [Scrimba React Course](https://scrimba.com/learn/learnreact)

### YouTube Channels
- **Traversy Media** - Project-based learning
- **The Net Ninja** - React series
- **Web Dev Simplified** - Modern React

### Practice Platforms
- [Frontend Mentor](https://www.frontendmentor.io) - Real projects
- [Codewars](https://www.codewars.com) - Coding challenges
- [LeetCode](https://leetcode.com) - Algorithm practice

## 🤝 Contributing

Contributions welcome! You can help by:
- 🐛 Reporting bugs
- 💡 Suggesting new projects
- 📝 Improving documentation
- ✨ Adding new features
- 🧪 Writing tests

### How to Contribute

1. Fork the repository
2. Create feature branch (`git checkout -b feature/NewProject`)
3. Commit changes (`git commit -m 'Add NewProject'`)
4. Push to branch (`git push origin feature/NewProject`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Eren Akkoç**
- 🌐 GitHub: [@ernakkc](https://github.com/ernakkc)
- 📧 Email: ern.akkc@gmail.com
- 💼 Portfolio: [erenakkoc.com](https://erenakkoc.com)

## 🙏 Acknowledgments

- React team for the amazing library
- Open source community
- All contributors to this repository

---

<div align="center">

**⚛️ Happy React Coding! 🚀**

*Star ⭐ this repo if you find it helpful for your learning journey!*

[![GitHub stars](https://img.shields.io/github/stars/ernakkc/React-Projects?style=social)](https://github.com/ernakkc/React-Projects)
[![GitHub forks](https://img.shields.io/github/forks/ernakkc/React-Projects?style=social)](https://github.com/ernakkc/React-Projects/fork)

</div>
