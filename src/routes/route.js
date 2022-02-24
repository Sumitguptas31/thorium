const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get('/movie',function(req,res){
    res.send(['pk','pushpa','moneyheist','magdhira'])
    
});
  
router.get('/movie/:index',function(req,res){
  
    let moviename=['pushpa','kgf','pk','sultan','mirzapur']
    let indexassign=req.params.index
     if(indexassign>=moviename.length)
     {
         res.send("not exist at this index")
     }
     else
     {
       res.send(moviename[indexassign])
     }

     res.send({movie: movie[indexes]})
    
});

router.get('/film',function(req,res){

    let newfilm=[{"id":1,"name":"moneyheist"},{"id":2,"name":"RRR"},{"id":3,"name":"KGF"},{"id":4,"name":"life of pi"}]
    res.send(newfilm)

   
});

router.get('/film/:filmid',function(req,res)
{
   let filmname=[{"id":1,"name":"moneyheist"},{"id":2,"name":"RRR"},{"id":3,"name":"kgf"},{"id":4,"name":"life of pi"}]
   let idname=req.params.filmid
   if(idname>filmname.length)
   {
       res.send("movie with this id does not exist")
   }
   else{
          for(let i=0;i<=filmname.length;i++)
          {
              if(filmname[i].id==idname){
                  res.send(filmname[i])
              }
          }
   }
    
});










    





module.exports = router;
