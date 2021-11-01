//rename this file to variables.js and change local IP to your machines local, internal ip (E.G. 192.168.1.2)

export const
    LOCAL_IP = '127.0.0.1',
    apiPort = '3000',
    endpointURI = () => { return `http://${LOCAL_IP}:${apiPort}` }