/*

    BASIC EXAMPLES

console.log(" Hello ") -- print a message on terminal 
// Variables
const message = "Hello, R U ok ?" // String
const number = 2.5 // float number

console.log(message)
console.log(number)

// FUNCTIONS
function sum(n1,n2){
    const sum = n1 + n2
    return sum
}

console.log(sum(10,20))
console.log(sum(1.5,2.0))

// OBJECT

const cup = {
    color: "white",
    size: 10,
    receive(){

    }
}

*/

// Building the Server 
// json JavaScript Object Notation
// npm i express -->installing server packages
//express is used to configure the server
const express = require("express")
const server = express()

// Create the class ideas with .js

const ideas = [ //[ brackets define an array ]
{   // { curly bracket define an object }
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Cursos de Programação",
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit maiores odit animi nulla. Pariatur accusantium sequi ab similique est, impedit at quos, quibusdam beatae quam eum nisi, dolorum accusamus?",
    url: "http://rocketseat.com.br"
},
{
    img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
    title: "Exercícios",
    category: "Saúde",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit maiores odit animi nulla. Pariatur accusantium sequi ab similique est, impedit at quos, quibusdam beatae quam eum nisi, dolorum accusamus?",
    url: "https://athleanx.com/"
},
{
    img: "https://image.flaticon.com/icons/svg/2729/2729069.svg",
    title: "Meditação",
    category: "Mentalidade",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit maiores odit animi nulla. Pariatur accusantium sequi ab similique est, impedit at quos, quibusdam beatae quam eum nisi, dolorum accusamus?",
    url: "https://www.mindful.org/"
},
{
    img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
    title: "Karaôke",
    category: "Diversão em Família",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit maiores odit animi nulla. Pariatur accusantium sequi ab similique est, impedit at quos, quibusdam beatae quam eum nisi, dolorum accusamus?",
    url: "https://www.youtube.com/channel/UC-urPNHF9kGZb2S6CtlhrHA"
},
{
    img: "https://image.flaticon.com/icons/svg/772/772937.svg",
    title: "Ciência",
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit maiores odit animi nulla. Pariatur accusantium sequi ab similique est, impedit at quos, quibusdam beatae quam eum nisi, dolorum accusamus?",
    url: "https://www.youtube.com/channel/UClu474HMt895mVxZdlIHXEA"
}




]

// To configure static files as css, scripts, images

server.use(express.static("public"))

// nunjucks configuration
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, // allow to update the css file
    // cache is good when the project is done, made things faster
    // but is not so good to use when in development 
})

// create a route /
// capture the customer's request to respond
server.get("/",function(req,res){
    // console.log("Arrived") flag to inform the access

    const reversedIdeas = [...ideas].reverse() // an auxiliary array to get the elements of ideas
     
    //  without it, every time the page is updated, the reverse method changes
    //  the reference of the ideas, so, in one moment, we see the elements in the correct order,
    //  in another, they are inverted. With the auxiliary array, we store the reference we want 
    //  and keep the visualization constant.    
    
    let lastIdeas = [] // declaring an array, let allows to change the value of the variable
    for (let idea of reversedIdeas) { // access the elements in reverser order
        if (lastIdeas.length < 2) { // in the index we only want to show 2 ideas
            lastIdeas.push(idea); // fills the array with the "idea" data 
        }
    }

    return res.render("index.html", {ideas: lastIdeas}) // __dirnam : directory name, shows all tha path to the directory inside the PC
    // link to the html file 
})

// route to ideas file 
server.get("/ideas",function(req,res){

    const reversedIdeas = [...ideas].reverse()

    return res.render("ideas.html", {ideas: reversedIdeas}) // render works because the nunjucks configuration
})


// linked the server on door 3000
server.listen(3000)


//////////////////////////////////////////////////

// Install Packages 

//npm i nodemon --> installing monitoring node packages 
//npm i nunjucks --> allow to use variables with a template enging in html
// make the page dynamic