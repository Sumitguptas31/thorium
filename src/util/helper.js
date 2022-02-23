function mydate(){
    const date= new Date()
    const todaydate= date.getDate()
    console.log(todaydate)
}
 
function month(){
    const date= new Date()
    const month=date.getMonth()
    console.log(month)
}
function batch()
    {
        console.log('thorium,W3D1,the topic for today is Nodejs module system')
    }
    module.exports.mydate=mydate
    module.exports.month=month
    module.exports.batch=batch
