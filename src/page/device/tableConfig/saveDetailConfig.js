export const SAVEDETAIL_CONFIG = {
  gridConfig: [
    {
      label: '设备型号',
      prop: 'deviceModel',
      width: '150px'
    },
    {
      label: '入库时间',
      prop: 'inputTime',
      width: '150px'
    },
    {
      label: '设备标识',
      prop: 'deviceIdentifier',
      width: '150px'
    },
    {
      label: '保修截至日期',
      prop: 'deadline',
      width: '150px'
    },
    {
      label: '状态',
      prop: 'bindStatusDesc',
      width: '150px',
      isEdit: true
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
      // {
      //   name: '完成',
      //   emitName: 'okEdit',
      //   type: 'text',
      //   style: 'color:#3ABD2D',
      //   isShow: ($item) => {
      //     if ($item.children) {
      //       return false
      //     } else {
      //       if ($item.edit) {
      //         return true
      //       } else {
      //         return false
      //       }
      //     }
      //   }
      // },
      // {
      //   name: '编辑',
      //   emitName: 'edit',
      //   type: 'text',
      //   style: 'color:#1989FA',
      //   isShow: ($item) => {
      //     if ($item.children) {
      //       return false
      //     } else {
      //       if (!$item.edit) {
      //         return true
      //       } else {
      //         return false
      //       }
      //     }
      //   }
      // },
      {
        name: '编辑',
        emitName: 'edit',
        type: 'text'
      },
      {
        name: '删除',
        emitName: 'remove',
        type: 'text',
        style: 'color:#F5222D'
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
