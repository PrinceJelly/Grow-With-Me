# Grow With Me

![image](https://user-images.githubusercontent.com/71748268/185727820-8e61136c-f74b-4034-8aea-f814c53a4d29.png)
![image](https://user-images.githubusercontent.com/71748268/185728949-23092419-883b-4b0c-920f-9ea210faf590.png)
![image](https://user-images.githubusercontent.com/71748268/185728925-e4085831-f75c-47db-891d-7d2ce854612e.png)


This was a capstone project at my bootcamp course in September - December. 

My idea was to create a budgeting application that would appeal to the younger generation and encourage them to save by gamifying the whole idea into something a bit more fun and interactive. 

Rewarding the user for a healthy budging habit. 
 
It would feature everything that I've learned thus far into a final completed project, this project uses mySQL for it's database and react.js for it's front-end framework.
 
There were complications along the way such as spending too much time on the calendar component to work the way that I needed it to as it was imported from a library.
In the future, I've determined that I would've had an easier time creating a calendar specifically for this project to function as I needed to and a lesson for myself not to focus too hard on this certain functionally when knowing there are other sections that may need more work. 
 
Other complications were getting a grasp on mySQL and database building with bookshelf and knex. I had not known that most of where the functionally when generating content would come from the back-end, however in the end, I was able to create a fully optimizable generator but having to leave the evolution part for another day. 


Would I go back on this project in the future? 
Once I learn more... most definitely. 

# Update: 2022-08-19

Hello! I wanted to add some insights on this old project. 
I still really adore this project and it's concept. Looking back at the code, I actually exclaimed outloud "Huh, that's weird. Why did I do that?"
It's cool to see old projects and how much I've grown as a developer. 
I might return on a lighter version of this project or on a different platform as it was originally designed for mobile!

The number one thing I want to write is my own calendar instead of using a library/dependency. 
I think I ran into so many problems with the code because the calendar wasn't bulit in, it wasn't as mutable and flexible as I wanted it to be.
I hope to return to this someday!

Libraries/Dependancies Used: 
React-Calendar

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

#### Entry : Janaury 11 2021

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

#### Entry : July 17th 2021

There are a few features that are still needing to be worked on which would be contruction of the STATS PAGE and as well as the responsive design of GROW-WITH-ME throughout devices.

The other features i'd like to add in the future is the pets being able to evolve. 
