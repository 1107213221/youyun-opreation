export const TABLE_CONFIG = {
  gridConfig: [
    {
      label: '广告名称',
      prop: 'advertName',
      width: '150px'
    },
    {
      label: '广告类型',
      prop: 'advertTypeDesc',
      width: '150px'
    },
    {
      label: '尺寸',
      prop: 'advertSize',
      width: '150px'
    },
    {
      label: '广告图片',
      prop: 'advertImg',
      width: '150px',
      type: 'img',
      render: (h, params) => {
        const imgUrl = params.row.advertImg;
        return h('el-image', {
          props: {
            src: imgUrl,
            'preview-src-list': [imgUrl]
          }
        }, '正常');
      }
    },
    {
      label: '修改时间',
      prop: 'modifyTime',
      width: '150px'
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
        name: '编辑',
        emitName: 'edit',
        type: 'text'
      },
      {
        name: '删除',
        emitName: 'remove',
        type: 'text'
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
