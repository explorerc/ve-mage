<!-- 活动详情页面-->
<template>
  <div class='detail-wrap'
       v-if="dataPrepare[0]">
    <div class="desc clearfix">
      <div class="left">
        <span class="status"
              :class="statusClass">{{status}}</span>
        <div v-if="poster"
             class='poster has-poster'
             :style="{backgroundImage:'url('+ imgHost + poster + ')'}"></div>
        <div class="poster default-poster"
             v-else></div>
      </div>
      <div class="middle">
        <p class='title'>{{title}} <span class='id-tag'>ID:{{activityId}} <i @click='copy("copyId")'></i></span></p>
        <input type="text"
               :value="`${this.activityId}`"
               id="copyId"
               style="position:absolute;opacity:0;">
        <p class='desc-label'>活动标签 : <span class="tag"
                v-for="item in tagList">{{item.name}}</span></p>
        <p class='desc-label'>开播时间 :  {{startTime}}</p>
        <p class="desc-label tool">活动状态 :
          <el-switch class='switch'
                     v-model="isPublished"
                     :active-text="isPublished ? '已发布' : '未发布' "
                     inactive-color="#DEE1FF"
                     :width="32"
                     active-color="#FFD021"
                     @change="switchActive"></el-switch>
          <span v-if="isPublished"
                class='link-box'
                @mouseover="showLinkBox = true"
                @mouseout="showLinkBox = false"><i></i>复制链接
            <ul v-show='showLinkBox'>
              <li :class="{'isSwitch':!dataBrand[0].switch}">
                <i class='icon-site'></i>活动官网
                <router-link v-if="dataBrand[0].switch"
                             :to="`${this.PC_HOST}site/${activityId}`"
                             target="_blank">
                  <el-button size="mini"
                             round>查看</el-button>
                </router-link>
                <router-link v-else
                             :to="`/liveMager/site/${activityId}`">
                  <el-button size="mini"
                             round>开启</el-button>
                </router-link>
                <el-button v-if="dataBrand[0].switch"
                           size="mini"
                           round
                           @click="copy('copyContent2')">复制</el-button>
                <input type="text"
                       :value='`https:${this.PC_HOST}site/${activityId}`'
                       id="copyContent2"
                       style="position:absolute;opacity:0;">
              </li>
              <li>
                <i class='icon-guide'></i>活动引导页 <router-link :to="`${this.PC_HOST}subscribe/${activityId}`"
                             target="_blank">
                  <el-button size="mini"
                             round>查看</el-button>
                </router-link>
                <el-button size="mini"
                           round
                           @click="copy('copyContent')">复制</el-button>
                <input type="text"
                       :value='`https:${this.PC_HOST}subscribe/${this.activityId}`'
                       id="copyContent"
                       style="position:absolute;opacity:0;">
              </li>
            </ul>
          </span>
        </p>
      </div>
      <div class="right">
        <p class="title"
           v-if="!countDownstatus">距离直播开始还有</p>
        <p class="title"
           v-else-if="status === '直播'">直播已开始</p>
        <p class="title"
           v-else-if="status === '预约' && countDownstatus">直播即将开始</p>
        <p class="title"
           v-else-if="status === '结束'">直播已结束</p>
        <div class="count-box"
             :style="{'height':countDownstatus ? '0px' : 'auto'}">
          <com-countdown :endTime.sync="countdownTime"
                         @timeOut='timeOut'>
            <ol class='clearfix'
                slot='slot1'
                slot-scope="scoped">
              <li>{{scoped.day}}<span>天</span></li>
              <li>{{scoped.hour}}<span>时</span></li>
              <li>{{scoped.minute}}<span>分</span></li>
              <li>{{scoped.second}}<span>秒</span></li>
            </ol>
          </com-countdown>
        </div>
        <el-button class='primary-button'
                   @click='turnOn'
                   :disabled="overdue">正式直播
        </el-button>
      </div>
    </div>
    <div class="block process clearfix">
      <div class="top clearfix">
        <ul>
          <li class='step highlight'
              :class="{ 'active':this.currStep === 'notPublish' }">
            <dl>
              <dt><i></i></dt>
              <dd>准备</dd>
            </dl>
          </li>
          <li class='step brand'
              :class="{ 'highlight':this.currStep.search('isPublish') > -1, 'active':this.currStep === 'isPublish' }">
            <dl>
              <dt><i></i></dt>
              <dd>品牌</dd>
            </dl>
          </li>
          <li class='step prompt'
              :class="{ 'highlight':this.currStep.search('isPublish') > -1, 'active':this.currStep === 'isPublish' }">
            <dl>
              <dt><i></i></dt>
              <dd>推广</dd>
            </dl>
          </li>
          <li class='step live '
              :class="{ 'highlight':this.currStep.search('live') > -1, 'active':this.currStep === 'isPublish live' }">
            <dl>
              <dt><i></i></dt>
              <dd>直播</dd>
            </dl>
          </li>
          <li class='step record'
              :class="{ 'highlight':this.currStep.search('playback') > -1, 'active':this.currStep === 'isPublish live end playback' }">
            <dl>
              <dt><i></i></dt>
              <dd>回放</dd>
            </dl>
          </li>
          <li class='step statics'
              :class="{ 'highlight':this.currStep.search('end') > -1, 'active':this.currStep === 'isPublish live end'}">
            <dl>
              <dt><i></i></dt>
              <dd>数据</dd>
            </dl>
          </li>
        </ul>
      </div>
      <div class="bottom clearfix">
        <div>
          <!-- <span>准备</span> -->
          <ol>
            <li v-show="dataPrepare[0].switch"
                @click="linkTo($event,'/liveMager/edit/')">基本信息</li>
            <li v-show="dataPrepare[1].switch"
                @click="linkTo($event,'/liveMager/prepare/limit-apply/', dataPrepare[1].switch)">活动报名
            </li>
            <li v-show="dataPrepare[2].switch"
                @click="linkTo($event,'/liveMager/warmField/', dataPrepare[2].switch)">
              暖场设置
            </li>
          </ol>
        </div>
        <div>
          <!-- <span>品牌</span> -->
          <ol>
            <li v-show="dataBrand[0].switch"
                @click="linkTo($event,'/liveMager/site/', dataBrand[0].switch)">活动官网</li>
            <li v-show="dataBrand[1].switch"
                @click="linkTo($event,'/setLiveGuided/')">直播引导页</li>
            <li v-show="dataBrand[2].switch"
                @click="linkTo($event,'/setLiveWatch/')">观看页</li>
          </ol>
        </div>
        <div>
          <!-- <span>推广</span> -->
          <ol>
            <li v-show="dataPromote[0].switch"
                @click="linkTo($event,'/liveMager/promote/auto/preview/', dataPromote[0].switch)">自动化通知
            </li>
            <li v-show="dataPromote[1].switch"
                @click="linkTo($event,'/liveMager/email/')">邮件邀约</li>
            <li v-show="dataPromote[2].switch"
                @click="linkTo($event,'/liveMager/promote/msg/list/')">短信通知</li>
            <li v-show="dataPromote[3].switch"
                @click="linkTo($event,'/liveMager/promote/wechat/list/')">微信通知</li>
          </ol>
        </div>
        <div>
          <!-- <span>直播</span> -->
          <ol>
            <li @click="linkTo($event,'/salesTools/questionnaire/list/')">问卷</li>
            <li @click="redBagTips=true">红包雨</li>
            <li @click="linkTo($event,'/salesTools/recommendGoodsList/')">商品推荐</li>
            <li @click="linkTo($event,'/salesTools/recommendCards/')">推荐卡片</li>
          </ol>
        </div>
        <div>
          <!-- <span>回放</span> -->
          <ol>
            <li v-show="dataRecord[0].switch"
                @click="linkTo($event,'/liveMager/playBack/')">活动回放</li>
          </ol>
        </div>
        <div>
          <template v-if="staticTime == '统计中...'">
            <ol title='预告、直播中状态不能进入数据中心'>
              <li @click="linkTo($event,'/data/preview/')"
                  :class="'disabled'">数据</li>
              <li :class="'disabled'">观众</li>
            </ol>
          </template>
          <template v-else>
            <ol>
              <li @click="linkTo($event,'/data/preview/')">数据</li>
              <li @click="linkTo($event,'/data/viewer/')">观众</li>
            </ol>
          </template>
        </div>
      </div>
    </div>
    <div class="fun-card">
      <div class="item prepare">
        <p class='block-separte'>准备</p>
        <!-- <div class="card-list clearfix">
              <process-card @update:checked='switchBack' v-for="(item,index) in cardData.prepare" :prop-link="item.link" :prop-switch='item.switch' :prop-idx='index' :key='item.title' :prop-checked.sync='item.checked' :prop-title='item.title' :prop-desc='item.desc' :prop-part='"prepare"'
                :prop-img='item.img'></process-card>
            </div> -->
        <div class="card-list clearfix">
          <div class='item base'
               @click="linkTo($event,'/liveMager/edit/')">
            <!-- 基本信息 -->
            <div class="card">
              <div class='pic'>
                <!-- <img :src="propImg"> -->
              </div>
              <div class='desc'>
                <span>基本信息</span>
                <span class='des'>编辑活动基本信息</span>
              </div>
            </div>
            <div class="btm">
              <!-- <el-switch class='switch' v-model="dataPrepare[0].switch" inactive-color="#DEE1FF" :width="32" active-color="#FFD021" @click.stop="" @change='switchChange('APPOINT',dataBrand[2].switch)'></el-switch> -->
              <!-- <span class='set'>设置</span> -->
            </div>
          </div>
          <div class='item apply'
               @click="linkTo($event,'/liveMager/prepare/limit-apply/', dataPrepare[1].switch)">
            <!-- 活动报名 -->
            <div class="card">
              <div class='pic'>
                <!-- <img :src="propImg"> -->
              </div>
              <div class='desc'>
                <span>活动报名</span>
                <span class='des'>
                  <!-- 未设置未开启 -->
                  <template v-if="dataPrepare[1].isSet === false && dataPrepare[1].switch === false">开启后收集目标观众信息
                  </template>
                  <!-- 未设置已开启 -->
                  <template v-if="dataPrepare[1].isSet === false && dataPrepare[1].switch === true">
                    暂未设置
                  </template>
                  <!-- 已设置已开启 -->
                  <template v-if="dataPrepare[1].isSet === true && dataPrepare[1].switch === true">
                    已设置活动报名
                  </template>
                  <!-- 已设置未开启 -->
                  <template v-if="dataPrepare[1].isSet === true && dataPrepare[1].switch === false">
                    已设置活动报名
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
              <el-switch class='switch'
                         v-model="dataPrepare[1].switch"
                         inactive-color="#DEE1FF"
                         :width="32"
                         active-color="#FFD021"
                         @change="switchChange('APPOINT', dataPrepare[1].switch, 'dataPrepare', '/liveMager/prepare/limit-apply/')"></el-switch>
              <!-- <span class='set'>设置</span> -->
            </div>
          </div>
          <div class='item wram'
               @click="linkTo($event,'/liveMager/warmField/', dataPrepare[2].switch)">
            <!-- 暖场设置 -->
            <div class="card">
              <div class='pic'>
                <!-- <img :src="propImg"> -->
              </div>
              <div class='desc'>
                <span>暖场设置</span>
                <span class='des'>
                  <!-- 未设置未开启 -->
                  <template v-if="dataPrepare[2].isSet === false && dataPrepare[2].switch === false">
                    为活动设置暖场视频
                  </template>
                  <!-- 未设置已开启 -->
                  <template v-if="dataPrepare[2].isSet === false && dataPrepare[2].switch === true">
                    暂未设置
                  </template>
                  <!-- 已设置已开启 -->
                  <template v-if="dataPrepare[2].isSet === true && dataPrepare[2].switch === true">
                    {{dataPrepare[2].desc}}
                  </template>
                  <!-- 已设置未开启 -->
                  <template v-if="dataPrepare[2].isSet === true && dataPrepare[2].switch === false">
                    {{dataPrepare[2].desc}}
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
              <el-switch class='switch'
                         v-model="dataPrepare[2].switch"
                         inactive-color="#DEE1FF"
                         :width="32"
                         active-color="#FFD021"
                         @change="switchChange('WARMUP',dataPrepare[2].switch, 'dataPrepare', '/liveMager/warmField/')"></el-switch>
              <!-- <span class='set'>设置</span> -->
            </div>
          </div>
        </div>
      </div>

      <div class="item promote">
        <p class='block-separte'>品牌</p>
        <div class="card-list clearfix">
          <div class='item site'
               @click="linkTo($event,'/liveMager/site/', dataBrand[0].switch)">
            <!-- 活动官网 -->
            <div class="card">
              <div class='pic'>
                <!-- <img :src="propImg"> -->
              </div>
              <div class='desc'>
                <span>活动官网</span>
                <span class='des'>
                  <template v-if="dataBrand[0].switch">
                    <template>{{dataBrand[0].isSet ? '已设置' : '未设置'}}
                    </template>
                  </template>

                  <template v-else>
                    打造活动品牌聚合页面
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
              <el-switch class='switch'
                         v-model="dataBrand[0].switch"
                         inactive-color="#DEE1FF"
                         :width="32"
                         active-color="#FFD021"
                         @change="switchChange('TEMPLATE', dataBrand[0].switch, 'dataBrand', '/liveMager/site/')"></el-switch>
              <!-- <span class='set'>设置</span> -->
            </div>
          </div>
          <div class='item guide'
               @click="linkTo($event,'/setLiveGuided/')">
            <!-- 直播引导页 -->
            <div class="card">
              <div class='pic'>
                <!-- <img :src="propImg"> -->
              </div>
              <div class='desc'>
                <span>直播引导页</span>
                <span class='des'>
                  <!-- 已发布 -->
                  <template v-if="isPublished">
                    已发布
                  </template>
                  <!-- 未发布 -->
                  <template v-else>
                    {{dataBrand[1].isSet ? '未发布' : '最精简的活动品牌页'}}
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
            </div>
          </div>
          <div class='item watch'
               @click="linkTo($event,'/setLiveWatch/')">
            <!-- 观看页 -->
            <div class="card">
              <div class='pic'>
                <!-- <img :src="propImg"> -->
              </div>
              <div class='desc'>
                <span>观看页</span>
                <span class='des'>
                  <!-- 已设置 -->
                  <template v-if="dataBrand[2].isSet">
                    {{dataBrand[2].desc ==='N' ? '未发布' : '已发布'}}
                  </template>
                  <!-- 未设置 -->
                  <template v-else>
                    订制直播观看页面
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
            </div>
          </div>
        </div>
      </div>
      <div class="item marketing"
           id="tg">
        <p class='block-separte'>推广</p>
        <div class="card-list clearfix">

          <div class='item automaze'
               @click="linkTo($event,'/liveMager/promote/auto/preview/', dataPromote[0].switch)">
            <!-- 自动化通知 -->
            <div class="card">
              <div class='pic'>
                <!-- <img :src="propImg"> -->
              </div>
              <div class='desc'>
                <span>自动化通知</span>
                <span class='des'>
                  <template v-if="isPublished">
                    <!-- 未开启 -->
                    <template v-if="dataPromote[0].switch === false">已开启</template>
                    <!-- 已开启 -->
                    <!-- <template v-if="dataPromote[0].switch === true">已开启</template> -->
                    <!-- 已开启 -->
                    <template v-if="dataPromote[0].switch === true">
                      <template v-if="dataPromote[0].desc === 'PREPARE'">
                        <template v-if="isAppoint">报名</template>
                        <template v-else>预约</template>
                      </template>
                      <template v-if="dataPromote[0].desc === 'LIVING'">直播中</template>
                      <template v-if="dataPromote[0].desc === 'PLAYBACK'">回放</template>
                    </template>
                    <!-- 已设置未开启 -->
                    <template v-if="dataPromote[0].switch === false">
                      <template v-if="dataPromote[0].desc === 'NONE'">暂未设置</template>
                      <template v-if="dataPromote[0].desc === 'PREPARE'">
                        <template v-if="isAppoint">报名</template>
                        <template v-else>预约</template>
                      </template>
                      <template v-if="dataPromote[0].desc === 'LIVING'">直播中</template>
                      <template v-if="dataPromote[0].desc === 'PLAYBACK'">回放</template>
                    </template>
                  </template>
                  <template v-else>设置自动化活动通知提醒</template>
                </span>
              </div>
            </div>
            <div class="btm">
              <el-switch class='switch'
                         v-model="dataPromote[0].switch"
                         inactive-color="#DEE1FF"
                         :width="32"
                         active-color="#FFD021"
                         @change="switchChange('EXPAND_NOTICE', dataPromote[0].switch, 'dataPromote', '/liveMager/promote/auto/preview/')"></el-switch>
              <!-- <span class='set'>设置</span> -->
            </div>
          </div>

          <div class='item mail'
               @click="linkTo($event,'/liveMager/email/')">
            <!-- 邮箱 -->
            <div class="card">
              <div class='pic'>
                <!-- <img :src="propImg"> -->
              </div>
              <div class='desc'>
                <span>邮件邀约</span>
                <span class='des'>
                  <!-- 已设置 -->
                  <template v-if="dataPromote[1].isSet">
                    已设置邮件邀约
                  </template>
                  <!-- 未设置 -->
                  <template v-else>
                    通过邮件进行活动推广
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
            </div>
          </div>

          <div class='item message'
               @click="linkTo($event,'/liveMager/promote/msg/list/')">
            <!-- 短信 -->
            <div class="card">
              <div class='pic'>
                <!-- <img :src="propImg"> -->
              </div>
              <div class='desc'>
                <span>短信通知</span>
                <span class='des'>
                  <!-- 已设置 -->
                  <template v-if="dataPromote[2].isSet">
                    已设置短信通知
                  </template>
                  <!-- 未设置 -->
                  <template v-else>
                    通过短信进行活动推广
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
            </div>
          </div>

          <div class='item wechat'
               @click="linkTo($event,'/liveMager/promote/wechat/list/')">
            <!-- 微信 -->
            <div class="card">
              <div class='pic'>
                <!-- <img :src="propImg"> -->
              </div>
              <div class='desc'>
                <span>微信通知</span>
                <span class='des'>
                  <!-- 已设置 -->
                  <template v-if="dataPromote[3].isSet">
                    已设置微信通知
                  </template>
                  <!-- 未设置 -->
                  <template v-else>
                    通过微信进行活动推广
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
            </div>
          </div>

        </div>
      </div>
      <div class="item living">
        <p class='block-separte'>直播</p>
        <div class="card-list clearfix">
          <div class='item ques'
               @click="linkTo($event,'/salesTools/questionnaire/list/')">
            <div class="card">
              <div class='pic'>
              </div>
              <div class='desc'>
                <span>问卷</span>
                <span class='des'>
                  <!-- 已设置 -->
                  <template v-if="dataBrand[2].isSet">
                    {{dataBrand[2].desc ==='N' ? '未发布' : '已发布'}}
                  </template>
                  <!-- 未设置 -->
                  <template v-else>
                    直播中收集观众问卷数据
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
            </div>
          </div>
          <div class='item redpack'
               @click="redBagTips=true">
            <div class="card">
              <div class='pic'>
              </div>
              <div class='desc'>
                <span>红包雨</span>
                <span class='des'>
                  <!-- 已设置 -->
                  <template v-if="dataBrand[2].isSet">
                    {{dataBrand[2].desc ==='N' ? '未发布' : '已发布'}}
                  </template>
                  <!-- 未设置 -->
                  <template v-else>
                    发放现金红包活跃观众气氛
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
            </div>
          </div>
          <div class='item goods'
               @click="linkTo($event,'/salesTools/recommendGoodsList/')">
            <div class="card">
              <div class='pic'>
              </div>
              <div class='desc'>
                <span>商品推荐</span>
                <span class='des'>
                  <!-- 已设置 -->
                  <template v-if="dataBrand[2].isSet">
                    {{dataBrand[2].desc ==='N' ? '未发布' : '已发布'}}
                  </template>
                  <!-- 未设置 -->
                  <template v-else>
                    在直播中给观众推荐商品
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
            </div>
          </div>
          <div class='item cards'
               @click="linkTo($event,'/salesTools/recommendCards/')">
            <div class="card">
              <div class='pic'>
              </div>
              <div class='desc'>
                <span>推荐卡片</span>
                <span class='des'>
                  <!-- 已设置 -->
                  <template v-if="dataBrand[2].isSet">
                    {{dataBrand[2].desc ==='N' ? '未发布' : '已发布'}}
                  </template>
                  <!-- 未设置 -->
                  <template v-else>
                    创建直播中观众引流通道
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
            </div>
          </div>
        </div>
      </div>
      <div class="item setting">
        <p class='block-separte'>活动回放</p>
        <div class="card-list clearfix">
          <div class='item record'
               @click="linkTo($event,'/liveMager/playBack/')">
            <!-- 观看页 -->
            <div class="card">
              <div class='pic'>
                <!-- <img :src="propImg"> -->
              </div>
              <div class='desc'>
                <span>活动回放</span>
                <span class='des'>
                  <!-- 已设置 -->
                  <template v-if="dataRecord[0].isSet">
                    已设置默认活动回放
                  </template>
                  <!-- 未设置 -->
                  <template v-else>
                    设置活动后的回放视频
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
            </div>
          </div>
        </div>
      </div>
      <div class="item statics">
        <p class='block-separte'>数据</p>
        <div class="card-list clearfix">
          <div class='item statics'
               @click="linkTo($event,'/data/preview/')"
               :class="{'disabled':staticTime == '统计中...'}">
            <div class="card">
              <div class='pic'>
              </div>
              <div class='desc'>
                <span>数据</span>
                <span class='des'>
                  <!-- 已设置 -->
                  <template v-if="staticTime == '统计中...'">
                    展示单次活动数据洞察
                  </template>
                  <!-- 未设置 -->
                  <template v-else>
                    {{staticTime}}
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
            </div>
          </div>
          <div class='item aud'
               @click="linkTo($event,'/data/viewer/')"
               :class="{'disabled':staticTime == '统计中...'}">
            <div class="card">
              <div class='pic'>
              </div>
              <div class='desc'>
                <span>观众</span>
                <span class='des'>
                  <!-- 已设置 -->
                  <template v-if="staticTime == '统计中...'">
                    记录单次活动观众数据
                  </template>
                  <!-- 未设置 -->
                  <template v-else>
                    {{staticViewer}} 位观众数据
                  </template>
                </span>
              </div>
            </div>
            <div class="btm">
            </div>
          </div>
        </div>
      </div>
    </div>
    <message-box class='in-countdown'
                 v-show="inCountdown"
                 width="300"
                 header="提示"
                 cancelText="放弃"
                 confirmText='仍然进入'
                 @handleClick='inCountdownClick'>
      <p>当前时间与您预先设置的时间不一致，是否现在发起正式直播？</p>
      <p>您设置的时间为:</p>
      <p>{{startTime}}</p>
    </message-box>
    <!-- 红包雨tip提示 -->
    <message-box v-if="redBagTips"
                 @handleClick="redBagTips=false">
      <div slot="msgBox"
           class="red-bag-tip">
        <div class="red-bag-header"></div>
        <div class="red-bag-content">红包雨为活动发起者在直播中推送的功能，无需在控制台设置。通过红包雨功能，活动主办方可以通过设置红包数量和金额，并设置参与条件，向达成参与条件的观众发放红包。</div>
        <button type="button"
                class="primary-button"
                style="padding: 0 60px;margin: 10px 0 30px 0;"
                @click="redBagTips=false">知道了</button>
      </div>
    </message-box>
  </div>
