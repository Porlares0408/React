import PropTypes from "prop-types"; // Import PropTypes for type checking props

// Functional component with destructured props and default values
function UserGreeting({ username = "Guest", isLoggedIn = true }) {
  // JSX for the welcome message when user is logged in
  const welcomeMessage = <h1 className="welcome-message">{username}</h1>;

  // JSX for the message when user is not logged in
  const loginMessage = (
    <h1 className="login-prompt">Please Login To Continue......</h1>
  );

  // Conditional rendering:
  // If isLoggedIn is true → show welcomeMessage
  // If isLoggedIn is false → show loginMessage
  return isLoggedIn ? welcomeMessage : loginMessage;
}

// Define expected prop types for the component
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool, // should be a boolean
  username: PropTypes.string, // should be a string
};

export default UserGreeting; // Export the component for use in other files
