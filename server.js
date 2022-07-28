// export default {
//     '/handler/': function ({ get }) {
//         return 'hello message'
//     }
// }
// export default {
//     '/handler/': function ({ get }) {
//         console.log(get.num);
//         return 'form data received';
//     }
// }
let array = ['nikita', 'ivan', 'andrew', 'grisha']

// export default {
//     '/handler/': function ({ get }) {
//         return array[Number(get.num)];
//     }
// }

// export default {
//     '/handler/': function ({ get }) {
//         console.log(get)
//         return Number(get.num1) + Number(get.num2) + Number(get.num3)
//     }
// }


// export default {
//     '/handler/': function ({ post }) {
//         let arr = [];
//         let sum = 0;
//         let count = 0;
//         for (let key in post) {
//             arr.push(post[key])
//             sum = sum + Number(post[key]);
//             count++;
//         }
//         console.log(arr)
//         return sum / count;
//     }
// }


// Отправка данных без формы
export default {
    '/handler/': function ({ post }) {
        console.log(post);
        return 'form data received';
    }
}