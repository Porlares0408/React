import UserGreeting from "./UserGreeting";

// Define the main App component
function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="SERVER STATUS" />
    </>
  );
}

export default App;
