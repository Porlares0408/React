// Import the Student component to use in this App component
import Student from "./Student";

// Define the main App component
function App() {
  return (
    <>
      {/* Render multiple Student components with different props */}
      <Student name="Sponebob" age={30} isStudent={true} />
      <Student name="Partick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      {/* Render a Student component without props, defaults will be used */}
      <Student />
    </>
  );
}

// Export the App component as the default export
export default App;
