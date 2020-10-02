# Vehicle_Info_India_JS
A JavaScript wrapper to use the functionality of Vehicle_Info_India ReST API.

## Installation
`npm i vehicle_info_india_js`

## Usage
```
    var _vehicleInfo = new VehicleInfo('<Your-API-Key>');
        _vehicleInfo.getInfo('<Vehicle-Registeration-Number>', function(response) {
            console.log(response);
    });
```