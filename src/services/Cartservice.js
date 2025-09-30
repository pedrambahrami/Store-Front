import api from "./api";

export default {
    getcartforuser(){
        return api.get("cart")
    },
    addcartitem(data){
        return api.post("cart",data)
    },
    deletecartitem(id){
        return api.delete(`cart/clear/${id}`)
    },
    addToItem(id) {
      return api.post(`cart/add`, {"product_id": id})
    },
    subtractFromItem(id){
      return api.post(`cart/sub`, {"product_id": id, 'quantity': 1})
    }

}