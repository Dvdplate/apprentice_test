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

    /**
     * infrared obstacle sensor
     * @param LR which infared sensor to use
     */
    //% block= "simulator $lr obstacle sensor "
    //% group="Simulator" weight=69
    export function Simobstacle(lr: KBitMotorObs): number {
        return null;
    }

    ////////////////////////////////////////////

    /**
     * individual infared line sensors
     * @param LR which infared sensor to use
     */
    //% block= "simulator $lr line sensor "
    //% group="Simulator" weight=69
    export function SimlineSensor(lr: KBitMotorObs): number {
        return null;
    }


    /**
     * Line following block, returns value needed of needed direction
     * 3: move forward
     * 2: turn left
     * 1: turn right
     */
    //% block= "simulator line tracking"
    //% group="Simulator" weight=68
    export function SimlineTracking(): number {
        return null;
    }

    /**
     * Ultrasonic sensor
     */
    const TRIG_PIN = DigitalPin.P14;
    const ECHO_PIN = DigitalPin.P15;
    let lastTime = 0;
    /**
     * Ultrasonic Sensor to measure distance
     */
    //% block= "simulator ultrasonic"
    //% group="Simulator" weight=67
    export function Simultra(): number {
        return kBit.ultrasonicSimData
    }
}
