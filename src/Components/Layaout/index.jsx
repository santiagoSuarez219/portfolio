const Layaout = ({ children }) => {
  return (
    <div className="w-full md:fixed md:top-[64px] lg:top-[104px] md:h-[calc(100vh-64px)] lg:h-[calc(100vh-104px)] flex flex-col items-center px-4 lg:px-6 overflow-y-auto">
      <div className="max-w-screen-xl">{children}</div>
    </div>
  );
};
export default Layaout;
