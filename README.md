## Personal Portfolio

This is a portfolio website built using Next.js, React, Tailwind CSS, and Sanity.io. The website showcases [your skills, experience, and projects].

## Prerequisites

Make sure you have Node.js and npm installed on your system before proceeding.

## Installation

 1. Clone the repository using the following command:

 `git clone https://github.com/Jameshunter1/[Portfolio.git]`

 2. Navigate to the project directory using:

 `cd Portfolio`

 3. Install the project dependencies using:

 `npm install`

 4. Start the development server using:

  `npm run dev`

 5. Open your browser and navigate to http://localhost:3000 to view the app.

## Folder Structure

The folder structure for this project is as follows:

Portfolio/

 - components/

 - node_modules/

 - pages/
  - api
  - _app.ts
  - index.ts
 
 - sanity/
  - config/
  - dist/
  - node_modules/
  - plugins/
  - schemas/
  - static/
  - eslintrc
  -.npmignore
  - package.json
  - package-lock.json
  - README.md
  - sanity
  - tsconfig
 
 - styles/
  - blackbackground.png
  - globals.css
  - james.png
 
 - utils/
  - fetchPageInfo/
  - fetchProjects/
  - fetchSkills/
  - fetchSocials/
 
 - .env

 - .env.example

 - .env.production

 - next.config

 - next-env.d

 - package.json

 - package-lock.json

 - postcss.config

 - README.md


## Available Scripts

In the project directory, you can run the following scripts:

`npm run dev`

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

`npm run build`

Builds the app for production to the .next folder.

`npm run start`

Starts the app in production mode. The app should be compiled with npm run build first.

`npm run lint`

- Lints the code using ESLint and Prettier.

## Configuration

To configure Sanity.io, you will need to create a free account and set up a new project. Once you have your project ID and dataset name, you can update the sanity.js file in the utils folder with your configuration details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sanity.io](https://www.sanity.io/)
- [Create Next App](https://nextjs.org/docs/api-reference/create-next-app)
- License

This project is licensed under the MIT License - see the LICENSE file for details.
