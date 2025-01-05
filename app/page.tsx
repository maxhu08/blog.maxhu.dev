const Page = () => {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="grid place-items-center grid-flow-row gap-4 max-w-[50ch]">
        <span className="text-emerald-500 font-semibold text-2xl md:text-4xl">
          blog.maxhu.dev
        </span>
        <p className="text-center">
          This is my blog website. I'm going to write stuff about coding, and
          other stuff I'm interested in at the moment. This site is still a work
          in progress.
        </p>
        <div className="w-8 h-8">
          <img src="/assets/mh.png" alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Page;
