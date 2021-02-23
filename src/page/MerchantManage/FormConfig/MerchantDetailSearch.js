import { AgentList } from "@/libs/config/constant.config";
export const SEARCH_FORM_CONFIG = [
  {
    type: 0,
    label: '门店ID',
    key: 'shopNo',
    labelWidth: '128px',
    span: 12
  },
  {
    type: 0,
    label: '门店名称',
    key: 'shopName',
    labelWidth: '128px',
    span: 12
  },
  {
    type: 1,
    label: '审核状态',
    key: 'status',
    labelWidth: '128px',
    //TODO review: 状态值以常量方式替换
    options: [
      {
        label: '预审核',
        value: AgentList.MERCHANT_AUDIT
      },
      {
        label: '平台驳回',
        value: AgentList.PLATEFORM_REJECT
      },
      {
        label: '通道审核中',
        value: AgentList.CHANNEL_AUDIT
      },
      {
        label: '通道驳回',
        value: AgentList.CHANNEL_REJECT
      },
      {
        label: '通道通过',
        value: AgentList.CHANNEL_PASS
      },
      {
        label: '微信审核中',
        value: AgentList.WECHAT_AUDIT
      },
      {
        label: '微信未认证',
        value: AgentList.WECHAT_UNAUTH
      },
      {
        label: '微信认证拒绝',
        value: AgentList.WECHAT_REJECT
      },
      {
        label: '微信认证成功',
        value: AgentList.WECHAT_PASS
      }
    ],
    span: 12
  },
  {
    type: 1,
    label: '门店状态',
    key: 'isDisabled',
    labelWidth: '128px',
    //TODO review: 状态值以常量方式替换
    options: [
      {
        label: '启用',
        value: AgentList.MERCHANT_OPEN
      },
      {
        label: '禁用',
        value: AgentList.MERCHANT_DISABLED
      }
    ],
    span: 12
  },
  {
    type: 0,
    label: '服务电话',
    key: 'phone',
    labelWidth: '128px',
    span: 12
  }
]
