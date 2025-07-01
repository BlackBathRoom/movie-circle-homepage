import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

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

      {/* ヘッダー */}
      <Header />

      {/* 画像スライダー */}
      <section
        id="works"
        className="mx-auto overflow-x-auto py-6 px-4 bg-gray-100"
      >
        <div className="inline-flex space-x-4 justify-center w-full min-w-fit">
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src={`../img${i + 1}.svg`}
              alt={`img${i + 1}`}
              className="w-48 h-36 rounded shadow"
            />
          ))}
        </div>
      </section>

      {/* フッター */}
      <Footer />
    </div>
  );
};

export default App;
