const Works = () => {
  return (
    <section
      id="works"
      className="mx-auto overflow-x-scroll py-6 px-4 bg-gray-100"
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
  );
};

export default Works;
