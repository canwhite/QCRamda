var R = require('ramda');
/*
1.ramda 所有函数都支持柯里化
2.function first，data last,或者称为条件在前，参数在后
*/
var square = n => n * n;
var arr =R.map(square)([4,8]);
console.log("~~~~~",arr);


/*
Pre： gt gte lt lte equals
*/

/*
一、数学运算=================================================
*/
//加
console.log("加",R.add(7)(10));
//减
console.log("减",R.subtract(10)(8));
//乘
console.log("乘",R.multiply(2)(5));
//除
console.log("除",R.divide(10.5)(3));



/*
逻辑运算====================================================
*/

//逻辑或
var gt10 = x => x > 10;//大于10
var even = x => x % 2 === 0;//能被2整除

var ei = R.either(gt10)(even);
console.log("either:",ei(101));


//对比多个的逻辑与
var al = R.allPass([gt10,even]);
console.log("allPass:",al(30));

//逻辑与
var bo = R.both(gt10)(even);
console.log("both:",bo(15)); 





/*
字符串=======================================================
*/
//拆分字符串
console.log("R.split:",R.split('.')('wewe.wew.weww.wew'));

//正则匹配
console.log("R.test:" , R.test(/^x/)('xyz'));

//返回匹配结果（后边跟个g是所有的意思，如果不跟，只返回第一个匹配到的值在数组里
console.log("R.match:" , R.match(/[a-z]a/g)("bananas"))



/*
函数========================================================
*/

//将多个函数合并成一个函数，并从左到右执行
//流水线：第一个的函数的返回值交给第二个，第二个的交给第三个，依次类推
var negative = x => -1 * x;
var increaseOne = x => x + 1;
var f = R.pipe(Math.pow, negative, increaseOne);
console.log('R.pipe:',f(3,4));
//注意：compose从右边向左执行



/*
柯里化=====================================================
*/
//curry:将多参数的函数转化为单参数的形式
var addfour = (a,b,c,d)=> a,b,c,d;
var curr = R.curry(addfour);
var f = curr(1,2);
var g = f(3);
console.log("R.curry:" , f(3));
console.log("R.curry:" , g(4));



//complement:返回一个新函数，如果原函数返回true，那么新函数返回false

var gt10 = x => x > 10;
console.log("R.complement:",R.complement(gt10)(7)) // false







/*
数组操作====================================================
*/

//包含
console.log("R.contains:" , R.contains(3)([1,2,3]));

//都满足函数
var equals3 = R.equals(3);
console.log("R.all:",R.all(equals3)([3,3,3,3,3]));

//都不满足条件
var isEven = n => n%2===0;
console.log("R.none:" , R.none(isEven)([1,3,5,7,9]));

//任意一个满足函数
var lessThan0 = R.flip(R.lt)(0);//flip是反转参数顺序的
console.log("R.any:",R.any(lessThan0)([1,2]));//1<0 || 2<0




/*
数组的截取和添加============================================
*/


//返回第一个元素
console.log("R.head:", R.head(["fi","fo","fum"]));

//返回最后一个元素
console.log("R.last:" , R.last(["fi","fo","fum"]));

//返回整个尾巴
console.log("R.tail:", R.tail([1,2,3]));
console.log("R.tail:", R.tail("abcdef"));

//返回整个头部
console.log("R.init:" , R.init([1,2,3,4,5,6]));

//取出指定位置的成员
var list = ["a","b","c","d","e"];
console.log("R.nth:" , R.nth(1)(list));

//取出前n个成员
console.log("R.take:",R.take(2)(list));

//取出后n个成员
console.log("R.takeLast:",R.takeLast(2)(list));

//从数组中截取一个新数组
console.log("R.slice:", R.slice(1,3)(list));//首位包含，末位不包含

//移除指定开始位置后的n个成员,返回的是新数组
console.log("R.remove:", R.remove(1,3)(list));

//在指定位置插入定值,返回的是新数组
console.log("R.insert:", R.insert(2,"x")(list));

//在指定位置插入另一个数组的所有成员 
console.log("R.insertAll:" , R.insertAll(2,["1","2","3"])(list));

//在数组头部插入一个成员
console.log("R.prepend:" , R.prepend("fee")(list));

//在数组尾部追加新的成员
console.log("R.append:",R.append("fee")(list));

//将数组合并成一个字符串，并在成员之间加入分隔符
console.log("R.join:" , R.join('.')(list));





/*
数组的过滤===============================================
*/

//过滤符合条件的成员
console.log("R.filter:" , R.filter(isEven)([1,2,3,4]));

//过滤除所有不符合条件的成员
console.log("R.reject:" , R.reject(isEven)([1,2,3,4]));

//过滤掉不符合条件的成员，可以同时过滤掉多个
console.log("R.without:" , R.without([2,3])([1,2,3,4,5]));



