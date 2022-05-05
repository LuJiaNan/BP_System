export const setUrl = url => ({
    type: 'SETURL',
    payload: url
})

export const setSide = side => ({
    type: 'SETSIDE',
    payload: side
})

export const setLeftList = list => ({
    type: 'SETLEFTLIST',
    payload: list
})

export const setRightList = list => ({
    type: 'SETRIGHTLIST',
    payload: list
})

export const saveRule = rule => ({
    type: 'SAVERULE',
    payload: rule
})