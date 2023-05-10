namespace kBit {
    control.simmessages.onReceived("apprentice_Car", (data: Buffer) => {
        let JSONString = data.toString()
        console.log(JSONString)
    })
}