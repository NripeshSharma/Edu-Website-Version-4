# Edu-Website-Version-4


## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Requirements](#requirements)

## General info
This is a educational website aimed at spreading free knowledge through online free Internet resourses like YouTube, Educational Blogs etc. 

## Technologies
Project is created with:
* Figma : Design Link (https://bit.ly/3HFfrY2)
* HTML5
* CSS3
* NodeJS: 14.18.1
* MongoDB: 5.0.5
* express: 4.17.2
* hbs: 4.2.0
* mongoose: 6.1.5
* Bootstrap: 5.1.3

## Requirements
The system must have Node Js, MongoDB database pre-installed
Also reload the website whenever checking the website for responsiveness

## Setup
To run this project, install it locally using npm:
```
$ cd ../project_folder
$ npm init
$ npm install express,hbs,mongoose,nodemon
```
#### Add this in the scripts part of package.json /n
"dev": "nodemon src/app.js -e js,hbs"

```
$ npm run dev
```
#### In your browser open

```
$ localhost/3000
```
## Edu Website
![image](https://user-images.githubusercontent.com/77961609/153601475-10241e5c-b323-4a91-845a-ace2e40c904c.png)
Now your website is running at post number 3000

![image](https://user-images.githubusercontent.com/77961609/153601613-8470d5ff-f375-4b3f-b88e-04dcdff055eb.png)
![image](https://user-images.githubusercontent.com/77961609/153601649-3343ae18-49a8-4e2c-bb15-477ea976ca4c.png)
![image](https://user-images.githubusercontent.com/77961609/153601728-3fbca683-8c3f-4c6a-87d9-e8fcaba9f35d.png)
![image](https://user-images.githubusercontent.com/77961609/153601760-ccd2dc85-50a0-431f-8346-0e705b89c507.png)
![image](https://user-images.githubusercontent.com/77961609/153601836-ca6dc11d-ec21-4031-b55f-e1ca2a75ce7c.png)
![image](https://user-images.githubusercontent.com/77961609/153602528-5a1cece3-2dea-40f3-9cb0-004c2ffc02d0.png)

## After Registering you can see your info in the mongo database using these commands in cmd
```
$ use Registration
$ db.registers.find().pretty()
```
## Example 
![image](https://user-images.githubusercontent.com/77961609/153602477-9b31af76-64c0-461d-9d78-f2ee6ca3cfc7.png)
