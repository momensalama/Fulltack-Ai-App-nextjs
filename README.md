# Project Name

fullstack mood app with Ai

## Description

This journal application allows users to log in and manage journal entries with the standard CRUD operations. The entries are analyzed and given an AI-generated sentiment value, summary, and color.

## Live Demo

Just so you know, when you are using the app, you may see some delay in making new entries or when the changes are updating. that is happening from openAi API, so be patient and don't refresh or reload the page.

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
- Use the search bar to get any information about your journals using GPT-3.5 turbo.
- update the status of mood, summary, color ..etc using GPT-3.5 turbo.
- analyze entries and draw a chart based on AI-generated sentiment value.
  
### Stack
Nextjs, railway, clerk, langchain, Zod, prisma, vitest.


### Packages

- **railway** : backend serverless.
- **clerk** : for sign in, sign up, and \*\*Authentication\*\*.
- **langchain**: for making using Ai prompts easy to implement.
- **react-autosave**: for making autosave changes while writing the entry.
- **zod**: to supply the LLM with a schema for the results returned from the LMM.
- **prisma**.
- **recharts**.
- **vitest**.

#### Overview

Journal application that allows users to log in and manage journal entries with the standard CRUD operations. The entries are analyzed and given an AI-generated sentiment value, summary, and color.
