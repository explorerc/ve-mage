export default function () {
  return {
    tid: '0478320',
    tplName: '产品发布会',
    section1Data: {
      panel: {
        bgType: 'color',
        videoType: 'upload',
        img: '',
        link: '',
        color: 'rgba(255, 255, 255, 1)',
        hideVideo: false,
        enable: true,
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      logo: {
        url: require('assets/image/tp_logo.png'),
        link: '',
        enable: true,
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸200*100',
        uploadImgErrorMsg: ''
      },
      nav: {
        enable: true,
        data: {
          fontColor: 'rgba(34, 34, 34, 1)',
          list: [{
            text: '首页',
            type: '_blank',
            hrefType: '_define',
            link: ''
          },
          {
            text: '活动协议',
            type: '_blank',
            hrefType: '_define',
            link: ''
          },
          {
            text: '联系我们',
            type: '_blank',
            hrefType: '_define',
            link: ''
          },
          {
            text: '立即报名',
            type: '_self',
            hrefType: '_define',
            link: ''
          }
          ]
        }
      }
    },
    section2Data: {
      panel: {
        bgType: 'img',
        videoType: 'upload',
        img: require('assets/image/tp_section2.jpg'),
        color: 'rgba(0, 0, 0, 1)',
        link: '',
        hideVideo: false,
        enable: true,
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      font: {
        enable: true,
        content: `<h1 style="text-align: center; line-height: 1.8;">
        <font color="#ffffff" style="font-size: 42px;">2018第六届设计金鹰奖大展</font>
        </h1><div style="text-align: center; line-height: 1.8;">
        <font color="#ffffff"><span style="font-size: 18px;">2018年9月8日-9月11日，北京798艺术区</span><br></font>
        </div><div style="text-align: center; line-height: 1.8;"><font color="#ffffff">
        <span style="font-size: 18px;">第六届设计金鹰奖大展是由微吼直播主办，邀请业内知人士参与评审的年度盛会</span><br></font></div>`
      },
      btn: {
        bgColor: 'rgba(255,208,33,1)',
        fontColor: 'rgba(34,34,34,1)',
        text: '活动报名',
        link: '',
        hrefType: '_define',
        enable: true,
        target: '_self'
      }
    },
    section3Data: {
      panel: {
        hideVideo: false,
        enable: true,
        img: '',
        bgType: 'color',
        videoType: 'upload',
        link: '',
        color: 'rgba(255, 255, 255, 1)',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 32px;">查看即将举行的设计会议</span></div>`
      },
      block1: {
        enable: true,
        showBtn: false,
        list: [{
          type: 'bottom',
          content: `<div style="text-align: center; line-height: 2.5;"><font color="#0e1726" face="PingFang SC, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Source Han Sans, Noto Sans CJK Sc, Microsoft YaHei, Microsoft Jhenghei, sans-serif"><span style="font-size: 24px;">2018轰动设计奖活动</span></font><br></div>`,
          img: require('assets/image/tp_section3_1.jpg'),
          hrefType: '_define',
          link: '',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸 两栏540*300 三栏364*192',
          uploadImgErrorMsg: ''
        },
        {
          type: 'bottom',
          content: `<div style="text-align: center; line-height: 2.5;"><font color="#0e1726" face="PingFang SC, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Source Han Sans, Noto Sans CJK Sc, Microsoft YaHei, Microsoft Jhenghei, sans-serif"><span style="font-size: 24px;">2018知舍设计奖活动</span></font><br></div>`,
          img: require('assets/image/tp_section3_2.jpg'),
          hrefType: '_define',
          link: '',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸 两栏540*300 三栏364*192',
          uploadImgErrorMsg: ''
        }
        ]
      }
    },
    section4Data: {
      panel: {
        hideVideo: false,
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        link: '',
        img: '',
        color: 'rgba(247,247,247,1);',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 32px;">您可以在许多地方看到我们</span></div>`
      },
      block1: {
        enable: true,
        showBtn: false,
        list: [{
          type: 'top',
          content: `<span style="font-size: 22px;">站酷客户端 - 站酷(ZCOOL)- 设计 师互动平台</span><div><br></div><div><span style="font-size: 16px;">站酷网，是综合性"设计师社区"，2006年8月创立于北京。站酷网聚集了中国部分设计师、艺术院校师生、潮流艺术家等年轻创意设计人群。现有注册设计师/艺术家200万，日上传原创作...</span><br></div><div><span style="font-size: 16px;"><br></span></div><div><br></div><div><span style="font-size: 16px;"><font color="#003399"><a href="http://www.baidu.com">了解详情 &gt;</a></font></span></div>`,
          img: '',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸 346*200',
          hideLink: true
        },
        {
          type: 'top',
          content: `<span style="font-size: 22px;">壹度创意规划设计网:休闲农业与乡 村旅游策划者与引领者</span><div><br></div><div><span style="font-size: 16px;">容以专业的精神致力于园区景观设计及品牌营销,以专注的态度研究田园综合体、特色小镇...的城市空间,需要学科之间的交叉融合,也需要更多的人加入到公众参与的设计活动中...</span><br></div><div><span style="font-size: 16px;"><br></span></div><div><br></div><div><span style="font-size: 16px;"><font color="#003399"><a href="http://www.baidu.com">了解详情 &gt;</a></font></span></div>`,
          img: '',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸 346*200',
          hideLink: true
        },
        {
          type: 'top',
          content: `<span style="font-size: 22px;">设计癖 | 关注设计癖 发现好设计</span><div><span style="font-size: 22px;"><br></span><div><br></div><div><span style="font-size: 16px;">图品汇为您优选500万张原创设计癖PSD模板,免抠素材元素,背景素材,图品汇已为50万设计师提高了10倍效率,10万设计师迅速定稿,业绩迅速上升!</span><br></div><div><span style="font-size: 16px;"><br></span></div><div><br></div><div><span style="font-size: 16px;"><font color="#003399"><a href="http://www.baidu.com">了解详情 &gt;</a></font></span></div></div>`,
          img: '',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸 346*200',
          hideLink: true
        }
        ]
      }
    },
    section5Data: {
      panel: {
        hideVideo: false,
        enable: true,
        bgType: 'color',
        link: '',
        img: '',
        videoType: 'upload',
        color: 'rgba(255, 255, 255, 1)',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 32px;">排行榜名列前茅精品公开课</span></div>`
      },
      block1: {
        enable: true,
        showBtn: false,
        list: [{
          type: 'bottom',
          content: `<div style="text-align: center;margin-top: 14px;"><span style="font-size: 18px; font-family: &quot;PingFang SC&quot;, -apple-system, BlinkMacSystemFont, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Hiragino Sans GB&quot;, &quot;Source Han Sans&quot;, &quot;Noto Sans CJK Sc&quot;, &quot;Microsoft YaHei&quot;, &quot;Microsoft Jhenghei&quot;, sans-serif;"><font color="#003399"><a href="http://www.baidu.com">Photography我的第一堂摄影课 &gt;</a></font></span></div>`,
          img: require('assets/image/tp_section5_1.png'),
          hideLink: true,
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸 346*200',
          uploadImgErrorMsg: ''

        },
        {
          type: 'bottom',
          content: `<div style="text-align: center;margin-top: 14px;"><span style="font-size: 18px; font-family: &quot;PingFang SC&quot;, -apple-system, BlinkMacSystemFont, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Hiragino Sans GB&quot;, &quot;Source Han Sans&quot;, &quot;Noto Sans CJK Sc&quot;, &quot;Microsoft YaHei&quot;, &quot;Microsoft Jhenghei&quot;, sans-serif;"><font color="#003399"><a href="http://www.baidu.com">After Effects玩转创意视频 &gt;</a></font></span></div>`,
          img: require('assets/image/tp_section5_2.png'),
          hideLink: true,
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸 346*200',
          uploadImgErrorMsg: ''
        },
        {
          type: 'bottom',
          content: `<div style="text-align: center;margin-top: 14px;"><span style="font-size: 18px; font-family: &quot;PingFang SC&quot;, -apple-system, BlinkMacSystemFont, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Hiragino Sans GB&quot;, &quot;Source Han Sans&quot;, &quot;Noto Sans CJK Sc&quot;, &quot;Microsoft YaHei&quot;, &quot;Microsoft Jhenghei&quot;, sans-serif;"><font color="#003399"><a href="http://www.baidu.com">影视工坊视频特效设计 &gt;</a></font></span></div>`,
          img: require('assets/image/tp_section5_3.png'),
          hideLink: true,
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸 346*200',
          uploadImgErrorMsg: ''
        }
        ]
      }

    },
    section6Data: {
      panel: {
        hideVideo: true,
        enable: true,
        bgType: 'color',
        link: '',
        img: '',
        videoType: 'upload',
        color: 'rgba(255, 255, 255, 1)',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      share: {
        enable: true,
        sina: true,
        qqSpace: true,
        qq: true,
        wxSpace: true,
        wx: true,
        copy: true
      }
    },
    section7Data: {
      panel: {
        hideVideo: true,
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        link: '',
        img: '',
        color: 'rgba(19,16,49,1)',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="color: rgb(255, 255, 255); font-family: PingFangSC-Regular, &quot;PingFang SC&quot;; background-color: transparent; font-size: 20px;">想了解更多信息吗？</span></div><div style="text-align: center;"><br></div><div style="text-align: center;"><span style="background-color: transparent;"><font color="#ffffff" face="PingFangSC-Regular, PingFang SC" style="font-size: 20px;">了解微吼直播助您一臂之力。[18年、350万场、25万+客户的选择]&nbsp;</font></span></div><div style="text-align: center;"><span style="background-color: transparent;"><font color="#ffffff" face="PingFangSC-Regular, PingFang SC" style="font-size: 20px;">400-888-9970</font><br></span></div>`
      },
      btn: {
        bgColor: 'rgba(255,208,33,1)',
        fontColor: 'rgba(34,34,34,1)',
        text: '立即了解',
        link: '',
        hrefType: '_define',
        enable: true,
        target: '_self'
      }
    },
    section8Data: {
      panel: {
        bgType: 'color',
        videoType: 'upload',
        img: '',
        color: 'rgba(0, 0, 0, 0.8)',
        link: '',
        hideVideo: false,
        enable: true,
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      font: {
        enable: true,
        content: `<h1 style="text-align: center; line-height: 1.8;">
        <font color="#ffffff" style="font-size: 42px;">2018第六届设计金鹰奖大展</font>
        </h1><div style="text-align: center; line-height: 1.8;">
        <font color="#ffffff"><span style="font-size: 18px;">2018年9月8日-9月11日，北京798艺术区</span><br></font>
        </div><div style="text-align: center; line-height: 1.8;"><font color="#ffffff">
        <span style="font-size: 18px;">第六届设计金鹰奖大展是由微吼直播主办，邀请业内知人士参与评审的年度盛会</span><br></font></div>`
      },
      btn: {
        bgColor: 'rgba(255,208,33,1)',
        fontColor: 'rgba(34,34,34,1)',
        text: '活动报名',
        link: '',
        hrefType: '_define',
        enable: true,
        target: '_self'
      }
    }
  }
}
