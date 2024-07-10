import React, { useState } from 'react'
import Charecters from "./Charecters"
import Button from './Button'

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
         let text = document.getElementById("textarea")
        text.style.fontWeight=""
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
    function selectall(){
        let text = document.getElementById("textarea")
        text.select()
    }
    function bold(){
        let text = document.getElementById("textarea")
        text.style.fontWeight="Bold"
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
                        <Button fun={upercase} name={"Capital"} />
                        <Button fun={lowercase} name={"Small"} />
                        <Button fun={reasetbtn} name={"RESET"} />
                        <Button fun={speak} name={"Speak"} />
                        <Button fun={copy} name={"Copy"} />
                        <Button fun={RemoveExtra} name={"Remove Extra Space"} />
                        <Button fun={selectall} name={"Select All"} />
                        <Button fun={bold} name={"Bold"} />

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