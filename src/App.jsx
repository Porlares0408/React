import Counter from "./Counter";
import MyComponent from "./MyComponent";
function App() {
  return (
    <>
      <div className="Container-main">
        <div className="Container-1">
          <MyComponent />
        </div>
        <div className="Container-2">
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
