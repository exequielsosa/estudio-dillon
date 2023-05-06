const LayoutBody = ({ children }) => {
  return (
    <>
      <div className="bg-orange-100 pt-2 pb-2 pr-4 pl-4 h-screen">
      {children}
      </div>
    </>
  );
};

export default LayoutBody;
