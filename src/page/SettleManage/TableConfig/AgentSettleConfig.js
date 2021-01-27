export const AGENT_SETTLE_CONFIG = {
  gridConfig: [
    {
      label: '结算ID',
      prop: 'id',
      render: (h, params) => {
        return h(
          'span', {'class': 'tab-color' }, params.row.id
        )
      }
    },
    {
      label: '创建时间',
      prop: 'createTime',
    },
    {
      label: '结算金额',
      prop: 'actualAmount',
    },
    {
      label: '服务商',
      prop: 'agentName'
    },
    {
      label: '处理状态',
      prop: 'settleStatus',
      render: (h, params) => {
        const actions = new Map([
          ['1', {className: 's-status-success', statusDesc: '已结算'}],
          ['2', {className: 's-status-pending', statusDesc: '结算中'}],
          ['3', {className: 's-status-primary', statusDesc: '未结算'}],
          ['4', {className: 's-status-fail', statusDesc: '驳回'}],
          ['default', {className: 's-status-pending', statusDesc: '等待'}],
        ])
        const action = actions.get(params.row.settleStatus) || actions.get('default')
        return (
          <span class={['flex-align-center', 'g-status-icon', 's-status-radius', action.className]}>{ action.statusDesc }</span>
      )
      }
    },
    {
      label: '处理时间',
      prop: 'updateTime'
    },
    {
      label: '操作人',
      prop: 'operationer'
    },
    {
      label: '备注',
      prop: 'remark'
    }
  ],


  gridBtnConfig: {
    create: false,
    update: false,
    delete: false,
    view: false,
    expands: [
      {
        name: '详情',
        emitName: 'details',
        type: 'text'
      }
    ]
  }
};

export const SETTLE_STATIC = [
  {
    span: 6,
    style: 'height: 98px;',
    label: '结算总额（元）',
    icon: 'iconjine',
    iconStyle: 'color: #EFA911;',
    tooltip: '',
    value: '0'
  },
  {
    span: 6,
    style: 'height: 98px;',
    label: '结算笔数（笔）',
    icon: 'iconshuliang',
    iconStyle: 'color: #50C514;',
    tooltip: '',
    value: '0'
  },
  {
    span: 6,
    style: 'height: 98px;',
    label: '可结算金额（元）',
    icon: 'iconshenhe',
    iconStyle: 'color: #1989FA;',
    tooltip: '',
    value: '0'
  },
  {
    span: 6,
    style: 'height: 98px;',
    label: '已结算金额（元）',
    icon: 'iconshenhechenggong',
    iconStyle: 'color: #50C514;',
    tooltip: '',
    value: '0'
  }
]
