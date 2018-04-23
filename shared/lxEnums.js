(function(exports) {

    exports.NOTIFICATIONS = {
        INTERN: {
            CONNECT: "MMM-Loxone_EstablishConnection",
            REQUEST: "MMM-Loxone_Request",
            REQUEST_RESPONSE: "MMM-Loxone_Request-Response",
            ROOM_TEMP: "MMM-Loxone_RoomTemp",
            MINISERVER_NOTIFICATION: "MMM-Loxone_Notification",
            STRUCTURE_FILE: "MMM-Loxone_structureFile",
            STATE: "MMM-Loxone_state",
            OOS: "MMM-Loxone_OOS",
            PRESENCE: "MMM-Loxone_presence"
        },
        PUBLIC: {
            ALERT: "SHOW_ALERT",
            TEMP: "INDOOR_TEMPERATURE",
            PRESENCE: "USER_PRESENCE",
            STATE: "LOXONE_STATE",
            STRUCTURE_FILE: "LOXONE_STRUCTURE_FILE",
            OSS: "LOXONE_OSS"
        }
    };

    exports.EVENT_TYPES = {
        TEXT: 0,
        FILE: 1,
        EVENT: 2,
        EVENTTEXT: 3,
        DAYTIMER: 4,
        OUTOFSERVICE: 5,
        KEEPALIVE: 6,
        WEATHER: 7
    };

}(typeof exports === 'undefined' ? window.LxEnums = {} : exports));