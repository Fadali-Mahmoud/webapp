/*global angular*/
var app = angular.module('myapp', []);
    app.controller('productList', function(){
        this.products = list;
    });
    
     var list = [{
	"name": "Pro Tech toolKit",
	"button": "",
	"price": 69.95
}, {
	"name": "64Bit Driver Kit",
	"button": "",
	"price": 28.95
}, {
	"name": "Galaxy S III Headset",
	"button": "",
	"price": 20.00
}, {
	"name": "Iphone Headset",
	"button": "",
	"price": 90.00
}, {
	"name": "Iphone 5 Replacement Battery",
	"button": "",
	"price": 249.99
}, {
	"name": "Iphone 5 front glass",
	"button": "",
	"price": 222.50
}, {
	"name": "Ipad 2 Replacement Battery",
	"button": "",
	"price": 299.99
}, {
	"name": "Iphone 6 Replacement Screen",
	"button": "",
	"price": 349.99
}, {
	"name": "Galaxy S III Replacement Screen",
	"button": "",
	"price": 49.99
}, {
	"name": "BlackBerry Replacement Screen",
	"button": "",
	"price": 29.99
}, {
	"name": "Kindle Fire Port",
	"button": "",
	"price": 149.99
}]