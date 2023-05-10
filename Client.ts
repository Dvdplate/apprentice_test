namespace kBit {
    control.simmessages.onReceived("apprentice_Car", (data: any) => {
        const msg = JSON.parse(data.toString())
        console.log(msg)
    })
}