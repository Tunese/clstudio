// miniprogram/pages/login/login.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    showMsg:false
  },
  login(event) {
    console.log(event.detail.value.phone);
    Toast.success('成功文案');
  },
  onChange(event) {
    // event.detail 为当前输入的值
    //console.log(event.detail);
    //Toast.success('成功文案');
  }

})