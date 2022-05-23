import { useDispatch, useSelector } from "react-redux"
import { decCount, incCount } from "../redux/action"

export const Counter = ()=>{
    const count = useSelector((store)=>store.count)
    const dispatch = useDispatch();
    return(
        <>
            <div className="main-div">
                <div className="eye"><div></div></div>
                <input type="text" value={count} name="" id="" />
                <div className="eye"><div></div></div>
                <br />
                <div className="mouth">
                    <div></div>
                </div>
                <button onClick={()=>dispatch(incCount(1))}>+</button>
                <button onClick={()=>dispatch(decCount(1))}>-</button>
            </div>
        </>
    )
}