import { analyze } from '@/utils/ai';
import { getUserByClerkId } from '@/utils/auth';
import { prisma } from '@/utils/db';
import { NextResponse } from 'next/server';

interface ParamsType {
  params: {
    id: string;
  };
}
export async function PATCH(request: Request, { params }: ParamsType) {
  const user = await getUserByClerkId();
  const { content } = await request.json();
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: {
      content,
    },
  });

  const analysis = await analyze(updatedEntry.content);

  const updated = await prisma.analysis.upsert({
    where: {
      entryId: updatedEntry.id,
    },
    create: {
      userId: user.id,
      entryId: updatedEntry.id,
      ...analysis,
    },
    update: analysis,
  });

  return NextResponse.json({ data: { ...updatedEntry, analysis: updated } });
}
