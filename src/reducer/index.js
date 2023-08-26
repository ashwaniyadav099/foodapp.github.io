import {combineReducers} from 'redux';
let data = {
    cart: 0,
    products: [
        {
            img: 'https://i.ibb.co/9GMCRXH/burger.png',
            title: "Burger",
            price: 200,
            quanity: 0,
            id: 1,
            total: 0
        },
        {
            img: 'https://i.ibb.co/nctYf3F/fries.png',
            title: "Fries",
            price: 150,
            quanity: 0,
            id: 2,
            total: 0
        }, {
            img: 'https://i.ibb.co/hV1qHNk/coke.jpg',
            title: "Coca Cola",
            price: 80,
            quanity: 0,
            id: 3,
            total: 0
        }, {
            img: 'https://i.ibb.co/mCNVCyx/pepsi.png',
            title: "Pepsi",
            price: 50,
            quanity: 0,
            id: 4,
            total: 0
        }
    ],
    total:0
}

function crudop(state = data,action){
    switch(action.type) {
        case "ADD":
            
            let newdata = state.products.map((elem, indx) => {
                if (elem.id === action.payload) {
                    if (elem.quanity === 0) {
                        state.cart = state.cart+1
                    }
                   elem.quanity = elem.quanity + 1
                   elem.total = elem.price * elem.quanity
                   state.total +=  elem.price
                }
                return elem
            })
            // state.products.forEach((elem, indx) => {
            //    state.total +=  elem.total
            // })
           state.products = newdata
         return {...state}
        case "SUB":
            let newdata2 = state.products.map((elem, indx) => {
                if (elem.id === action.payload) {
                   
                    elem.quanity = elem.quanity - 1
                    elem.total = elem.price * elem.quanity
                    if (elem.quanity === 0) {
                        state.cart = state.cart-1
                    }
                    state.total -=  elem.price
                 }
                 return elem
             })
            state.products = newdata2
            // state.products.forEach((elem, indx) => {
            //     state.total +=  elem.total
            //  })
          return {...state}
        default:
         return {...state}
      }
  }

const rootreducer = combineReducers(
    {
        crudop
    }
)
export default rootreducer