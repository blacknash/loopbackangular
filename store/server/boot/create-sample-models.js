module.exports = function(app) {
  app.dataSources.mysqldb.automigrate('product', function(err) {
    if (err) throw err;
 
    app.models.product.create([
      {name: 'iPhone 6', price: 12000, image: "http://g01.a.alicdn.com/kf/HTB1AJRfIXXXXXaTXpXXq6xXFXXXe/-font-b-6-b-font-6s-Super-Flexible-Clear-TPU-font-b-Case-b-font.jpg", "slug":"iphone-6","description":"El mejor telefono de todos los tiempos, iphone 6 ya está aquí" },
    ], function(err, coffeeShops) {
      if (err) throw err; 
      console.log('Models created: \n', coffeeShops);
    });
  });
};
