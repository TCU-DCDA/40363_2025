#!/bin/bash

# Setup script to connect local 40363_2025 folder to GitHub repository
# Usage: ./setup-connection.sh [path-to-local-folder]

set -e

REPO_URL="https://github.com/TCU-DCDA/40363_2025.git"
FOLDER_NAME="40363_2025"

echo "🚀 Setting up connection to GitHub repository: $REPO_URL"
echo

# Get the local folder path
if [ $# -eq 1 ]; then
    LOCAL_FOLDER="$1"
else
    echo "Please enter the full path to your local $FOLDER_NAME folder:"
    read -r LOCAL_FOLDER
fi

# Validate the folder exists
if [ ! -d "$LOCAL_FOLDER" ]; then
    echo "❌ Error: Folder '$LOCAL_FOLDER' does not exist."
    echo "Please create the folder first or provide the correct path."
    exit 1
fi

echo "📂 Using local folder: $LOCAL_FOLDER"

# Navigate to the folder
cd "$LOCAL_FOLDER"

# Check if it's already a git repository
if [ -d ".git" ]; then
    echo "📋 Git repository already exists. Checking remote configuration..."
    
    # Check if origin remote exists
    if git remote get-url origin >/dev/null 2>&1; then
        CURRENT_REMOTE=$(git remote get-url origin)
        if [ "$CURRENT_REMOTE" = "$REPO_URL" ]; then
            echo "✅ Repository is already connected to the correct remote."
        else
            echo "⚠️  Repository is connected to a different remote: $CURRENT_REMOTE"
            echo "Do you want to update it to $REPO_URL? (y/n)"
            read -r UPDATE_REMOTE
            if [ "$UPDATE_REMOTE" = "y" ] || [ "$UPDATE_REMOTE" = "Y" ]; then
                git remote set-url origin "$REPO_URL"
                echo "✅ Remote URL updated successfully."
            fi
        fi
    else
        echo "🔗 Adding remote origin..."
        git remote add origin "$REPO_URL"
        echo "✅ Remote origin added successfully."
    fi
else
    echo "🔧 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized."
    
    echo "🔗 Adding remote origin..."
    git remote add origin "$REPO_URL"
    echo "✅ Remote origin added successfully."
fi

# Fetch latest changes
echo "📥 Fetching latest changes from GitHub..."
git fetch origin

# Check if main branch exists locally
if git show-ref --verify --quiet refs/heads/main; then
    echo "🌿 Main branch exists locally."
else
    echo "🌿 Creating main branch..."
    git checkout -b main
fi

# Set upstream tracking
echo "🎯 Setting up branch tracking..."
git branch --set-upstream-to=origin/main main

# Check for any existing files to commit
if [ -n "$(git status --porcelain)" ]; then
    echo "📋 Found uncommitted changes. Staging files..."
    git add .
    
    echo "Please enter a commit message for your initial commit:"
    read -r COMMIT_MESSAGE
    
    if [ -z "$COMMIT_MESSAGE" ]; then
        COMMIT_MESSAGE="Initial commit from local folder"
    fi
    
    echo "💾 Committing changes..."
    git commit -m "$COMMIT_MESSAGE"
    
    echo "📤 Pushing changes to GitHub..."
    git push -u origin main
    echo "✅ Changes pushed successfully."
else
    echo "📋 No uncommitted changes found."
fi

echo
echo "🎉 Successfully connected your local folder to the GitHub repository!"
echo
echo "📚 Useful commands:"
echo "  git status          - Check the status of your files"
echo "  git add .           - Stage all changes"
echo "  git commit -m 'msg' - Commit with a message"
echo "  git push            - Push changes to GitHub"
echo "  git pull            - Pull latest changes from GitHub"
echo
echo "🌐 Repository URL: $REPO_URL"
echo "📂 Local folder: $LOCAL_FOLDER"
echo
echo "Happy coding! 🚀"