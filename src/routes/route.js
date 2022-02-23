const underscore = require('underscore')
const lodash = require('lodash')
let obj= require('../logger1/logger')
let newobj= require('../util/helper.js')
let trimcase = require('../validator/formatter.js')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    //module 1 
    res.send('My first ever api!')
    const wel= obj.welcome();
    console.log(wel)
    //module 2 
    const s=newobj.mydate()
    const u=newobj.month()
    const m=newobj.batch()
    //module 3
    const t=trimcase.trim
    const p=trimcase.low
    const v=trimcase.up
    //new
    //Lodash functions
    let names = [ 'Hariom', 'Arpit', 'Akash', 'Sabiha']
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let subArrays = lodash.chunk(months, 3)
    console.log('Chunks of months: ', subArrays)
    
    let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let lastNumbers = lodash.tail(oddNumbers)
    console.log('Last 9 odd numbers: ',lastNumbers)

    let arr1 = [1, 2, 3]
    let arr2 = [2, 3, 4, 4]
    let arr3 = [4, 5]
    let arr4 = [4, 6, 4]
    let arr5 = [5, 8]
    console.log('Merged array with unique values: ',lodash.union(arr1, arr2, arr3, arr4, arr5))

    let movie1 = ['horror', 'The Shining']
    let movie2 = ['drama','Titanic']
    let movie3 = ['thriller','Shutter Island']
    let movie4 = ['fantasy','Pans Labyrinth']
    let movieObject = lodash.fromPairs([movie1, movie2, movie3, movie4])
    console.log('Movies object: ', movieObject)
    res.send('My first ever api of the week!')
});
router.get('/hello', function (req, res) {
    
    res.send('My first ever api of the week!')
});


module.exports = router;

get.router('/letstart',function(req,res)
{
    res.send("hii")
});