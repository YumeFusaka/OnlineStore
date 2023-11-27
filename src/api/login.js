import request from '@/utils/request'

export const getPicCode = ()=>{
    return request.get('/captcha/image')
}

export const getMsgCode= (captchaCode,captchaKey,mobile)=>{
    return request.post('/captcha/sendSmsCaptcha',{
        form:{
            captchaCode,
            captchaKey,
            mobile
        }
    })
}

export const codeLogin = (mobile,smsCode)=>{
    return request.post('/passport/login',{
        form: {
            isParty: false,
            partyData: {},
            mobile,
            smsCode
        }
    })
}