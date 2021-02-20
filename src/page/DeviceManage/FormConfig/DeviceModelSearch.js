import api from '@/api/api_deviceManage';
export const SEARCH_FORM_CONFIG = {
  formData: [
    {
      type: 1,
      label: '设备类型',
      key: 'deviceType',
      urlOptions: {
        url: api.deviceList,
        keyName: 'typeCode',
        valueName: 'typeName'
      },
      span: 12
    },
    //TODO review :select组件提供翻页的能力请优化！
    {
      type: 1,
      label: '设备型号',
      key: 'deviceModel',
      urlOptions: {
        url: api.queryDeviceModelPage,
        keyName: 'deviceType',
        valueName: 'deviceModel',
        params: {
          currentPage: 1,
          pageSize: 10000
        }
      },
      span: 12
    },
    {
      type: 11,
      label: '添加时间',
      key: 'createTime',
      span: 12
    }
  ]
}
