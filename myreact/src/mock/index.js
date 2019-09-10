
import Mock from 'mockjs'

Mock.mock('/list', 'get', function () {
    let arr = Mock.mock({
        'list|30': [{ 'id|+1': 1, 'link': '@ctitle', 'desc': '@ctitle' }]
    })
    return {
        'list':arr
    }
})