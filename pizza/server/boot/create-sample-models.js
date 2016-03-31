module.exports = function(app){
  app.dataSources.db.automigrate("Pizza" , function(err){
    if(err) throw err;

    app.models.Pizza.create([
      {'name': 'Champiñones','price':130, 'image':'cha.png','description':'Disfruta de una pizza con la mejor selección de champiñones, salchicha italiana y pimiento.'},
      {'name': 'Chilli','price':150, 'image':'chi.png','description':'La pizza con más sabor frijoles, jamón, chile y cebolla.'},
      {'name': 'Hawaiana','price':100, 'image':'hwn.png','description':'La clásica que no puede faltar, jamón y piña como te gusta.'},
      {'name': 'Hawaiana Suprema','price':100, 'image':'hwu.png','description':'Tomamos un clásico y lo mejoramos, jamón, piña, champiñones, pepperoni y un toque de cebolla.'},
      {'name': 'Meet me','price':180, 'image':'met.png','description':'La pizza para el carnivoro que llevas dentro, salchicha italiana, pepperoni, jamón, cebolla y aceitunas.'},
      {'name': 'Mexicana','price':160, 'image':'mxn.png','description':'Sabores mexicanos en tu pizza, frijoles, chile, salchica, champiñones y el mejor queso oaxaca.'},
      {'name': 'Peeña','price':140, 'image':'pen.png','description':'Prueba esta nueva combinación, pepperoni y piña.'},
      {'name': 'Pepperoni','price':120, 'image':'pep.png','description':'Por que todos amamos el pepperoni, disfruta nuestra pizza con pepperoni extra.'},
      {'name': 'Trópical','price':160, 'image':'tpl.png','description':'La pizza para compartir, piña, salchicha, cebolla, chile, pimientos y nuestra salsa secreta.'},
      {'name': 'Veggie','price':150, 'image':'vgi.png','description':'No quieres carne, disfruta de esta pizza con champiñones, frijoles, cebolla y pimiento.'},
    ] , function(err, pizzas){
      if(err) throw err;
      console.log("Models created: \n", pizzas);
    });

  });
}