## Grow With Me

Libraries/Dependancies Used: 
React-Calendar

Otherwise my application may not work D: 

There's a few more steps before I can say this project is complete and a few more refactoring to do.

I've spent a lot of my time learning how to use react-calendar for this application...I will need to do more to get it working the way I want it to.

## Installation
This project uses the package manager yarn.
Be sure to install [yarn](https://yarnpkg.com/)

before viewing the project live.

```bash
yarn install 
```

this project also uses mySQL for it's database in the terminal follow these intructions:
If you do not have mySQL installed, you may not be able to fully view this project.

Create your schema when opening mySQL to ensure a database. 

Here is the download link to [MySQL](https://www.mysql.com/downloads/)

In your preferred terminal type in:

```bash
mysql -u root -p [your password]
```
This command will log into mySQL shell with the username 'root' and will prompt you for your password, which was set when you installed mySQL. 

Once this is set-up, go back to the folder of this project, and cd into the server-side with the following command:

```bash
cd server
```

You may notice I have added the following commands in the package.json for ease of use. 

```json
    "migrate": "knex migrate:latest",
    "migrate:down": "knex migrate:down",
    "migrate:rollback": "knex migrate:rollback",
    "seed": "knex seed:run",
    "start": "node index.js",
`
Run the following commands in your terminal: 

```bash
yarn install
yarn migrate
yarn seed
yarn start
```

Your server should be up in running, if there are problems please refer to the [knex](https://knexjs.org/) documentation. 

## ROADMAP FOR GROWWITHME: 

# Entry : Janaury 11 2021

Update the ADD NEW ENTRY PAGE.
Enable validation, 
Construct the post methods. 
Pet Generator when creation of new Goal.

Construct the STATS PAGE. 
This component will be using CHARTJS.
And grabbing specific dates.

ProgressBar will need to fill in with props with the correct amount for each goal, rather than being static.

WHILE an onChange handler when pet reaches 50% and 100%. 

Construct the home page with more information.


Adding the feature where the creature grows depending on the percentage.
divided by 1/3, 
LVL 1 = 1%-49%
LVL 2 = 50%-99% 
LVL 3 MAX = 100%  

Research user authentication 
Sign-up form
Register the user to the Database with POST

ADD RESPONSIVE DESIGN IN THE FINAL PRODUCT!

There's a lot more work to be done, and a lot more code clean-up. 

See you on January 4th!

# Entry : July 17th 2021

There are a few features that are still needing to be worked on which would be contruction of the STATS PAGE and as well as the responsive design of GROW-WITH-ME throughout devices.

The other features i'd like to add in the future is the pets being able to evolve. 
