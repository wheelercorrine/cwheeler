import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <main className="bg-slate-950 text-slate-300 min-h-screen">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:grid lg:grid-cols-[400px_1fr] gap-20">
          <Sidebar />

          <div className="py-24 space-y-32">
            <About />
            <Experience />
            {/* <Projects /> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
