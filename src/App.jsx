import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProjectsGrid from './components/ProjectsGrid';
import FooterContact from './components/FooterContact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero3D />
        <ProjectsGrid />
        <FooterContact />
      </main>
    </div>
  );
}

export default App;
