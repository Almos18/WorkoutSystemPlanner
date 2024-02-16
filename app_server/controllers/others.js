const login = function(req, res){ 
    res.render('login', { title: 'Login' }); 
};

const register = function(req, res){ 
    res.render('register', { title: 'Register' }); 
};

const about = function(req, res){ 
    res.render('about', { title: 'About Us' }); 
};

const home = function(req, res)
{
    res.render('home', { title: 'Homepage'});
};


module.exports = { 
    login,
    register,
    about,
    home 
};