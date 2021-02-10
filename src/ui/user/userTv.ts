import h from 'mithril/hyperscript'
import socket from '../../socket'
import * as helper from '../helper'
import * as sleepUtils from '../../utils/sleep'
import { handleXhrError } from '../../utils'
import OnlineRound from '../shared/round/OnlineRound'
import roundView, { LoadingBoard } from '../shared/round/view/roundView'
import { tv } from './userXhr'

interface Attrs {
  id: string
}

interface State {
  round: OnlineRound
}

const UserTv: Mithril.Component<Attrs, State> = {
  oninit(vnode) {
    console.log("awake 11")
    sleepUtils.keepAwake()

    const userId = vnode.attrs.id

    tv(userId)
    .then(data => {
      data.userTV = userId
      this.round = new OnlineRound(false, data.game.id, data, false, undefined, userId)
    })
    .catch(handleXhrError)
  },

  oncreate: helper.viewFadeIn,

  onremove() {
    sleepUtils.allowSleepAgain()
    socket.destroy()
    if (this.round) {
      this.round.unload()
    }
  },

  view() {
    if (this.round) {
      return roundView(this.round)
    } else {
      return h(LoadingBoard)
    }
  }
}

export default UserTv
