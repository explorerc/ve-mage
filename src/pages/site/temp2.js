export default function () {
  return {
    tid: '0478321',
    tplName: '活动专题',
    section1Data: {
      panel: {
        hideVideo: false,
        bgType: 'color',
        videoType: 'upload',
        img: '',
        color: 'rgba(0,0,0,1)',
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
          fontColor: '(255,255,255,1)',
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
            text: '大会相关数据',
            hrefType: '_define',
            type: '_blank'
          },
          {
            text: '参会嘉宾',
            hrefType: '_define',
            type: '_self'
          },
          {
            text: '活动图集',
            hrefType: '_define',
            type: '_self'
          },
          {
            text: '合作伙伴',
            hrefType: '_define',
            type: '_self'
          }
          ]
        }
      }
    },
    section2Data: {
      panel1: {
        hideVideo: false,
        bgType: 'img',
        videoType: 'upload',
        img: require('assets/image/tp_bg_2.jpg'),
        color: 'rgba(0, 0, 0, 1)',
        enable: true,
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      panel2: {
        hideVideo: false,
        bgType: 'color',
        videoType: 'upload',
        img: '',
        color: 'rgba(255, 255, 255, 1)',
        enable: true,
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''

      },
      panel3: {
        hideVideo: true,
        bgType: 'color',
        videoType: 'upload',
        img: '',
        color: 'rgba(253,101,76,1)',
        enable: true,
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      font: {
        enable: true,
        content: `<font color="#ffffff"><span style="font-size: 86px;">GIOM</span></font><div><font color="#ffffff"><span style="font-size: 42px;">移动互联网大会</span><br></font><div><font color="#ffffff"><span style="font-size: 22px;"><br></span></font></div><div style="line-height: 1.8;"><font color="#ffffff"><span style="font-size: 22px;">2018-10-20 08:00至10-20 18:00结束</span></font><br></div></div><div style="line-height: 1.8;"><font color="#ffffff"><span style="font-size: 22px;">北京 | 北京市朝阳区高碑店传媒产业园</span></font></div>`
      },
      btn: {
        bgColor: 'rgba(253,101,76,1)',
        fontColor: 'rgba(255,255,255,1)',
        text: '活动报名',
        link: '',
        hrefType: '_sub',
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
        color: 'rgba(255, 255, 255, 1)',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      font1: {
        enable: true,
        content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 32px;">大会简介</span></div>`
      },
      font2: {
        enable: true,
        content: `<div style="text-align: left;"><span style="background-color: transparent; font-size: 16px;">中国数据库技术大会（简称DTCC）是国内数据库及大数据领域规模最大、最受欢迎的技术交流盛会，每年一届。自2010年以来，迄今已成功举办了八届，累计参与人次达到20000+。DTCC每年都将邀请百余位行业专家，最受欢迎的技术交流盛会，每年一届。自2010年以来，迄今已成功举办了八届，累计参与人次达到20000+。DTCC每年都将邀请百余位行业专家就热点技术话题进行分享，为数据库人群、大数据从业人员、广大互联网人士及行业相关人士提供最具价值的交流平台</span></div><div style="text-align: left;"><br></div><div style="text-align: left;"><br></div><div style="text-align: left;"><span style="background-color: transparent; font-size: 16px;">2018年5月10-12日，第九届中国数据库技术大会（DTCC2018）将如约而至。本届大会以“数领先机•智赢未来”为主题，设定2大主会场及22个技术专场，本届大会以“数领先机•智赢未来”为主题，设定2大主会场及22个技术专场，本届大会以“数领先机•智赢未来”为主题，设定2大主会场及22个技术专场，邀请来自国内外互联网、金融、教育等行业百余位技术专家，共同探讨Oracle、MySQL、NoSQL、大数据、机器学习、区块链、数据可视化等领域的前瞻性热点话题与技术。</span></div>`
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
    section4Data: {
      panel: {
        hideVideo: false,
        enable: true,
        img: '',
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(253,101,76,1)',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="color:#ffffff;background-color: transparent; font-size: 32px;">大会相关数据</span></div>`
      },
      block1: {
        enable: true,
        showBtn: false,
        list: [{
          type: 'bottom',
          content: `<div style="text-align: center;"><span style="font-size: 60px;"><font color="#ffffff" style="font-size: 46px;">23980</font></span></div><div style="text-align: center;"><font color="#ffffff"><span style="font-size: 22px;">参会人数</span></font></div>`,
          img: require('assets/image/tp_icon1.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸130*130',
          uploadImgErrorMsg: ''
        },
        {
          type: 'bottom',
          content: `<div style="text-align: center;"><span style="font-size: 60px;"><font color="#ffffff" style="font-size: 46px;">800+</font></span></div><div style="text-align: center;"><font color="#ffffff"><span style="font-size: 22px;">参会嘉宾</span></font></div>`,
          img: require('assets/image/tp_icon2.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸130*130',
          uploadImgErrorMsg: ''
        },
        {
          type: 'bottom',
          content: `<div style="text-align: center;"><span style="font-size: 60px;"><font color="#ffffff" style="font-size: 46px;">10+</font></span></div><div style="text-align: center;"><font color="#ffffff"><span style="font-size: 22px;">合作媒体</span></font></div>`,
          img: require('assets/image/tp_icon3.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸130*130',
          uploadImgErrorMsg: ''
        }, {
          type: 'bottom',
          content: `<div style="text-align: center;"><span style="font-size: 60px;"><font color="#ffffff" style="font-size: 46px;">490</font></span></div><div style="text-align: center;"><font color="#ffffff"><span style="font-size: 22px;">主题演讲</span></font></div>`,
          img: require('assets/image/tp_icon4.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸130*130',
          uploadImgErrorMsg: ''
        },
        {
          type: 'bottom',
          content: `<div style="text-align: center;"><span style="font-size: 60px;"><font color="#ffffff" style="font-size: 46px;">8</font></span></div><div style="text-align: center;"><font color="#ffffff"><span style="font-size: 22px;">合作企业</span></font></div>`,
          img: require('assets/image/tp_icon5.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸130*130',
          uploadImgErrorMsg: ''
        }
        ]
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
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 32px;">参会嘉宾</span></div>`
      },
      block1: {
        enable: true,
        showBtn: true,
        list: [{
          type: 'bottom',
          content: `<div style="text-align: center;"><span style="font-size: 20px;"><br></span></div><div style="text-align: center; line-height: 1.5;"><span style="font-size: 20px;">梁世瑶</span></div><div style="text-align: center; line-height: 1.5;"><span style="font-size: 16px;">品牌营销解决方案总监</span><br></div><div style="text-align: center; line-height: 1.5;"><br></div></div>`,
          img: require('assets/image/tp_head1.png'),
          btn: {
            enable: true,
            text: '了解详情',
            bgColor: 'rgba(253,101,76,1)',
            target: '_blank',
            fontColor: 'rgba(255,255,255,1)'
          },
          target: '_self',
          hrefType: '_define',
          uploadImgErrorMsg: '',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸248*160'
        },
        {
          type: 'bottom',
          content: `<div style="text-align: center;"><span style="font-size: 20px;"><br></span></div><div style="text-align: center; line-height: 1.5;"><span style="font-size: 20px;">梁世瑶</span></div><div style="text-align: center; line-height: 1.5;"><span style="font-size: 16px;">品牌营销解决方案总监</span><br></div><div style="text-align: center; line-height: 1.5;"><br></div></div>`,
          img: require('assets/image/tp_head2.png'),
          btn: {
            enable: true,
            text: '了解详情',
            bgColor: 'rgba(253,101,76,1)',
            target: '_blank',
            fontColor: 'rgba(255,255,255,1)'
          },
          target: '_self',
          hrefType: '_define',
          uploadImgErrorMsg: '',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸248*160'
        },
        {
          type: 'bottom',
          content: `<div style="text-align: center;"><span style="font-size: 20px;"><br></span></div><div style="text-align: center; line-height: 1.5;"><span style="font-size: 20px;">梁世瑶</span></div><div style="text-align: center; line-height: 1.5;"><span style="font-size: 16px;">品牌营销解决方案总监</span><br></div><div style="text-align: center; line-height: 1.5;"><br></div></div>`,
          img: require('assets/image/tp_head3.png'),
          btn: {
            enable: true,
            text: '了解详情',
            bgColor: 'rgba(253,101,76,1)',
            target: '_blank',
            fontColor: 'rgba(255,255,255,1)'
          },
          target: '_self',
          hrefType: '_define',
          uploadImgErrorMsg: '',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸248*160'
        },
        {
          type: 'bottom',
          content: `<div style="text-align: center;"><span style="font-size: 20px;"><br></span></div><div style="text-align: center; line-height: 1.5;"><span style="font-size: 20px;">梁世瑶</span></div><div style="text-align: center; line-height: 1.5;"><span style="font-size: 16px;">品牌营销解决方案总监</span><br></div><div style="text-align: center; line-height: 1.5;"><br></div></div>`,
          img: require('assets/image/tp_head4.png'),
          btn: {
            enable: true,
            text: '了解详情',
            bgColor: 'rgba(253,101,76,1)',
            target: '_blank',
            fontColor: 'rgba(255,255,255,1)'
          },
          target: '_self',
          hrefType: '_define',
          uploadImgErrorMsg: '',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸248*160'
        }
        ]
      }
    },
    section6Data: {
      panel: {
        img: '',
        hideVideo: false,
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(239,239,239,1)',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 32px;">活动图集</span></div>`
      },
      block1: {
        enable: true,
        showBtn: false,
        showDir: true,
        list: [{
          type: 'right',
          content: `<div><span style="font-size: 24px;"><br></span></div><span style="font-size: 24px;"><div><span style="font-size: 24px;"><br></span></div><div><span style="font-size: 24px;"><br></span></div><div><span style="font-size: 24px;"><br></span></div>壹度创意规划设计网:休闲农业与乡</span><div><span style="font-size: 24px;">村旅游策划者与引领者</span></div><div><br></div><div><br></div><div><div><br></div><div><font color="#555555" style="font-size: 16px;">2018年5月10-12日，第九届中国数据库技术大会（DTCC2018）将如约而至。本届大会以“数领先机•智赢未来”为主题，设定2大主会场及</font></div><div><font color="#555555" style="font-size: 16px;">22个技术专场，邀请来自国内外互联网、金融、教育等行业百余位技术专家</font><br></div></div>`,
          img: require('assets/image/tp_img1.png'),
          btn: {
            enable: true,
            text: '',
            hrefType: '_define',
            bgColor: '',
            fontColor: ''
          },
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸500*500',
          uploadImgErrorMsg: ''
        },
        {
          type: 'left',
          content: `<div><span style="font-size: 24px;"><br></span></div><span style="font-size: 24px;"><div><span style="font-size: 24px;"><br></span></div><div><span style="font-size: 24px;"><br></span></div><div style="text-align: right;">壹度创意规划设计网:休闲农业与乡</div><div style="text-align: right;">村旅游策划者与引领者</div></span><div><br></div><div><br></div><div><br></div><div><div><br></div><div><font color="#555555" style="font-size: 16px;">2018年5月10-12日，第九届中国数据库技术大会（DTCC2018）将如约而至。本届大会以“数领先机•智赢未来”为主题，设定2大主会场及</font></div><div><font color="#555555" style="font-size: 16px;">22个技术专场，邀请来自国内外互联网、金融、教育等行业百余位技术专家</font><br></div></div>`,
          img: require('assets/image/tp_img2.png'),
          btn: {
            enable: true,
            text: '',
            hrefType: '_define',
            bgColor: '',
            fontColor: ''
          },
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸500*500',
          uploadImgErrorMsg: ''
        },
        {
          type: 'right',
          content: `<div><span style="font-size: 24px;"><br></span></div><span style="font-size: 24px;"><div><span style="font-size: 24px;"><br></span></div><div><span style="font-size: 24px;"><br></span></div><div><span style="font-size: 24px;"><br></span></div>壹度创意规划设计网:休闲农业与乡</span><div><span style="font-size: 24px;">村旅游策划者与引领者</span></div><div><br></div><div><br></div><div><br></div><div><div><br></div><div><font color="#555555" style="font-size: 16px;">2018年510-12日，第九届中国数据库技术大会（DTCC2018）将如约而至。本届大会以“数领先机•智赢未来”为主题，设定2大主会场及</font></div><div><font color="#555555" style="font-size: 16px;">22个技术专场，邀请来自国内外互联网、金融、教育等行业百余位技术专家</font><br></div></div>`,
          img: require('assets/image/tp_img3.png'),
          btn: {
            enable: true,
            text: '',
            hrefType: '_define',
            bgColor: '',
            fontColor: ''
          },
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸500*500',
          uploadImgErrorMsg: ''
        }
        ]
      }
    },
    section7Data: {
      panel: {
        img: '',
        hideVideo: false,
        enable: true,
        bgType: 'color',
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
          content: `<div style="text-align: center;"><br></div><div style="text-align: center;"><span style="font-size: 18px; font-family: &quot;PingFang SC&quot;, -apple-system, BlinkMacSystemFont, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Hiragino Sans GB&quot;, &quot;Source Han Sans&quot;, &quot;Noto Sans CJK Sc&quot;, &quot;Microsoft YaHei&quot;, &quot;Microsoft Jhenghei&quot;, sans-serif;"><font color="#003399"><a href="http://www.baidu.com">Photography我的第一堂摄影课 &gt;</a></font></span></div>`,
          img: require('assets/image/tp_section5_1.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸346*200',
          uploadImgErrorMsg: ''
        },
        {
          type: 'bottom',
          content: `<div style="text-align: center;"><br></div><div style="text-align: center;"><span style="font-size: 18px; font-family: &quot;PingFang SC&quot;, -apple-system, BlinkMacSystemFont, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Hiragino Sans GB&quot;, &quot;Source Han Sans&quot;, &quot;Noto Sans CJK Sc&quot;, &quot;Microsoft YaHei&quot;, &quot;Microsoft Jhenghei&quot;, sans-serif;"><font color="#003399"><a href="http://www.baidu.com">After Effects玩转创意视频 &gt;</a></font></span></div>`,
          img: require('assets/image/tp_section5_2.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸346*200',
          uploadImgErrorMsg: ''
        },
        {
          type: 'bottom',
          content: `<div style="text-align: center;"><br></div><div style="text-align: center;"><span style="font-size: 18px; font-family: &quot;PingFang SC&quot;, -apple-system, BlinkMacSystemFont, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Hiragino Sans GB&quot;, &quot;Source Han Sans&quot;, &quot;Noto Sans CJK Sc&quot;, &quot;Microsoft YaHei&quot;, &quot;Microsoft Jhenghei&quot;, sans-serif;"><font color="#003399"><a href="http://www.baidu.com">影视工坊视频特效设计 &gt;</a></font></span></div>`,
          img: require('assets/image/tp_section5_3.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸346*200',
          uploadImgErrorMsg: ''
        }
        ]
      }
    },
    section8Data: {
      panel: {
        img: '',
        hideVideo: false,
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(255, 255, 255, 1)',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
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
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸200*100',
          uploadImgErrorMsg: ''
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo2.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸200*100',
          uploadImgErrorMsg: ''
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo3.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸200*100',
          uploadImgErrorMsg: ''
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo4.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸200*100',
          uploadImgErrorMsg: ''
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo5.png'),
          hrefType: '_define',
          target: '_self',
          uploadImgErrorMsg: '',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸200*100'
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo6.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸200*100',
          uploadImgErrorMsg: ''
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo7.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸200*100',
          uploadImgErrorMsg: ''
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo8.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸200*100',
          uploadImgErrorMsg: ''
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo9.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸200*100',
          uploadImgErrorMsg: ''
        },
        {
          type: 'top',
          content: ``,
          img: require('assets/image/tp_logo10.png'),
          hrefType: '_define',
          target: '_self',
          imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议尺寸200*100',
          uploadImgErrorMsg: ''
        }
        ]
      }
    },
    section9Data: {
      panel: {
        img: '',
        hideVideo: true,
        enable: true,
        bgType: 'color',
        videoType: 'upload',
        color: 'rgba(253,101,76,1)',
        imgDesc: '图片支持jpg、png、bmp、gif格式<br>大小不超过2M<br>建议最大尺寸1920*820 最小尺寸1366*583',
        uploadImgErrorMsg: ''
      },
      font: {
        enable: true,
        content: `<div style="text-align: center;"><span style="color: rgb(255, 255, 255); font-family: PingFangSC-Regular, &quot;PingFang SC&quot;; background-color: transparent; font-size: 20px;">想了解更多信息吗？</span></div><div style="text-align: center;"><br></div><div style="text-align: center;"><span style="background-color: transparent;"><font color="#ffffff" face="PingFangSC-Regular, PingFang SC" style="font-size: 20px;">了解微吼直播助您一臂之力。[18年、350万场、25万+客户的选择]&nbsp;</font></span></div><div style="text-align: center;"><span style="background-color: transparent;"><font color="#ffffff" face="PingFangSC-Regular, PingFang SC" style="font-size: 20px;">400-888-9970</font><br></span></div>`
      },
      btn: {
        bgColor: 'rgba(253,101,76,1)',
        fontColor: 'rgba(255,255,255,1)',
        text: '活动报名',
        link: '',
        hrefType: '_sub',
        enable: true,
        target: '_self'
      }
    }
  }
}
