📁 1. Create Angular App
bash
Copy
Edit
ng new angular-gh-demo
cd angular-gh-demo
Adjust angular-gh-demo to your project name

📦 2. Install GitHub Pages Deploy Package
bash
Copy
Edit
ng add angular-cli-ghpages
Installs deployment support, but we’ll use GitHub Actions instead of the CLI

⚙️ 3. Add Base Href to Build
You do not need to hard-code it into angular.json. Instead, add it to your build command:

bash
Copy
Edit
ng build --configuration production --base-href /angular-gh-demo/
This ensures routing works when hosted on GitHub Pages.

🛠 4. Push Code to GitHub
bash
Copy
Edit
git init
git remote add origin https://github.com/YOUR_USERNAME/angular-gh-demo.git
git add .
git commit -m "Initial commit"
git push -u origin main
Replace YOUR_USERNAME with your GitHub username.

⚡ 5. Add GitHub Actions Workflow
Create this file:

📄 .github/workflows/deploy.yml

name: Deploy Angular to GitHub Pages

on:
  push:
    branches:
      - master  # or main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm ci

      - name: Install Angular CLI
        run: npm install -g @angular/cli@16.1.8    

      - name: Build Angular App
        run:  ng build --configuration production --base-href /angular-gh-demo/

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          branch: gh-pages       # The branch the action deploys to.
          folder: dist/angular-gh-demo   # The folder that the build script generates.
          clean: true
Make sure folder: matches your build folder name (dist/your-project-name)

🔐 6. Give GitHub Actions Write Access
Go to your GitHub repo → Settings → Actions → General

Under Workflow Permissions → Select:

✅ Read and write permissions

Save

🌐 7. Enable GitHub Pages
Go to Settings → Pages

Set:

Branch: gh-pages

Folder: / (root)

Save → GitHub will give you the live URL:

arduino
Copy
Edit
https://YOUR_USERNAME.github.io/angular-gh-demo/
✅ Done! Your Angular app is now live on GitHub Pages!
To update:

Make changes

Push to main

GitHub Actions will auto-build and auto-deploy

🧪 Example Live URL
Your app should now be available at:

arduino
Copy
Edit
https://voltairend.github.io/angular-gh-demo/


https://voltairend.github.io/angular-gh-demo/



deploy yaml file

name: Deploy Angular to GitHub Pages

on:
  push:
    branches:
      - master  # or main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm ci

      - name: Install Angular CLI
        run: npm install -g @angular/cli@16.1.8    

      - name: Build Angular App
        run:  ng build --configuration production --base-href /angular-gh-demo/

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          branch: gh-pages       # The branch the action deploys to.
          folder: dist/angular-gh-demo   # The folder that the build script generates.
          clean: true