module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html')
     });
     app.get('/chart',function(req,res){
        res.render('chart.html')
     });
     app.get('/boot',function(req,res){
        res.render('bootstrapTest.html')
     });
}
