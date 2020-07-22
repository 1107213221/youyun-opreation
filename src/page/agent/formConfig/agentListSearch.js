import areaData from "@/assets/data/areaData";
import apiAgent from "@/api/api_agent.js";

export const FORM_CONFIG = {
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
          label: '服务商ID',
          value: 'agentNo'
        },
        {
          label: '服务商名称',
          value: 'agentName'
        }
      ],
      labelWidth: '100px'
    },
    {
      type: 1,
      label: '标签',
      key: 'labelId',
      style: 'width:294px',
      urlOptions: {
        url: apiAgent.selectByChannelAgentCode,
        keyName: 'id',
        valueName: 'name',
        method: 'get'
      }
    },
    {
      type: 1,
      label: '所属大区',
      key: 'regionCode',
      style: 'width:294px',
      labelWidth: '185px',
      urlOptions: {
        url: apiAgent.queryAllRegion,
        keyName: 'regionCode',
        valueName: 'regionName',
        method: 'get'
      }
    },
    {
      type: 1,
      label: '服务商等级',
      key: 'agentGrade',
      style: 'width:294px',
      class: "clear_both",
      options: [
        {
          label: '顶级',
          value: 0
        },
        {
          label: '二级',
          value: 1
        }
      ]
    },
    {
      type: 8,
      label: '服务地区',
      key: 'area',
      style: 'width:294px',
      labelWidth: '185px',
      options: areaData
    },
    {
      type: 1,
      label: '所属运营',
      key: 'operateUserNo',
      class: "clear_both",
      urlOptions: {
        url: apiAgent.queryAllOperation,
        keyName: 'operationId',
        valueName: 'operationName',
        method: 'get'
      }
    },
    {
      type: 1,
      label: '状态',
      key: 'status',
      style: 'width:294px',
      labelWidth: '185px',
      options: [
        {
          label: '待补全',
          value: 'incomplete'
        },
        {
          label: '使用中',
          value: 'complete '
        },
        {
          label: '冻结',
          value: 'blocked '
        },
        {
          label: '到期',
          value: 'expired'
        }
      ]
    }
  ]
}
