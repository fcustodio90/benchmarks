 console.log('ChartBench Starting')

 const dataset = []
 const randomData = (num) => [...Array(num).keys()]

 // randomize HERE change the randomData variable
 const plaxesArray = randomData(200)
 const arrayOfNames = plaxesArray.map(el => `name-${el}`)
 const arrayOfValues = plaxesArray.map(el => Math.floor(Math.random() * 100) + 1)
 
 arrayOfNames.map((name, index) => dataset.push({"label": name, "value": arrayOfValues[index]}))
 
 const numOfCharts = Array.from(Array(12))

 const nvDataset = [
   {key: "Storage usage", values: dataset}
 ]

// Normal vertical bar chart

numOfCharts.forEach((chart, index) => {
  nv.addGraph(function () {
    var chart = nv.models.multiBarChart()
      .x(function (d) {
        return d.label
      }) //Specify the data accessors.
      .y(function (d) {
        return d.value
      })
      .showControls(false)
      .stacked(false)
    d3.select(`#myChart-${index} svg`)
      .datum(nvDataset)
      .transition().duration(0)
      .call(chart);
    nv.utils.windowResize(chart.update);
    return
  });
})