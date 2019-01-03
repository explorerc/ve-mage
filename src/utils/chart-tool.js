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

/***
 * 整数最值计算
 * @param value
 * @returns {number}
 */
function intCount (value) {
  let val = value + ''
  let s = ''
  for (let i = 0; i < val.length - 1; i++) {
    s += '0'
  }
  val = parseInt(val.substring(0, 1) + s)
  return (value % val) ? val + parseInt(1 + s) : value
}

const COLORS = ['#4D84FF', '#FD8519', '#FEC400', '#63C8F5', '#F96669', '#D1D0D0']
const LINE_COLORS = ['rgba(254,201,25,1)', 'rgba(255,132,23,1)', 'rgba(99,200,245,1)', 'rgba(60,129,255,1)', 'rgba(175,173,174,1)']
const lineColor = '#e2e2e2'
const grid = {
  left: '2%',
  right: 30,
  bottom: '36',
  top: 10
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
      color: '#888',
      fontSize: 12
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
      color: '#888',
      fontSize: 12
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
export function barPile (id, data, gridData, legendGrid, xName) {
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
        show: true,
        position: 'insideRight',
        formatter: (item) => {
          return item.value ? item.value : ''
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
        type: 'shadow',
        shadowStyle: { // 阴影指示器样式设置
          width: 'auto', // 阴影大小
          color: 'rgba(150,150,150,0)' // 阴影颜色
        }
      }
    },
    legend: {
      bottom: -5,
      right: 'center',
      ...legendGrid,
      data: data.legendData
    },
    color: COLORS,
    grid: {
      ...grid,
      ...gridData
    },
    xAxis: { ...AxisValue,
      name: xName
    },
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
      axisLabel: {
        textStyle: {
          color: '#888',
          fontSize: 12
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
export function lines (id, data, colorParam, gridData) {
  let legendData = []
  let serveData = []
  let tempColors = colorParam || LINE_COLORS
  data.datas.forEach((item, idx) => {
    legendData.push(item.name)
    let areaStyle = null
    if (data.datas.length === 1) {
      areaStyle = {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
            [{
              offset: 0,
              color: tempColors[idx]
            },
            {
              offset: 1,
              color: tempColors[idx].replace('1)', '0.3)')
            }
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
      right: 'center',
      bottom: -5,
      itemHeight: 10
    },
    grid: {
      ...grid,
      ...gridData,
      containLabel: true
    },
    color: tempColors,
    xAxis: {
      ...AxisCategory,
      boundaryGap: false,
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
      max: (value) => {
        return value.max || 100
      },
      splitArea: {
        show: false
        // ,
        // areaStyle: {
        //   color: ['#fafff9', '#fff']
        // }
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
  let sColor = ['#40C5FF', '#FEC400', '#FF8419', '#5189EE', '#666666', '#E2E2E2', '#b6a2de', '#2ec7c9', '#5ab1ef', '#ffb980']
  data = (data && data.length > 0) ? data : [
    {name: '暂无数据', value: 0}
  ]
  if (data.length === 1 && data[0].value === 0) {
    sColor.unshift('#E2E2E2')
  }
  let option = {
    tooltip: {
      trigger: 'item',
      textStyle: {
        fontSize: 12
      },
      formatter: (item) => {
        if (item.value) {
          return `${item.name}<br/>${item.value}(${item.percent}%)`
        } else {
          return `${item.name}`
        }
      }
    },
    color: sColor,
    series: {
      name: '所占比例',
      type: 'pie',
      radius: [0, '70%'],
      center: ['50%', '54%'],
      label: {
        normal: {
          formatter: '{b}\n\n{d}%',
          color: '#888'
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
 * 饼图
 * @returns {Promise<Response>}
 */
export function pieOne (id, percent) {
  let option = {
    series: [{
      type: 'pie',
      hoverOffset: 5,
      radius: ['78%', '90%'],
      label: {
        normal: {
          position: 'center'
        }
      },
      avoidLabelOverlap: false,
      data: [{
        value: percent,
        itemStyle: {
          normal: {
            color: '#f7c331',
            borderColor: '#fff',
            borderWidth: 1
          }
        },
        label: {
          normal: {
            formatter: '{d}',
            textStyle: {
              fontSize: 30,
              color: '#888'
            }
          }
        }
      },
      {
        value: (100 - percent),
        tooltip: {
          show: false
        },
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 1,
            color: '#e2e2e2'
          }
        }
      }
      ]
    }]
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
  // let maxVal = 0
  data.forEach(item => {
    xAxisData.push(item.name)
    barData.push(item.value)
    // maxVal = maxVal > item.value ? maxVal : item.value
  })
  // maxVal = intCount(maxVal)
  // let dataShadow = []
  // for (let i = 0; i < data.length; i++) {
  //   dataShadow.push(maxVal)
  // }
  let option = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontSize: 12
      },
      formatter: (item) => {
        return `${item[0].name}：${item[0].value}`
      }
    },
    label: {
      normal: {
        textStyle: {
          color: '#FFD021'
        }
      },
      emphasis: {
        textStyle: {
          color: '#ff3b00'
        }
      }
    },
    grid: {
      left: '4%',
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
        fontSize: 12,
        color: '#888'
      },
      data: xAxisData
    },
    yAxis: {
      ...AxisValue,
      axisTick: {
        show: true
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: lineColor
        }
      }
    },
    dataZoom: [{
      type: 'inside'
    }],
    series: [{
      type: 'bar',
      barWidth: '20',
      itemStyle: {
        normal: {
          barBorderRadius: [10, 10, 10, 10],
          color: '#FFD021'
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
  let maxVal = 0
  data.forEach(item => {
    xAxisData.push(item.name)
    barData.push(item.value)
    maxVal = maxVal > parseInt(item.value) ? maxVal : parseInt(item.value)
  })
  maxVal = intCount(maxVal)
  let dataShadow = []
  for (let i = 0; i < data.length; i++) {
    dataShadow.push(maxVal)
  }
  let barWidth = data.length <= 6 ? '30' : '50%'
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      textStyle: {
        fontSize: 12
      },
      formatter: (item) => {
        return `${item[1].name} : ${item[1].value}`
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
        show: false
        // ,
        // areaStyle: {
        //   color: ['#fafff9', '#fff']
        // }
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
    series: [{
      type: 'bar',
      itemStyle: {
        normal: {
          barBorderRadius: [15, 15, 15, 15],
          color: 'rgba(0,0,0,0.05)'
        }
      },
      barGap: '-100%',
      barWidth: barWidth,
      barCategoryGap: barWidth,
      data: dataShadow,
      animation: false
    },
    {
      type: 'bar',
      barWidth: barWidth,
      itemStyle: {
        normal: {
          barBorderRadius: [15, 15, 15, 15],
          color: '#FFD021'
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
  let legendData = []
  let seriesData = []
  let colorsBar = {
    'red_packet': '#FFD021',
    'question': '#63C8F5',
    'recommend_card': '#FD9130',
    'goods_recommend': '#AFADAE'
  }
  data.list.forEach(item => {
    legendData.push(item.name)
    if (item.type === 'bar') {
      item.itemStyle = {
        barBorderRadius: [5, 5, 0, 0],
        color: (params) => {
          return colorsBar[params.data.type]
        }
      }
    } else {
      item.lineStyle = {
        color: '#3C81FF'
      }
    }
    seriesData.push(item)
  })
  let option = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontSize: 12
      },
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      },
      formatter: (item) => {
        return `${item[0].axisValue}<br/>${item[0].data.name}：${item[0].data.value}`
      }
    },
    toolbox: {
      feature: {
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: true,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    legend: {
      right: 'center',
      bottom: -5,
      data: legendData
    },
    grid: {
      ...grid,
      ...gridData
    },
    xAxis: [{
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
    }],
    yAxis: {
      ...AxisValue,
      max: (value) => {
        return value.max || 100
      },
      splitArea: {
        show: false
        // , areaStyle: {
        //   color: ['#fafff9', '#fff']
        // }
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
    maxValue = maxValue > parseInt(item[2]) ? maxValue : parseInt(item[2])
  })
  let option = {
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
        show: false,
        lineStyle: {
          color: lineColor,
          width: 1,
          type: 'solid'
        }
      }
    },
    series: [{
      name: '观看时长',
      type: 'scatter',
      symbolSize: function (val) {
        return val[2] * 60 / maxValue
      },
      itemStyle: {
        normal: {
          color: '#4B5AFE',
          shadowBlur: 10,
          shadowColor: '#333'
        }
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
      triggerOn: 'mousemove',
      formatter: (item) => {
        if (item.data.sourceName) {
          return `${item.data.sourceName}→${item.data.targetName} (${item.data.value})`
        }
        return `${item.data.showName}: ${item.data.value}`
      }
    },
    color: ['#FF8419', '#5189EE', '#FC5659', '#4B5AFE', '#FFD021', '#40C5FF'],
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
      itemStyle: {
        borderColor: 'rgba(0,0,0,0)'
      },
      lineStyle: {
        normal: {
          color: 'source',
          curveness: 0.3
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
