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


}