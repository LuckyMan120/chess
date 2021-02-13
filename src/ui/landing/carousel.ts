import h from 'mithril/hyperscript';
import Siema from '../helper/Siema';
import {batchRequestAnimationFrame} from '../../utils/batchRAF';
import * as helper from '../helper';
import redraw from '../../utils/redraw';
import {redrawDots} from '../gamesMenu';
import {liveTransition} from './landingView';

let count = 3;
let index = 0;
let scroller: any | null = null;
let cardChangeTimeoutId: number;
function wrapperOnCreate({dom}: Mithril.VnodeDOM<any, any>) {
  if (helper.isPortrait()) {
    scroller = new Siema({
      selector: dom as HTMLElement,
      duration: 250,
      loop: false,
      perPage: 1,
      startIndex: 0,
      threshold: 50,
      draggable: true,
      onChange: () => {
        clearTimeout(cardChangeTimeoutId);
        cardChangeTimeoutId = setTimeout(() => {
          batchRequestAnimationFrame(redrawDots);
        }, 300);
      },
    });
    batchRequestAnimationFrame(redrawDots);
    redraw();
  }
}

function wrapperOnRemove() {
  if (scroller) {
    scroller.destroy();
    scroller = null;
  }
}

const starCarosuel = () => {
  return h(
    'div',
    {
      oncreate: wrapperOnCreate,
      onremove: wrapperOnRemove,
    },
    [liveTransition(), liveTransition(), liveTransition()],
  );
};

export const next = () => {
  if (index != count) {
    index += 1;
    scroller.next(index);
  }
};

export const prev = () => {
  if (index != 0) {
    index -= 1;
    scroller.prev(index);
  }
};

export const goTo = (carouselIndex: number) => {
  index = carouselIndex;
  scroller.goTo(index);
};

export default {
  view() {
    return [h('div', starCarosuel())];
  },
};
