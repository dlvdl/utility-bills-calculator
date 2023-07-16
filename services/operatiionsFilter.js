const Operation = require('../models/operation.js')

const operationFilter = async (service, dateFilters, sort, fields, page, limits) => {
    const queryObject = {}

    if (service) {
        queryObject.service = service
      }
    
      if (dateFilters) {
        const operatorMap = {
          '<': '$lt',
          '>': '$gt',
          '<=': '$lte',
          '=>': '$gte',
          '=': 'eq',
        }
    
        const regex = /\b(<|>|=|<=|=>)\b/g
        let filters = dateFilters.replace(regex, (match) => {
          return `-${operatorMap[match]}-`
        })
    
        const option = ['date']
    
        filters.split(',').forEach((item) => {
          const [field, operator, value] = item.split('-')
          if (option.includes(field)) {
            queryObject[field] = { [operator]: value }
          }
        })
      }
    
      let result = Operation.find(queryObject)
    
      if (sort) {
        const sortStr = sort.split(',').join('')
        result = result.sort(sortStr)
      } else {
        result = result.sort('date')
      }
    
      if (fields) {
        const fieldStr = fields.split(',').join(' ')
        result = result.select(fieldStr)
      }
    
      const onPage = Number(page) || 1
      const limit = Number(limits) || 10
      const skip = (onPage - 1) * limit
    
      result = result.limit(limit).skip(skip)

      return result
}

module.exports = operationFilter
