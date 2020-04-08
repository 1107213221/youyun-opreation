import * as API from '.';

export default {
  queryTradeByType: (params) => API.GET('/operation/v1/tradeData/queryTradeByType', params),
  queryDailyTradeBrokenLine: (params) => API.GET('/operation/v1/tradeData/queryDailyTradeBrokenLine', params),
  tradeDataQueryRegionTradeSummaryByCondition: (params) => API.GET('/operation/v1/tradeData/queryRegionTradeSummaryByCondition', params),
  tradeData: (params) => API.GET('/operation/v1/tradeData/', params),
  merchantDataQueryAllProvinceCountAndRank: (params) => API.GET('/operation/v1/merchantData/queryAllProvinceCountAndRank', params),
  queryRegionTradeSummaryByCondition: (params) => API.GET('/operation/v1/merchantData/queryRegionTradeSummaryByCondition', params),
  queryCategoryTradeSummaryByCondition: (params) => API.GET('/operation/v1/merchantData/queryCategoryTradeSummaryByCondition', params),
  queryDailyTradeAvgByCondition: (params) => API.GET('/operation/v1/merchantData/queryDailyTradeAvgByCondition', params),
  queryTradeTop5ByCondition: (params) => API.GET('/operation/v1/merchantData/queryTradeTop5ByCondition', params),
  queryTradeCountRatioByCondition: (params) => API.GET('/operation/v1/merchantData/queryTradeCountRatioByCondition', params),
  queryTradeRiseRatioTop5ByCondition: (params) => API.GET('/operation/v1/merchantData/queryTradeRiseRatioTop5ByCondition', params),
  selectTradeRiseRatioRoughByCondition: (params) => API.GET('/operation/v1/merchantData/selectTradeRiseRatioRoughByCondition', params),
  selectNonTradeTop5ByCondition: (params) => API.GET('/operation/v1/merchantData/selectNonTradeTop5ByCondition', params),
  queryTradeSummaryAndCycleByCondition: (params) => API.GET('/operation/v1/merchantData/queryTradeSummaryAndCycleByCondition', params),
  queryAllProvinceCount: (params) => API.GET('operation/v1/agentCount/queryAllProvinceCount', params),
  queryProvinceRank: (params) => API.GET('operation/v1/agentCount/queryProvinceRank', params),
  queryRegionRatio: (params) => API.GET('operation/v1/agentCount/queryRegionRatio', params),
  queryGradeRatio: (params) => API.GET('operation/v1/agentCount/queryGradeRatio', params),
  queryTypeRatio: (params) => API.GET('operation/v1/agentCount/queryTypeRatio', params),
  queryAgentDailyAverageTrade: (params) => API.GET('/operation/v1/tradeData/queryAgentDailyAverageTrade', params),
  queryAgentTradeAmountRank: (params) => API.GET('/operation/v1/tradeData/queryAgentTradeAmountRank', params),
  queryAgentTradeAmountPerRank: (params) => API.GET('/operation/v1/tradeData/queryAgentTradeAmountPerRank', params),
  queryNewMerchantRank: (params) => API.GET('/operation/v1/tradeData/queryNewMerchantRank', params),
  queryAgentFaceTradeAmountRank: (params) => API.GET('/operation/v1/tradeData/queryAgentFaceTradeAmountRank', params),
  queryAgentFaceTradeCountRank: (params) => API.GET('/operation/v1/tradeData/queryAgentFaceTradeCountRank', params),
  queryAgentTradeList: (params) => API.GET('/operation/v1/tradeData/queryAgentTradeList', params)
};
