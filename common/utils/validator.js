'use strict'

module.exports = {
  notEmpty,
  decimal,
  email,
  wholeNumber,
  currency,
  max4DigitsNumber,
  xlessthanyCheck,
  moreThanZero,
  notInfinity,
  validateChains
}

function notEmpty(value) {
    var regex = "^\\s+$";
  if (value.match(regex)) {
    return false
  }
  //check for space at start
  /*if(^\\s+$.test(value))
  {
    return false
  }*/
  //check for only symbols
  if(/^[^a-zA-Z0-9]+$/.test(value)){
    return false
  }
  return true
}

function email(value) {
  const regex = /^^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/
  return regex.test(value)
}

function validateChains(chains) {
    return new Promise(function(resolve, reject) {
      const failedRules = []
      for (var i = 0; i < chains.length; i++) {
        const rules = chains[i]
        for (var x = 0; x < rules.length; x++) {
          const rule = rules[x]
          if (rule.validator(rule.value) === false) {
            failedRules.push(rule)
            break
          }
        }
      }
      if (failedRules.length === 0) {
        resolve()
      } else {
        reject(failedRules)
      }
    })
  }