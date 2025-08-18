import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "Apple", Calories: 95 },
    { id: 2, name: "Orange", Calories: 45 },
    { id: 3, name: "Banana", Calories: 105 },
    { id: 4, name: "Coconut", Calories: 159 },
    { id: 5, name: "Pineapple", Calories: 37 },
  ];

  const vegetables = [
    { id: 1, name: "Carrot", Calories: 25 },
    { id: 2, name: "Broccoli", Calories: 55 },
    { id: 3, name: "Spinach", Calories: 20 },
    { id: 4, name: "Pepper", Calories: 30 },
    { id: 5, name: "Tomato", Calories: 18 },
  ];

  return (
    <>
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />
    </>
  );
}

export default App;
