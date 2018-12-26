export default function () {
  return {
    tid: '0478323',
    tplName: '宣传片展示',
    section1Data: {
      panel: {
        bgType: 'color',
        videoType: 'upload',
        img: '',
        color: 'rgba(4,4,4,1)',
        hideVideo: false,
        enable: true,
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583'
      },
      logo: {
        url: require('assets/image/tp_logo.png'),
        link: '',
        enable: true,
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸200*100'
      },
      nav: {
        enable: true,
        data: {
          fontColor: 'rgba(255, 255, 255, 1)',
          list: [{
            text: '首页',
            hrefType: '_define',
            type: '_blank'
          },
          {
            text: '大会简介',
            hrefType: '_define',
            type: '_blank'
          },
          {
            text: '参会嘉宾',
            hrefType: '_define',
            type: '_blank'
          },
          {
            text: '合作伙伴',
            hrefType: '_define',
            type: '_self'
          },
          {
            text: '联系我们',
            hrefType: '_define',
            type: '_self'
          }
          ]
        }
      }
    },
    section2Data: {
      block2: {
        enable: true,
        showBtn: true,
        loop: 4000,
        list: [{
          type: 'top',
          content: `<span style="font-size: 42px;"><font color="#ffffff">世界互联网内容营销会议及博览会</font></span><div><br></div><div><span style="font-size: 24px;"><font color="#ffffff">领先品牌营销人员和专家共同举办</font></span><br></div><div><br></div>`,
          bgColor: 'rgba(30,101,231,1)',
          img: require('assets/image/tp_bg_3.jpg'),
          showLink: false,
          btn: {
            enable: true,
            text: '活动报名',
            link: '',
            hrefType: '_define',
            fontColor: 'rgba(255,255,255,1)',
            bgColor: 'rgba(30,101,231,1)',
            target: '_self'
          },
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583'
        },
        {
          type: 'top',
          content: `<span style="font-size: 42px;"><font color="#ffffff">世界互联网内容营销会议及博览会</font></span><div><br></div><div><span style="font-size: 24px;"><font color="#ffffff">领先品牌营销人员和专家共同举办</font></span><br></div><div><br></div>`,
          bgColor: 'rgba(30,101,231,1)',
          img: require('assets/image/tp_bg_4.jpg'),
          showLink: false,
          btn: {
            enable: true,
            text: '活动报名',
            link: '',
            hrefType: '_define',
            fontColor: 'rgba(255,255,255,1)',
            bgColor: 'rgba(30,101,231,1)',
            target: '_self'
          },
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583'
        },
        {
          type: 'top',
          content: `<span style="font-size: 42px;"><font color="#ffffff">世界互联网内容营销会议及博览会</font></span><div><br></div><div><span style="font-size: 24px;"><font color="#ffffff">领先品牌营销人员和专家共同举办</font></span><br></div><div><br></div>`,
          bgColor: 'rgba(30,101,231,1)',
          img: require('assets/image/tp_bg_5.jpg'),
          showLink: false,
          btn: {
            enable: true,
            text: '活动报名',
            link: '',
            hrefType: '_define',
            fontColor: 'rgba(255,255,255,1)',
            bgColor: 'rgba(30,101,231,1)',
            target: '_self'
          },
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583'
        }
        ]
      }
    },
    section3Data: {
      panel: {
        img: '',
        hideVideo: false,
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(30,101,231,1)'
      },
      block1: {
        enable: true,
        showBtn: false,
        showDir: true,
        list: [{
          type: 'left',
          content: `<span style="font-size: 32px;">大会简介</span><div><span style="font-size: 32px;"><br></span><div><br></div><div><span style="font-size: 16px;">世界互联网内容营销会议及博览会是一个可以让您在内容营销行业中学习和与最优秀和最聪明人士建立联系的活动。您将获得所需的所有材料，以便将内容营销策略反馈给您的团队以及实施内容营销计划，从而拓展您的业务并激励您的受众。</span><br></div><div><br></div><div><span style="font-size: 40px;"><font color="#009db5">___</font></span></div><div style="line-height: 1;"><br></div><div><span style="font-size: 18px;">2018年9月8日-12日 上午9:00</span><br></div><div><span style="font-size: 18px;">中国北京国家会议中心</span><br></div></div>`,
          img: require('assets/image/tp_bg5.jpg'),
          btn: {},
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸395*320'
        }]
      }
    },
    section4Data: {
      panel: {
        img: '',
        hideVideo: false,
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(30,101,231,1)',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸1920*820'
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 34px;">感动人心，创造不同，体验创造者</span></div>`
      },
      video: {
        videoType: 'upload',
        recordId: 'a534a675',
        url: "<iframe src='http://player.youku.com/embed/XMzYwODAwMjI2NA==' frameborder=0 'allowfullscreen'></iframe>",
        enable: true
      }
    },
    section5Data: {
      panel: {
        img: '',
        hideVideo: false,
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(255, 255, 255, 1)',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸1920*515'
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 32px;">相关链接</span></div>`
      },
      block1: {
        enable: true,
        showBtn: true,
        list: [{
          type: 'top',
          content: `<div style="text-align: center;"><span style="font-size: 18px; color: rgb(255, 255, 255);"><br></span></div><div style="text-align: center;"><span style="font-size: 18px; color: rgb(255, 255, 255);"><br></span></div><div style="text-align: center;"><span style="font-size: 18px; color: rgb(255, 255, 255);"><br></span></div><div style="text-align: left;"><span style="color: rgb(255, 255, 255); font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;顶级品牌</span><br></div><div style="text-align: left; line-height: 2;"><font color="#ffffff" style="font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;如何通过个性化获得成功</font></div>`,
          img: require('assets/image/tp_section5_1.png'),
          btn: {
            hrefType: '_define',
            enable: true,
            bgColor: 'rgba(255, 255, 255, 1)',
            fontColor: 'rgba(75, 90, 254, 1)',
            text: '了解详情',
            target: '_self'
          },
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸370*270'
        },
        {
          type: 'top',
          content: `<div style="text-align: center;"><span style="font-size: 18px; color: rgb(255, 255, 255);"><br></span></div><div style="text-align: center;"><span style="font-size: 18px; color: rgb(255, 255, 255);"><br></span></div><div style="text-align: center;"><span style="font-size: 18px; color: rgb(255, 255, 255);"><br></span></div><div style="text-align: left;"><span style="color: rgb(255, 255, 255); font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;顶级品牌</span><br></div><div style="text-align: left; line-height: 2;"><font color="#ffffff" style="font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;如何通过个性化获得成功</font></div>`,
          img: require('assets/image/tp_section5_2.png'),
          btn: {
            hrefType: '_define',
            enable: true,
            bgColor: 'rgba(255, 255, 255, 1)',
            fontColor: 'rgba(75, 90, 254, 1)',
            text: '了解详情',
            target: '_self'
          },
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸370*270'
        },
        {
          type: 'top',
          content: `<div style="text-align: center;"><span style="font-size: 18px; color: rgb(255, 255, 255);"><br></span></div><div style="text-align: center;"><span style="font-size: 18px; color: rgb(255, 255, 255);"><br></span></div><div style="text-align: center;"><span style="font-size: 18px; color: rgb(255, 255, 255);"><br></span></div><div style="text-align: left;"><span style="color: rgb(255, 255, 255); font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;顶级品牌</span><br></div><div style="text-align: left; line-height: 2;"><font color="#ffffff" style="font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;如何通过个性化获得成功</font></div>`,
          img: require('assets/image/tp_section5_3.png'),
          btn: {
            hrefType: '_define',
            enable: true,
            bgColor: 'rgba(255, 255, 255, 1)',
            fontColor: 'rgba(75, 90, 254, 1)',
            text: '了解详情',
            target: '_self'
          },
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸370*270'
        }
        ]
      }
    },
    section6Data: {
      panel: {
        img: '',
        hideVideo: true,
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(255, 255, 255, 1)',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*385'
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 32px;">合作伙伴</span></div>`
      },
      block1: {
        enable: true,
        showBtn: false,
        list: [{
          type: 'bottom',
          content: ``,
          img: require('assets/image/tp_logo1.png'),
          btn: {},
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸120*120'
        },
        {
          type: 'bottom',
          content: ``,
          img: require('assets/image/tp_logo2.png'),
          btn: {},
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸120*120'
        },
        {
          type: 'bottom',
          content: ``,
          img: require('assets/image/tp_logo3.png'),
          btn: {},
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸120*120'
        },
        {
          type: 'bottom',
          content: ``,
          img: require('assets/image/tp_logo4.png'),
          btn: {},
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸120*120'
        },
        {
          type: 'bottom',
          content: ``,
          img: require('assets/image/tp_logo5.png'),
          btn: {},
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸120*120'
        },
        {
          type: 'bottom',
          content: ``,
          img: require('assets/image/tp_logo6.png'),
          btn: {},
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸120*120'
        }
        ]
      }
    },
    section7Data: {
      panel: {
        img: '',
        hideVideo: true,
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(7,29,71,1)',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*330'
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="color: rgb(255, 255, 255); font-family: PingFangSC-Regular, &quot;PingFang SC&quot;; background-color: transparent; font-size: 34px;">想了解更多信息吗？</span></div><div style="text-align: center;"><br></div><div style="text-align: center;"><br></div><div style="text-align: center; line-height: 1.8;"><font color="#ffffff" face="PingFangSC-Regular, PingFang SC"><span style="font-size: 20px;">想要讨论内容营销的最新趋势并从一些专家那里获得建议？&nbsp;</span></font></div><div style="text-align: center; line-height: 1.8;"><font color="#ffffff" face="PingFangSC-Regular, PingFang SC"><span style="font-size: 20px;">请继续关注并参与我们的社区讨论</span></font><br></div>`
      },
      btn: {
        bgColor: 'rgba(7,29,71,1)',
        fontColor: 'rgba(255,255,255,1)',
        text: '立即了解',
        link: '',
        hrefType: '_define',
        enable: true,
        target: '_self'
      }
    }
  }
}
