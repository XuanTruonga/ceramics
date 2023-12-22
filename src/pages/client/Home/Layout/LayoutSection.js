function LayoutSection({children}) {
  return (
    <div className=" mb-11">
      <div className="w-1180 p-[30px_12px_30px_12px]">
        <div className="w-full">
            {children}
        </div>
      </div>
    </div>
  );
}

export default LayoutSection;
