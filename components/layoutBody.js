// El margen superior compensa el header fijo (72px mobile / 80px escritorio).
const LayoutBody = ({ children }) => {
  return (
    <>
      <div className="bg-white pt-4 pb-4 px-4 flex w-full flex-col items-center">
        <div className="bg-white flex w-full flex-col items-center max-w-[1275px] mt-[72px] nav:mt-20">
          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutBody;
