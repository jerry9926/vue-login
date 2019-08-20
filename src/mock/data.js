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
        "data": {
            "accessToken": "4a181bd3-b121-4e5e-aa10-ddf03a77b557"
        },
        "head": {
            "requestId": "000000000000",
            "respCode": "00",
            "respDesc": "success",
            "respStatus": "00"
        }
    }
}

export const success = req => {
    return {
        "data": null,
        "head": {
            "requestId": "000000000000",
            "respCode": "00",
            "respDesc": "success",
            "respStatus": "00"
        }
    }
}
