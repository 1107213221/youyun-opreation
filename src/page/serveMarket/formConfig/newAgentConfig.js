import { setRules } from '@/libs/kit/formFns.js';

export const FORM_CONFIG = {
  sendMessageData: {
    title: '公告信息',
    showFootBtn: true,
    formData: [
      {
        type: 0,
        label: '阿里云账号',
        key: 'alyuser',
        initVal: '',
        rules: setRules('阿里云账号').isRequired.get,
        inputType: "input",
        row: 1,
        style: 'width:364px',
        placeholder: '请输入'
      },
      {
        type: 0,
        label: '阿里云密码',
        key: 'alypassword',
        initVal: '',
        rules: setRules('阿里云密码').isRequired.get,
        inputType: "input",
        row: 1,
        style: 'width:364px',
        placeholder: '请输入'
      },
      {
        type: 0,
        label: '乐刷账号',
        key: 'lsuser',
        initVal: '',
        rules: setRules('乐刷账号').isRequired.get,
        inputType: "input",
        row: 1,
        style: 'width:364px',
        placeholder: '请输入'
      },
      {
        type: 0,
        label: '乐刷密码',
        key: 'lspassword',
        initVal: '',
        rules: setRules('阿里云账号').isRequired.get,
        inputType: "input",
        row: 1,
        style: 'width:364px',
        placeholder: '请输入'
      },
      {
        type: 0,
        label: '联系人',
        key: 'userName',
        initVal: '',
        rules: setRules('联系人').isRequired.get,
        inputType: "input",
        row: 1,
        style: 'width:364px',
        placeholder: '请输入'
      },
      {
        type: 0,
        label: '联系电话',
        key: 'mobile',
        initVal: '',
        rules: setRules('联系电话').isRequired.get,
        inputType: "input",
        row: 1,
        style: 'width:364px',
        placeholder: '请输入'
      }
    ]
  }
};
