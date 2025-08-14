// Import the PropTypes library for type checking of props
import PropTypes from "prop-types";

// Define the Student functional component
// Destructure props with default values:
// - name defaults to "Guest"
// - age defaults to 0
// - isStudent defaults to false
function Student({ name = "Guest", age = 0, isStudent = false }) {
  return (
    <div className="Student">
      {/* Display the name */}
      <p>Name: {name}</p>
      {/* Display the age */}
      <p>Age: {age}</p>
      {/* Display if the person is a student: Yes or No */}
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

// Define prop types for type checking in development
// This will warn if a prop has the wrong type
Student.propTypes = {
  name: PropTypes.string, // name should be a string
  age: PropTypes.number, // age should be a number
  isStudent: PropTypes.bool, // isStudent should be a boolean
};

// Export the Student component so it can be used in other files
export default Student;
