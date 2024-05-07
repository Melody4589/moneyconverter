"use client"
import { useState } from "react";
import "./style.css";
import { actionAsyncStorage } from "next/dist/client/components/action-async-storage-instance";
export default function Page() {
    var [money, updatebrowser] = useState(300);


    function addMoney() {
        money += 400;
        updatebrowser(money)

    }
    function subMoney() {
        money -= 300;
        updatebrowser(money)
        
       
    }
    return (
        <main>
            <h1>My Money App</h1>
            <p>My Savings for the year so far</p>
            <h4>NGN {money}</h4>
            <button className="btn-minus" onClick={subMoney}>
                <i className="fa fa-minus"></i>
            </button>
            <button className="btn-plus" onClick={addMoney}>
                <i className="fa fa-plus"></i>
            </button>
        </main>
    )
}