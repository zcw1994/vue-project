<template>
  <div class="main">
    <div class="me-detail-view">
      <header class="manage-header">
        <div data-v-2475a5f8 class="left">
          <i class="iconfont icon-zuojiantou"></i>
        </div>
        <div data-v-2475a5f8 class="title">
          <div data-v-2475a5f8>我的资料</div>
        </div>
        <div data-v-2475a5f8 class="right"></div>
      </header>
      <div class="me-detail">
        <div class="item-box">
          <div class="head">
            <div class="label">头像</div>
            <div class="value">
              <input type="file" accept="image/*" id="file_head" class="file-head">
              <img src="@/assets/head.jpg" alt class="head-icon">
            </div>
            <i class="iconfont icon-gengduo more-icon"></i>
          </div>
          <div class="common nickname">
            <div class="label">昵称</div>
            <div class="value show-nickname">188****8913</div>
            <i class="iconfont icon-gengduo more-icon"></i>
          </div>
          <div class="common gender">
            <div class="label">性别</div>
            <div class="value">未设置</div>
            <i class="iconfont icon-gengduo more-icon"></i>
          </div>
          <div class="common birthday">
            <div class="label">出生日期</div>
            <div class="value">2029年01月01日</div>
            <i class="iconfont icon-gengduo more-icon"></i>
          </div>
        </div>
      </div>
      <div class="edit-view" style="display: none;">
        <div class="edit-header">
          <div class="left">
            <img src width="11px" height="18px" alt>
          </div>
          <div class="title">更改昵称</div>
          <div class="right save"></div>
        </div>
        <div class="edit-nickname">
          <div class="name-box">
            <input placeholder="新昵称" maxlength="20" class="name-input">
            <div class="clear-name-btn">
              <i class="iconfont icon-chongzhi-qingchu" style="display: none;"></i>
            </div>
          </div>
          <div class="tip">支持中英文、数字、“_”</div>
        </div>
      </div>
      <div class="mint-popup mint-datetime date-box mint-popup-bottom" style="display: none;">
        <div class="picker mint-datetime-picker">
          <div class="picker-toolbar">
            <span class="mint-datetime-action mint-datetime-cancel">取消</span>
            <span class="mint-datetime-action mint-datetime-confirm">确认</span>
          </div>
          <div class="picker-items">
            <div class="picker-slot picker-slot-center" style="flex: 1 1 0%; -webkit-box-flex: 1;">
              <div
                class="picker-slot-wrapper"
                style="height: 252px; transform: translate(0px, -4536px) translateZ(0px);"
              >
                <div class="picker-item" style="height: 36px; line-height: 36px;">1900 年</div>
                <div
                  class="picker-item picker-selected"
                  style="height: 36px; line-height: 36px;"
                >2029 年</div>
              </div>
            </div>
            <div class="picker-slot picker-slot-center" style="flex: 1 1 0%; -webkit-box-flex: 1;">
              <div
                class="picker-slot-wrapper"
                style="height: 252px; transform: translate(0px, 108px) translateZ(0px);"
              >
                <div
                  class="picker-item picker-selected"
                  style="height: 36px; line-height: 36px;"
                >01 月</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">02 月</div>
              </div>
            </div>
            <div class="picker-slot picker-slot-center" style="flex: 1 1 0%; -webkit-box-flex: 1;">
              <div
                class="picker-slot-wrapper"
                style="height: 252px; transform: translate(0px, 108px) translateZ(0px);"
              >
                <div
                  class="picker-item picker-selected"
                  style="height: 36px; line-height: 36px;"
                >01 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">02 日</div>
              </div>
            </div>
            <div class="picker-center-highlight" style="height: 36px; margin-top: -18px;"></div>
          </div>
        </div>
      </div>
      <div class="mint-actionsheet gender-box" style="display: none;">
        <ul class="mint-actionsheet-list" style="margin-bottom: 5px;">
          <li class="mint-actionsheet-listitem">更改性别</li>
          <li class="mint-actionsheet-listitem">男</li>
          <li class="mint-actionsheet-listitem">女</li>
        </ul>
        <a class="mint-actionsheet-button">取消</a>
      </div>
    </div>
    <!---->
  </div>
</template>

<style lang="less">
@import url("./index.less");
</style>
