import { createVNode, h, render } from 'vue'

const SVGSIZE = 80
const svg = createVNode({
  props: {
    text: {
      type: String,
      default: 'GAN',
    },
    width: {
      type: [String, Number],
      default: SVGSIZE,
    },
    height: {
      type: [String, Number],
      default: SVGSIZE,
    },
    viewBox: {
      type: String,
      default: '0 0 100 100',
    },
    type: {
      type: String,
      default: 'gan',
    },
  },
  setup(props) {
  },
  render() {
    const CIRCLE = (r, color, size, children) => h('circle',
      {
        cx: 50,
        cy: 50,
        r,
        'stroke-width': 5,
        stroke: color,
        'stroke-dasharray': size,
        fill: 'none',
        'stroke-linecap': 'round',
      },
      children,
    )
    const ANIMATETRANSFORM = (values) => h('animateTransform',
      {
        attributeName: 'transform',
        type: 'rotate',
        dur: '1.5873015873015872s',
        repeatCount: 'indefinite',
        keyTimes: '0;1',
        values,
      },
    )

    const svgImageType = {
      gan: [
        h('defs',
          [
            h('mask',
              {
                id: 'gan-mask-jowcu7xfea',
              },
              [
                h('rect',
                  {
                    x: '5%',
                    y: '5%',
                    width: '90%',
                    height: '90%',
                    fill: 'white',
                  },
                ),
                h('text',
                  {
                    dy: '0.01em',
                    x: '50%',
                    y: '50%',
                    'text-anchor': 'middle',
                    'dominant-baseline': 'central',
                    'font-weight': 900,
                    'font-size': 40,
                    'font-family': 'arial',
                  },
                  this.text,
                ),
              ],
            ),
          ],
        ),
        h('g',
          [
            h('path',
              {
                mask: 'url(#gan-mask-jowcu7xfea)',
                fill: 'none',
                stroke: '#032544',
                'stroke-width': 4,
                d: 'M2.7 10.8c5.2-3 6.3-5.7 11.5-8.6c-5.7 4-6.8 10.8-10.5 16.7c6.3-6 12.9-12.1 20.3-16.7 c-6.5 5.2-9.7 12.1-15 18.5c7.3-4.8 13.1-12.3 20.4-17.2c-11.2 7.6-18.9 18.2-27.1 29C13.4 21.2 23.8 11.4 37.1 2.7 C24.1 12.3 12.2 26.9 2 39.5c14.1-11 29-25.8 43.2-36.8c-13.8 11.7-30.1 30.8-42.5 44C17.2 36.6 38.5 13.9 51.5 2 C37.1 15.4 17.7 39.1 3.3 52.5C21 38.1 40.3 18.3 58 4C39.3 20.9 21.3 40.3 2.7 57.2C24.9 40 45.7 20.1 67.9 2.9 C44.8 22.7 21.8 41.9 2.7 65.7C24.7 44.6 49.3 23.2 73.6 4.6C55.8 19.8 38.4 41.9 20.7 57.1c-5 4.3-15.4 12.6-17.6 18.8 C25.6 55.6 57.6 22.6 81.2 3.5C54.8 25.7 26.4 59 3.1 84.3c28-24.7 54.5-59.6 85.2-80.8C59.8 26.4 26.3 64 3.1 92.4 C29.4 69.5 67.6 26.8 93.9 4C65.5 31.7 28.5 75.4 2.3 105.2C33.8 72 66.9 30.4 104.9 4.9c-31.3 29.8-66 68-95 100.6 C42 76.3 70.8 43 105.4 16.8c-29.8 25.7-63.3 59.3-87.9 90c25.8-22 59-56.5 84.9-78.5c-25 21.4-56 53.8-77.7 78.5 c25-20.7 53.8-49.4 78.8-70.1c-25.2 21.6-49.3 47.4-71.7 72c24.7-19.4 46.9-44.2 71.7-63.5C81.4 63.1 61.6 86.6 44 108.8 c20-15.2 38.4-36.5 58.4-51.7c-14.6 11.1-34.8 37-47.2 50.6c13.6-9.1 34.1-30.2 46.9-40.4C90 75.8 74.8 95.7 65.4 107.1 c12.8-7.4 27.7-23.9 38.9-33.4c-12 9.3-20.8 21.8-31.6 32.6c11-6.6 21.6-15.8 30.9-24.6c-8 6.3-16.2 16.6-21.8 25.2 c8.8-5.6 17.8-10.3 21.4-15.9c-1.3 4.1-4.8 9.2-10.1 15.2c3.1-0.4 7.7-0.6 10.8-1',
              },
              [
                h('animate',
                  {
                    attributeName: 'stroke-dasharray',
                    repeatCount: 'indefinite',
                    dur: '2.s',
                    calcMode: 'spline',
                    values: '0 0 0 3390;0 0 3390 0;0 3390 3390 0',
                    keyTimes: '0;0.5;1',
                    keySplines: '0.7 0 0.3 1;0.7 0 0.3 1',
                  },
                ),
              ],
            ),
          ],
        ),
      ],
      circle: [
        CIRCLE(32, '#0c2542', '50.26548245743669 50.26548245743669', [ANIMATETRANSFORM('0 50 50;360 50 50')]),
        CIRCLE(26, '#6687ae', '40.840704496667314 40.840704496667314', [ANIMATETRANSFORM('0 50 50;-360 50 50')]),
      ],
    }

    return h('svg',
      {
        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
        xmlns: 'http://www.w3.org/2000/svg',
        width: `${this.width}px`,
        height: `${this.height}px`,
        viewBox: this.viewBox,
        preserveAspectRatio: 'xMidYMid',
        class: 'gan-loading-image',
      },
      [
        ...svgImageType[this.type],
      ],
    )
  },
})

render(svg, document.createElement('svg'))

const customImg = createVNode({
  props: {
    path: {
      type: String,
      default: null,
    },
    width: {
      type: [String, Number],
      default: SVGSIZE,
    },
    height: {
      type: [String, Number],
      default: SVGSIZE,
    },
  },
  render() {
    return h(
      'img',
      {
        src: this.path,
        style: {
          width: `${this.width}px`,
          height: `${this.height}px`,
        },
        class: ['gan-loading-image'],
      },
    )
  },
})

render(customImg, document.createElement('img'))

export {
  svg,
  customImg,
}