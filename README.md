#FINAL PROJECT - MONGO QUERY SELECTION

#MIS 6383.501 - Programming Approaches to Data Management

- Deployed in Heroku
- Using: Express, Mongo(not implemented)

- This project displays mongo queries. These queries are run, and the results copied into text files. The
program then selects the text file, based on the users button selection.

- nodemon was used during development for realtime testing
- attempts to connect to mongo directly failed, i might see if i can use Atlas later on to overcome issue
    - i think the problem is i couldn't figure out how to keep the mongo server running while it is deployed in heroku

- server.js - is my server side script, it manages the html file. It was also suppose to manage the mongo request, but unfortunatley i couldn't get that to work properly.

- client.js - client side scripts
- index.html - webpage
- mongo#.txt - mongo queries
