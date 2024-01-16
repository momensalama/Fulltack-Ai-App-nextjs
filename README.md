# Project Name

fullstack mood app with Ai

## Description

this is a Journal application that allows users to log in and manage journal entries with the standard CRUD operations. The entries are analyzed and given an AI-generated sentiment value, summary, and color.

## Live Demo

please note: when you using the app, you may see some delay to make new entry or when the changes update. that is happen from openAi API, so be patient and don't refresh or reload the page.

click on the link to [see the demo](https://fulltack-ai-app-nextjs-1.vercel.app)

## Setup

```
git clone https://github.com/momensalama/Fulltack-Ai-App-nextjs.git
```

```
npm run dev
```

### Main Functionalities

- Authentication
- sign in
- sign up
- make entry
- using search bar to get any information about your journals using GPT-3.5 trubo.
- update the status of mood, summary, color ..etc using GPT-3.5 trubo.
- analyze entries and draw a chart based on AI-generated sentiment value.

### Packages

- **railway** : backend serverless.
- **clerk** : for sign in, sign up, and \*\*Authentication\*\*.
- **langchain** : for make using Ai prompets easily to impelement.
- **react-autosave**: for making autosave changes while write the entry.
- **zod**: to supply the LLM with a schema for the results returned from the LMM.
- **prisma**.
- **recharts**.
- **vitest**.

#### Overview

Journal application that allows users to log in and manage journal entries with the standard CRUD operations. The entries are analyzed and given an AI-generated sentiment value, summary, and color.
