export default function () {
  return {
    tid: '0478322',
    tplName: '模板名称3',
    section1Data: {
      panel: {
        bgType: 'color',
        videoType: 'upload',
        img: '',
        color: 'rgba(255, 255, 255, 1)',
        enable: true
      },
      logo: {
        url: require('assets/image/tp_logo.png'),
        link: '',
        enable: true
      },
      nav: {
        enable: true,
        data: {
          fontColor: 'rgba(34, 34, 34, 1)',
          list: [{
            text: '首页',
            type: '_blank'
          },
          {
            text: '大会简介',
            type: '_blank'
          },
          {
            text: '参会嘉宾',
            type: '_blank'
          },
          {
            text: '合作伙伴',
            type: '_blank'
          },
          {
            text: '联系我们',
            type: '_blank'
          }
          ]
        }
      }
    },
    section2Data: {
      panel: {
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(30,101,231,1)'
      },
      block1: {
        enable: true,
        showBtn: true,
        list: [{
          type: 'left',
          content: `<span style="font-size: 32px;">大会简介</span><div><span style="font-size: 32px;"><br></span><div><br></div><div><span style="font-size: 16px;">世界互联网内容营销会议及博览会是一个可以让您在内容营销行业中学习和与最优秀和最聪明人士建立联系的活动。您将获得所需的所有材料，以便将内容营销策略反馈给您的团队以及实施内容营销计划，从而拓展您的业务并激励您的受众。</span><br></div><div><br></div><div><span style="font-size: 40px;"><font color="#009db5">___</font></span></div><div style="line-height: 1;"><br></div><div><span style="font-size: 18px;">2018年9月8日-12日 上午9:00</span><br></div><div><span style="font-size: 18px;">中国北京国家会议中心</span><br></div></div>`,
          img: require('assets/image/tp_phone.jpg'),
          btn: {
            bgColor: 'rgba(0,157,181,1)',
            fontColor: 'rgba(255,255,255,1)',
            text: '立即了解',
            link: '',
            enable: true,
            target: '_self'
          },
          target: '_self'
        }]
      }
    },
    section3Data: {
      panel: {
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(239,239,239,1)'
      },
      block1: {
        enable: true,
        showBtn: false,
        list: [{
          type: 'right',
          content: `<div><span style="font-size: 24px;"><br></span></div><span style="font-size: 24px;"><div><span style="font-size: 24px;"><br></span></div><div><span style="font-size: 24px;"><br></span></div><div><span style="font-size: 24px;"><br></span></div>壹度创意规划设计网:休闲农业与乡</span><div><span style="font-size: 24px;">村旅游策划者与引领者</span></div><div><br></div><div><br></div><div><div><br></div><div><font color="#555555" style="font-size: 16px;">2018年5月10-12日，第九届中国数据库技术大会（DTCC2018）将如约而至。本届大会以“数领先机•智赢未来”为主题，设定2大主会场及</font></div><div><font color="#555555" style="font-size: 16px;">22个技术专场，邀请来自国内外互联网、金融、教育等行业百余位技术专家</font><br></div></div>`,
          img: require('assets/image/tp_img1.png'),
          btn: {
            enable: true,
            text: '',
            bgColor: '',
            fontColor: ''
          },
          target: '_self'
        }]
      }
    },
    section4Data: {
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 34px;">相关活动直播</span></div>`
      },
      list: [
        {
          video: {
            videoType: 'upload',
            recordId: 'a534a675',
            url: "<iframe src='http://player.youku.com/embed/XMzYwODAwMjI2NA==' frameborder=0 'allowfullscreen'></iframe>",
            enable: true,
            font: {
              enable: true,
              content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 14px;">Photography我的第一堂摄影课</span></div>`
            }
          }
        },
        {
          video: {
            videoType: 'upload',
            recordId: 'a534a675',
            url: "<iframe src='http://player.youku.com/embed/XMzYwODAwMjI2NA==' frameborder=0 'allowfullscreen'></iframe>",
            enable: true,

            font: {
              enable: true,
              content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 14px;">Photography我的第一堂摄影课</span></div>`
            }
          }
        },
        {
          video: {
            videoType: 'upload',
            recordId: 'a534a675',
            url: "<iframe src='http://player.youku.com/embed/XMzYwODAwMjI2NA==' frameborder=0 'allowfullscreen'></iframe>",
            enable: true,
            font: {
              enable: true,
              content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 14px;">Photography我的第一堂摄影课</span></div>`
            }
          }
        }
      ]
      // video: {
      //   videoType: 'upload',
      //   recordId: 'a534a675',
      //   url: "<iframe src='http://player.youku.com/embed/XMzYwODAwMjI2NA==' frameborder=0 'allowfullscreen'></iframe>",
      //   enable: true
      // }
    },
    section5Data: {
      panel: {
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(7,29,71,1)'
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="color: rgb(255, 255, 255); font-family: PingFangSC-Regular, &quot;PingFang SC&quot;; background-color: transparent; font-size: 34px;">世界互联网内容营销会议及博览会</span><div style="text-align: center;"><span style="background-color: transparent;"><font color="#ffffff" face="PingFangSC-Regular, PingFang SC" style="font-size: 20px;">领先品牌营销人员和专家共同举办</font></span></div></div>`
      },
      btn: {
        bgColor: 'rgba(255,255,255,1)',
        fontColor: 'RGBA(34, 34, 34, 1)',
        text: '立刻报名',
        link: '',
        enable: true,
        target: '_self'
      }
    },
    section6Data: {
      panel: {
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(255, 255, 255, 1)'
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 32px;">合作伙伴</span></div>`
      },
      block1: {
        enable: true,
        showBtn: false,
        list: [{
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo1.png'),
          btn: {},
          target: '_self'
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo2.png'),
          btn: {},
          target: '_self'
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo3.png'),
          btn: {},
          target: '_self'
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo4.png'),
          btn: {},
          target: '_self'
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo5.png'),
          btn: {},
          target: '_self'
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo6.png'),
          btn: {},
          target: '_self'
        }
        ]
      }
    },
    section7Data: {
      panel: {
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(19,16,49,1)'
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;">
        <span style="color: rgb(255, 255, 255); font-family: PingFangSC-Regular, &quot;PingFang SC&quot;; background-color: transparent; font-size: 20px;">想了解更多信息吗？</span></div><div style="text-align: center;"><br></div><div style="text-align: center;"><span style="background-color: transparent;"><font color="#ffffff" face="PingFangSC-Regular, PingFang SC" style="font-size: 20px;">了解微吼直播助您一臂之力。[18年、350万场、25万+客户的选择]&nbsp;</font></span></div><div style="text-align: center;"><span style="background-color: transparent;"><font color="#ffffff" face="PingFangSC-Regular, PingFang SC" style="font-size: 20px;">400-888-9970</font><br></span></div>`
      },
      btn: {
        bgColor: 'rgba(255,208,33,1)',
        fontColor: 'rgba(34,34,34,1)',
        text: '立即了解',
        link: '',
        enable: true,
        target: '_self'
      }
    },
    section8Data: {
      panel: {
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(255, 255, 255, 1)'
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
          content: `<h1><span style="font-size: 20px;">谢伟</span></h1>品牌营销解决方案总监`,
          img: require('assets/image/tp_head5.png'),
          btn: {},
          target: '_self'
        },
        {
          type: 'bottom',
          content: `<h1><span style="font-size: 20px;">吴恒敏</span></h1>品牌营销解决方案总监`,
          img: require('assets/image/tp_head6.png'),
          btn: {},
          target: '_self'
        },
        {
          type: 'bottom',
          content: `<h1><span style="font-size: 20px;">白婷婷</span></h1>品牌营销解决方案总监`,
          img: require('assets/image/tp_head7.png'),
          btn: {},
          target: '_self'
        },
        {
          type: 'bottom',
          content: `<h1><span style="font-size: 20px;">张江云</span></h1>品牌营销解决方案总监`,
          img: require('assets/image/tp_head8.png'),
          btn: {},
          target: '_self'
        },
        {
          type: 'bottom',
          content: `<h1><span style="font-size: 20px;">谢伟</span></h1>品牌营销解决方案总监`,
          img: require('assets/image/tp_head9.png'),
          btn: {},
          target: '_self'
        },
        {
          type: 'bottom',
          content: `<h1><span style="font-size: 20px;">白婷婷</span></h1>品牌营销解决方案总监`,
          img: require('assets/image/tp_head10.png'),
          btn: {},
          target: '_self'
        },
        {
          type: 'bottom',
          content: `<h1><span style="font-size: 20px;">吴恒敏</span></h1>品牌营销解决方案总监`,
          img: require('assets/image/tp_head11.png'),
          btn: {},
          target: '_self'
        },
        {
          type: 'bottom',
          content: `<h1><span style="font-size: 20px;">张江云</span></h1>品牌营销解决方案总监`,
          img: require('assets/image/tp_head12.png'),
          btn: {},
          target: '_self'
        }
        ]
      }
    }
  }
}
