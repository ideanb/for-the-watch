# How to run this project

### Clone repo and go to project folder
1. `git clone https://github.com/ideanb/for-the-watch.git`
1. `cd for-the-watch`

### Build docker image and run it
1. `docker build -t mydb .`
1. `docker run -p 5432:5432 -d mydb`

### Run API
1. `npm i`
1. create a `.env` file 
(You can just use .env.example and rename it, I know I should not upload real .env to the repo but it's just to make easier for you this revision.)
1. `npm start`

### Go to default API address
`http://localhost:5000`

### Avaiable Enpoints
`/topActiveUsers?page={pageNumber)`
`/users?id={userId}`
https://github.com/Jobbatical/task-top-active-users-api/blob/master/spec.md