var times = 100000;
     var res = {};
 
     for (var i = 0; i < times; i++) {
         var arr = shuffle([1,4,5,6,7,8,9, 2, 3]);
 
         var key = JSON.stringify(arr);
         res[key] ? res[key]++ : res[key] = 1;
     }
      // 为了方便展示，转换成百分比
     for (var key in res) {
         res[key] = res[key] / times * 100 + '%'
     }
 
     //ES5 
     function shuffle(a) {
         var j, x, i;
         for (i = a.length; i; i--) {
             j = Math.floor(Math.random() * i);
             x = a[i - 1];
             a[i - 1] = a[j];
             a[j] = x;
         }
         return a;
     }

 
     //ES6 
     function shuffle(a) {
         for (let i = a.length; i; i--) {
             let j = Math.floor(Math.random() * i);
             [a[i - 1], a[j]] = [a[j], a[i - 1]];
         }
         return a;
     }
 
     console.log(res)