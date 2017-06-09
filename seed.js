var db = require("./models");

var furnitureList = [];
furnitureList.push({
                name: 'Grey Sofa Sectional',
                price: 800,
                link: 'http://www.interiordefine.com/walters-chaise-lt?gclid=CjwKEAjwjunJBRDzl6iCpoKS4G0SJACJAx-VfGHLJNNJCIiKkR-Kjx35q8LH1nAGvAlBmYCevwNgsxoCo3zw_wcB#NT-622723-7/',
                photo: 'http://data.cylindo.com/assets/viewer/19/144190/Walters%20chaise%20sectional%20left%202016_32.jpg'
              });
furnitureList.push({
                name: 'White Chrome Dining Chair',
                price: 39,
                link: 'http://www.ikea.com/us/en/catalog/products/S19889748/',
                photo: 'http://www.ikea.com/us/en/images/products/vilmar-chair-white__0214682_PE370791_S4.JPG'
              });
furnitureList.push({
                name: 'Black Modern Floor Lamp',
                price: 235,
                link: 'https://www.article.com/product/1373/willo-black-floor-lamp?forceCurrencyId=1&gclid=CjwKEAjwjunJBRDzl6iCpoKS4G0SJACJAx-VEo8H-MRaBdNdOR3Aj6AWSkEq0rqqIN78u0SoyuR6UhoCb5Tw_wcB',
                photo: 'https://d39vwtwllgful3.cloudfront.net/products/SKU405/2890x1500/image15115.jpg'
              });
furnitureList.push({
                name: 'Dining table with wood top',
                price: 79,
                link: 'http://www.ikea.com/us/en/catalog/products/10264279/?icid=us|ilp|20170321|dL',
                photo: 'http://www.ikea.com/us/en/images/products/lerhamn-table__0238239_PE377693_S4.JPG'
              });


db.Furniture.remove({}, function(err, furnitures){

  db.Furniture.create(furnitureList, function(err, furnitures){
    if (err) { return console.log('ERROR', err); }
    console.log("all furnitures:", furnitures);
    console.log("created", furnitures.length, "furnitures");
    process.exit();
  });

});
