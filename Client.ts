namespace kBit {
    control.simmessages.onReceived("apprentice_Car", (msg: Buffer) => {
        let stringMsg = ""
        for (let i = 0; i < msg.length; i++) {
            stringMsg += String.fromCharCode(msg[i]);
        }
        let data = JSON.parse(stringMsg)
        assignInputs(data)
    })


    function assignInputs(data: any) {
        
    }
}