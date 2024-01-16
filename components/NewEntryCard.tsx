'use client';
import { createNewEntry } from '@/utils/api';
import { useRouter } from 'next/navigation';

function NewEntryCard() {
  const router = useRouter();
  async function handleOnClick() {
    const data = await createNewEntry();
    router.push(`/journal/${data.id}`);
  }
  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow">
      <button className="px-4 py-5 sm:p-6 text-3xl" onClick={handleOnClick}>
        New Entry
      </button>
    </div>
  );
}

export default NewEntryCard;
