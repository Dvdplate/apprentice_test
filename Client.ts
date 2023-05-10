namespace kBit {
    control.simmessages.onReceived("apprentice_Car", (data: Buffer) => {
        const msg = JSON.parse(data.toString())
        console.log(msg)
    })
}