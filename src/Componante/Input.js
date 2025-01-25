import React, { useState } from 'react'
import Charecters from "./Charecters"

const Input = () => {
    const [textin, settextin] = useState("")
    const [realtext, setrealtext] = useState()

    function upercase() {
        settextin(textin.toUpperCase())
    }
    function lowercase() {
        settextin(textin.toLowerCase())
    }
    function reasetbtn() {
        settextin(realtext)
    }
    function speak(){
        
    }
   
    return (
        <>
            <div className="masterincon">
                <div className="inputcon">
                    <h1>Write Text Here....</h1>
                    <p>style to your text...✍🏼</p>
                    <textarea rows={10} cols={100} type="text" value={textin} onChange={(e) => {
                        settextin(e.target.value)
                    }} onKeyUp={(e) => {
                        setrealtext(e.target.value)
                    }} />
                    <div className="d-grid gap-2 mt-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary me-md-2" onClick={() => {
                            upercase()
                        }} >Capital</button>
                        <button className="btn btn-primary me-md-2 " onClick={() => {
                            lowercase()
                        }}>Small</button>
                        <button className="btn btn-primary me-md-2" onClick={() => {
                            reasetbtn()
                        }}>RESET</button>
                        <button type="submit" onClick={speak} className="btn btn-primary me-md-2">Speak</button>
                    </div>
                </div>
            </div>
            <div className="charecterBox">
                <Charecters charecters={textin.length} />
            </div>
        </>
    )
}

export default Input