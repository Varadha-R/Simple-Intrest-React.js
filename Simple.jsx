import react,{useState} from "react";

export default function Simple(){
    const [principal,setPrincipal]=useState();
    const [rate,setRate]=useState();
    const [time,setTime]=useState();
    const [intrest,setIntrest]=useState();

    const calculateIntrest=()=>{
      const calculatedIntrest=(principal*rate*time)/100;
        setIntrest(calculatedIntrest)
    }
    return(
        <>
        <label>Enter the Principal Amount</label>
        <input type="number" value={principal}
        onChange={(e)=>setPrincipal(parseFloat(e.target.value))} />
        <label>Enter the Rate of intrest</label>
        <input type="number" value={rate}
        onChange={(e)=>setRate(parseFloat(e.target.value))} />
        <label>Enter the Years</label>
        <input type="number" value={time}
        onChange={(e)=>setTime(parseFloat(e.target.value))} />
        <button onClick={calculateIntrest}>Calculate Intrest</button>

        <h1>Your amount RS {intrest}</h1>
        </>
    )
}