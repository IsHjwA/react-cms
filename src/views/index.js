//动态加载
import loadable from '@loadable/component'

// import Home from './home/Home'
const Home = loadable(()=>import('./home/Home'))

export default [
    {
        id:1,
        path:'/home',
        component: Home,
        text:'首页管理',
        children:[
        
        ]
    }
]