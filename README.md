# webpack-react-template

This project template is designed to streamline your development workflow using Webpack, ESLint, Prettier, and Git hooks with Husky. Follow these instructions to set up and manage your project efficiently.

Getting Started

1. Clone the Repository

Clone this repository to your local machine:

git clone <repository-url>
cd <repository-directory>

2. Install Dependencies

Run the following command to install all required dependencies:

npm run install-dependencies

Scripts

Development

	•	Start the Development Server
Launches the Webpack Development Server and automatically opens the app in your default browser:

npm run start


	•	Compile in Development Mode
Generates a development build without optimizations:

npm run dev

Production

	•	Build for Production
Compiles and optimizes your project for deployment:

npm run build

Deployment

	•	Deploy to GitHub Pages
Deploys the dist folder to the gh-pages branch on GitHub, making your project accessible via GitHub Pages:

npm run deploy

	Note: Make sure your project repository is connected to GitHub and GitHub Pages is enabled.

Linting and Formatting

	•	Lint the Code
Check for linting issues:

npm run lint


	•	Fix Linting Issues
Automatically fix linting issues where possible:

npm run lint:fix


	•	Format Code
Format your code with Prettier:

npm run format

Git Pre-Commit Hook

This project uses Husky to ensure that your code is linted and formatted before every commit. The pre-commit hook runs ESLint and Prettier on staged files using Lint-Staged.
	•	How It Works:
	1.	Stage your changes with git add.
	2.	When you run git commit, Husky automatically triggers the pre-commit hook.
	3.	Lint-Staged runs the following commands on staged files:
	•	JavaScript/JSX files: eslint --fix, prettier --write
	•	CSS/SCSS/HTML files: prettier --write
	•	Lint-Staged Configuration:

"lint-staged": {
  "src/**/*.{js,jsx}": [
    "eslint --fix",
    "prettier --write",
    "git add"
  ],
  "src/**/*.{css,scss,html}": [
    "prettier --write",
    "git add"
  ]
}

Project Structure

project-root/
├── dist/               # Compiled output (auto-generated)
├── src/                # Source files
│   ├── scripts/        # JavaScript files
│   ├── styles/         # SCSS/CSS files
│   └── index.html      # HTML file
├── webpack.config.js   # Webpack configuration
├── package.json        # Project metadata and scripts
├── .husky/             # Git hooks configuration
└── README.md           # Project instructions

Features

	•	React Support: Build React apps easily with Babel.
	•	SCSS Support: Style your project with SCSS, compiled to CSS.
	•	Image Handling: Import and use image files directly in your project.
	•	Live Reloading: Automatically updates the browser when changes are made.
	•	Pre-Commit Hooks: Automatically lint and format your code before committing.

Tips

	1.	Adding New Dependencies
Use npm install <dependency-name> to add additional libraries to your project.
	2.	Customizing Webpack
Modify the webpack.config.js file to suit your project’s specific needs.
	3.	Error Troubleshooting
Check the terminal output for detailed error messages if something doesn’t work as expected.

Contributing

Feel free to fork this repository and make improvements. Submit a pull request with a clear description of your changes.