import Card from "./Card";
import Writeup from "./Writeup";
import Skills from "./Skills";
import Form from "./Form";

function App() {
  return (
    <div className="bg-red w-96 h-96">
      <Card img="funghi.jpg" />
      <Writeup />

      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center my-8">My Form</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
