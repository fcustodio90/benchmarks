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

 const data = [{
   x: dataset.names,
   y: dataset.data,
   type: 'bar'
 }]

numOfCharts.forEach((chart, index) => {
  Plotly.newPlot(`myChart-${index}`, data, {}, {
    displayModeBar: false
  });
})