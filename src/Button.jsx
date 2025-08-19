function Button() {
  // 1️⃣ Create a variable to keep track of how many times the button is clicked
  let count = 0;

  // 2️⃣ Define a function that runs when the button is clicked
  //    - It accepts a 'name' parameter so we can customize the log message
  //    - If count is less than 3, increase it and log how many times clicked
  //    - Otherwise, show a message that the max click limit is reached
  const handleClick2 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times/s`);
    } else {
      console.log("You have reached the maximum click limit.");
    }
  };

  // 3️⃣ Render a button element
  //    - When clicked, it calls handleClick2 with the name "Beto"
  return (
    <>
      <button onClick={() => handleClick2("Beto")}>LogIn</button>
    </>
  );
}

// 4️⃣ Export the Button component so it can be used in other files
export default Button;
