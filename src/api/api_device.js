import * as API from '.';

export default {
  // 设备管理-库存管理-设备库存-分页查询
  deviceQueryByPage: (params) => API.GET('/operation/v1/device/queryByPage', params),
  // 设备管理-库存管理-设备库存-新增设备
  deviceAdd: (params) => API.POST('/operation/v1/device/add', params),
  // 设备管理-库存管理-设备库存-编辑前的查询
  deviceQueryById: (params) => API.GET('/operation/v1/device/queryById', params),
  // 设备管理-库存管理-设备库存-修改设备
  deviceUpdate: (params) => API.POST('/operation/v1/device/update', params),
  // 设备管理-库存管理-设备库存-删除设备
  deviceDelete: (params) => API.POST('/operation/v1/device/delete', params),
  // 设备管理-库存管理-设备库存-查询所有设备型号
  queryAllDeviceModel: (params) => API.GET('/operation/v1/device/queryAllDeviceModel', params),
  // 设备管理-库存管理-设备库存-查询所有设备类型
  queryAllDeviceTypeModel: (params) => API.GET('/operation/v1/device/queryAllDeviceTypeModel', params),
  // 设备库存-订购服务商下拉
  finishAllAgent: (params) => API.GET('/operation/v1/deviceOutput/finishAllAgent', params),
  // 设备库存-订购支付方式下拉
  finishAllPrivilegeType: (params) => API.GET('/operation/v1/deviceOutput/finishAllPrivilegeType', params),
  // 设备管理-库存管理-设备授权激活页面-分页列表查询
  deviceActivationQueryByPage: (params) => API.GET('/operation/v1/deviceActivation/queryByPage', params),
  // 设备管理-库存管理-设备授权激活页面-编辑
  deviceActivationUpdate: (params) => API.POST('/operation/v1/deviceActivation/update', params),
  // 设备管理-库存管理-入库管理-分页列表
  deviceInputQueryByPage: (params) => API.GET('/operation/v1/deviceInput/queryByPage', params),
  // 设备管理-库存管理-入库管理-新增入库
  deviceInputAdd: (params) => API.POST('/operation/v1/deviceInput/add', params),
  // 设备管理-库存管理-设备明细-入库明细
  queryInputPage: (params) => API.POST('/operation/v1/deviceDetail/queryInputPage', params),
  // 设备管理-库存管理-设备明细-出库明细
  queryOutputPage: (params) => API.GET('/operation/v1/deviceDetail/queryOutputPage', params),
  // 设备管理-库存管理-设备明细-编辑
  deviceDetailUpdate: (params) => API.POST('/operation/v1/deviceDetail/update', params),
  // 设备管理-库存管理-入库明细-删除入库
  deviceDetailDelete: (params) => API.POST('/operation/v1/deviceDetail/delete', params),
  // 设备管理-库存管理-出库管理-添加
  deviceOutputAdd: (params) => API.POST('/operation/v1/deviceOutput/add', params),
  // 设备管理-库存管理-出库管理-分页查询
  deviceOutputQueryByPage: (params) => API.GET('/operation/v1/deviceOutput/queryByPage', params),
  // 设备管理-库存管理-出库管理-查看详情
  deviceOutputQueryById: (params) => API.GET('/operation/v1/deviceOutput/queryById', params),
  // operation/v1/deviceOutput/distribute
  distribute: (params) => API.POST('/operation/v1/deviceOutput/distribute', params),
  // 设备管理-库存管理-出库管理-发货驳回
  reject: (params) => API.POST('/operation/v1/deviceOutput/reject', params),
  // 设备管理-库存管理-出库管理-完成发货
  finishOutput: (params) => API.POST('/operation/v1/deviceOutput/finishOutput', params),
  // 设备管理-库存管理-出库管理-查看发货信息
  finishOutputInfo: (params) => API.GET('/operation/v1/deviceOutput/finishOutputInfo', params),
  // 设备统计-查询各个设备正在使用的数量
  queryUsing: (params) => API.GET('/operation/v1/deviceData/queryUsing', params),
  // 查询所有省份正在使用的数量/查询省份使用排行榜
  queryAllProvince: (params) => API.GET('/operation/v1/deviceData/queryAllProvince', params),
  // 设备统计-查询各个大区设备使用情况
  queryRegion: (params) => API.GET('/operation/v1/deviceData/queryRegion', params),
  // 设备统计-查询各个大区设备交易情况
  queryRegionTrade: (params) => API.GET('/operation/v1/deviceData/queryRegionTrade', params),
  // 设备统计-查询各个行业设备使用情况
  queryMcc: (params) => API.GET('/operation/v1/deviceData/queryMcc', params),
  // operation/v1/deviceData/queryMccTrade
  queryMccTrade: (params) => API.GET('/operation/v1/deviceData/queryMccTrade', params),
  // 设备统计-设备交易明细统计
  queryDetail: (params) => API.GET('/operation/v1/deviceData/queryDetail', params),
  // 设备统计-设备的生命流程
  queryProcessLife: (params) => API.GET('/operation/v1/deviceData/queryProcessLife', params),
  // 设备统计-服务商设备统计
  deviceDataQueryByPage: (params) => API.GET('/operation/v1/deviceData/queryByPage', params),
  // 设备使用列表-分页查询
  deviceMerchantQueryByPage: (params) => API.GET('/operation/v1/deviceMerchant/queryByPage', params),
  // 设备使用列表-解绑
  unbind: (params) => API.POST('/operation/v1/deviceMerchant/unbind', params),
  // 设备使用列表-恢复可用
  unfreeze: (params) => API.POST('/operation/v1/deviceMerchant/unfreeze', params),
  // 设备维修-分页查询
  deviceMaintainQueryByPage: (params) => API.GET('/operation/v1/deviceMaintain/queryByPage', params),
  // 设备维修-通过ID查询
  deviceMaintainQueryById: (params) => API.GET('/operation/v1/deviceMaintain/queryById', params),
  // 设备维修-待审核通过
  auditPass: (params) => API.POST('/operation/v1/deviceMaintain/auditPass', params),
  // 设备维修-待审核驳回
  auditReject: (params) => API.POST('/operation/v1/deviceMaintain/auditReject', params),
  // 设备维修-确认收货
  receive: (params) => API.POST('/operation/v1/deviceMaintain/receive', params),
  // 设备维修-维修完成收款-变更为待发货
  saveMoney: (params) => API.POST('/operation/v1/deviceMaintain/saveMoney', params),
  // 设备维修-收款成功之后已发货操作
  send: (params) => API.POST('/operation/v1/deviceMaintain/send', params),
  // 设备商城管理-分页查询
  deviceMallQueryByPage: (params) => API.GET('/operation/v1/deviceMall/queryByPage', params),
  // 设备商城管理-添加
  deviceMallAdd: (params) => API.POST('/operation/v1/deviceMall/add', params),
  // 设备商城管理-根据主键查询
  selectById: (params) => API.GET('/operation/v1/deviceMall/selectById', params),
  // 设备商城管理-更新
  deviceMallUpdate: (params) => API.POST('/operation/v1/deviceMall/update', params),
  // 设备商城管理-删除
  deviceMallDelete: (params) => API.POST('/operation/v1/deviceMall/delete', params),
  // 设备商城管理-上架
  on: (params) => API.POST('/operation/v1/deviceMall/on', params),
  // 设备商城管理-下架
  off: (params) => API.POST('/operation/v1/deviceMall/off', params),
  // 查询所有运营人员
  queryAllOperation: () => API.GET('/operation/v1/advertPrivilege/queryAllOperation'),
  // 参数设置-大区设置-查询所有大区
  queryAllRegion: () => API.GET('/operation/v1/region/queryAllRegion'),
  // 设备维修-运营端-状态下拉
  deviceStatusAll: () => API.GET('/operation/v1/deviceMaintain/deviceStatusAll'),
  // 设备-出库管理-发货信息编辑
  finishOutputInfoUpdate: (params) => API.GET('/operation/v1/deviceOutput/finishOutputInfoUpdate', params)
};
