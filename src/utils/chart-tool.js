let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')

const lineColor = '#e2e2e2'
const AxisValue = {
  type: 'value',
  splitLine: {
    show: false
  },
  axisLine: {
    lineStyle: {
      color: lineColor
    }
  },
  axisLabel: {
    textStyle: {
      color: '#333',
      fontSize: 10
    }
  },
  axisTick: {
    show: true
  }
}

const AxisCategory = {
  type: 'category',
  splitLine: {
    show: false
  },
  axisLine: {
    lineStyle: {
      color: lineColor
    }
  },
  axisLabel: {
    textStyle: {
      color: '#333',
      fontSize: 10
    }
  },
  axisTick: {
    show: false
  }
}

// const COLORS = ['#005ed2', '#e12001', '#fe2b00', '#ff4e18', '#ff7900', '#fe9b00', '#feb300', '#ffc602', '#fce693', '#67e8fe', '#00d7fe', '#00c0fe', '#009eff', '#0081d2']

/***
 * 堆叠图
 * @returns {Promise<Response>}
 */
export function barPile (id, data) {
  let yAxisData = []
  let serveData = []
  data.list.forEach(item => {
    yAxisData.push(item.name)
  })
  data.legendData.forEach((item, idx) => {
    let sData = []
    data.list.forEach(item => {
      sData.push(item.data[idx])
    })
    serveData.push({
      name: item,
      type: 'bar',
      barWidth: '60%',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      data: sData
    })
  })
  let option = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontSize: '12'
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      top: 0,
      right: 10,
      data: data.legendData
    },
    grid: {
      left: '1%',
      right: '2%',
      top: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: AxisValue,
    yAxis: {
      ...AxisCategory,
      axisTick: {
        show: true
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: lineColor,
          width: 1,
          type: 'dashed'
        }
      },
      data: yAxisData
    },
    series: serveData
  }
  let myChart = echarts.init(document.getElementById(id))
  myChart.setOption(option)
  return myChart
}

/***
 * 折线图
 * @returns {Promise<Response>}
 */
export function lines (id, data) {
  let legendData = []
  let serveData = []
  data.datas.forEach(item => {
    legendData.push(item.name)
    serveData.push({
      name: item.name,
      type: 'line',
      data: item.data,
      symbol: 'emptyCircle',
      smooth: true,
      symbolSize: 6
    })
  })
  let option = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontSize: 12
      }
    },
    legend: {
      data: legendData,
      right: 10,
      itemHeight: 10
    },
    grid: {
      left: '2%',
      right: '0',
      top: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      ...AxisCategory,
      axisTick: {
        show: true,
        alignWithLabel: true
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: lineColor,
          width: 1,
          type: 'dashed'
        }
      },
      data: data.xAxisData
    },
    yAxis: {
      ...AxisValue,
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#fafff9', '#fff']
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: lineColor,
          width: 1,
          type: 'dashed'
        }
      },
      axisTick: {
        show: true
      }
    },
    series: serveData
  }
  let myChart = echarts.init(document.getElementById(id))
  myChart.setOption(option)
  return myChart
}

/***
 * 饼图
 * @returns {Promise<Response>}
 */
export function pie (id, data) {
  let option = {
    tooltip: {
      trigger: 'item',
      textStyle: {
        fontSize: 12
      },
      formatter: '{b}：{d}%'
    },
    color: ['#4f81bd', '#c0504d', '#9bbb59', '#8064a2'],
    series: {
      name: '所占比例',
      type: 'pie',
      radius: [0, '70%'],
      label: {
        normal: {
          formatter: '{b}\n\n{d}%',
          color: '#333'
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: '#333'
          }
        }
      },
      data: data
    }
  }
  let myChart = echarts.init(document.getElementById(id))
  myChart.setOption(option)
  return myChart
}

/***
 * 柱图
 * @returns {Promise<Response>}
 */
export function barRadius (id, data) {
  let xAxisData = []
  let barData = []
  data.forEach(item => {
    xAxisData.push(item.name)
    barData.push(item.value)
  })
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      textStyle: {
        fontSize: 12
      }
    },
    label: {
      normal: {
        textStyle: {
          color: '#ff3b00'
        }
      },
      emphasis: {
        textStyle: {
          color: '#ff3b00'
        }
      }
    },
    grid: {
      left: '3%',
      right: '1%',
      bottom: '8%',
      top: '4%'
    },
    xAxis: {
      ...AxisCategory,
      axisTick: {
        show: false
      },
      axisLabel: {
        rotate: 45,
        fontSize: 10,
        color: '#333'
      },
      data: xAxisData
    },
    yAxis: {
      ...AxisValue,
      splitLine: {
        show: true,
        lineStyle: {
          color: lineColor,
          width: 1,
          type: 'dashed'
        }
      },
      axisTick: {
        show: true
      }
    },
    series: [
      {
        type: 'bar',
        barWidth: 20,
        itemStyle: {
          normal: {
            barBorderRadius: [10, 10, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(253,156,65,0.9)'
            }, {
              offset: 1,
              color: 'rgba(249,109,0,0.9)'
            }])
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(255,231,25,0.9)'
            }, {
              offset: 1,
              color: 'rgba(250,182,0,0.9)'
            }])
          }
        },
        data: barData
      }
    ]
  }
  let myChart = echarts.init(document.getElementById(id))
  myChart.setOption(option)
  return myChart
}
