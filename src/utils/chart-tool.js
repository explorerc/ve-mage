let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
require('echarts/lib/chart/pie')
require('echarts/lib/chart/scatter')
require('echarts/lib/chart/sankey')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')

export function random (minVal, maxVal) {
  minVal = minVal || 0
  maxVal = maxVal || 100
  return Math.round(Math.random() * maxVal) + minVal
}

const COLORS = ['#4D84FF', '#FD8519', '#FEC400', '#63C8F5']
const LINE_COLORS = ['rgba(254,201,25,1)', 'rgba(255,132,23,1)', 'rgba(99,200,245,1)', 'rgba(60,129,255,1)', 'rgba(175,173,174,1)']
const lineColor = '#e2e2e2'
const grid = {
  left: '2%',
  right: 0,
  bottom: '1%',
  top: 20
}
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

/***
 * 堆叠图
 * @returns {Promise<Response>}
 */
export function barPile (id, data, gridData) {
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
      top: -2,
      right: 10,
      data: data.legendData
    },
    color: COLORS,
    grid: {
      ...grid,
      ...gridData
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
  data.datas.forEach((item, idx) => {
    legendData.push(item.name)
    let areaStyle = null
    if (data.datas.length === 1) {
      areaStyle = {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
            [
              { offset: 0, color: LINE_COLORS[idx] },
              { offset: 0.7, color: LINE_COLORS[idx].replace('1)', '0.3)') },
              { offset: 1, color: 'rgba(255,255,255,0)' }
            ]
          )
        }
      }
    }
    serveData.push({
      name: item.name,
      type: 'line',
      data: item.data,
      symbol: 'emptyCircle',
      smooth: true,
      symbolSize: 6,
      areaStyle: areaStyle
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
      top: -2,
      itemHeight: 10
    },
    grid: {
      ...grid,
      containLabel: true
    },
    color: LINE_COLORS,
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
 * 柱图圆形柱子
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
      top: 20
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

/***
 * 普通柱图
 * @returns {Promise<Response>}
 */
export function bars (id, data, gridData) {
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
      ...grid,
      ...gridData
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
      data: xAxisData
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
    series: [
      {
        type: 'bar',
        barWidth: '50%',
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

/***
 * 柱图，折线图组合图
 * @returns {Promise<Response>}
 */
export function barAndLine (id, data, gridData) {
  console.log(data)
  let legendData = []
  let seriesData = []
  data.list.forEach(item => {
    legendData.push(item.name)
    if (item.type === 'bar') {
      item.itemStyle = {
        barBorderRadius: [5, 5, 0, 0]
      }
    } else {
      item.lineStyle = {
        color: 'red'
      }
    }
    seriesData.push(item)
  })
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      top: -5,
      right: 10,
      data: legendData
    },
    grid: {
      ...grid,
      ...gridData
    },
    xAxis: [
      {
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
        data: data.xAxis
      }
    ],
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
    series: seriesData
  }
  let myChart = echarts.init(document.getElementById(id))
  myChart.setOption(option)
  return myChart
}

/***
 * 散点图
 * @returns {Promise<Response>}
 */
export function scatter (id, datas, gridData) {
  let maxValue = 0
  datas.data.forEach(item => {
    maxValue = maxValue > item[2] ? maxValue : item[2]
  })
  console.log('scatter-maxValue=' + maxValue)
  let option = {
    title: {
      text: 'Punch Card of Github',
      link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
    },
    legend: {
      data: ['观看时长'],
      right: 10,
      top: -4
    },
    tooltip: {
      position: 'top',
      formatter: function (params) {
        return `${params.name}(${datas.yAxis[params.data[1]]})<br/>${params.seriesName}：${params.data[2]}秒`
      }
    },
    grid: {
      ...grid,
      ...gridData
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
      data: datas.xAxis,
      boundaryGap: false
    },
    yAxis: {
      data: datas.yAxis,
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
      }
    },
    series: [{
      name: '观看时长',
      type: 'scatter',
      symbolSize: function (val) {
        return val[2] * 60 / maxValue
      },
      data: datas.data,
      animationDelay: function (idx) {
        return idx * 5
      }
    }]
  }
  let myChart = echarts.init(document.getElementById(id))
  myChart.setOption(option)
  return myChart
}

/***
 * 桑基图
 * @returns {Promise<Response>}
 */
export function sankey (id, datas) {
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: (item) => {
        if (item.data.sourceName) {
          return `${item.data.sourceName}→${item.data.targetName} (${item.data.value})`
        }
        return ''
      }
    },
    series: {
      type: 'sankey',
      layout: 'none',
      left: 0,
      right: '60',
      label: {
        normal: {
          show: true,
          formatter: (item) => {
            return `${item.data.showName}\n(${item.data.value})`
          },
          textStyle: {
            fontSize: 14
          }
        }
      },
      data: datas.data,
      links: datas.links
    }
  }
  let myChart = echarts.init(document.getElementById(id))
  myChart.setOption(option)
  return myChart
}
