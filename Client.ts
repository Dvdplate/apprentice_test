namespace kBit {
    control.simmessages.onReceived("docs", (data: Buffer) => {
        const msg = JSON.parse(data.toString())
        console.log(msg)
    })
}