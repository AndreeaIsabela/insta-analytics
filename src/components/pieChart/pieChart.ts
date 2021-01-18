import { defineComponent, reactive, watch, nextTick, toRefs, onBeforeUnmount, onMounted } from 'vue'
import { create, color, ColorSet, MouseCursorStyle, Disposer } from '@amcharts/amcharts4/core'
import { PieChart, PieSeries, Legend } from '@amcharts/amcharts4/charts'

const PieChartComponent = defineComponent({
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
    },
    value: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    let pieSeries: any | null = reactive({})
    let chart: any | null = reactive({})
    const colorList: string[] = [
      '#8134AF',
      '#FEDA77',
      '#DD2A7B',
      '#515BD4',
      '#F58529'
    ]
    const { data, name, value, category } = toRefs(props)

    const createSeries = (): void => {
      const white = '#FFFFFF'
      pieSeries = chart.series.push(new PieSeries())
      pieSeries.dataFields.value = value.value
      pieSeries.dataFields.category = category.value
      pieSeries.slices.template.stroke = color(white)
      pieSeries.slices.template.strokeWidth = 2
      pieSeries.slices.template.strokeOpacity = 1

      pieSeries.labels.template.maxWidth = 350
      pieSeries.labels.template.truncate = true

      pieSeries.slices.template.cursorOverStyle = MouseCursorStyle.pointer
    }

    const createSeriesAnimations = (): void => {
      pieSeries.hiddenState.properties.endAngle = -90
      pieSeries.hiddenState.properties.opacity = 1
      pieSeries.labels.template.text = '{category}: {value}'
      pieSeries.labels.template.fontSize = '14px'
    }

    const setColors = (): void => {
      const colorSet: ColorSet = new ColorSet()
      colorSet.list = colorList.map(currentColor => color(currentColor))
      pieSeries.colors = colorSet
    }

    const createLegend = (): void => {
      chart.legend = new Legend()
      chart.legend.useDefaultMarker = false
      chart.legend.valueLabels.template.text = '{value}'
      chart.legend.labels.template.fontSize = '14px'
      chart.legend.valueLabels.template.fontSize = '14px'
      const markerTemplate = chart.legend.markers.template
      markerTemplate.width = 14
      markerTemplate.height = 14
      const marker = markerTemplate.children.getIndex(0)
      marker.cornerRadius(12, 12, 12, 12)

      chart.legend.labels.template.maxWidth = 150
      chart.legend.labels.template.truncate = true
    }

    const initPieChart = (): void => {
      chart = create(`chart-${name.value}`, PieChart)
      chart.responsive.enabled = true
      chart.data = data.value

      createSeries()
      createSeriesAnimations()
      setColors()
      createLegend()
    }

    watch(data, async (): Promise<void> => {
      await nextTick()
      initPieChart()
    })

    onMounted(async (): Promise<void> => {
      await initPieChart()
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

export default PieChartComponent
