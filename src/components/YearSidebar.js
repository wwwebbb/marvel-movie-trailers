const YearSidebar = ({ sortedYears }) => {
  return (
    <div className="year-sidebar p-2 rounded-lg fixed z-10 top-1/4 right-5 bg-zinc-700">
      <h3 className="text-white">Years</h3>
      <ul>
        {sortedYears.map((year) => (
          <li key={year}>
            <a href={`#${year}`} className="text-white hover:text-gray-200">
              {year}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YearSidebar;
