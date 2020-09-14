import {result} from './core'
import {GET,POST,PATCH,path,} from './config'

const getlist={
    gethomelist(){
        return result(GET,path.homeList)
    },
    getcategorylist(params){
        return result(GET,path.categorylist,params)
    },
    getdetailes(params){
        return result(GET,path.detailes,params)
    },
    getphone(params){
        return result(GET,path.phone,params)
    },
    getuserName(params){
        return result(GET,path.userName,params)
    },
    getSMS(params){
        return result(GET,path.SMS,params)
    },
    getaddUser(params){
        return result(GET,path.addUser,params)
    },
    getoneClassify(params){
        return result(GET,path.oneClassify,params)
    },
    gettwoClassify(params){
        return result(GET,path.twoClassify,params)
    },
    getSearch(params){
        return result(GET,path.search,params)
    },
    getSearchtwo(params){
        return result(GET,path.searchtwo,params)
    },
    getAddCarts(data){
        return result(POST,path.addCarts,data)
    },
    getCartss(params){
        return result(GET,path.getCart,params)
    },
    getCartCount(params){
        return result(GET,path.cartCount,params)
    },
    getDelCart(params){
        return result(PATCH,path.delCart,params)
    },
    getShowCart(params){
        return result(GET,path.showCart,params)
    },
    getShopSite(data){
        return result(POST,path.shopSite,data)
    },
    getGetSite(params){
        return result(GET,path.getSite,params)
    },
    getCreatePays(params){
        return result(POST,path.createPay,params)
    },
    getVerify(data){
        return result(POST,path.Verify,data)
    },
    getPay(data){
        return result(POST,path.pay,data)
    },
    getAlipay(data){
        return result(POST,path.Alipay,data)
    },
}
export default getlist
