import React from 'react'
import { Card, Table, Button, Icon } from 'antd';
import LinkButton from '../../compontents/link-button';
const columns = [
    {
        title: '分类名称',
        dataIndex: 'name',

    },
    {
        title: '操作',
        width: 300,
        render: () => {
            return (
                <span>
                    <LinkButton >修改分类</LinkButton>
                    <LinkButton>查看子分类</LinkButton>
                </span>
            )
        }
    }

];

const data = [
    {
        "parentId": "0",
        "_id": "5c2ed631f352726338607046",
        "name": "电器",
        "__v": 0
    },
    {
        "parentId": "0",
        "_id": "5c2ed647f352726338607047",
        "name": "食品",
        "__v": 0
    },
    {
        "parentId": "0",
        "_id": "5c2ed64cf352726338607048",
        "name": "服饰",
        "__v": 0
    },
    {
        "parentId": "0",
        "_id": "5c2ed64cf352726338607048",
        "name": "百货",
        "__v": 0
    },
    {
        "parentId": "0",
        "_id": "5c2ed64cf352726338607048",
        "name": "水果",
        "__v": 0
    }
];
// Admin 分类管理子路由
export default class Caterory extends React.Component {
    

    
    render() {
        const title = '一级分类列表'
        const extra = (
            <Button type="primary">
                <Icon type="plus" />
                添加
            </Button>
        )
        return (


            <Card title={title} extra={extra} >
                <Table

                    pagination={{ defaultPageSize: 2, showQuickJumper: true }}
                    rowKey="_id"
                    columns={columns}
                    dataSource={data}
                    bordered

                />
                {/* <Modal
          title="Basic Modal"
          visible={true}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}
            </Card>
        )
    }
}