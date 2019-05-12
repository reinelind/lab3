var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Всё работает хорошо!");
var Product = (function () {
    function Product(id, name, price, description, inStock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
    }
    Product.prototype.Init = function () {
        var h5 = document.createElement("h5");
        h5.setAttribute("class", "card-title");
        h5.innerHTML = this.name;
        var divprice = document.createElement("div");
        divprice.setAttribute("class", "col-6 p-0 text-primary font-weight-bold");
        divprice.innerHTML = this.price + " грн.";
        var divavail = document.createElement("div");
        if (this.IsAvailable()) {
            divavail.setAttribute("class", "col-6 p-0 text-right text-success");
            divavail.innerHTML = "Есть в наличии";
        }
        else {
            divavail.setAttribute("class", "col-6 p-0 text-right text-danger");
            divavail.innerHTML = "Нет в наличии";
        }
        var divrow = document.createElement("div");
        divrow.setAttribute("class", "row");
        divrow.appendChild(divprice);
        divrow.appendChild(divavail);
        var divcon = document.createElement("div");
        divcon.setAttribute("class", "container");
        divcon.appendChild(divrow);
        var p = document.createElement("p");
        p.setAttribute("class", "card-text");
        p.innerHTML = this.description;
        var a = document.createElement("a");
        a.setAttribute("id", this.id.toString());
        a.setAttribute("href", "#buyModal");
        a.setAttribute("class", "btn btn-primary");
        a.setAttribute("data-toggle", "modal");
        a.setAttribute("onclick", "WantBuy(this.id)");
        a.innerHTML = "Купить";
        var divfu = document.createElement("div");
        divfu.setAttribute("class", "card-footer");
        divfu.appendChild(a);
        var divcardb = document.createElement("div");
        divcardb.setAttribute("class", "card-body mh-100");
        divcardb.setAttribute("style", "height: 200px");
        divcardb.appendChild(h5);
        divcardb.appendChild(divcon);
        divcardb.appendChild(p);
        var divcard = document.createElement("div");
        divcard.setAttribute("class", "card");
        divcard.appendChild(divcardb);
        divcard.appendChild(divfu);
        var divcol = document.createElement("div");
        divcol.setAttribute("class", "col-md-6 col-xl-4 p-1");
        divcol.appendChild(divcard);
        return divcol;
    };
    Product.prototype.Embed = function (obj) {
        var prods = document.getElementById('rowts');
        prods.appendChild(obj);
    };
    Product.prototype.IsAvailable = function () {
        return (this.inStock > 0) ? true : false;
    };
    return Product;
}());
var Color;
(function (Color) {
    Color["Black"] = "\u0427\u0451\u0440\u043D\u044B\u0439";
    Color["Gray"] = "\u0421\u0435\u0440\u044B\u0439";
    Color["Pink"] = "\u0420\u043E\u0437\u043E\u0432\u044B\u0439";
})(Color || (Color = {}));
;
var FeltBoots = (function (_super) {
    __extends(FeltBoots, _super);
    function FeltBoots(id, name, price, description, inStock, list) {
        var _this = _super.call(this, id, name, price, description, inStock) || this;
        _this.id = id;
        _this.name = name;
        _this.price = price;
        _this.description = description;
        _this.inStock = inStock;
        _this.list = list;
        _this.CalculateFlags();
        _this.Init();
        return _this;
    }
    FeltBoots.prototype.Init = function () {
        var obj = _super.prototype.Init.call(this);
        if (this.isBigSizes) {
            var p = document.createElement("p");
            p.setAttribute("class", "card-text text-info m-0");
            p.innerHTML = "Есть большие размеры";
            obj.firstChild.firstChild.insertBefore(p, obj.firstChild.firstChild.childNodes[2]);
        }
        if (this.haveColors.length > 0) {
            var p = document.createElement("p");
            p.setAttribute("class", "card-text text-info m-0");
            var str = this.haveColors[0];
            for (var i = 1; i < this.haveColors.length; i++) {
                str += ", " + this.haveColors[i];
            }
            p.innerHTML = "Есть цвета: " + str;
            obj.firstChild.firstChild.insertBefore(p, obj.firstChild.firstChild.childNodes[2]);
        }
        this.Embed(obj);
    };
    FeltBoots.prototype.CalculateFlags = function () {
        this.isBigSizes = false;
        if (this.list != null)
            for (var i = 0; i < this.list.length; i++)
                if (this.list[i].dimension > 43 && this.list[i].quantity > 0) {
                    this.isBigSizes = true;
                    break;
                }
        var k = 0;
        this.haveColors = [];
        if (this.list != null)
            for (var i = 0; i < this.list.length; i++)
                if (this.haveColors.indexOf(this.list[i].color) == -1)
                    this.haveColors[k++] = this.list[i].color;
    };
    return FeltBoots;
}(Product));
var Headphones = (function (_super) {
    __extends(Headphones, _super);
    function Headphones(id, name, price, description, inStock, isWireless) {
        var _this = _super.call(this, id, name, price, description, inStock) || this;
        _this.id = id;
        _this.name = name;
        _this.price = price;
        _this.description = description;
        _this.inStock = inStock;
        _this.isWireless = isWireless;
        _this.Init();
        return _this;
    }
    Headphones.prototype.Init = function () {
        var obj = _super.prototype.Init.call(this);
        if (this.isWireless) {
            var p = document.createElement("p");
            p.setAttribute("class", "card-text text-info m-0");
            p.innerHTML = "Беспроводные";
            obj.firstChild.firstChild.insertBefore(p, obj.firstChild.firstChild.childNodes[2]);
        }
        if (document.getElementById('isWireless') == null && this.isWireless != null && this.isWireless) {
            var inp = document.createElement("input");
            inp.setAttribute("type", "checkbox");
            inp.setAttribute("id", "isWireless");
            inp.setAttribute("onclick", "CheckWireless(this.checked)");
            var lab = document.createElement("p");
            lab.appendChild(inp);
            lab.innerHTML += "Только беспроводные<br>";
            var div = document.getElementById('myTools');
            div.appendChild(lab);
        }
        this.Embed(obj);
    };
    return Headphones;
}(Product));
function CheckWireless(flag) {
    document.getElementById('rowts').innerHTML = "";
    if (flag) {
        for (var i = 0; i < this.productList.length; i++)
            if (productList[i] instanceof Headphones && productList[i].isWireless)
                productList[i].Init();
    }
    else {
        for (var i = 0; i < this.productList.length; i++)
            productList[i].Init();
    }
}
var Balalaika = (function (_super) {
    __extends(Balalaika, _super);
    function Balalaika(id, name, price, description, inStock) {
        var _this = _super.call(this, id, name, price, description, inStock) || this;
        _this.id = id;
        _this.name = name;
        _this.price = price;
        _this.description = description;
        _this.inStock = inStock;
        _this.Init();
        return _this;
    }
    Balalaika.prototype.Init = function () {
        this.Embed(_super.prototype.Init.call(this));
    };
    return Balalaika;
}(Product));
var Basket = (function () {
    function Basket() {
        this.list = [];
    }
    Basket.prototype.Add = function (val) {
        var num = +document.getElementById('inputquantity').value;
        if (isNaN(num) || !((num ^ 0) === num) || num == 0 || productList[val].inStock < num) {
            if (productList[val].inStock < num)
                document.getElementById('modlalMessag').innerHTML = "Столько на складе нет";
            else
                document.getElementById('modlalMessag').innerHTML = "Введите целое число";
            return false;
        }
        else {
            document.getElementById('modlalMessag').innerHTML = "";
            productList[val].inStock -= num;
            this.list[this.list.length] = { id: val, quantity: num };
            this.CalculateBasket();
            return true;
        }
    };
    Basket.prototype.CalculateBasket = function () {
        if (this.list.length > 0) {
            var id = void 0;
            var total = 0;
            var message = "В даннвй момент в корзине:<br>";
            for (var i = 0; i < this.list.length; i++) {
                message += productList[this.list[i].id].name + " - " + this.list[i].quantity + "<br>";
                total += productList[this.list[i].id].price * this.list[i].quantity;
            }
            message += "<br><br>На общую сумму " + total + " грн.";
            document.getElementById('myBasket').innerHTML = message;
        }
        else
            document.getElementById('myBasket').innerHTML = "В данный момент корзина пустая";
    };
    return Basket;
}());
function WantBuy(val) {
    document.getElementById('modlalBtn').setAttribute("value", val);
}
var basket = new Basket();
var productList = [
    new Headphones(0, "Наушники фирмы1", 816, "Прекрасные наушники! Сама английская королева слушает жесткий металл через такие же!", 4, true),
    new FeltBoots(1, "Валенки2", 91.2, "Хороший выбор! В них тепло, хорошо. Обувь многосезонная - лето, осень, зима, весна.", 6, [{ dimension: 44, color: Color.Black, quantity: 2 },
        { dimension: 43, color: Color.Black, quantity: 3 },
        { dimension: 42, color: Color.Black, quantity: 1 },
        { dimension: 41, color: Color.Black, quantity: 2 },
        { dimension: 44, color: Color.Gray, quantity: 2 },
        { dimension: 39, color: Color.Gray, quantity: 1 },
        { dimension: 45, color: Color.Gray, quantity: 1 },
        { dimension: 42, color: Color.Gray, quantity: 1 },
    ]),
    new Headphones(2, "Наушники фирмы4", 119.50, "Дёшево не значит плохо! Эти наушники стоят своих денег!", 30, false),
    new Headphones(3, "Наушники фирмы2", 144, "Это оптимальный выбор! Налетай торопись!", 15, true),
    new Balalaika(4, "Балалайка1", 915, "Сам страдивари её выстругал! Мастер Страдивари Аарон Моисеевич ©. В комплекте к балалайке должен идти медведь.", 1),
    new FeltBoots(5, "Валенки3", 65, "Валенки знаменитой российской фабрики Красный ЦинБаоЧен. Оригинальный продукт сделаный по технологиям прошлого.", 1),
    new Headphones(6, "Наушники фирмы3", 265, "Тру поклонники музыки обязательно такие имеют! А ты что? Ты не тру?!", 0),
    new FeltBoots(7, "Валенки1", 666.66, "Валенки великолепной работы слепого мастера Игната! В комплекте к валенкам идёт кокошник.", 2, [{ dimension: 45, color: Color.Pink, quantity: 1 },
        { dimension: 43, color: Color.Pink, quantity: 1 }
    ]),
    new Balalaika(8, "Балалайка2", 217, "Обычная балалайка белорусской фирмы Змрочныя мелодыі.", 1)
];
//# sourceMappingURL=script.js.map