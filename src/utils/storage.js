const INFO_KEY = 'infoKey'
const HISTORY_LIST = 'historyList'

export const getInfo = ()=>{
    const result = localStorage.getItem(INFO_KEY)
    return result ? JSON.parse(result) : {
        token: '',
        userId: ''
    }
}

export const setInfo = (info)=>{
    localStorage.setItem(INFO_KEY,JSON.stringify(info))
}

export const removeInfo = ()=>{
    localStorage.removeItem(INFO_KEY)
}

export const getHistoryList = ()=>{
    const result = localStorage.getItem(HISTORY_LIST)
    return result ? JSON.parse(result) : []
}

export const setHistoryList = (arr)=>{
    localStorage.setItem(HISTORY_LIST,JSON.stringify(arr))
}
