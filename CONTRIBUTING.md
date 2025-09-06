# Contributing to Hubris Minerals Website

Thank you for your interest in contributing to the Hubris Minerals website! This document provides guidelines and instructions for contributing to this project.

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- pnpm (preferred) or npm
- Git

### Development Setup

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/hubris-minerals-website.git
   cd hubris-minerals-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
hubris-minerals-website/
├── public/                 # Static assets
│   ├── images/            # Product and hero images
│   └── data/              # Static JSON data
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/            # Page components
│   ├── contexts/         # React contexts
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utility functions
│   ├── data/             # Static data and constants
│   └── types/            # TypeScript definitions
├── .github/workflows/    # GitHub Actions
└── dist/                 # Production build output
```

## 🎨 Development Guidelines

### Code Style
- **TypeScript**: Strict mode enabled
- **ESLint**: Follow configured rules
- **Prettier**: Auto-formatting on save
- **Tailwind CSS**: Use utility classes for styling
- **Component Structure**: Functional components with hooks

### Naming Conventions
- **Files**: `kebab-case` for files, `PascalCase` for React components
- **Variables**: `camelCase` for variables and functions
- **Constants**: `SCREAMING_SNAKE_CASE` for constants
- **Components**: `PascalCase` for component names

### Commit Messages
Follow conventional commit format:
```
type(scope): description

Examples:
feat(products): add gold nugget filtering
fix(translation): resolve language switching issue
docs(readme): update installation instructions
style(header): improve mobile navigation layout
```

### Branch Naming
```
feature/description
bugfix/description
hotfix/description
docs/description

Examples:
feature/product-search
bugfix/mobile-nav-issue
docs/contributing-guide
```

## 🔧 Development Commands

```bash
# Development server with hot reload
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix

# Type checking
pnpm type-check
```

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## 📝 Making Contributions

### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes
- Write clean, documented code
- Follow existing patterns and conventions
- Add tests for new functionality
- Update documentation as needed

### 3. Test Your Changes
```bash
pnpm build        # Ensure production build works
pnpm test         # Run all tests
pnpm lint         # Check code style
```

### 4. Commit Your Changes
```bash
git add .
git commit -m "feat(scope): your descriptive message"
```

### 5. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear title describing the change
- Detailed description of what was changed and why
- Screenshots for UI changes
- Reference any related issues

## 🎯 Areas for Contribution

### High Priority
- **Performance optimization**: Improve loading times and Core Web Vitals
- **SEO enhancements**: Add more structured data and meta improvements
- **Accessibility**: WCAG compliance improvements
- **Mobile experience**: Enhanced responsive design

### Features
- **Product filtering**: Advanced search and filter capabilities
- **Interactive maps**: Mining locations visualization
- **Live chat**: Customer support integration
- **Analytics**: Enhanced tracking and reporting

### Content
- **Translations**: Additional language support
- **Product images**: High-quality asset optimization
- **Documentation**: Technical and user guides
- **Blog content**: Industry insights and company updates

## 🐛 Bug Reports

When reporting bugs, please include:
- **Environment**: Browser, OS, device
- **Steps to reproduce**: Clear reproduction steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: Visual evidence if applicable
- **Console errors**: Any error messages

## 💡 Feature Requests

For feature requests, provide:
- **Use case**: Why is this needed?
- **Description**: Detailed explanation
- **Mockups**: Visual representations if possible
- **Priority**: How important is this feature?

## 📞 Getting Help

- **GitHub Issues**: Bug reports and feature requests
- **Discussions**: General questions and ideas
- **Email**: contact@hubrisminerals.info for sensitive matters

## 🏆 Recognition

Contributors will be:
- Listed in the project's contributors section
- Acknowledged in release notes for significant contributions
- Invited to join the core team for exceptional contributors

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same proprietary license as the project.

---

**Thank you for contributing to Hubris Minerals! 🚀**
