import React from 'react';
import { Input, Button, List} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// 无状态组件——定义UI的，没有任何逻辑的情况下，不是绝对的
const TodoListUI = (props) => {
    return (
        <div>
            <h1>hello redux</h1>
            <div>
                <Input
                    style={{ width: 200 }}
                    placeholder="input here"
                    value={props.inputValue}
                    onChange={props.handleInputChange}
                />
                <Button type="primary"
                        onClick={props.handleClickChange}
                >提交</Button>
                <List
                    size="large"
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (<List.Item
                        onClick={ () => {
                            props.handleDeleteChange(index);
                        }}>{item}</List.Item>)}
                />
            </div>
        </div>
    )
};

// class TodoListUI extends Component {
//
//     render() {
//         return <div>
//             <h1>hello redux</h1>
//             <div>
//                 <Input
//                     style={{ width: 200 }}
//                     placeholder="input here"
//                     value={this.props.inputValue}
//                     onChange={this.props.handleInputChange}
//                 />
//                 <Button type="primary"
//                         onClick={this.props.handleClickChange}
//                 >提交</Button>
//                 <List
//                     size="large"
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (<List.Item
//                         onClick={ () => {
//                             this.props.handleDeleteChange(index);
//                         }}>{item}</List.Item>)}
//                 />
//             </div>
//         </div>
//     }
// }

export default TodoListUI;