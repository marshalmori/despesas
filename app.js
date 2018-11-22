
// Budget controller
var budgetController = (function () {

})();


// UI Controller
var UIController = (function(){

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return{
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };

})();



//Global App controller
var controller = (function(budgetCtrl, UICtrl){

  var setupEventListeners = function(){
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
      if(event.keyCode === 13 || event.which === 13){
        ctrlAddItem();
      }
    });
  };


  var ctrlAddItem = function(){
    // 1. Get the field input data
    var input = UICtrl.getInput();
    // console.log(input);

    // 2. Add the item to the budget Controller

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI


  };

  return {
    init: function() {
      console.log('A aplicação iniciou.');
      setupEventListeners();
    }
  };

})(budgetController, UIController);


controller.init();
