export const appname = 'job';
export const prefixCls = appname;
export const loginPath = '/login';
export const menus = {
  name: 'job',
  path: 'job',
  icon: '#iconrenwuzhongxinicon',
  children: [
    {
      name: 'tasks-add',
      path: 'tasks-add',
      icon: '#iconjishirenwuicon',
    }, {
      name: 'tasks',
      path: 'tasks',
      icon: '#iconguanlishijiaoicon',
    }, {
      name: 'tpls',
      path: 'tpls',
      icon: '#iconyupeizhimobanicon',
    }, {
      "name": "shortcuts",
      "type": "group",
      "path": "",
      "icon": "",
      "rootVisible": true,
      "children": [{
        "name": "rdb",
        "path": "rdb",
        "isAbsolutePath": true,
        "icon": "#iconyonghuziyuanzhongxinicon"
      }, {
        "name": "ams",
        "path": "ams",
        "isAbsolutePath": true,
        "icon": "#iconzichanguanlixitongicon"
      }, {
        "name": "mon",
        "path": "mon",
        "isAbsolutePath": true,
        "icon": "#iconjiankonggaojingxitongicon"
      }]
    },
  ],
};
// 报警级别 选项
export const priorityOptions = [
  {
    value: 1,
    label: 'P1',
    alias: '一级报警',
    color: '#f50',
  }, {
    value: 2,
    label: 'P2',
    alias: '二级报警',
    color: '#fa8c16',
  }, {
    value: 3,
    label: 'P3',
    alias: '三级报警',
    color: '#F6C445',
  },
];

// 报警级别 选项
export const eventTypeOptions = [
  {
    value: 'alert',
    label: '报警',
    status: 'error',
    color: '#f5222d',
  }, {
    value: 'recovery',
    label: '恢复',
    status: 'success',
    color: '#52c41a',
  },
];

// 每周的生效日期 选项
export const periodDaysOfWeekOptions = [
  {
    value: 0,
    label: '周日',
  }, {
    value: 1,
    label: '周一',
  }, {
    value: 2,
    label: '周二',
  }, {
    value: 3,
    label: '周三',
  }, {
    value: 4,
    label: '周四',
  }, {
    value: 5,
    label: '周五',
  }, {
    value: 6,
    label: '周六',
  },
];

// 且、或 选项
export const multiOpOptions = [
  {
    value: 1,
    label: '且',
  }, {
    value: 0,
    label: '或',
  },
];

// 计算因子 选项
export const funcOptions = [
  {
    value: 'abs',
    label: '绝对值',
    prods: [{
      name: 'woater',
    }],
  }, {
    value: 'fluctuate',
    label: '突增突降值',
    prods: [{
      name: 'woater',
      params: ['O'],
    }, {
      name: 'odin',
    }, {
      name: 'srm',
    }],
  }, {
    value: 'fluctuate_rate',
    label: '突增突降率',
    prods: [{
      name: 'woater',
      params: ['O'],
    }, {
      name: 'odin',
    }, {
      name: 'srm',
    }],
  }, {
    value: 'period_fluctuate_week',
    label: '周同比绝对值',
    prods: [{
      name: 'woater',
    }, {
      name: 'odin',
    }, {
      name: 'srm',
    }],
  }, {
    value: 'period_fluctuate_yesterday',
    label: '昨日环比绝对值',
    prods: [{
      name: 'woater',
    }, {
      name: 'odin',
    }, {
      name: 'srm',
    }],
  }, {
    value: 'period_fluctuate_rate_week',
    label: '周同比变化率',
    prods: [{
      name: 'woater',
    }, {
      name: 'odin',
    }, {
      name: 'srm',
    }],
  }, {
    value: 'period_fluctuate_rate_yesterday',
    label: '昨日环比变化率',
    prods: [{
      name: 'woater',
    }, {
      name: 'odin',
    }, {
      name: 'srm',
    }],
  }, /* {
    value: 'period_fluctuate',
    label: '同比绝对值',
    prods: [{
      name: 'woater',
      params: ['X'],
    }, {
      name: 'odin',
      params: ['X'],
    }, {
      name: 'srm',
      params: ['X'],
    }],
  }, {
    value: 'period_fluctuate_rate',
    label: '同比变化率',
    prods: [{
      name: 'woater',
      params: ['X'],
    }, {
      name: 'odin',
      params: ['X'],
    }, {
      name: 'srm',
      params: ['X'],
    }],
  }, */{
    value: 'nodata',
    label: '无数据',
    prods: [{
      name: 'woater',
    }, {
      name: 'odin',
    }, {
      name: 'srm',
    }],
  }, {
    value: 'period_sum',
    label: '周期聚合',
    prods: [{
      name: 'odin',
    }, {
      name: 'srm',
    }],
  }, {
    value: 'period_happen',
    label: '周期发生',
    prods: [{
      name: 'odin',
      params: ['N'],
    }, {
      name: 'srm',
      params: ['N'],
    }],
  }, {
    // period_happen N = 1
    value: 'max',
    label: '最大值',
    prods: [{
      name: 'odin',
    }, {
      name: 'srm',
    }],
  }, {
    // period_happen N = 1
    value: 'min',
    label: '最小值',
    prods: [{
      name: 'odin',
    }, {
      name: 'srm',
    }],
  }, {
    // period_happen N = 1
    value: 'avg',
    label: '平均值',
    prods: [{
      name: 'odin',
    }, {
      name: 'srm',
    }],
  },
];

export const eoptOptions = [
  {
    value: '>',
    label: '大于',
  }, {
    value: '<',
    label: '小于',
  }, {
    value: '=',
    label: '等于',
  }, {
    value: '>=',
    label: '大于等于',
  }, {
    value: '<=',
    label: '小于等于',
  }, {
    value: '!=',
    label: '不等于',
  },
];

export const timeOptions = [
  {
    value: 2,
    label: '2小时',
  }, {
    value: 6,
    label: '6小时',
  }, {
    value: 24,
    label: '1天',
  }, {
    value: 48,
    label: '2天',
  }, {
    value: 168,
    label: '7天',
  }, {
    value: 720,
    label: '30天',
  }, {
    value: 'custom',
    label: '其它',
  },
];

