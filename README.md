
## Ans 1. I will follow this git convention ##
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
  git commit -m authentication bug fixed
6. **step:6 push the code in the current branch:**
   ```bash
   git push origin auth-bug-fix
   
7. **create a PR to review and merge**
  browse to github and create a pull request regarging this branch




 ### Steps to Resolve the Problem

1. **Map the Array of Collections:**
   - Start by mapping through the array of collections. This will allow us to process each collection.

2. **Create a Lookup Map for Menu Items:**
   - For each collection, iterate through the `menuItems` array.
   - Create a map where the key is the `id` of the menu item and the value is the menu item object. 

3. **Iterate Through Each Category:**
   - Within each collection, iterate through the `categories` array.
   - For each category, get the `menuItemsIds` array, which contains the IDs of the menu items belonging to that category.

4. **Match Menu Items to Category IDs:**
   - Use the lookup map created in step 2 to fetch the corresponding menu items for each `menuItemsId` in the category.

5. **Store the Results:**
   - Create an array to hold the results.
   - For each category, store the matched menu items in the array along with the category name and the collection type.
   - This array will represent the final structured result containing the items for each category.

