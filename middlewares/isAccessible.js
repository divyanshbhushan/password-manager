module.exports = (req, res, next) =>{
    if(req.isAuthenticated()){
        if(req.session.passport.user === item.author){
        next();
    } else {
        res.redirect('/unauthorized');
    }
    } else {
        res.redirect('/login')
    }
}