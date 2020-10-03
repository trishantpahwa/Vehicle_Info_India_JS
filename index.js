const { get } = require("axios");

class VehicleInfo {

    constructor(api_key) {
        this.api_key = api_key;
    }

    setAPIKey(api_key) {
        this.api_key = api_key;
    }

    getInfo(reg, callback) {
        this.reg = reg;
        get('https://shrouded-falls-48764.herokuapp.com/vehicle-info/' + this.reg, { headers: { 'API-Key': this.api_key }}).then(function(response) {
            callback({ 'status': response.status, 'data': response.data });
        }).catch(function(err) {
            console.log(err);
        });
    }
}

module.exports = VehicleInfo;