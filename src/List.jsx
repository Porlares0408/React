function List({ items = [], category = "Fruits Category" }) {
  // 1️⃣ Create an array called 'fruits'
  //    Each item is an object with:
  //    - 'id'       : a unique number (like a database primary key)
  //    - 'name'     : the fruit's name
  //    - 'Calories' : the number of calories that fruit contains

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); Alphabetical
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); Reverse Alphabetical
  //   fruits.sort((a, b) => a.Calories- b.Calories); Numeric
  //   fruits.sort((a, b) => b.Calories - a.Calories); Reverse Numeric

  // 2️⃣ Use the 'map()' method to transform the 'fruits' array
  //    - map() takes each fruit object and returns a new <li> element
  //    - 'key={fruits.name}' is given to React for internal tracking
  //         (⚠️ keys should ideally be unique, so using 'fruits.id' would be safer)
  //    - Inside the <li>, we display the fruit's name (fruits.name)

  const listName = items.map((items) => (
    <li key={items.id}>
      {items.name}: &nbsp; <b>{items.Calories}</b>
    </li>
  ));

  // 3️⃣ Return an ordered list (<ol>) containing all the generated <li> elements
  //    - This JSX will be rendered in the browser as:
  //      1. Apple
  //      2. Orange
  //      3. Banana
  //      4. Coconut
  //      5. Pineapple
  return (
    <>
      <div className="Container">
        <h1>{category}</h1>
        <ol>{listName}</ol>
      </div>
    </>
  );
}

// 4️⃣ Export the List component so it can be imported and used in other files
export default List;
