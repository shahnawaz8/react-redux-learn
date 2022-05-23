import { DEC, INC } from "./action";

export const reducer = (store,{type,payload})=>{
    switch(type){
        case INC:
            if(store.count == 10) return {...store,count:store.count}
            
            return {
                ...store, count: store.count + payload 
            }
        case DEC:
            if(store.count == 0) return {...store,count:store.count}
            return {
                ...store, count: store.count - payload 
            } 
        default:
            return store
    }
}