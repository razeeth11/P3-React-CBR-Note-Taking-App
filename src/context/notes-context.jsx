import { createContext, useContext, useState } from "react";

const NotesContextAPI = createContext();

export function NotesContext({ children }) {
  const [notes, setNotes] = useState([
    {
      id: "1",
      title: "React Performance Optimization",
      tags: ["Dev", "React"],
      date: "2024-10-29",
      lastEdited: "2024-10-29",
      content: [
        "Key performance optimization techniques:",
        "1. Code Splitting",
        "- Use React.lazy() for route-based splitting",
        "- Implement dynamic imports for heavy components",
        "",
        "2. Memoization",
        "- useMemo for expensive calculations",
        "- useCallback for function props",
        "- React.memo for component optimization",
        "",
        "3. Virtual List Implementation",
        "- Use react-window for long lists",
        "- Implement infinite scrolling",
        "",
        "TODO: Benchmark current application and identify bottlenecks",
      ],
    },
    {
      id: "2",
      title: "Japan Travel Planning",
      tags: ["Travel", "Personal"],
      date: "2024-10-28",
      lastEdited: "2024-10-28",
      content: [
        "Things to plan for Japan Trip:",
        "1. Book flights & hotels",
        "2. Buy JR Pass",
        "3. Prepare itinerary: Tokyo, Osaka, Kyoto",
        "4. Learn basic Japanese phrases",
        "",
        "FOOD TO TRY:",
        "- Ramen",
        "- Sushi",
        "- Takoyaki",
      ],
    },
    {
      id: "3",
      title: "Favorite Pasta Recipes",
      tags: ["Cooking", "Recipes"],
      date: "2024-10-27",
      lastEdited: "2024-10-27",
      content: [
        "Top pasta recipes:",
        "1. Aglio e Olio",
        "- Olive oil, garlic, chili flakes",
        "2. Alfredo Pasta",
        "- Butter, cream, parmesan",
        "3. Pesto Pasta",
        "- Basil, pine nuts, olive oil",
        "",
        "Note: Experiment with homemade pasta dough",
      ],
    },
    {
      id: "4",
      title: "Weekly Workout Plan",
      tags: ["Dev", "React"],
      date: "2024-10-25",
      lastEdited: "2024-10-25",
      content: [
        "My weekly workout routine:",
        "Monday: Chest + Triceps",
        "Tuesday: Back + Biceps",
        "Wednesday: Core + HIIT",
        "Thursday: Shoulders",
        "Friday: Legs",
        "",
        "Goal: Gain strength and improve stamina",
      ],
    },
    {
      id: "5",
      title: "Meal Prep Ideas",
      tags: ["Cooking", "Health", "Recipes"],
      date: "2024-10-12",
      lastEdited: "2024-10-12",
      content: [
        "Weekly meal prep ideas:",
        "1. Grilled chicken with veggies",
        "2. Overnight oats",
        "3. Smoothie packs",
        "",
        "Snacks:",
        "- Almonds",
        "- Yogurt",
        "- Protein bars",
      ],
    },
  ]);
  return (
    <NotesContextAPI.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContextAPI.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContextAPI);
}
