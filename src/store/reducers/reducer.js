let initState = {
    msg:'hello redux',
    list:[]
}

// action = {
//     type:1,  //1 - 改变msg
//     payload:'hello hjw'
// }
// action = {
//     type:2,  //2 - 增加一条todo
//     payload:'hello hjw'
// }

//action的作用：给reducer一个改变数据的信号：  你要改变哪个变量？改变的结果是什么
export default function reducer(state=initState,action){
    switch(action.type){
        case 1:
            console.log('收到了',action)
            //深复制（因为state是只读的，深复制出一个新的副本才能被修改）
            let newState = JSON.parse(JSON.stringify(state))
            newState.msg = action.payload
            return newState
            case 2:
                return state
            case 3:
                return state
            case 4:
                return state
                                default:
            return state
    }
    //改变msg

    //增加一条todo

    //删除一条todo

    //清空所有todo

}