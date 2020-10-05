const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) {
		options.separator = '+';
	}

	if (options.addition === undefined) {
		options.addition = '';
	}

	if (options.additionSeparator === undefined) {
		options.additionSeparator = '|';
	}

	if (options.additionRepeatTimes === undefined) {
		options.additionRepeatTimes = 1;
	}

	if (options.repeatTimes === undefined) {
		options.repeatTimes = 1;
	}

	let res = '';
	for (let i = 0; i < options.repeatTimes; i++) {
		res += str;

		for (let j = 0; j < options.additionRepeatTimes; j++) {
			res += options.addition;

			if (j !== options.additionRepeatTimes - 1) {
				res += options.additionSeparator;;
			}
		}

		if (i !== options.repeatTimes - 1) {
			res += options.separator;
		}

	}
	return res;
};
  