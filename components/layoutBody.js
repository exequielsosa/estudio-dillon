const LayoutBody = ({ children }) => {
  return (
    <>
      <div className="bg-[#ffffff] pt-1 pb-4 pr-4 pl-4 flex w-full flex-col items-center md:pt-4">
        <div className="bg-[#ffffff] flex w-full flex-col items-center max-w-[1275px] mt-[80px] md:mt-[120px]">
          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutBody;
