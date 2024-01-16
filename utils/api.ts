function createUrl(path: string) {
  return window.location.origin + path;
}

export async function updatedEntry(id: string, content: string) {
  const res = await fetch(new Request(createUrl(`/api/journal/${id}`)), {
    method: 'PATCH',
    body: JSON.stringify({ content }),
  });

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
}

export async function createNewEntry() {
  const res = await fetch(
    new Request(createUrl('/api/journal'), {
      method: 'POST',
    })
  );

  try {
    if (res.ok) {
      const data = await res.json();
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function askQuestion(question: string) {
  const res = await fetch(
    new Request(createUrl('/api/question'), {
      method: 'POST',
      body: JSON.stringify({ question }),
    })
  );

  try {
    if (res.ok) {
      const data = await res.json();
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
}
