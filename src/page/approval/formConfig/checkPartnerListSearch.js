// import areaData from "@/assets/data/areaData"
export const SEARCH_CONFIG = {
  formData: [
    {
      type: 9,
      label: '筛选时间',
      key: 'date',
      class: 'max-width',
      labelWidth: '100px'
    },
    {
      type: 10,
      label: '精准筛选',
      key: '',
      class: 'max-width',
      options: [
        {
          label: '合伙人姓名',
          value: 'name'
        },
        {
          label: '合伙人手机号',
          value: 'phone'
        },
        {
          label: '所属服务商ID',
          value: 'serviceid'
        },
        {
          label: '所属服务商名称',
          value: 'servicename'
        }
      ],
      labelWidth: '100px'
    },
    {
      type: 1,
      label: '合伙人类型',
      key: 'type',
      style: 'width:294px',
      options: [
        {
          label: '拓展员',
          value: 0
        },
        {
          label: '入件操作员',
          value: 1
        }
      ]
    },
    {
      type: 1,
      label: '审核状态',
      key: 'status',
      style: 'width:294px',
      labelWidth: '185px',
      options: [
        {
          label: '待审核',
          value: 0
        },
        {
          label: '审核通过',
          value: 1
        },
        {
          label: '驳回',
          value: 2
        }
      ]
    },
    {
      type: 1,
      label: '所属运营',
      key: 'oper',
      style: 'width:294px',
      labelWidth: '100px',
      class: "clear_both",
      initVal: "全部",
      options: [
        {
          label: '全部',
          value: 0
        }
      ]
    }
  ]
}
