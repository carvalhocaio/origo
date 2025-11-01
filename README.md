# Origo

A modern full-stack monorepo template with FastAPI and Next.js, powered by Turborepo.

## Tech Stack

### Frontend (`apps/web`)
- **[Next.js 16](https://nextjs.org/)** - React framework for production
- **[React 19](https://react.dev/)** - UI library
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching
- **[Biome](https://biomejs.dev/)** - Fast formatter and linter
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Backend (`apps/api`)
- **[FastAPI](https://fastapi.tiangolo.com/)** - Modern Python web framework
- **[Uvicorn](https://www.uvicorn.org/)** - ASGI server
- **[Ruff](https://docs.astral.sh/ruff/)** - Fast Python linter and formatter
- **[uv](https://docs.astral.sh/uv/)** - Fast Python package manager

### Tooling
- **[Turborepo](https://turbo.build/repo)** - High-performance build system
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[lint-staged](https://github.com/lint-staged/lint-staged)** - Run linters on staged files

## Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.12+
- **[uv](https://docs.astral.sh/uv/)** - Fast Python package manager

Install uv:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/carvalhocaio/origo.git
   cd origo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000

## Project Structure

```
origo/
├── apps/
│   ├── api/                # FastAPI backend
│   │   ├── main.py         # Main application file
│   │   ├── pyproject.toml
│   │   ├── ruff.toml       # Ruff configuration
│   │   └── Makefile        # Python tasks
│   └── web/                # Next.js frontend
│       ├── src/
│       │   ├── app/        # Next.js app directory
│       │   └── providers/
│       ├── biome.jsonc     # Biome configuration
│       └── next.config.ts
├── packages/               # Shared packages
├── .husky/                 # Git hooks
├── package.json            # Root package.json
└── turbo.json              # Turborepo configuration
```

## Available Scripts

### Root
- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all apps for production

### Frontend (`apps/web`)
- `npm run dev` - Start Next.js dev server (port 3000)
- `npm run build` - Build for production
- `npm run lint` - Lint and fix with Biome
- `npm run format` - Format code with Biome
- `npm run check` - Check and fix with Biome

### Backend (`apps/api`)
- `npm run dev` - Start FastAPI server with hot reload (port 8000)
- `make lint` - Check code with Ruff
- `make format` - Format and fix code with Ruff

## Configuration

### Linting & Formatting

This project uses automatic code quality checks before commits:

- **Python files**: Automatically formatted and linted with Ruff
- **TypeScript/JavaScript files**: Automatically checked with Biome

The pre-commit hook runs automatically when you commit. If there are fixable
issues, they'll be corrected automatically. If there are errors that can't be
fixed automatically, the commit will be blocked.

### API CORS

The FastAPI backend is configured to accept requests from
`http://localhost:3000` by default. Update the CORS settings
in `apps/api/main.py` if needed.

## Documentation

- **API Documentation**: http://localhost:8000/docs (when API is running)
- **Alternative API Docs**: http://localhost:8000/redoc

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This template combines the best practices from modern web development,
leveraging the power of:
- Turborepo for efficient monorepo management
- FastAPI for high-performance Python APIs
- Next.js for cutting-edge React development
