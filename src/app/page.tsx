import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Works from '../components/Works/Works';
const App = () => {
  return (
    <div className="m-0 p-0">
      {/* 動画セクション */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">動画</h1>
          </div>
        </div>
      </section>
      <Header />
      <Works />
      <Footer />
    </div>
  );
};

export default App;
