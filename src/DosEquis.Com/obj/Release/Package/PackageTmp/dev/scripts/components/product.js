import 'scss/components/product';
require("vendor/jquery.parallax-scroll");
require("vendor/jquery.easing.1.3");
const template = require('../beersandrecipes/templates/product.html');
export default class Product{
	constructor(data){
      this.div = template(data);
	}
}
