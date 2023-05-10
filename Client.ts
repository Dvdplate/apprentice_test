namespace kBit {
    export let ultrasonicSimData: number;
    export let leftObstacleSimData: boolean;
    export let rightObstacleSimData: boolean;
    export let leftLineSimData: boolean;
    export let rightLineSimData: boolean;

    control.simmessages.onReceived("apprentice_Car", (msg: Buffer) => {
        let stringMsg = ""
        for (let i = 0; i < msg.length; i++) {
            stringMsg += String.fromCharCode(msg[i]);
        }
        let data = JSON.parse(stringMsg)

        kBit.ultrasonicSimData = data.ultrasonicDistance;
        kBit.leftObstacleSimData = data.leftIRObstacleSensor;
        kBit.rightObstacleSimData = data.rightIRObstacleSensor;
        kBit.leftLineSimData = data.leftIRLineSensor
        kBit.rightLineSimData = data.rightIRLineSensor
    })
}
