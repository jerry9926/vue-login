// 模拟返回数据

import Mock from 'mockjs'
const Random = Mock.Random

export const getTableData = req => {
    const tableData = []
    tableData.push(Mock.mock({
        name: '@name',
        email: '@email',
        createTime: '@date'
    }))

    return tableData
}

export const getDragList = req => {
    const dragList = []
    dragList.push(Mock.mock({
        name: Random.csentence(10, 13),
        id: Random.increment(10)
    }))
    return dragList
}

export const login = req => {
    return {
        "access_token": "7ce0a4a6-73bf-4f4d-a992-257d45625f92",
        "token_type": "bearer",
        "expires_in": 26105,
        "scope": "read write",
        "username": "cyl"
    }
}
