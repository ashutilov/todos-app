# Todos App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

A simple todos application built with React and TypeScript. Add todos, view them in a list, and remove items you no longer need.

**Live demo:** [ashutilov.github.io/todos-app](https://ashutilov.github.io/todos-app/)

## Features

- Add todos via a form
- View all todos in a list
- Remove individual todos
- Shared state via React Context

## Tech stack

| Category | Tools                                |
| -------- | ------------------------------------ |
| UI       | React 18, shadcn/ui, Tailwind CSS v4 |
| Language | TypeScript                           |
| Build    | Vite                                 |
| Testing  | Vitest, Testing Library              |
| Tooling  | Yarn 4, Prettier                     |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/) 4.x (Corepack is supported via `packageManager` in `package.json`)

### Install

```bash
yarn install
```

### Development

```bash
yarn dev
```

Open [http://localhost:5173/todos-app/](http://localhost:5173/todos-app/) in your browser.

## Scripts

| Command              | Description                                   |
| -------------------- | --------------------------------------------- |
| `yarn dev`           | Start the Vite dev server                     |
| `yarn build`         | Type-check and build for production (`dist/`) |
| `yarn preview`       | Preview the production build locally          |
| `yarn test`          | Run Vitest in watch mode                      |
| `yarn test:run`      | Run the test suite once                       |
| `yarn test:coverage` | Run tests with coverage report                |
| `yarn format`        | Format the codebase with Prettier             |
| `yarn format:check`  | Check formatting without writing changes      |

## Project structure

```
src/
├── components/       # UI components (NewTodo, Todos, TodoItem, shadcn/ui)
├── lib/              # Shared utilities (cn helper)
├── models/           # Domain models (Todo)
├── store/            # React Context state (todos-context)
├── test/             # Vitest setup
├── App.tsx           # Root layout
└── index.tsx         # App entry point
```

## Deployment

The app is configured for GitHub Pages with base path `/todos-app/`.

### Automatic (GitHub Actions)

Pushes to `main` deploy automatically via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow builds the app and pushes the output to the `build` branch.

**One-time setup** in the GitHub repo:

1. Go to **Settings → Pages**
2. Set **Source** to **Deploy from a branch**
3. Choose branch **`build`** and folder **`/ (root)`**

After that, every push to `main` publishes to [ashutilov.github.io/todos-app](https://ashutilov.github.io/todos-app/).

You can also trigger a deploy manually from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.

### Manual preview

```bash
yarn build
yarn preview
```

Open [http://localhost:4173/todos-app/](http://localhost:4173/todos-app/) to preview the production build locally.

## License

Private project.
