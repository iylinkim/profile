import "./app.css";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div id='wrap'>
      <div className='container'>
        <section className='content info'>
          <Info />
        </section>
        <section className='content works'>
          <Projects />
          <Skills />
        </section>
      </div>
    </div>
  );
}

export default App;
