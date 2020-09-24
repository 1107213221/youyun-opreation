export const SEARCH_CONFIG = {
  formData: [
    {
      type: 11,
      label: '奖励核算时间',
      key: 'date',
      labelWidth: '110px',
      datatype: 'date',
      format: 'yyyy-MM-dd',
      span: 22
    },
    {
      type: 10,
      label: '精准筛选',
      key: '',
      class: 'max-width',
      options: [
        {
          label: '商户编号',
          value: 'merchantNo'
        },
        {
          label: '商户名',
          value: 'merchantName'
        }
      ],
      labelWidth: '80px',
      span: 22
    }
  ]
}
