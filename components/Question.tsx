'use client';
import { askQuestion } from '@/utils/api';
import { useState } from 'react';

function Question() {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuestion(e.target.value);
  }
  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const answer = await askQuestion(question);
    setResponse(answer);
    setQuestion('');
    setLoading(false);
  }
  return (
    <>
      <div className="my-6 flex">
        <form
          onSubmit={handleOnSubmit}
          className="flex items-center gap-4 flex-wrap md:flex-nowrap"
        >
          <label htmlFor="question" className=" w-full lg:w-auto">
            <input
              disabled={loading}
              value={question}
              type="text"
              name="question"
              id="question"
              placeholder="Ask a Question"
              onChange={onChange}
              className="border border-black/10 rounded px-4 py-2 text-lg w-full lg:w-auto"
            />
          </label>
          <button
            disabled={loading}
            type="submit"
            className=" bg-[#ddd] border-[#d5d3d3] border px-4 py-2 rounded text-lg w-full md:w-fit transition-colors hover:bg-[#ccc]"
          >
            Ask
          </button>
        </form>
      </div>
      {loading && <div className="mb-5">Loading...</div>}
      {response && <div className="mb-5">{response}</div>}
    </>
  );
}

export default Question;
