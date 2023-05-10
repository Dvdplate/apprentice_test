control.simmessages.onReceived("apprentice_Car", (msg: Buffer) => {
    let stringMsg = ""
    for (let i = 0; i < msg.length; i++) {
        stringMsg += String.fromCharCode(msg[i]);
    }
    let data = JSON.parse(stringMsg)
    console.log("---->")
    console.log(data.ultrasonicDistance)
    console.log(data.leftIRObstacleSensor)
    console.log(data.rightIRObstacleSensor)
    console.log(data.leftIRLineSensor)
    console.log(data.rightIRLineSensor)
})