/*
单数组运算================================================
*/
//某个值在数组中第一次出现的位置
var nlist = [1,2,3,4];
console.log("R.indexOf:" , R.indexOf(2)(nlist));


//数组中的每个成员依次执行，返回变化后的数组

var db = x => x *2;
console.log("R.map:" , R.map(db)(nlist));


//数组中的每个成员依次执行，返回原数组
var pri = x => console.log("forEach内输出" , (x,5));
console.log("R.forEach:" , R.forEach(pri)(nlist));


//按照给定函数，对数组进行排序
var diff = (a,b)=>{return b-a}
console.log("R.sort:" , R.sort(diff)([4,2,7,5]))



/*
双数组运算==================================================
*/

//将两个数组合成一个数组
console.log("R.concat:",R.concat([1,2,3],[4,5,6]));

//将两个数组指定位置的成员放在一起，形成一个新数组
console.log("R.zip:",R.zip([1, 2, 3])(['a', 'b', 'c']))

//将key数组和value数组合在一起形成一个新对象
console.log("R.zipObj:" , R.zipObj(["a","b","c"])([1,2,3]))

//返回第一个数组和第二个数组之间的差异成员
console.log("R.difference:" , R.difference([1,2,3])([1,2,5]));



/*
数组字典====================================================
*/
//返回符合指定条件的成员，和propEq配合
var xs = [{'a':1},{'a':2},{'a':3}];
console.log("R.find:" , R.find(R.propEq('a',2))(xs));


//返回符合指定条件成员的位置
console.log("R.findIndex:" , R.findIndex(R.propEq('a',2))(xs));


//取出数组成员某个属性，组成一个新数组
console.log("R.pluck:",R.pluck('a')(xs));


//将数组成员按照指定条件分组
var gro = (student)=>{
    var score = student.score;
    return  score < 65 ? 'F':
            score < 70 ? 'E':
            score < 80 ? 'C':
            score < 90 ? 'B':'A';
};

var students = [{name: 'Abby', score: 84},
                {name: 'Eddy', score: 58},
                {name: 'Jack', score: 69}];


console.log("R.groupBy:",R.groupBy(gro)(students));

// R.groupBy: {
//     B: [ { name: 'Abby', score: 84 } ],
//     F: [ { name: 'Eddy', score: 58 } ],
//     E: [ { name: 'Jack', score: 69 } ]
//   }



/*
对象======================================================
*/

//判断对象中是否有某key的对应值
var obj = { name: 'Abby', score: 84 };
console.log('R.has:',R.has('name')(obj));

//判断原型链上是否存在某个属性
//声明原型的时候不能用箭头函数
function Rectangle(width,height){
    this.height = height;
    this.width = width; 
};
Rectangle.prototype.area = ()=>{
     return this.width * this.height;
};
var seq = new Rectangle(2,2);
console.log('R.hasIn:',R.hasIn('area')(seq));


//返回属性等于给定值
console.log('R.propEql:',R.propEq('name','Abby')(obj));

//如果和目标对象相等，返回true
console.log('R.whereEq:',R.whereEq(obj)({name:'qc'}));

//如果各个属性都满足指定条件，返回true
var pred = {
    a: R.equals('foo'),
    b: R.complement(R.equals('bar')),
    x: R.flip(R.gt)(10),//将参数置换，10放在后边
    y: R.flip(R.lt)(20)//将参数置换，20放在后边
};
console.log('R.where:',R.where(pred)
({a: 'foo', b: 'xxx', x: 11, y: 19}));



/*
对象的过滤===================================================
*/

//返回所有满足条件的属性,value匹配
var nobj = {a: 1, b: 2, c: 3, d: 4};
var isEven = n => n%2 ===0;
console.log("R.filter:",R.filter(isEven)(nobj));


//返回所有不满足条件的属性
console.log("R.reject:",R.reject(isEven)(nobj))


//过滤指定多个属性，key排除，相当于数组的without
console.log("R.omit:",R.omit(['a','b'])(nobj));


/*
对象的截取======================================================
*/
//过滤指定单个属性
console.log("R.dissoc:",R.dissoc('b')(nobj));

//添加或改写某个属性
console.log("R.assoc:",R.assoc('e',3)(nobj));

//返回指定属性组成的新对象
console.log("R.pick:",R.pick("b")(nobj));

//返回所有属性名，组成新数组
console.log("R.keys:",R.keys(nobj));

//得到所有value组成新数组
console.log("R.values:",R.values(nobj));


/*
对象的计算
*/

//返回对象的指定属性
console.log("R.prop:" ,R.prop('a')(nobj));

//对象的所有属性，依次执行
console.log("R.map:",R.map(db)(nobj));

//合并两个对象，如果是同名属性，后边的值会覆盖前边的值
console.log("R.merge",R.merge({ 'name': 'fred', 'age': 10 })({ 'age': 40 }));


/*
复合对象
*/


console.log("R.path:",R.path(['a', 'b'], {a: {b: 2}}));















































