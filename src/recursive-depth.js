const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	depth = 0;
	calculateDepth(arr, sum = 1) {
		this.depth = sum;
		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				this.calculateDepth(arr.flat(), sum += 1);
				break;
			}
		}
		return this.depth;
	}
};