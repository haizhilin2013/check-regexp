const {
  PHONE_REGEXP,
  EMAIL_REGEXP,
  NUMBER_CODE_REGEXP,
  CODE_REGEXP,
  DAWK_REGEXP,
  ID_CARD_REGEXP,
  BANK_CARD_REGEXP
} = require('./const.js')
/**
 * 验证手机号码
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * phoneRegexp('13456789123') => true
 */
function phoneRegexp (value) {
  return PHONE_REGEXP.test(value)
}

/**
 * 验证邮箱
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * emailRegexp('ljw@163.com') => true
 */
function emailRegexp (value) {
  return EMAIL_REGEXP.test(value)
}

/**
 * 验证验证码
 * @function
 * @param {*} value
 * @param {boolean} sw = false
 * @returns {boolean}
 * @example
 * 默认数字验证(4|6)位
 * codeRegexp('1322') => true
 * 第二的参数位为true
 * 数字字母验证(4|6)位
 * codeRegexp('acs1', true) => true
 */
function codeRegexp (value, sw = false) {
  return sw
    ? NUMBER_CODE_REGEXP.test(value)
    : CODE_REGEXP.test(value)
}

/**
 * 验证邮政编码
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * dawkRegexp('517388') => true
 */
function dawkRegexp (value) {
  return DAWK_REGEXP.test(value)
}

/**
 * 验证身份证(仅支持18位)
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * idRegexp('441622200001011111') => true
 */
function idCardRegexp (value) {
  return ID_CARD_REGEXP.test(value)
}

/**
 * 验证银行卡(16|19)位
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * bankCardRegexp('441622200001011111') => true
 */
function bankCardRegexp (value) {
  return BANK_CARD_REGEXP.test(value)
}

module.exports = {
  phoneRegexp,
  emailRegexp,
  codeRegexp,
  dawkRegexp,
  idCardRegexp,
  bankCardRegexp
}
