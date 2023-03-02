export const findLastOperation = (type, date, operations) => {
  const currentDate = new Date(date)
  const filteredOperation = operations.filter((e) => e.type === type)
  const sortedOperations = sortOperations(filteredOperation, currentDate)

  let last = null
  let i = 0

  while (i < sortedOperations.length) {
    const operationDate = new Date(sortedOperations[i].date)
    const diff = currentDate - operationDate
    if (diff <= 0) {
      return sortedOperations[i - 1] ? sortedOperations[i - 1] : null
    }
    if (i === 0) last = diff
    last = diff < last ? diff : last
    i++
  }

  return null
}

const sortOperations = (operations) => {
  if (operations.length < 2) {
    return operations
  }

  const pivotIdx = Math.floor(operations.length / 2)
  const pivotOperation = operations[pivotIdx]
  const pivotDate = new Date(operations[pivotIdx].date)
  const lesser = []
  const bigger = []

  while (operations.length > 0) {
    let operation = operations.pop()
    let operationDate = new Date(operation.date)
    if (operationDate > pivotDate) {
      bigger.push(operation)
    }

    if (operationDate < pivotDate) {
      lesser.push(operation)
    }
  }

  return [...sortOperations(lesser), pivotOperation, ...sortOperations(bigger)]
}
