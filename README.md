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