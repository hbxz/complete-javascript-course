/* 
add event handler
get input values
add the new item to our data structure
add the new item to the UI view
calculate bedget
update the UI


M
add the new item to our data structure
calculate bedget

V
get input values
add the new item to the UI view
update the UI

C
add event handler

*/


// Budget Controller
var budgetController = (function() {
    var x = 23;
    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    };
})()


// UIController
var UIController = (function () {
    
    // some code

})();

// Global App Controller
var controller = (function (budgetCtrl, UICtrl) {
    
})(budgetController, UIController);
