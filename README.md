# LOGIN-POST-COMMENT

This is a simple app for logging in with Oauth2 and interacting with a wall by posting and commenting on posts.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)

## Installing

* Run `npm install`
* Create a `.env` file at the root of the project and paste the following lines into the file:
    ```
    GRANT_TYPE=password
    ```
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run dev:client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

* Run `npm start`
* Navigate to `localhost:5000`

## Deployment

1. Complete the "Prerequisites" and "Installing" sections of this ReadMe
2. Create a separate git branch for deploying to heroku 
3. In the project's .gitignore file, remove the build/ line -- we will want the build folder in heroku!
4. Run a build locally. Enter in the terminal: `npm run build`.
5. In the terminal type `git status` and check to see you have a red (untracked) build/ folder. 
6. Add & Commit:
Enter `git add .`, then `git commit -m "deploying to heroku (or some other appropriate comment here in quotes)"`
7. Push:
Enter `git push`.
In the terminal, a suggested git command will appear to push to the correct target for your branch.
Copy and paste the suggested git command and enter it.
8. Repeat steps 4-7 in order every time you wish to re-deploy.
9. Create a new Heroku project.
10. Link the Heroku project to the project GitHub Repo.
11. Create a Herkoku mLab database.
12. Add environment variables to the Heroku project as follows:
    ```
    GRANT_TYPE=password
    ```
13. In the deploy section, select manual deploy.

## Authors

* Dylan Dorsey