import commonConst from '@/common/utils/commonConst';

export default {
  version: 5,
  perf: {
    shortCut: {
      showAndHidden: 'Option+R',
      separate: 'Ctrl+D',
      quit: 'Shift+Escape',
      capture: 'Ctrl+Shift+A',
    },
    common: {
      start: true,
      space: true,
      // 是否失焦隐藏。默认在dev环境不隐藏，在打包后隐藏。
      hideOnBlur: commonConst.production(),
      autoPast: false,
      darkMode: false,
    },
    local: {
      search: true,
    },
  },
  global: [],
};
