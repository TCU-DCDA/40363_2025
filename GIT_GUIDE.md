# Git Quick Reference Guide

## Initial Connection (Choose One Method)

### Method 1: Connect Existing Folder
```bash
cd /path/to/your/40363_2025
git init
git remote add origin https://github.com/TCU-DCDA/40363_2025.git
git fetch origin
git branch --set-upstream-to=origin/main main
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Method 2: Use Setup Script
```bash
curl -o setup-connection.sh https://raw.githubusercontent.com/TCU-DCDA/40363_2025/main/setup-connection.sh
chmod +x setup-connection.sh
./setup-connection.sh
```

### Method 3: Clone Repository
```bash
git clone https://github.com/TCU-DCDA/40363_2025.git
cd 40363_2025
# Copy your files here
git add .
git commit -m "Add project files"
git push origin main
```

## Daily Workflow

### Check Status and Make Changes
```bash
git status                    # See what's changed
git add .                     # Stage all changes
git add filename.txt          # Stage specific file
git commit -m "Description"   # Commit with message
git push                      # Push to GitHub
```

### Get Latest Changes
```bash
git pull                      # Get latest changes
git fetch                     # Fetch without merging
git merge origin/main         # Merge fetched changes
```

## Common Scenarios

### First Time Pushing
```bash
git push -u origin main       # Set upstream and push
```

### Undo Last Commit (Not Pushed)
```bash
git reset --soft HEAD~1      # Keep changes staged
git reset --hard HEAD~1      # Discard changes completely
```

### See What Changed
```bash
git diff                      # See unstaged changes
git diff --staged             # See staged changes
git log --oneline             # See commit history
```

### Handle Merge Conflicts
```bash
git pull                      # Try to pull latest
# If conflicts occur:
# 1. Edit conflicted files
# 2. Remove conflict markers
git add .                     # Stage resolved files
git commit                    # Complete the merge
```

### Branch Operations
```bash
git branch                    # List branches
git branch feature-name       # Create new branch
git checkout feature-name     # Switch to branch
git checkout -b feature-name  # Create and switch
git merge feature-name        # Merge branch to current
git branch -d feature-name    # Delete branch
```

### Stash Changes Temporarily
```bash
git stash                     # Save current changes
git stash pop                 # Restore stashed changes
git stash list                # See all stashes
git stash drop                # Delete latest stash
```

### Remote Operations
```bash
git remote -v                 # Show remote URLs
git remote add origin URL     # Add remote
git remote set-url origin URL # Change remote URL
```

### Force Operations (Use with Caution)
```bash
git push --force-with-lease   # Safer force push
git reset --hard origin/main  # Reset to match remote
```

## Troubleshooting

### Repository Not Connected
```bash
git remote add origin https://github.com/TCU-DCDA/40363_2025.git
git fetch origin
git branch --set-upstream-to=origin/main main
```

### Unrelated Histories Error
```bash
git pull origin main --allow-unrelated-histories
```

### Authentication Issues
- Use GitHub Personal Access Token instead of password
- Set up SSH keys for seamless authentication

### Large File Errors
- Add large files to .gitignore
- Use Git LFS for large files if needed

## Configuration

### Set Your Identity
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Useful Aliases
```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
```

## Getting Help
```bash
git help <command>            # Get help for specific command
git <command> --help          # Alternative help format
```