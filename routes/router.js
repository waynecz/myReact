var print = require('../modules/print');

var User       = require('./control/user');
var Department = require('./control/department');
var Index      = require('./control/index');
var Api        = require('./control/api');
var Filter     = require('./control/filter');
var Apply = require('./control/apply');

module.exports = function (app) {

    //页面中间件
    app.use(Filter.renderFilter);

    app.get('/', Index.index);

    //前台页面路由:
    app.get('/index', Index.index);

    app.get('/login', User.loginPage);
    app.get('/signin', User.showSignin);
    app.get('/signup', User.showSignup);
    
    
    app.post('/signin', User.signin);
    app.post('/signup', User.signup);



    //申请管理
    app.post('/apply',Apply.add);
    app.post('/leaderCheck',Apply.leaderCheck);
    app.post('/safeCheck',Apply.safeCheck);
    app.post('/opCheck',Apply.opCheck);



    //后台管理路由:
    app.post('/admin/user/password',User.password);
    app.post('/admin/department/add',Department.add);
    app.post('/admin/department/update',Department.update);

    //全局数据请求
    app.post("/data/:model/:operation",Api.data);
    app.get("/data/:model/:operation",Api.data);


    app.get('/admin/os',Index.os);

    //自动渲染后台页面
    app.get(['/admin/:homePage'],Index.auto);

    //错误页面
    app.get('/404', Index.page404);
    app.get('/500', Index.page500);

}
