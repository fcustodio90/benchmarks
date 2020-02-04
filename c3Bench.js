console.log('ChartBench Starting')

const dataset = {}
const randomData = (num) => [...Array(num).keys()]

// randomize HERE change the randomData variable
const plaxesArray = randomData(200)
const arrayOfNames = plaxesArray.map(el => `name-${el}`)
const arrayOfValues = plaxesArray.map(el => Math.floor(Math.random() * 100) + 1)

arrayOfNames.map((name, index) => dataset[name] = arrayOfValues[index])

const numOfCharts = Array.from(Array(12))

numOfCharts.forEach((el, index) => {
  var chart = c3.generate({
    bindto: `#myChart-${index}`,
    data: {
      json: [dataset],
      keys: {
        value: Object.keys(dataset)
      },
      type: 'bar'
    },
    legend: {
      show: false
    },
    bar: {
      width: {
        ratio: 1// this makes bar width 50% of length between ticks
      }
    },
  });
})