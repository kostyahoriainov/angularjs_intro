const model = {
    items: [
        { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price: 310 }
    ]
};
const purchaseApp = angular.module('purchaseApp', []);
purchaseApp.controller('purchaseController', $scope => {
    $scope.list = model;
    $scope.addItem = (text, price) => {
        price = parseInt(price);
        if (text != "" && !isNaN(price)) {
            $scope.list.items.push({
                purchase: text, price: price, done: false
            })
        }
    }
})