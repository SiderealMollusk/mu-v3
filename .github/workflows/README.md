# GitHub Workflows

This directory contains GitHub Actions workflows for automating various aspects of the project.

## Issue to Project Automation

### `add-to-project.yml`

This workflow automatically adds newly created issues to the project board's backlog.

**Trigger:** When an issue is opened

**What it does:**
- Automatically adds the new issue to the GitHub Project board
- The issue appears in the backlog/default column for triage and planning

**Setup Requirements:**

1. **Create a Personal Access Token (PAT):**
   - Go to GitHub Settings → Developer settings → Personal access tokens → Fine-grained tokens
   - Create a new token with the following permissions:
     - Repository access: Select this repository
     - Permissions:
       - Issues: Read and write
       - Metadata: Read-only
       - Projects: Read and write

2. **Add the PAT as a repository secret:**
   - Go to Repository Settings → Secrets and variables → Actions
   - Create a new secret named `ADD_TO_PROJECT_PAT`
   - Paste your PAT as the value

3. **Configure the project URL:**
   - Update the `project-url` in `add-to-project.yml` to match your GitHub Project URL
   - Format: `https://github.com/users/{USERNAME}/projects/{PROJECT_NUMBER}` (for user projects)
   - Or: `https://github.com/orgs/{ORG}/projects/{PROJECT_NUMBER}` (for org projects)

### Future Automation Goals

This is the first step toward fully automating the project board. Future enhancements may include:
- Automatically moving issues through workflow states
- Auto-assigning issues based on labels or content
- Setting up automated notifications
- Creating automated reports
- Auto-closing stale issues
