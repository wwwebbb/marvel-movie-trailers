import { useState } from 'react';

const QueueButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <button
        type="button"
        class={`inline-block p-1 mt-1 ${
          isClicked ? 'bg-red-600 text-white' : 'bg-slate-200 text-black'
        } rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
        onClick={() => setIsClicked(!isClicked)}
      >
        {!isClicked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
        {isClicked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default QueueButton;
