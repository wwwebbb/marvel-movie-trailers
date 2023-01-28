const YearSidebar = ({ sortedYears }) => {
  return (
    <div className=" text-center p-2 w-fit rounded-lg z-10 top-[15%] xl:top-1/4 fixed right-5 ml-5 backdrop-blur-md backdrop-brightness-75">
      <h3 className="text-white mb-2" style={{ textShadow: 'white 1px 0 5px' }}>
        Year
      </h3>
      <ul className="h-40 xl:h-min overflow-y-auto mini-scrollbar">
        {sortedYears.map((year) => (
          <li key={year}>
            <a
              href={`#${year}`}
              className="mr-2 lg:m-0 text-white hover:text-gray-200 transition duration-100"
            >
              {year}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YearSidebar;
