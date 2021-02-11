import { Capacitor } from '@capacitor/core'
import layout from '../layout'
import { dropShadowHeader } from '../shared/common'
import { body } from './landingView'

export default {
  view() {
    const header = dropShadowHeader('chess.pro')

    return layout.free(
      header,
      body(),
      undefined,
      undefined,
      Capacitor.platform === 'ios' ? this.ctrl.onScroll : undefined,
    )
  }
} as Mithril.Component<any, any>