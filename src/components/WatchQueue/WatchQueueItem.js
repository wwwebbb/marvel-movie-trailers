const WatchQueueItem = ({ video, index, expanded, setExpanded }) => {
  const toggleExpanded = (id) => {
    setExpanded((prevExpanded) => (prevExpanded === id ? null : id));
  };

  const truncateTitle = (title) => {
    const truncatedTitle = title.replace(
      /Marvel's|Marvel’s|Marvel Studios'|Marvel Studios’?/gi,
      ''
    );
    return truncatedTitle.length >= 38
      ? truncatedTitle.slice(0, 38) + '...'
      : truncatedTitle;
  };

  return (
    <div
      key={index}
      className="accordion-item overflow-hidden border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200 hover:translate-x-2 duration-100"
    >
      <h2
        className="accordion-header mb-0 text-gray-800"
        id={`heading${index}`}
      >
        <button
          className="w-full accordion-button relative flex items-center py-4 px-5 text-base !text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
          type="button"
          onClick={() => toggleExpanded(video.id.videoId)}
        >
          {truncateTitle(video.snippet.title)}
        </button>
      </h2>
      <div
        className={`collapse ${expanded === video.id.videoId ? 'show' : ''}`}
        id={`#collapse-${index}`}
        data-bs-parent="accordianWatchQueueList"
      >
        <div className="accordion-body py-4 px-5">
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            border="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default WatchQueueItem;
