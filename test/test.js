var assert = require('assert');
const VehicleInfo = require('../index');

describe('Test a call to API', function() {
    it('should return the data of the vehicle from the requested registeration number.', function() {
        var v = new VehicleInfo('dc425ea5f853487ab3923841ef1e1db1');
        v.getInfo('HR29AB1111', function(response) {
            assert.equal(response.status, 200);
        });
    })
});