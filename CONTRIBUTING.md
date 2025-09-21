# Contributing to 40363_2025

Thank you for your interest in contributing to this project! This document provides guidelines for contributing to the repository.

## Getting Started

1. **Connect your local folder** using one of the methods in [README.md](README.md)
2. **Read the [Git Guide](GIT_GUIDE.md)** for common Git operations
3. **Check the project structure** and understand the codebase

## How to Contribute

### 1. Fork and Clone (External Contributors)
```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/40363_2025.git
cd 40363_2025
git remote add upstream https://github.com/TCU-DCDA/40363_2025.git
```

### 2. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 3. Make Your Changes
- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Test your changes thoroughly

### 4. Commit Your Changes
```bash
git add .
git commit -m "Add: brief description of your changes"
```

### 5. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```
Then create a pull request on GitHub.

## Commit Message Guidelines

Use clear, descriptive commit messages:

- `Add: new feature or file`
- `Fix: bug fix`
- `Update: modify existing feature`
- `Remove: delete feature or file`
- `Docs: documentation changes`
- `Style: formatting, no code change`
- `Refactor: code restructuring`
- `Test: add or modify tests`

## Code Style

- Use consistent indentation (2 or 4 spaces)
- Follow language-specific style guides
- Comment complex logic
- Use meaningful variable and function names

## Pull Request Process

1. **Update documentation** if needed
2. **Test your changes** thoroughly
3. **Write a clear PR description** explaining what and why
4. **Link to any related issues**
5. **Request review** from maintainers

## Issues and Bug Reports

When reporting issues:

1. **Use a clear, descriptive title**
2. **Provide steps to reproduce** the issue
3. **Include error messages** if any
4. **Specify your environment** (OS, Git version, etc.)
5. **Add screenshots** if helpful

## Development Workflow

```bash
# Start with latest main
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "Add: my new feature"

# Push to your fork
git push origin feature/my-feature

# Create pull request on GitHub
```

## Getting Help

- Check the [README.md](README.md) for setup instructions
- Review the [Git Guide](GIT_GUIDE.md) for Git help
- Open an issue for questions or problems
- Contact maintainers for urgent matters

## License

By contributing, you agree that your contributions will be licensed under the same [MIT License](LICENSE) that covers the project.

Thank you for contributing! 🎉