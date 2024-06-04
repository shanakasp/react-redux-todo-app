import "./app.css";
import CardView from "./components/CardView.jsx";
import Header from "./components/Header.jsx";
import InputField from "./components/InputField.jsx";
function App() {
  return (
    <div className="App">
      <div className="header">
        <Header></Header>
      </div>

      <div className="input">
        <InputField></InputField>
        <CardView></CardView>
      </div>
    </div>
  );
}

export default App;
