const LayoutBody = ({ children }) => {
  return (
    <>
      <div className="bg-sky-100 pt-4 pb-4 pr-4 pl-4 flex w-full flex-col items-center">
        <div className="bg-sky-100 flex w-full flex-col items-center max-w-[1275px] mt-[120px]">
          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutBody;
