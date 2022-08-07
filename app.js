const express = require('express');
const app = express()
const QRCode = require('qrcode');

const Qrcode = async(text)=>{
    try {
        await QRCode.toFile('qrcode.png',text,{
            color:{
                dark:'#006400',
                width:4
            },
        })
    } catch (err) {
        console.log(err)
    }
}

Qrcode('https://xd.adobe.com/view/6184a518-afe9-4822-ad1f-467a9f405094-34d7/?fullscreen')


app.listen((port = 5000)=> console.log(`listening on port ${port}`))