</template>

<script>
// import http from 'src/api/activity-manger'
import EventBus from 'src/utils/eventBus'
import activityService from 'src/api/activity-service'
import processCard from 'components/process-card'
import comCountdown from 'components/com-countDown'

export default {
  data () {
    return {
      title: '',
      id: '',
      poster: '',
      tagList: [],
      startTime: '',
      statusClass: '',
      status: '',
      currStep: '',
      cardData: {},
      msgShow: false,
      isPublished: false,
      hostOnline: false,
      showLinkBox: false,
      activityId: this.$route.params.id,
      imgHost: process.env.IMGHOST + '/',
      PC_HOST: process.env.PC_HOST,
      // imgHost: 'http://dev-zhike.oss-cn-beijing.aliyuncs.com/',
      countdownTime: '', // 倒计时 秒
      countDownstatus: false,
      inCountdown: false,
      isAppoint: false,
      overdue: false,
      redBagTips: false,
      dataPrepare: [],
      dataBrand: [],
      dataPromote: [],
      dataRecord: []
    }
  },
  created () {
    EventBus.$emit('breads', [{
      title: '活动管理'
    }, {
      title: '活动列表',
      url: '/liveMager/list'
    }, {
      title: '活动详情'
    }])
  },
  mounted () {
    this.getDetails()
    // 滚动到推广
    if (window.location.href.search('tg') > -1) {
      let timer = setInterval(() => {
        document.querySelector('.main-container').scrollTop = document.querySelector('.main-container').scrollTop + 50
        if (document.querySelector('.main-container').scrollTop >= 1150) {
          clearInterval(timer)
        }
      }, 10)
    }
  },
  methods: {
    linkTo (e, link, status) {
      console.log(e.target.className)
      if (e.target.className.search('switch') > -1) {
        // 直播状态直接 不跳转
        if (this.status === '直播') {
          return false
        }
        // 如果开着状态则不跳转
        if (!status && e.target.className.search('input') > -1) {
          if (link === '/data/viewer/') {
            this.$router.push(`/data/viewerList/${this.activityId}?type=all`)
          } else {
            setTimeout(() => {
              this.$router.push(link + this.activityId)
            }, 500)
          }
        }
      } else {
        if (link === '/data/viewer/') {
          this.$router.push(`/data/viewerList/${this.activityId}?type=all`)
        } else {
          this.$router.push(link + this.activityId)
        }
      }
    },
    turnOn () {
      let xmlHttp = new XMLHttpRequest()
      const serverUrl = process.env.API_PATH
      let url = serverUrl + activityService.GET_HOSTING + '?activityId=' + this.activityId
      xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4) {
          let responseText = xmlHttp.responseText
          let data = JSON.parse(responseText)
          if (data.code === 200) {
            this.hostOnline = data.data.hostOnline
            if (this.hostOnline) {
              this.$toast({
                content: '暂不支持这种方式发起直播',
                position: 'center'
              })
              return false
            }
            if (this.isToday(this.startTime)) { // 在24小时之外
              this.inCountdown = true
              return false
            }
            this.judgePublish()
          }
        }
      }
      xmlHttp.open('GET', url, false) // 同步方式请求
      xmlHttp.withCredentials = true
      xmlHttp.send(null)
    },
    isToday (str) {
      if (new Date(str).toDateString() === new Date().toDateString()) {
        // 今天
        console.log('当天')
        return false
      } else {
        // 之前
        console.log('非当天')
        return true
      }
    },
    isOverdue (str) { // 是否超过48小时
      if (str === null) {
        return false
      }
      if (new Date().getTime() - new Date(str).getTime() > 3600 * 24 * 2 * 1000) {
        return true
      } else {
        return false
      }
    },
    judgePublish () {
      if (this.isPublished) {
        this.inCountdown = false
        window.open(`${this.PC_HOST}master/${this.activityId}`)
      } else {
        this.inCountdown = false
        this.$messageBox({
          header: '提示',
          width: '450px',
          content: '进入直播后，您的活动官网和观看引导页将正式对外发布，是否继续执行？',
          cancelText: '暂不开播', // 不传递cancelText将只有一个确定按钮
          confirmText: '确认开播',
          handleClick: (e) => {
            console.log(e)
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
              this.publish()
              window.open(`${this.PC_HOST}master/${this.activityId}`)
              // this.status = 0
            }
          }
        })
      }
    },
    inCountdownClick (e) {
      console.log(e)
      if (e.action === 'cancel') {
        this.inCountdown = false
      } else if (e.action === 'confirm') {
        this.inCountdown = true
        this.judgePublish()
      }
    },
    isHosting () {
      return new Promise((resolve, reject) => {

      })
    },
    closeSite (type, dataType, url) {
      this.$messageBox({
        header: '提示',
        width: '200',
        content: '活动官网已经发布，请确认是否关闭？',
        cancelText: '暂不关闭', // 不传递cancelText将只有一个确定按钮
        confirmText: '确认关闭',
        handleClick: (e) => {
          console.log(e)
          if (e.action === 'cancel') {
            this[dataType].forEach(item => {
              if (item.submodule === type) {
                item.switch = !status
              }
            })
          } else if (e.action === 'confirm') {
            this.$config({
              handlers: true
            }).$post(activityService.POST_DETAIL_SWITCH, {
              activityId: this.activityId,
              submodule: type,
              enabled: 'N'
            }).then((res) => {
              console.log(res)
              if (res.code === 200) {
                this.$toast({
                  'content': '设置成功'
                })
                setTimeout((res) => {
                  this.$router.push(url + this.activityId)
                }, 500)
              }
            }).catch((res) => {
              if (res.code === 60706 || res.code === 60701) { // 该状态下的活动不可以开启或关闭子模块
                console.log(type + ' ' + status)
                this.$messageBox({
                  width: '450px',
                  header: '提示',
                  content: res.msg,
                  autoClose: 10,
                  confirmText: '知道了'
                })
                this[dataType].forEach(item => {
                  if (item.submodule === type) {
                    item.switch = !status
                  }
                })
              }
            })
          }
        }
      })
    },
    switchChange (type, status, dataType, url) {
      const data = {
        activityId: this.activityId,
        submodule: type,
        enabled: status ? 'Y' : 'N'
      }
      if (type === 'TEMPLATE' && !status && this.isPublished) { // 关闭官网 二次提示
        this.closeSite(type, dataType, url)
        return false
      }
      this.$config({
        handlers: true
      }).$post(activityService.POST_DETAIL_SWITCH, data).then((res) => {
        console.log(res)
        // if (res.code === 200) {
        //   this.$toast({
        //     'content': '设置成功'
        //   })
        //   setTimeout((res) => {
        //     this.$router.push(url + this.activityId)
        //   }, 500)
        // }
      }).catch((res) => {
        if (res.code === 60706 || res.code === 60701) { // 该状态下的活动不可以开启或关闭子模块
          console.log(type + ' ' + status)
          this.$messageBox({
            width: '450px',
            header: '提示',
            content: res.msg,
            autoClose: 10,
            confirmText: '知道了'
          })
          this[dataType].forEach(item => {
            if (item.submodule === type) {
              item.switch = !status
            }
          })
        }
      })
    },
    getDetails () {
      this.$get(activityService.GET_DETAILS, {
        activityId: this.activityId
      }).then((res) => {
        if (res.data.activity.countDown.toString() > 0) {
          this.countDownstatus = false
          this.countdownTime = res.data.activity.countDown.toString()
        } else {
          this.countDownstatus = true
          this.countdownTime = '0'
        }
        this.title = res.data.activity.title
        this.tagList = res.data.activity.tags
        this.startTime = res.data.activity.startTime
        this.poster = res.data.activity.imgUrl
        this.dataPrepare = res.data.prepare
        this.dataBrand = res.data.brand
        this.dataPromote = res.data.promote
        this.dataRecord = res.data.record
        this.isPublished = res.data.activity.published === 'Y'
        this.isAppoint = res.data.activity.viewCondition === 'APPOINT'
        this.staticTime = res.data.data.time ? res.data.data.time : '统计中...'
        this.staticViewer = res.data.data.viewer
        this.overdue = this.isOverdue(res.data.activity.endTime)
        switch (res.data.activity.status) {
          case ('LIVING'):
            this.status = '直播'
            this.statusClass = 'live'
            break
          case ('PLAYBACK'):
            this.status = '回放'
            this.statusClass = 'record'
            break
          case ('FINISH'):
            this.status = '结束'
            this.statusClass = 'ended'
            break
          case ('PREPARE'):
            this.status = '预约'
            this.statusClass = 'preview'
            break
        }
        this.getStep() // 获取当前阶段
      })
    },
    publishActive () { // 发布活动
      this.$messageBox({
        header: '提示',
        content: '活动发布后，活动官网、直播观看页和所有的营销工具页都将同时正式发布',
        cancelText: '暂不发布', // 不传递cancelText将只有一个确定按钮
        confirmText: '确认发布',
        handleClick: (e) => {
          console.log(e)
          if (e.action === 'cancel') {
            this.isPublished = false
          } else if (e.action === 'confirm') {
            // this.status = 0
            this.publish()
          }
        }
      })
    },
    offlineActive () { // 下线活动
      if (this.status === '直播') {
        this.$toast({
          content: '直播中无法下线活动',
          position: 'center'
        })
        this.isPublished = true
        return false
      }
      this.$messageBox({
        header: '提示',
        content: '活动下线后，活动官网、直播观看页和所有的营销工具页都将同时下线',
        cancelText: '暂不下线', // 不传递cancelText将只有一个确定按钮
        confirmText: '确认下线',
        handleClick: (e) => {
          console.log(e)
          if (e.action === 'cancel') {
            this.isPublished = true
          } else if (e.action === 'confirm') {
            this.offline()
          }
        }
      })
    },
    switchActive (res) {
      if (res) {
        this.publishActive()
      } else {
        this.offlineActive()
      }
    },
    publish () {
      this.$config().$post(activityService.POST_PUBLISH_ACTIVITE, {
        activityId: this.activityId
      }).then((res) => {
        this.$toast({
          content: '活动发布成功',
          position: 'center'
        })
        this.isPublished = true
        this.dataPromote[0].desc = 'PREPARE'
        this.currStep = 'isPublish'
      })
    },
    offline () {
      this.$config().$post(activityService.POST_OFFLINE_ACTIVITE, {
        activityId: this.activityId
      }).then((res) => {
        this.$toast({
          content: '活动下线成功',
          position: 'center'
        })
        this.isPublished = false
        if (this.currStep.search('live') === -1) {
          this.currStep = 'notPublish'
        }
      })
    },
    getStep () { // 获取当前活动阶段
      switch (this.status) {
        case '预约':
          if (this.isPublished) {
            this.currStep = 'isPublish'
            console.log('发布页面后，直播未开始')
          } else {
            this.currStep = 'notPublish'
            console.log('活动未发布')
          }
          break
        case '直播':
          this.currStep = 'isPublish live'
          console.log('直播中')
          break
        case '结束':
          this.currStep = 'isPublish live end'
          console.log('直播结束，但未设置回放')
          break
        case '回放':
          this.currStep = 'isPublish live end playback'
          console.log('直播结束，已设置回放')
          break
      }
    },
    copy (dom) { // 复制功能
      let inp = document.getElementById(dom)
      inp.select()
      document.execCommand('Copy')
      this.$toast({
        content: '复制成功',
        position: 'center'
      })
    },
    timeOut () {
      console.log('倒计时结束')
      this.countDownstatus = true
    }
  },
  components: {
    processCard,
    comCountdown
  }

}
</script>

