import React from 'react';
import {deepClone} from '../utils';

const Test = () => {
    let obj = {
        name: 'jn',
        data: {
            score: 98
        },
        fun: name => name
    }
    const copy = () => {
        const newObj = deepClone(obj)
        // const newObj = JSON.parse(JSON.stringify(obj))
        newObj.data.score = 99;
        newObj.fun = name => `姓名是: ${name}`
        console.log(obj)
        console.log(newObj.fun('curry'))
    }
    return <button onClick={copy}>copy</button>
}


export default Test;