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
export default {
    '/handler/': function ({ get }) {
        return array[Number(get.num)];
    }
}