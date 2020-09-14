export const GET ="get"
export const POST ="post"
export const PATCH="PATCH"

export const path={
    // 首页数据接口
    homeList:"Home/getHomeREC",
    // 商品分类列表数据接口
    categorylist:"Home/getHomeShowGoods",
    //详情数据
    detailes:"Goods/GetGoodsInfo",
    // 手机号
    phone:"Verify/GetPhone",
    // 用户名判断
    userName:"Verify/LoginName",
    // 验证码
    SMS:"SMSCode/GetCode",
    // 添加登录信息
    addUser:"LoginPage/AddLogin",
    // 商品一级分类
    oneClassify:"Goods/getCatsTree",
    // 商品二级分类
    twoClassify:"Goods/getCadGoods",
    // 搜索接口
    search:"Goods/getGoods",
    // 搜索第二接口
    searchtwo:"Goods/getSearchHot",
    // 添加购物车
    addCarts:"Cart/addCart",
    // 获取购物车信息
    getCart:"Cart/getCart",
    // 获取购物车数量
    cartCount:"Cart/getCartLength",
    // 删除购物车商品
    delCart:"Cart/DeleteCart",
    // 展示订单信息
    showCart:"Order/getOrderInfo",
    //添加收获地址
    shopSite:"UserInfo/addArea",
    //获取收获地址
    getSite:"UserInfo/getArea",
    // 创建支付
    createPay:"Order/cretaeOrder",
    // 验证密码
    Verify:"Order/verifyPayPWD",
    // 余额支付
    pay:"Order/payOrder",
    // 支付宝支付
    Alipay:"Alipay/appWebPay",

}