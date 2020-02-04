console.log('ChartBench Starting')

const dataset = {}
const randomData = (num) => [...Array(num).keys()]

// randomize HERE change the randomData variable
const plaxesArray = randomData(200)
const arrayOfNames = plaxesArray.map(el => `name-${el}`)
const arrayOfValues = plaxesArray.map(el => Math.floor(Math.random() * 100) + 1)

dataset.names = arrayOfNames
dataset.data = arrayOfValues

const numOfCharts = Array.from(Array(12))

const options = {
  chart: {
    type: 'bar',
    animations: {
      enabled: false,
      dynamicAnimation: {
        enabled: false
      }
    },
    toolbar: {
      show: false
    }
  },
  series: [{
    name: 'storage usage',
    data: dataset.data
  }],
  xaxis: {
    categories: dataset.names
  }
}

numOfCharts.forEach((el, index) => {
  var chart = new ApexCharts(document.querySelector(`#myChart-${index}`), options);
  chart.render();
})