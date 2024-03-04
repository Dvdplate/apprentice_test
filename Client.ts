namespace kBit {
    export let ultrasonicSimData: number = 52.34;
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

        if (data.ultrasonicDistance != undefined) { kBit.ultrasonicSimData = data.ultrasonicDistance; }
        kBit.leftObstacleSimData = data.leftIRObstacleSensor;
        kBit.rightObstacleSimData = data.rightIRObstacleSensor;
        kBit.leftLineSimData = data.leftIRLineSensor
        kBit.rightLineSimData = data.rightIRLineSensor
    })

    /**
    * ultrasonic sensor to measure ambient light
    */
    //% block="sim ultrasonic"
    //% group="Simulator" weight=66
    export function SimulatorUltrasonic(): number {
        return kBit.ultrasonicSimData
    }

}
