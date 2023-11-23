For contributors, this guidelines help them get started and verify that they're submitting well-formed pull requests

### Guidelines for creating your first a pull request

1. Fork the project from this repo

2. Copy the forked project url

3. Clone the project

   ```bash
   git clone "url you just copied"
   ```

4. Open the cloned project folder with your text editor

5. Checkout to the dev branch

   ```bash
   git checkout dev
   ```

6. Checkout to a new branch. (The branch name should be descriptive. see an example below)

   ```bash
   git checkout -b header
   ```

7. Run the following commands to push your code to GitHub

   Add your code to the staging area

   ```bash
   git add .
   ```

   Commit your code in the staging area

   ```bash
   git commit -m "descriptive commit message"
   ```

   Push your code to GitHub

   ```bash
   git push origin your-branch-name
   ```

8. Create a pull request comparing your branch to dev branch
