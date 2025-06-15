const ImageMoc = () => {
  return (
    <div className="h-32 w-45 bg-slate-400 flex">
      <div className="m-auto">image</div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center h-fit">
      <div className="min-h-lvh min-w-full flex justify-center items-center bg-slate-400">
        <div className="text-center text-9xl">movie</div>
      </div>
      <div className="min-w-full flex">
        <span className="text-5xl mx-auto py-5">header</span>
      </div>
      <div className="py-3 flex gap-2 justify-center">
        {[...Array(5)].map((_, i) => (
          <ImageMoc key={i} />
        ))}
      </div>
      <div className="flex gap-10 items-center py-5">
        <div className="h-50 py-10 flex">
          <span className="m-auto text-4xl text-center">
            content
            <br />
            or
            <br />
            description
          </span>
        </div>
        <ImageMoc />
      </div>
      <div className="flex w-full bg-slate-400">
        <span className="m-auto text-9xl">footer</span>
      </div>
    </div>
  );
}
