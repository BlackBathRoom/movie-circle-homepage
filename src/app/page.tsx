const ImageMock = () => {
  return (
    <div className="h-32 w-45 bg-slate-400 flex">
      <div className="m-auto">image</div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center h-fit">
      <div className="min-h-1/2 md:min-h-lvh min-w-full flex justify-center items-center bg-slate-400">
        <div className="text-center text-9xl py-10">movie</div>
      </div>
      <div className="min-w-full flex">
        <span className="text-5xl mx-auto py-5">header</span>
      </div>
      <div className="max-w-full h-fit py-3 overflow-x-scroll">
        <ul className="w-fit flex gap-3">
          {[...Array(5)].map((_, i) => (
            <li key={i}>
              <ImageMock key={i} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-10 items-center py-5">
        <div className="h-fit md:py-10 flex flex-col gap-2 md:flex-row-reverse md:gap-10">
          <ImageMock />
          <span className="m-auto text-3xl md:text-4xl text-center">
            content
            <br />
            or
            <br />
            description
          </span>
        </div>
      </div>
      <div className="flex w-full bg-slate-400 h-fit p-5">
        <span className="m-auto text-9xl">footer</span>
      </div>
    </div>
  );
}
