const { route } = require("../routes/route");
const jwt = require("jsonwebtoken");

const auth = async (req,res,next)=>{
    try {
        let token = req.headers['x-api-key'];
        if(!token){
            return res.status(400).json({status:false, msg: "Token is Missing!"});
        }
        else{
            let decodedToken = jwt.verify(token,'functionup-project');
            if(decodedToken){
                req.author = decodedToken;
                next();
            }
            else{
                res.status(400).json({status:false, msg: "Token is Missing"});
            }
        }
        
    } catch (error) {
        res.status(500).json({ msg: "Error", Error: error.message });
    }
}
const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')
    let userToBeModified = req.params.authorId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.authorId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = userModel.findById(req.params.authorId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    next()
}


module.exports.auth= auth
module.exports.authorise=authorise
