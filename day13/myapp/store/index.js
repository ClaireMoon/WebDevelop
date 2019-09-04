// export default {
//   state: {
//     list: [1, 2, 3]
//   },
//   mutations: {
//     changeList (state, data) {
//       state.list = data
//     }
//   }
// }
export const state = () => {
  return {
    list: [1, 2, 3]
  }
}

export const mutations ={
  changeList (state, data) {
    state.list = [4, 5, 6]
  }
}