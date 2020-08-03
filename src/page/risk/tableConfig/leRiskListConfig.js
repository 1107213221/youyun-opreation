export const LERISKLIST_CONFIG = {
  gridConfig: [
    {
      label: '服务商',
      prop: [{ key: 'agentName' }, { key: 'agentNo', label: "ID:" }],
      width: '150px'
    },
    {
      label: '商户',
      prop: [{ key: 'merchantName' }, { key: 'merchantNo', label: "ID:" }],
      width: '150px'
    },
    {
      label: '提交时间',
      prop: 'createTime',
      width: '150px'
    },
    {
      label: '所属运营',
      prop: 'operateUserName',
      width: '150px'
    },
    {
      label: '状态',
      prop: 'status',
      width: '150px',
      render: (h, params) => {
        if (params.row.status === 'channelAudit') {
          return h(
            'span', '通道审核中'
          )
        }
        if (params.row.status === 'channelPass') {
          return h(
            'span', '通道通过'
          )
        }
        if (params.row.status === 'channelReject') {
          return h(
            'span', '通道驳回'
          )
        }
        if (params.row.status === 'nonOpen') {
          return h(
            'span', '待开通'
          )
        }
        if (params.row.status === 'pass') {
          return h(
            'span', '通过'
          )
        }
        if (params.row.status === 'platformAudit') {
          return h(
            'span', '平台审核中'
          )
        }
        if (params.row.status === 'platformReject') {
          return h(
            'span', '平台驳回'
          )
        }
        if (params.row.status === 'reject') {
          return h(
            'span', '驳回'
          )
        }
        if (params.row.status === 'waitChannelAudit') {
          return h(
            'span', '等待通道审核'
          )
        }
        if (params.row.status === 'waitPreAudit') {
          return h(
            'span', '等待预审核'
          )
        }
      }
    }
  ],

  // crud的模态框表单配置，可配置表单类型，验证规则，是否必填,col-span布局可通过span参数配置

  // crud的操作按钮配置，基础按钮有添加、修改、删除、查看，还可以配置扩展按钮
  gridBtnConfig: {
    create: false,
    update: false,
    delete: false,
    view: false,
    expands: [
      {
        name: '详情',
        emitName: 'detail',
        type: 'text',
        isShow: ($item) => {
          if ($item.status !== 'waitPreAudit') {
            return true;
          } else {
            return false
          }
        }
      },
      {
        name: '预审核',
        emitName: 'preApprove',
        type: 'text',
        isShow: ($item) => {
          if ($item.status === 'waitPreAudit') {
            return true;
          } else {
            return false
          }
        }
      },
      {
        name: '通过',
        emitName: 'pass',
        type: 'text',
        isShow: ($item) => {
          if ($item.status === 'channelAudit' || $item.status === 'channelPass' || $item.status === 'platformAudit' || $item.status === 'waitChannelAudit') {
            return true;
          } else {
            return false
          }
        }
      },
      {
        name: '驳回',
        emitName: 'reject',
        type: 'text',
        isShow: ($item) => {
          if ($item.status === 'channelAudit' || $item.status === 'channelPass' || $item.status === 'platformAudit' || $item.status === 'waitChannelAudit') {
            return true;
          } else {
            return false
          }
        }
      }
    ]
  },
  // 表单基础数据类型，需要预先赋值
  formModel: {
    id: '',
    tel: '',
    name: '',
    email: '',
    status: '',
    create_time: '',
    expand: '',
    roleIdList: []
  },
  hideEditArea: false
};
