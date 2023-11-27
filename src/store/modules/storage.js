const Info_Key = 'info'

export const getInfo = ()=>{
    const result = localStorage.getItem(Info_Key)
    return result ? JSON.parse(result) : {
        token: '',
        userId: ''
    }
}

export const setInfo = (info)=>{
    localStorage.setItem(Info_Key,json.stringify(info))
}

export const removeInfo = ()=>{
    localStorage.removeItem(Info_Key)
}