<style lang='scss' scoped>
@import 'assets/css/variable.scss';
@import '~assets/css/mixin.scss';

.detail-wrap {
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  width: 1366px;
  min-width: 1019px;
  color: #222;
  transition: width 0.2s;
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
    .right:before {
      left: -26px;
    }
    .process .top li {
      width: 140px;
      margin: 0 14px;
      // margin: 0 31px;
    }
    .process .top dt {
      width: 80px;
      height: 80px;
    }
    .process .top li.active dt:after {
      content: '';
      width: 90px;
      height: 90px;
      margin-top: -46px;
      margin-left: -46px;
    }
    .process .top dt:before {
      width: 100px;
      right: -105px;
      width: 60px;
      right: -75px;
    }
    .process .bottom > div ol {
      width: 140px;
      margin: 0 auto;
    }
    .process .bottom > div {
      margin: 10px 14px;
      // margin: 10px 31px;
      width: 140px;
    }
    .middle {
      width: 375px;
      ol {
        margin-top: 20px;
      }
      .title {
        width: 374px;
      }
    }
  }
  .in-countdown {
    p {
      text-align: center;
      margin: 20px 0;
      &:nth-of-type(3) {
        color: $color-error;
        font-size: 20px;
      }
    }
  }
  .red-bag-tip {
    width: 450px;
    background-color: #fff;
    .red-bag-header {
      height: 160px;
      background-image: url('../../../assets/image/red-bag-header.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
    .red-bag-content {
      padding: 20px;
      text-align: left;
      font-size: 14px;
      line-height: 20px;
    }
  }
}

.block {
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(226, 226, 226, 1);
  margin-top: 30px;
}

.process {
  padding: 40px 0;
  .top {
    li {
      text-align: center;
      float: left;
      width: 160px;
      margin: 0 33px;
      // margin: 0 55px;
    }
    dt {
      width: 90px;
      height: 90px;
      margin: 0 auto;
      border-radius: 500px;
      background-color: rgba(211, 215, 255, 1);
      position: relative;
      i {
        position: absolute;
        width: 44px;
        height: 44px;
        top: 50%;
        left: 50%;
        margin-top: -22px;
        margin-left: -22px;
        background-image: url('~assets/image/auto_wechat.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
      &:before {
        content: '';
        width: 95px;
        // width: 130px;
        height: 2px;
        border-radius: 1px;
        position: absolute;
        background: rgba(211, 215, 255, 1);
        top: 50%;
        margin-top: -1px;
        right: -116px;
        // right: -152px;
      }
    }
    dd {
      padding-top: 10px;
      font-size: 22px;
      color: $color-font;
    }
    li {
      &.highlight {
        dt {
          background-color: $color-default;
          &:before {
            content: '';
            background: $color-default;
          }
        }
      }
      &.active dt:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -53px;
        margin-left: -53px;
        width: 104px;
        height: 104px;
        border: 1px solid $color-default;
        border-radius: 500px;
      }
      &:last-child {
        dt:before {
          content: '';
          display: none;
        }
      }
      &.step {
        dt i {
          background-image: url('~assets/image/detail/detail_prepare_hover.png');
        }
        &.highlight dt i {
          background-image: url('~assets/image/detail/detail_prepare.png');
        }
      }
      &.prompt {
        dt i {
          background-image: url('~assets/image/detail/detail_promote_hover.png');
        }
        &.highlight dt i {
          background-image: url('~assets/image/detail/detail_promote.png');
        }
      }
      &.brand {
        dt i {
          background-image: url('~assets/image/detail/detail_brand_hover.png');
        }
        &.highlight dt i {
          background-image: url('~assets/image/detail/detail_brand.png');
        }
      }
      &.live {
        dt i {
          background-image: url('~assets/image/detail/detail_live_hover.png');
        }
        &.highlight dt i {
          background-image: url('~assets/image/detail/detail_live.png');
        }
      }
      &.record {
        dt i {
          background-image: url('~assets/image/detail/detail_record_hover.png');
        }
        &.highlight dt i {
          background-image: url('~assets/image/detail/detail_record.png');
        }
      }
      &.statics {
        dt i {
          background-image: url('~assets/image/detail/detail_static_hover.png');
        }
        &.highlight dt i {
          background-image: url('~assets/image/detail/detail_static.png');
        }
      }
    }
  }
  .bottom {
    margin-top: -1px;
  }
  .bottom > div {
    margin: 10px 33px;
    // margin: 10px 55px;
    width: 160px;
    float: left;
    ol > li {
      width: 100%;
      height: 36px;
      text-align: center;
      line-height: 36px;
      margin-top: 14px;
      background: rgba(239, 239, 239, 0.7);
      border-radius: 18px;
      border: 1px solid rgba(177, 177, 177, 1);
      cursor: pointer;
      &:hover {
        background-color: #ffd021;
        border-color: #ffd021;
      }
    }
  }
}

.desc {
  padding-top: 50px;
}

.left {
  float: left;
  margin-right: 20px;
  position: relative;
  .poster {
    display: inline-block;
    width: 300px;
    height: 169px;
    border-radius: 5px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    &.default-poster {
      background-image: url('~assets/image/webinar_cover_empty.png');
    }
  }
  .status {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 40px;
    text-align: center;
    line-height: 20px;
    height: 20px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    font-size: 12px;
    color: #fff;
  }
  // .live {
  //   color: red;
  //   border-color: red;
  // }
  // .preview {
  //   color: blue;
  //   border-color: blue;
  // }
  // .record {
  //   color: green;
  //   border-color: green;
  // }
}

.middle {
  float: left;
  height: 170px;
  width: 640px;
  position: relative;
  p {
    padding-bottom: 15px;
  }
  .title {
    font-size: 20px;
    color: $color-font;
    margin-right: 8px;
    word-break: break-all;
    width: 650px;
    .id-tag {
      display: inline-block;
      padding: 2px 7px;
      color: $color-font-sub;
      font-size: 14px;
      background: rgba(239, 239, 239, 1);
      border-radius: 10px;
      position: relative;
      padding-right: 28px;
      i {
        cursor: pointer;
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url('~assets/image/detail/roomid.png') no-repeat center;
        background-size: contain;
        position: absolute;
        top: 0px;
        right: 9px;
        &:hover {
          background-image: url('~assets/image/detail/roomid_hover.png');
        }
      }
    }
  }
  .desc-label {
    color: $color-font-sub;
    font-size: 14px;
    .tag {
      font-size: 12px;
      padding: 2px 10px;
      background: rgba(240, 241, 254, 1);
      border-radius: 12px;
      border: 1px solid rgba(219, 222, 253, 1);
      display: inline-block;
      margin: 0 3px;
      &:nth-of-type(1) {
        margin-left: 0px;
      }
    }
    &.tool {
      position: absolute;
      bottom: 0;
      padding: 0;
      .link-box {
        padding: 20px 0px;
        position: relative;
        top: 1px;
        padding-left: 10px;
        cursor: pointer;
        i {
          width: 20px;
          height: 20px;
          display: inline-block;
          background: url('~assets/image/detail/link.png') no-repeat center;
          background-size: contain;
          position: relative;
          top: 5px;
          margin-right: 5px;
        }
        &:hover {
          color: $color-blue;
          i {
            background-image: url('~assets/image/detail/link_hover.png');
          }
          ul {
            color: #555;
            li {
              i {
                width: 24px;
                height: 24px;
                left: 0;
                top: 7px;
              }
              &:hover {
                color: $color-blue;
              }
              i.icon-site {
                background-image: url('~assets/image/detail/icon-site.png');
              }
              i.icon-guide {
                background-image: url('~assets/image/detail/icon-guide.png');
              }
              &:hover i.icon-site {
                background-image: url('~assets/image/detail/icon-guide-hover.png');
              }
              &:hover i.icon-guide {
                background-image: url('~assets/image/detail/icon-site-hover.png');
              }
            }
          }
        }
      }
    }
  }
  // ol {
  //   margin-top: 30px;
  //   li {
  //     cursor: pointer;
  //     color: $color-font-sub;
  //     font-size: 14px;
  //     position: relative;
  //     float: left;
  //     margin-right: 40px;
  //     height: 20px;
  //     line-height: 20px;
  //     padding-left: 29px;
  //     &::before {
  //       content: '';
  //       width: 1px;
  //       height: 16px;
  //       background: rgba(216, 216, 216, 1);
  //       position: absolute;
  //       top: 0;
  //       right: -16px;
  //     }
  //     i {
  //       width: 20px;
  //       height: 20px;
  //       display: inline-block;
  //       background: url('~assets/image/detail/page.png') no-repeat center;
  //       background-size: contain;
  //       position: absolute;
  //       left: 0;
  //     }
  //     &.copy i {
  //       background-image: url('~assets/image/detail/link.png');
  //     }
  //     &.offline {
  //       &::before {
  //         content: '';
  //         display: none;
  //       }
  //       i {
  //         bottom: 3px;
  //         background-image: url('~assets/image/detail/offline.png');
  //       }
  //     }
  //     &:hover {
  //       color: $color-blue;
  //       i {
  //         background-image: url('~assets/image/detail/page_hover.png');
  //       }
  //       &.copy i {
  //         background-image: url('~assets/image/detail/link_hover.png');
  //       }
  //       &.offline i {
  //         background-image: url('~assets/image/detail/offline_hover.png');
  //       }
  //     }
  //   }
  // }
  ul {
    position: absolute;
    width: 240px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    top: 40px;
    left: -60px;
    z-index: 20;
    li {
      height: 50px;
      line-height: 50px;
      position: relative;
      cursor: pointer;
      margin: 3px 0;
      padding: 0 17px;
      a {
        position: absolute;
        left: 125px;
        top: 50%;
        margin-top: -26px;
        .el-button {
          position: static;
          padding: 7px 10px;
        }
      }
      i {
        width: 20px;
        height: 20px;
        display: inline-block;
        background: url('~assets/image/detail/page.png') no-repeat center;
        background-size: contain;
        position: absolute;
        left: 17px;
        top: 50%;
        margin-top: -10px;
      }
      .el-button {
        padding: 7px 10px;
        position: absolute;
        top: 50%;
        margin-top: -14px;
        right: 17px;
      }
      &:hover {
        background: rgba(233, 235, 255, 1);
      }
      &.isSwitch a .el-button {
        padding: 7px 35px;
      }
    }
  }
}

.left {
  float: left;
}

.right {
  float: right;
  text-align: center;
  position: relative;
  &:before {
    content: '';
    width: 1px;
    height: 140px;
    position: absolute;
    top: 16px;
    left: -107px;
    background: rgba(226, 226, 226, 1);
    border-radius: 1px;
  }
  .count-box {
    overflow: hidden;
    margin: 24px 0 36px 0;
    li {
      float: left;
      width: 56px;
      height: 46px;
      line-height: 46px;
      text-align: center;
      background: rgba(38, 38, 38, 1);
      border-radius: 4px;
      color: #fff;
      font-size: 34px;
      font-family: unset;
      margin: 0px 6px;
      span {
        font-size: 12px;
      }
    }
  }
  .el-button {
    padding: 0px;
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}

.fun-card {
}

.block-separte {
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 18px;
  color: $color-font;
  padding-left: 20px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 0px;
    width: 4px;
    height: 20px;
    background: rgba(255, 208, 33, 1);
  }
}

.card-list .item {
  position: relative;
  cursor: pointer;
  float: left;
  width: 442px;
  height: 140px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(226, 226, 226, 1);
  padding: 14px 12px;
  margin: 10px 0;
  margin-right: 20px;
  &:nth-child(3n + 3) {
    margin-right: 0px;
  }
  &.disabled:before {
    cursor: not-allowed;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
  }
}

/* 设备宽度大于 1600 */

@media all and (min-width: 1600px) {
}

/* 设备宽度小于 1600px */

@media all and (max-width: 1600px) {
  .card-list .item {
    width: 326px;
  }
}

.card {
  width: 100%;
  height: 80px;
  padding: 18px 5px;
  padding-bottom: 0px;
  .pic {
    float: left;
    width: 70px;
    height: 70px;
    margin: 4px;
    background: url('~assets/image/auto_wechat.png') no-repeat center;
    background-size: contain;
    margin-right: 20px;
  }
  .desc {
    float: left;
    font-size: 18px;
    color: $color-font;
    padding: 15px 0;
    span {
      display: block;
      font-size: 16px;
    }
    span.des {
      padding-top: 5px;
      font-size: 12px;
      color: $color-font-sub;
    }
  }
}

.item.base .card .pic {
  width: 80px;
  background-image: url('~assets/image/detail/base.png');
}

.item.apply .card .pic {
  background-image: url('~assets/image/detail/apply.png');
}

.item.wram .card .pic {
  background-image: url('~assets/image/detail/wramup.png');
}

.item.automaze .card .pic {
  background-image: url('~assets/image/detail/automaze.png');
}

.item.mail .card .pic {
  background-image: url('~assets/image/detail/mail_invite.png');
}

.item.message .card .pic {
  background-image: url('~assets/image/detail/msg.png');
}

.item.wechat .card .pic {
  background-image: url('~assets/image/detail/wechat.png');
}

.item.site .card .pic {
  background-image: url('~assets/image/detail/site.png');
}

.item.guide .card .pic {
  background-image: url('~assets/image/detail/guide.png');
}

.item.watch .card .pic {
  width: 80px;
  background-image: url('~assets/image/detail/watch.png');
}

.item.ques .card .pic {
  width: 80px;
  background-image: url('~assets/image/detail/tools-survey.png');
}
.item.redpack .card .pic {
  width: 80px;
  background-image: url('~assets/image/detail/tools_redpack.png');
}
.item.goods .card .pic {
  width: 80px;
  background-image: url('~assets/image/detail/tools_good.png');
}
.item.cards .card .pic {
  width: 80px;
  background-image: url('~assets/image/detail/tools_cards.png');
}
.item.record .card .pic {
  width: 80px;
  background-image: url('~assets/image/detail/playback.png');
}
.item.statics .card .pic {
  width: 80px;
  background-image: url('~assets/image/detail/statics.png');
}
.item.aud .card .pic {
  width: 80px;
  background-image: url('~assets/image/detail/aud.png');
}

.btm {
  width: 100%;
  height: 40px;
  .switch {
    float: right;
    margin: 10px 0px;
  }
  .more {
    position: relative;
  }
  .show-more {
    position: absolute;
    top: 100%;
    right: 0;
  }
}
</style>
