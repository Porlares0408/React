function Profilepic() {
  // 1️⃣ Store the image path in a variable
  const ImageURl = "./src/assets/bape.jpg";

  // 2️⃣ Define a function that hides the image when it is clicked
  //     - 'e' is the click event
  //     - 'e.target' refers to the clicked image
  //     - setting style.display = "none" makes the image disappear
  const handleClick = (e) => (e.target.style.display = "none");

  // 3️⃣ Render the image on the page
  //     - When clicked, it calls handleClick and hides itself
  //     - If the image is missing, the alt text is shown instead
  return (
    <>
      <img
        onClick={(e) => handleClick(e)}
        src={ImageURl}
        alt="no-Image to Display"
      />
    </>
  );
}

// 4️⃣ Export the Profilepic component so it can be reused in other files
export default Profilepic;
