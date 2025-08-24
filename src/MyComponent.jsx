// 🔹 We need useState from React to store and update values (like variables that can change)
import { useState } from "react";

function MyComponent() {
  /*
   🟢 useState("Guest") → creates a "state variable" called `name`
   - "Guest" is the DEFAULT value (what shows before the user types anything).
   - `name` → stores the current value (like a variable).
   - `setName` → a special function we use to CHANGE `name`.
   - Whenever we call setName(), React automatically RE-RENDERS the component 
     so the UI updates.
  */
  const [name, setName] = useState("Guest");

  // Same idea: these will start out "empty" (undefined) until the user types/selects something.
  const [Qty, setQty] = useState();
  const [comment, setCommnent] = useState();
  const [payment, setPayment] = useState();
  const [Shipping, setShipping] = useState();

  /*
   🟢 These are EVENT HANDLERS.
   - Every time the user types or selects something, an "event" happens.
   - Example: typing inside an input triggers an "onChange" event.
   - That event object gets passed to our function → we grab event.target.value (the new input text)
     and update state with setName, setQty, etc.
  */
  function handaleChange(event) {
    setName(event.target.value); // take what user typed → save it in state
  }
  function handaleQty(event) {
    setQty(event.target.value);
  }
  function handleComment(event) {
    setCommnent(event.target.value);
  }
  function handlepaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShipping(event) {
    setShipping(event.target.value);
  }

  return (
    <>
      <div>
        {/* 🔹 TEXT INPUT */}
        {/* value={name} → connects the input box to our state variable */}
        {/* onChange={handaleChange} → updates state whenever user types */}
        <input value={name} onChange={handaleChange} />
        {/* This <p> shows the current value of "name" */}
        <p>Name: {name}</p>

        {/* 🔹 NUMBER INPUT */}
        {/* Works exactly like above, but type="number" makes it only accept numbers */}
        <input value={Qty} onChange={handaleQty} type="number" />
        <p>Qty: {Qty}</p>

        {/* 🔹 TEXTAREA INPUT */}
        {/* Same pattern: controlled by React state */}
        <textarea placeholder="Leave a Comment" value={comment} onChange={handleComment} />
        <p>Comment: {comment}</p>
      </div>

      {/* 🔹 SELECT DROPDOWN */}
      {/* Controlled by React: value={payment} */}
      {/* When the user picks an option, we call handlepaymentChange to update state */}
      <select value={payment} onChange={handlepaymentChange}>
        <option value="">Select Option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment: {payment}</p>

      {/* 🔹 RADIO BUTTONS */}
      {/* Special case: 
          - You can't type into these, you only pick one.
          - So instead of value, we use "checked" to see which one is selected.
          - checked={Shipping == "Delivery"} means "check this one if state equals 'Delivery'".
      */}
      <label>
        <input type="radio" value="Delivery" checked={Shipping == "Delivery"} onChange={handleShipping} />
        Delivery
      </label>
      <br />
      <label>
        <input type="radio" value="Pick Up" checked={Shipping == "Pick Up"} onChange={handleShipping} />
        Pick Up
      </label>
      <p>Shipping: {Shipping}</p>
    </>
  );
}

export default MyComponent;
