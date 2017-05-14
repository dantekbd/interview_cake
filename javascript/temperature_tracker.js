// assume temperatures will be inserted as integers, in range 0 ... 110

class TempTracker {

  constructor() {
    this.sum = 0
    this.total = 0
    this.frequency = Array(111).fill(0)
    this.mostFrequent
    this.min = undefined
    this.max = undefined
    this.mean = undefined
    this.mode = undefined
  }

  insert (newTemp) {

    this.frequency[newTemp]++

    if (!this.mode || this.frequency[newTemp] > this.mostFrequent) {
      this.mode = newTemp
      this.mostFrequent = this.frequency[newTemp]
    }

    this.sum += newTemp
    this.total++

    this.mean = this.sum / this.total

    if (!this.max || newTemp > this.max) {
      this.max = newTemp
    }

    if (!this.min || newTemp < this.min) {
      this.min = newTemp
    }

  }

  getMin () {
    return this.min
  }

  getMax () {
    return this.max
  }

  getMean () {
    return this.mean
  }

  getMode () {
    return this.mode
  }

}

let tempTrack = new TempTracker

tempTrack.insert(1)

console.log(tempTrack.getMin())
console.log(tempTrack.getMax())
console.log(tempTrack.getMean())
console.log(tempTrack.getMode())

tempTrack.insert(2)
tempTrack.insert(3)
tempTrack.insert(4)
tempTrack.insert(5)
tempTrack.insert(6)
tempTrack.insert(6)
tempTrack.insert(7)
tempTrack.insert(8)
tempTrack.insert(9)
tempTrack.insert(10)

console.log(tempTrack.getMin())
console.log(tempTrack.getMax())
console.log(tempTrack.getMean())
console.log(tempTrack.getMode())