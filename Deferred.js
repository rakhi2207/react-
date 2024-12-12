import { useMemo, useDeferredValue, useState } from "react";
import Card from "./card";
import React from 'react'

export default function Deferred() {
const LIST_SIZE = 2000;
const [value, setValue] = useState('');
const deferredValue = useDeferredValue(value);
const filteredList = useMemo(()=>{
    const list = [];
    for(let i=0;i<LIST_SIZE;i++){
        list.push(value);
    }
    console.log('changes', list);
    return list;
},[deferredValue]);
  return (
    <div>
      <input type="text" onChange={e => setValue(e.target.value)}/>
      <ul type="none">
        {filteredList.map((value) => {
          console.log('value', value)
            return <Card value={value} />
        })}
      </ul>
    </div>
  )
}
