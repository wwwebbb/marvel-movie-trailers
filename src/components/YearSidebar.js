const YearSidebar = ({ sortedYears }) => {
  return (
    <div className="text-center p-2 rounded-lg fixed z-10 top-1/4 right-5 ml-5 bg-zinc-700">
      <h3 className="text-white mb-2">Year</h3>
      <ul>
        {sortedYears.map((year) => (
          <li key={year}>
            <a
              href={`#${year}`}
              className="text-white hover:text-gray-200 transition duration-100"
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
