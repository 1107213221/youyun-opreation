import * as API from '.';
export default {
  // 门店列表
  shopQueryByPage: (params) => API.GET('/operation/v1/shop/queryByPage', params),
  // 门店详情
  shopQueryDetail: (params) => API.GET('/operation/v1/shop/queryDetail', params),
  // 门店启用禁用
  shopUpdate: (params) => API.POST('/operation/v1/shop/update', params),
  // 门店编辑
  shopEditDetail: (params) => API.POST('/operation/v1/shop/editDetail', params),
  // 门店审核-通过
  passIndirectAudit: (params) => API.POST('/operation/v1/shop/passIndirectAudit', params),
  // 门店审核驳回
  rejectIndirectAudit: (params) => API.POST('/operation/v1/shop/rejectIndirectAudit', params)
}
