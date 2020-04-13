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
          label: '商户ID',
          value: 'merchantNo'
        },
        {
          label: '商户名称',
          value: 'merchantName'
        }
      ],
      labelWidth: '100px'
    },
    {
      type: 1,
      label: '状态',
      key: 'channelStatus',
      style: 'width:294px',
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
      key: 'operationUserNo',
      style: 'width:294px',
      labelWidth: '185px',
      options: [
        {
          label: '川菜',
          value: 0
        },
        {
          label: '粤菜',
          value: 1
        },
        {
          label: '杭帮菜',
          value: 2
        }
      ]
    }]
}
