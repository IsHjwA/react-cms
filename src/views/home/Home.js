import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { changeMsg } from '@/store/actions'

//把store中的数据变成当前组件的props
function mapStateToProps(state) {
    return{
        msg:state.msg
    }
}
//把actions中的方法放在当前组件的怕props中
function mapActionToProps(dispath) {
    return{
        xxx:(payload)=>dispath(changeMsg(payload))
        // changeMsg:()=>{
        //     console.log('changeMsg')
        // }
    }
}

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }

    }

    click(){
        this.props.xxx('hello action')
    }
    render(){
        console.log('-----',this.props)
        return(
            <div>
                <h1>首页</h1>
        <h1>{this.props.msg}</h1>
        <button onClick={this.click.bind(this)}>修改msg</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(Home)