namespace kBit {
    control.simmessages.onReceived("apprentice_Car", buf => {
        if (buf.length > 1) {
            for (let i = 0; buf.length; i++) {
                console.log(buf[i])
            }
        }
        else {
            console.log(buf)
            console.log(buf.data)
            console.log(buf.sensorData)
        }
    })
}