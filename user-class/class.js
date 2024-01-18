var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(name, aeg) {
        this.name = name;
        this.aeg = aeg;
    }
    return user;
}());
// let user1 = new user("Sr",2343)
// let user2 = new user("rony",23)
// let user3 = new user("sagor",2)
// console.log(user1);
// console.log(user2);
// console.log(user3);
var newUser = /** @class */ (function (_super) {
    __extends(newUser, _super);
    function newUser(name, aeg, useeId) {
        var _this = _super.call(this, name, aeg) || this;
        _this.userId = useeId;
        return _this;
    }
    return newUser;
}(user));
var student = new newUser("SR Rony", 22, 234535);
console.log(student);
