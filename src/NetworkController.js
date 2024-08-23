import axios from "axios";

export class NetworkController {
    constructor() {
        this.url = "http://localhost:8000";
        console.log(process.env)
        this._handleErrors = this._handleErrors.bind(this);
        this._handleResponse = this._handleResponse.bind(this);
    }

    _makeRequest(method, path, config = {}, auth = false) {
        let { headers, body, params, ...rest } = config;
        let additionalHeaders = {};
        if (
            (method === "POST" || method === "PUT") &&
            typeof body === "object" &&
            !(body instanceof FormData)
        ) {
            additionalHeaders["content-type"] = "application/json";
            body = JSON.stringify(body);
        }
        return axios({
            method: method,
            url: `${this.url}/${path}`,
            ...config,
        })
            .then(this._handleResponse)
            .catch(this._handleErrors);
    }

    _handleErrors(error) {
        console.log(error);
        throw error.response;
    }

    async _handleResponse(response) {
        let body = null;
        let contentType = response.headers["content-type"];
        if (contentType && contentType.startsWith("application/json")) {
            body = await response.data;
        } else {
            return response;
        }
        return body;
    }


    getProducts({ title = '', priceFrom, priceTo, widthFrom, widthTo, heightFrom, heightTo, page = 0, pageSize = 5, sortOrder = 'asc' } = {}) {
        const params = {
            title,
            priceFrom,
            priceTo,
            widthFrom,  
            widthTo,
            heightFrom,
            heightTo,
            page,
            pageSize,
            sortOrder
        };
        return this._makeRequest("GET", `products`, { params });
    }
    

    getProductsByID(id) {
        return this._makeRequest("GET", `products/${id}`, {
        });
    }

    postOrder(data) {
        return this._makeRequest("POST", `orders`, {
            data: data
        });
    }

    postContact(data) {
        return this._makeRequest("POST", `contact-us`, {
            data: data
        });
    }
    

}

export default new NetworkController();
