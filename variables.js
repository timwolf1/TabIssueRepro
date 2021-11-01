export const
    LOCAL_IP = '192.168.1.134',
    apiPort =  '3000',
    endpointURI = () => { return `http://${LOCAL_IP}:${apiPort}` }