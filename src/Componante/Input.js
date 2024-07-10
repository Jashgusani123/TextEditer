import React, { useState } from 'react'
import Charecters from "./Charecters"

const Input = (props) => {
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
    function speak() {
        let msg = new SpeechSynthesisUtterance();
        msg.text = textin;
        window.speechSynthesis.speak(msg);
    }
    function copy(){
        let text = document.getElementById("textarea")
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    function RemoveExtra(){
        let text =textin.split(/[ ]+/)
        settextin(text.join(" "))
    }

    return (
        <>
            <div className="masterincon">
                <div className="inputcon" style={props.innerstyle}>
                    <h1>Write Text Here....</h1>
                    <p>style to your text...✍🏼</p>
                    <textarea rows={10} cols={100} type="text" id='textarea' value={textin} onChange={(e) => {
                        settextin(e.target.value)
                    }} onKeyUp={(e) => {
                        setrealtext(e.target.value)
                    }} />
                    <div style={props.innerstyle} className="d-grid gap-2 mt-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary me-md-2" onClick={upercase} >Capital</button>
                        <button className="btn btn-primary me-md-2 " onClick={lowercase}>Small</button>
                        <button className="btn btn-primary me-md-2" onClick={reasetbtn}>RESET</button>
                        <button type="submit" onClick={speak} className="btn btn-primary me-md-2">Speak</button>
                        <button type="submit" onClick={copy} className="btn btn-primary me-md-2">Copy</button>
                        <button type="submit" onClick={RemoveExtra} className="btn btn-primary me-md-2">Remove Extra Space</button>
                    </div>
                </div>
            </div>
            <div className="charecterBox" style={props.innerstyle}>
                <Charecters charecters={textin.length} />
            </div>
        </>
    )
}

export default Input