import axiosIns from '@/api/axios'

export const LOGIN = (args) => {
    return axiosIns.post(`login`, args, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const LOGOUT = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userData')
    window.location.href='/'
}
