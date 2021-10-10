import {getConfig} from "./utils/getConfig/getConfig";

export const App = (): void => {
    const config = getConfig();

    const turnOnLight = async () => {
        const baseUrl: string = `${config.useHttps ? "https://" : "http://"}${config.serverIp}:${config.serverPort}`
        const lightItemsUrl = baseUrl + "/rest/items/";

        const lightItems =  await fetch(lightItemsUrl, {
            method: 'GET',
            mode: 'no-cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    void turnOnLight();
}

App();