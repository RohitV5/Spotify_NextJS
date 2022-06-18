<h1 align="center"> SPOTIFY REMOTE CONTROL </h1>
![spotify_nextjs](https://user-images.githubusercontent.com/23634935/174427302-1af1e468-d22b-4e9c-8721-02ea54754f88.png)


# Tutorial Credit : https://www.youtube.com/watch?v=3xrko3GpYoU&t=2167s

# For new project with next typescript and tailwind
 - npx create-next-app --example with-tailwindcss .

# For Lint Setup
 Refer - https://www.youtube.com/watch?v=ZXW6Jn6or1w&t=4s
 - npm init @eslint/config 
√ How would you like to use ESLint? · style       
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb      
√ What format do you want your config file to be in? · JSON
√ Would you like to install them now with npm? · Yes

- npm install eslint-config-airbnb-typescript --save-dev

This will create the eslintrc file for lint config

- npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev


# Husky Pre Commit Hooks 
    - Hooks allow us to to run some code on certain commit operation.
    npx husky-init && npm install
    fallback for powershell -> npx husky-init;npm install 

For Validating commit message use commitlint
https://commitlint.js.org/#/./guides-local-setup?id=guides-local-setup

Commit Type => "chore", "ci", "docs", "feat", "fix", "test", "style"
Sample Commit Message => chore: Commit message , chore: Ticket_ID

Commit and PR rules
Note: Commit Message: feat: Github tagger workflow
Note: PR message sample =>  Appname/chore/commit-message

Setup Github Action
https://www.youtube.com/watch?v=IrPz0kd2FTk

Semantic Versioning 
https://www.youtube.com/watch?v=Ob9llA_QhQY
Major.Minor.Patch eg. 1.2.0

Note: Tagger workflow works only after creating one release manually.

git tag v0.3.0
git push origin v0.3.0

For authentication we used next-auth - https://next-auth.js.org/
For typescript example of next auth - https://github.com/nextauthjs/next-auth-typescript-example

Spotify Web API Node : https://github.com/thelinmichael/spotify-web-api-node

Time: 47:10


3:24 for user variable in nextauth
