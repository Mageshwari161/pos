/*
* @Author: alireza-saberi
* @Date:   2016-10-30 23:29:55
* @Last Modified by:   alireza-saberi
* @Last Modified time: 2016-11-03 08:52:49
*/
var espressos = {  type:  'Espresso',
                 varieties: [{    name:'Milk',
                                    count: 0,
                                    baseprice: 60,
                     }]

                     varieties: [{    name:'cream',
                                    count: 0,
                                    baseprice: 75,               
                            }]        
                      varieties: [{    name:'Latte',
                                    count: 0,
                  
                  baseprice: 100,}]
                };
var  cappuccino = {  type:  'Cappuccino  ',
                 varieties: [{    name:'Milk',
                                    count: 0,
                                    baseprice: 80,
                     }]

                     varieties: [{    name:'cream',
                                    count: 0,
                                    baseprice: 90,               
                            }]        
                      varieties: [{    name:'Latte',
                                    count: 0,
                  
                  baseprice: 125,
}]
                };

var latte = {  type:  'Latte',
                 varieties: [{    name:'Milk',
                                    count: 0,
                                    baseprice: 100,
                     }]

                     varieties: [{    name:'cream',
                                    count: 0,
                                    baseprice: 125,               
                            }]        
                      varieties: [{    name:'Latte',
                                    count: 0,
                  
                  baseprice: 150,
}]
                };
var drinks = [
     espressos,
     cappuccino,
     Latte,
    
];


var app = new Vue({
    el: '#app',
    data: {
        drinks : drinks,
        total: 0
    },
    // ready: function(){
    //     this.loadDrinks();
    // },
    methods: {
        /**
        * Total amount of order is a calculated tax free when the user press order
        * @author Ali
        * @name order
        */
        order : function(){
            var main_price = 0, side_price = 0;
            for (var i = 0; i < this.drinks.length; i++ ){
                for(var j = 0; j < this.drinks[i].varieties.length; j++){
                    main_price = main_price + (this.drinks[i].varieties[j].baseprice) * (this.drinks[i].varieties[j].count);
                    for(var k = 0; k < this.drinks[i].varieties[j].modifiers.length; k++){
                        side_price = side_price + (this.drinks[i].varieties[j].modifiers[k].price * this.drinks[i].varieties[j].modifiers[k].count);
                    }
                }
            }
            this.total = main_price + side_price;
            }
        //     ,
        // loadDrinks: function(){
        //     this.$http.get('/drinks').then(function(response){
        //         //success callback
        //         this.drinks = response;
        //     }, function(error){
        //         // error callback
        //         console.log("No drink for you today!");
        //     });
        // }
        // ,
        // buy : function(){
        //     this.$http.get('/pay', this.total).then(function(reposonce){
        //         console.log("Payment is done");
        //     }, function(error){
        //         console.log("Error in payment");
        //     });
        // }
    }
});

