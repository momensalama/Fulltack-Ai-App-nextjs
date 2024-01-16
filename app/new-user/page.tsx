import { prisma } from '@/utils/db';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

async function createNewUser() {
  const user = await currentUser();
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user?.id,
    },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user?.id as string,
        email: user?.emailAddresses[0].emailAddress as string,
      },
    });
  }
  redirect('/journal');
}

async function NewUser() {
  await createNewUser();
  return <h1>...loading</h1>;
}

export default NewUser;
