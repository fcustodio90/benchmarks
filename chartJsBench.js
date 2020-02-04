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
   type: 'bar',
   data: {
     labels: dataset.names,
     datasets: [{
       label: 'Storage usage',
       data: dataset.data
     }]
   },
   options: {
     animation: {
       duration: 0, // general animation time
     },
     hover: {
       animationDuration: 0, // duration of animations when hovering an item
     },
     responsiveAnimationDuration: 0, // animation duration after a resize
   }
 }

 numOfCharts.forEach((el, index) => {
   var ctx = document.getElementById(`myChart-${index}`).getContext('2d');
   var chart = new Chart(ctx, options);
 })