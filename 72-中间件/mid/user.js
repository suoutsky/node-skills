exports.user = function(req, res, next) {
    if (req.session.user_id) {
        db.users.find(req.session.user_id, function(err, user){
            if(err) {
                next(err)
            } else if (user) {
                res.locals.user = user;
                next();
            } else {
                next(new Error('Account not found'));
            }
        });
    } else {
        next();
    }
}