import EntryCard from '@/components/EntryCard';
import NewEntryCard from '@/components/NewEntryCard';
import Question from '@/components/Question';
import { analyze } from '@/utils/ai';
import { getUserByClerkId } from '@/utils/auth';
import { prisma } from '@/utils/db';
import Link from 'next/link';

async function getEntries() {
  const user = await getUserByClerkId();
  const entries = await prisma.journalEntry.findMany({
    where: { userId: user.id },
    orderBy: {
      createdAt: 'desc',
    },
  });

  await analyze(
    `I'm gonna to work and I saw supermarket great, but I don't care :)`
  );

  return entries;
}

async function JournalPage() {
  const entries = await getEntries();
  return (
    <div className="w-full p-10">
      <h1 className=" text-3xl mb-8">Journal</h1>
      <Question />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default JournalPage;
