# Best Practices for NodeJS Project

# Database Setup

```mysql
create database sampleblogdb;
create user samplebloguser idenfied by 'samplblogpass';
grant all privileges on sampleblogdb.* to samplebloguser;
flush privileges
```

# DEBUGGER TOOL

- npm i -D debug

* To run console.log of DEBUGGER
  DEBUG=app:\* node src/run.js
  Show of only app.js file
