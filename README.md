
## 1. I will follow this git convention ##
- **Issue on project:** A bug regarding authentication
-**Branch Name:** auth-bug-fix

### Steps to Create a Pull Request (PR):

1. **step1: Checkout the Main Branch:**
   ```bash
   git checkout main
2. **step2:pull code from main branch:**
   ```bash
   git pull origin main
3. **step:3 create a new Branch named hotfix/auth-bug-fix :**
   ```bash
   git checkout -b auth-bug-fix
4. **step:4 add the changes those are made:**
   ```bash
   git add .
5. **step5: provide a git commit message**
   ```bash
  git commit -m ‘authentication bug fixed’
6. **step:6 push the code in the current branch:**
   ```bash
   git push origin hotfix/auth-bug-fix
7. **create a PR to review and merge**
  browse to github and create a pull request regarging this branch