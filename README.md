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

PR message sample =>  Appname/chore/commit-message

Setup Github Action
https://www.youtube.com/watch?v=IrPz0kd2FTk

Semantic Versioning 
https://www.youtube.com/watch?v=Ob9llA_QhQY
Major.Minor.Patch eg. 1.2.0

