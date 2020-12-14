import { defineComponent, reactive, toRefs, watch, nextTick, onBeforeUnmount, onMounted } from 'vue'
import { create, color, Scrollbar, Rectangle, options, Circle } from '@amcharts/amcharts4/core'
import { Bullet, XYCursor, XYChart, Legend, DateAxis, ValueAxis, LineSeries } from '@amcharts/amcharts4/charts'

const TimelineChart = defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => {
        return []
      }
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    name: {
      type: String,
      default: 'chartdiv'
    }
  },
  setup (props) {
    let chart: any | null = reactive({})
    const colorList: string[] = [
      '#24262B',
      '#ED008C',
      '#00FCD4',
      '#FF7E4C',
      '#850082'
    ]
    const { categories, data, name } = toRefs(props)

    const setSeriesBullets = (series: any, bulletType: string): void => {
      let bullet

      if (bulletType === 'circle') {
        const white = '#fff'
        bullet = series.bullets.push(new Circle())
        bullet.strokeWidth = 2
        bullet.radius = 5
        bullet.fill = color(white)
      } else if (bulletType === 'rectangle') {
        bullet = series.bullets.push(new Bullet())
        const rectangle = bullet.createChild(Rectangle)
        bullet.horizontalCenter = 'middle'
        bullet.verticalCenter = 'middle'
        bullet.width = 8
        bullet.height = 8
        rectangle.width = 8
        rectangle.height = 8
      }
      const bullethover = bullet.states.create('hover')
      bullethover.properties.scale = 1.3
    }

    const createSeries = (category: any, seriesColor: string): void => {
      options.queue = true
      options.minPolylineStep = 5
      options.onlyShowOnViewport = true
      const series = chart.series.push(new LineSeries())
      series.dataFields.valueY = category
      series.dataFields.dateX = 'date'
      series.name = category
      series.stroke = color(seriesColor)
      series.strokeWidth = 3
      series.stacked = false
      series.minBulletDistance = 20
      series.tooltip.fontSize = '12px'
      series.tooltipText = '{name}: [bold]{valueY}[/]'
      series.fill = color(seriesColor)

      const bulletType = 'circle'

      setSeriesBullets(series, bulletType)
      chart.invalidateData()
    }

    const setChartCursor = (): void => {
      const red = '#E70036'
      chart.cursor = new XYCursor()
      chart.cursor.lineX.stroke = color(red)
      chart.cursor.lineX.strokeDasharray = ''
      chart.cursor.lineY.disabled = true
    }

    const initLineChart = async (): Promise<void> => {
      chart = create(`chart-${name.value}`, XYChart)
      chart.responsive.enabled = true
      // Set input format for the dates
      chart.dateFormatter.inputDateFormat = 'MM-dd-yyyy'
      // Create axes
      const dateAxis = chart.xAxes.push(new DateAxis())
      dateAxis.renderer.minGridDistance = 50
      const valueAxis = chart.yAxes.push(new ValueAxis())
      valueAxis.cursorTooltipEnabled = false
      // Add data
      chart.data = data.value

      const categoriesLength: number = categories.value.length

      for (let i = 0; i < categoriesLength; i++) {
        createSeries(categories.value[i], colorList[i])
      }
      setChartCursor()
      chart.legend = new Legend()
      chart.scrollbarX = new Scrollbar()
    }

    watch(data, async (): Promise<void> => {
      await nextTick()
      initLineChart()
    })

    onMounted(async (): Promise<void> => {
      await initLineChart()
    })

    onBeforeUnmount((): void => {
      if (chart) {
        chart.dispose()
      }
    })
    // expose to template
    return {
      chartName: name.value
    }
  }
})

export default TimelineChart
