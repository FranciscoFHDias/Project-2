# **Project 2: World News Website**

## Overview

World News Website is a news aggregator which uses an api generated by The News API service.
The World News Website offers:

* World News which will allow the user to:
   * Custom search option for articles directly in The News API database
   * Sort news by alphabet and publish date order
   * Extend search to last 48hours/Week/Month from the 24hrs which is display initially
   
* Local Headlines which will allow the user to:
   * See news in either German, Chinese, Italian, Polish and xxxx
   * Extend search to last 48hours/Week/Month from the 24hrs which is display initially.
   
World News Website was co-authored between two  General Assembly's Software Engineering Immersive students.

## Project Brief

Build a React application in 48hrs with the following requirements:
  * Consumes a public API
  * Have several components
  * The app should include a router

## Project Execution

### Technologies Used
* HTML5
* CSS3
* JavaScript (ES6)
* SCSS
* Git
* GitHub
* External API
* React
* Webpack
* Bulma
* Node JS
* Babel
* Insomnia
### Approach Taken

##Find a public API
We used different sources [ProgrammableWeb](https://www.programmableweb.com/), [The Rapid API](https://blog.rapidapi.com/), [Medium] (https://medium.com/) and others. We agreed on using The News API (https://newsapi.org) because it offers different request routes and a generous requests to API allowance.
We used Insomnia to fully understand the data returned by each route request available. With full understanding of the data available we started drawing the wireframes and the sitemap on paper.
We started the coding process by installing a number of Node JS packs such as WebPack and loaders such as Babel, etc. We also setup Git and GitHub from the outset to track progress and changes during the project.
dotenv to ensure our API key was safe.

## The logic  and coding process
component by component in a logical order
MVP

## Wins and Blockers

### Wins
The API was very limited and patchy on the offered 10 properties:
source
*id
*name
*authored
*title
*description
*url
*urlToImage
*publishedAt
*content
We decided to expand on the publishedAt key in order to create functions that let you filter by time, up to one month ago. This was a fun challenge and allowed us to play around with Javascripts in-built new Date function.

### Blockers
The API we chose had a lot of objects to work with but was very patchy. Most of the articles were missing unique ids. To get around this we used the objects url as a unique identifier for our project.
The API was also lacking in the full article content, and offered only a snippet of text with the article url. As we did not want the user to navigate away from our website, we used an iframe to display the news article on show. This meant we could retain the news articles visual identity on our website as well. In an ideal world, the API would have had enough information for us to avoid using the iframe.

## Future Content

## What we learnt
