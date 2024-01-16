import HistoryChart from '@/components/HistoryChart';
import { getUserByClerkId } from '@/utils/auth';
import { prisma } from '@/utils/db';

async function getData() {
  const user = await getUserByClerkId();
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      updatedAt: 'asc',
    },
  });

  const sum = analyses.reduce((acc, cur) => acc + cur.sentimentScore, 0);
  const avg = Math.round(sum / analyses.length);

  return { analyses, avg };
}

async function History() {
  const { analyses, avg } = await getData();
  return (
    <div className=" w-full h-full">
      <h1>Avg. Sentiment {avg}</h1>
      <HistoryChart data={analyses} />
    </div>
  );
}

export default History;
