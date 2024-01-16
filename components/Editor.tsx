'use client';
import Spinner from '@/app/ui/Spinner';
import { Entry } from '@/types';
import { updatedEntry } from '@/utils/api';
import { useState } from 'react';
import { useAutosave } from 'react-autosave';

function Editor({ entry }: { entry: Entry }) {
  const [value, setValue] = useState(entry?.content);
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState(entry.analysis);
  const { mood, summary, subject, negative, color } = analysis;
  const analysisData = [
    {
      name: 'Summary',
      value: summary,
    },
    {
      name: 'Subject',
      value: subject,
    },
    {
      name: 'Mood',
      value: mood,
    },
    {
      name: 'Negative',
      value: negative ? 'True' : 'False',
    },
  ];

  useAutosave({
    data: value,
    onSave: async (_newValue) => {
      setIsLoading(true);
      const data = await updatedEntry(entry.id, _newValue);
      setAnalysis(data.analysis);
      setIsLoading(false);
    },
  });
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 grid-rows-10 md:grid-rows-1 bg-white">
      <label htmlFor="editor" className="h-full w-full col-span-2 row-span-9">
        {isLoading && <Spinner />}
        <textarea
          name="editor"
          id="editor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="h-full w-full p-8 text-xl overflow-hidden"
        >
          {value}
        </textarea>
      </label>
      <div className=" border-s border-black/10 row-span-1">
        <div className="px-6 py-10" style={{ backgroundColor: color }}>
          <h2 className="text-2xl font-bold text-[#ddd]">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                key={item.name}
                className="flex justify-between px-2 py-4 border-b border-t border-black/10"
              >
                <span className="text-xl font-semibold me-2">{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Editor;
