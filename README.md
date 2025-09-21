# 40363_2025

## Connecting Your Local Folder to This GitHub Repository

This guide will help you connect a local folder named "40363_2025" to this GitHub repository.

### Prerequisites
- Git installed on your computer
- A local folder named "40363_2025" with your project files

### Method 1: Connect Existing Local Folder (Recommended)

If you already have a local folder with content that you want to connect to this repository:

```bash
# Navigate to your local 40363_2025 folder
cd path/to/your/40363_2025

# Initialize git if not already done
git init

# Add this repository as the remote origin
git remote add origin https://github.com/TCU-DCDA/40363_2025.git

# Fetch the latest changes from GitHub
git fetch origin

# Set up the main branch to track the remote
git branch --set-upstream-to=origin/main main

# If you have existing files, add and commit them
git add .
git commit -m "Initial commit from local folder"

# Push your local changes to GitHub
git push -u origin main
```

### Method 2: Clone and Replace

If you want to start fresh with this repository structure:

```bash
# Clone this repository
git clone https://github.com/TCU-DCDA/40363_2025.git

# Navigate to the cloned folder
cd 40363_2025

# Copy your existing files into this folder
# (Replace the contents as needed)

# Add, commit, and push your changes
git add .
git commit -m "Add project files"
git push origin main
```

### Method 3: Using the Setup Script

Use the provided setup script for automated connection:

```bash
# Download and run the setup script
curl -o setup-connection.sh https://raw.githubusercontent.com/TCU-DCDA/40363_2025/main/setup-connection.sh
chmod +x setup-connection.sh
./setup-connection.sh
```

### Common Git Commands

After connecting your folder, here are some useful commands:

```bash
# Check status of your files
git status

# Add all changes
git add .

# Commit changes with a message
git commit -m "Your commit message"

# Push changes to GitHub
git push origin main

# Pull latest changes from GitHub
git pull origin main

# Check your remote configuration
git remote -v
```

### Troubleshooting

#### If you get merge conflicts:
```bash
# Pull with rebase to avoid merge commits
git pull --rebase origin main

# If conflicts occur, resolve them and continue
git add .
git rebase --continue
```

#### If you need to force push (use with caution):
```bash
git push --force-with-lease origin main
```

#### If you have different histories:
```bash
git pull origin main --allow-unrelated-histories
```

### Project Structure

```
40363_2025/
├── README.md          # This file
├── LICENSE           # MIT License
├── .gitignore        # Git ignore rules
├── .gitattributes    # Git attributes
└── setup-connection.sh # Setup script
```

### Getting Help

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Pro Git Book](https://git-scm.com/book)