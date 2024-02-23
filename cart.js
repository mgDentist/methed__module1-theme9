const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice() {
        return this.totalPrice;
    },

    add(item, price, amount = 1) {
        const userItemArr = {
            itemName: item,
            itemPrice: price,
            itemAmount: amount,
        }

        this.items.push(userItemArr);
        this.increaseCount(amount);
        this.calculateItemPrice();
    },

    increaseCount(amount) {
        this.count += amount;
    },

    calculateItemPrice() {

        this.totalPrice = this.items.reduce((acc, item) => {
            return (
                acc + (item.itemPrice * item.itemAmount)
            );
        }, 0)
    },

    clear() {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },

    print() {
        console.log(JSON.stringify(this.items));
        console.log(`Общая стоимость корзины: ${this.totalPrice}`);
    },
};

cart.add('Будильник', 1700, 2);
cart.add('Ночник', 228, 1);
cart.add('Снотворное', 500, 10);

cart.print();
