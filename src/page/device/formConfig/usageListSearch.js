import apiDevice from "@/api/api_device";

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
          label: '设备标识',
          value: 'deviceIdentifier'
        },
        {
          label: '所属商户',
          value: 'merchantNo'
        },
        {
          label: '所属服务商',
          value: 'agentNo'
        }
      ],
      labelWidth: '100px'
    },
    {
      type: 1,
      label: '设备型号',
      key: 'deviceId',
      style: 'width:294px',
      labelWidth: '100px',
      urlOptions: {
        url: apiDevice.queryAllDeviceModel,
        keyName: 'deviceId',
        valueName: 'deviceModel',
        method: 'get',
        params: {
          classification: 1
        }
      }
    },
    {
      type: 1,
      label: '设备状态',
      key: 'freezeStatus',
      style: 'width:294px',
      labelWidth: '185px',
      options: [
        {
          value: '',
          label: '全部'
        },
        {
          value: 1,
          label: '可用'
        },
        {
          value: 2,
          label: '禁用'
        }
      ]
    }
  ]
}
