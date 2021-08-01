import axios from "axios"
import { environmentConfig } from "../../config/environments"

export const getBearerToken = () => {
    return {
        headers: {
            Authorization: ``
        }
    }
}

export const API_CALLER = {

    get: (path: string, withBearer: boolean = false, config: object = {}) => {
        return <any>axios.get(`${environmentConfig.API_HOST}${path}`, withBearer ? Object.assign(config, getBearerToken()) : config)
    }

}