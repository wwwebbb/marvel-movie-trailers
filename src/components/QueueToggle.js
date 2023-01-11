import { useState } from 'react';
import { Switch } from '@headlessui/react';

const QueueToggle = () => {
  const [queueEnabled, setQueueEnabled] = useState(false);

  return (
    <div className="py-16">
      <Switch
        checked={queueEnabled}
        onChange={setQueueEnabled}
        className={`${queueEnabled ? 'bg-red-600' : 'bg-zinc-800'}
          relative inline-flex h-[28px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${queueEnabled ? 'translate-x-8' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default QueueToggle;
