<template>
  <div id="cond-option">
    <ul>
      <li v-for="(outli,ind) in shadowOutD ">
        <div class="option-box">
          <p class="option_title">筛选条件</p>
          <div v-for="(m ,mind) in outli">
            <el-cascader v-model="m.keys"
                         :options="options"
                         :props="props"
                         :show-all-levels="false"
                         @change="handleItemChange(m,ind,mind)"></el-cascader>
            <el-select v-if="m.keys"
                       v-model="m.condition"
                       value-key="name"
                       placeholder="请选择"
                       @change="optionItemChange(m,ind,mind)">
              <el-option v-for="(itemr,indexr) in m.conds"
                         :key="indexr.name"
                         :label="itemr.name"
                         :value="itemr.key"></el-option>
            </el-select>

            <div class="option-value"
                 v-show="m.condition">
              <el-select v-model="m.value"
                         v-if="m.type == 'select'"
                         filterable
                         placeholder="请选择">
                <el-option v-for="(itemr,indexr) in m.optionValue"
                           :key="indexr.key"
                           :label="itemr.name"
                           :value="itemr.key">
                </el-option>
              </el-select>

              <el-input v-else-if="m.type === 'text' "
                        v-model="m.value"
                        :type="m.type"
                        placeholder="请输入内容"></el-input>

              <el-input-number v-else-if="m.type === 'number'"
                               v-model="m.value"
                               placeholder="请输入"
                               :controls=false
                               :min="1"
                               :max="100000000000"></el-input-number>

              <el-date-picker v-else-if="m.type === 'date' "
                              v-model="m.value"
                              type="date"
                              placeholder="选择日期"></el-date-picker>
              <el-input v-show="false"
                        v-else-if="m.type === '' "
                        v-model="m.value =null"
                        placeholder="请输入内容"></el-input>
              {{m.unit}}
            </div>
            <i class="el-icon-delete"
               @click="del(ind,mind)"
               v-show="disDel"></i>
          </div>
          <el-button size="mini"
                     class="add-brn"
                     @click="and(ind)"
                     v-show="shadowOutD[ind].length<10">AND
          </el-button>
        </div>
        <div class="orBtn">
          <el-button size="mini"
                     class="add-brn"
                     @click="or"
                     v-show="shadowOutD.length<10">OR
          </el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import groupService from 'src/api/user_group'
  import province from 'src/assets/js/district-provience'
  import city from 'src/assets/js/district-city'

  export default {
    props: ['type', 'rule'],
    data () {
      return {
        disDel: false,
        saveData: [],
        props: {
          value: 'key',
          label: 'name'
        },
        outD: [
          [
            {
              condition: '',
              key: '',
              value: ''
            }
          ]
        ],
        shadowOutD: [
          [
            {
              condition: '',
              key: '',
              value: ''
            }
          ]
        ],
        /* {
          name: '浏览行为',
          key: 'browsing',
          children: [
            {
              name: '用户常用设备',
              key: 'common_device',
              value: ''
            },
            {
              name: '电脑观看常用浏览器',
              key: 'common_browser',
              value: ''
            }
          ]
        }, */
        options: [
          {
            name: '观看直播相关',
            key: 'watch_live_dep',
            children: [
              {
                name: '预约/报名活动',
                key: 'sign_up_count'
              },
              {
                name: '观看直播时长',
                key: 'watch_live_time'
              },
              {
                name: '参与活动次数',
                key: 'join_count'
              },
              {
                name: '观看回放',
                key: 'watch_replay_time'
              },
              {
                name: '观看回放次数',
                key: 'watch_replay_count'
              },
              {
                name: '聊天数量',
                key: 'chat_count'
              }
            ]
          }, {
            name: '传播行为',
            key: 'propagation',
            children: [
              {
                name: '分享次数',
                key: 'share_count',
                value: ''
              },
              {
                name: '邀请好友',
                key: 'invite_friends_count',
                value: ''
              }
            ]
          }, {
            name: '用户属性',
            key: 'user_attr',
            children: [
              {
                name: '姓名',
                key: 'real_name',
                value: ''
              },
              {
                name: '职位',
                key: 'position',
                value: ''
              },
              {
                name: '邮箱',
                key: 'email',
                value: ''
              },
              {
                name: '手机号',
                key: 'phone',
                value: ''
              },
              {
                name: '性别',
                key: 'sex',
                value: ''
              },
              {
                name: '生日',
                key: 'birthday',
                value: ''
              },
              {
                name: '行业',
                key: 'industry',
                value: ''
              },
              {
                name: '省份',
                key: 'province',
                value: ''
              },
              {
                name: '城市',
                key: 'city',
                value: ''
              },
              {
                name: '用户等级',
                key: 'user_level',
                value: ''
              },
              {
                name: '首次访问时间',
                key: 'first_visited_at',
                value: ''
              },
              {
                name: '最近访问时间',
                key: 'last_visited_at',
                value: ''
              }
            ]
          }, {
            name: '其他维度',
            key: 'other',
            children: [
              {
                name: '时间',
                key: 'created_at',
                value: ''
              },
              {
                name: '标签',
                key: 'tags',
                value: ''
              },
              {
                name: '群组',
                key: 'groups',
                value: ''
              }]
          }
        ],

        condOption: {
          sign_up_count: {
            keys: ['watch_live_dep', 'sign_up_count'],
            cons: [{
              key: 'eq',
              name: '等于',
              type: 'number',
              unit: '次'
            }, {
              key: 'gt',
              name: '大于',
              type: 'number',
              unit: '次'
            }, {
              key: 'lt',
              name: '小于',
              type: 'number',
              unit: '次'
            }]
          },
          watch_live_time: {
            keys: ['watch_live_dep', 'watch_live_time'],
            cons: [{
              key: 'eq',
              name: '等于',
              type: 'number',
              unit: '分钟'
            }, {
              key: 'gt',
              name: '大于',
              type: 'number',
              unit: '分钟'
            }, {
              key: 'lt',
              name: '小于',
              type: 'number',
              unit: '分钟'
            }]
          },
          join_count: {
            keys: ['watch_live_dep', 'join_count'],
            cons: [{
              key: 'eq',
              name: '等于',
              type: 'number',
              unit: '次'
            }, {
              key: 'gt',
              name: '大于',
              type: 'number',
              unit: '次'
            }, {
              key: 'lt',
              name: '小于',
              type: 'number',
              unit: '次'
            }]
          },
          watch_replay_time: {
            keys: ['watch_live_dep', 'watch_replay_time'],
            cons: [
              {
                key: 'eq',
                name: '等于',
                type: 'number',
                unit: '分钟'
              }, {
                key: 'gt',
                name: '大于',
                type: 'number',
                unit: '分钟'
              }, {
                key: 'lt',
                name: '小于',
                type: 'number',
                unit: '分钟'
              }]
          },
          watch_replay_count: {
            keys: ['watch_live_dep', 'watch_replay_count'],
            cons: [{
              key: 'eq',
              name: '等于',
              type: 'number',
              unit: '次'
            }, {
              key: 'gt',
              name: '大于',
              type: 'number',
              unit: '次'
            }, {
              key: 'it',
              name: '小于',
              type: 'number',
              unit: '次'
            }]
          },
          chat_count: {
            keys: ['watch_live_dep', 'chat_count'],
            cons: [{
              key: 'eq',
              name: '等于',
              type: 'number',
              unit: '条'
            }, {
              key: 'gt',
              name: '大于',
              type: 'number',
              unit: '条'
            }, {
              key: 'lt',
              name: '小于',
              type: 'number',
              unit: '条'
            }]
          },
          share_count: {
            keys: ['propagation', 'share_count'],
            cons: [
              {
                key: 'eq',
                name: '等于',
                type: 'number',
                unit: '次'
              }, {
                key: 'gt',
                name: '大于',
                type: 'number',
                unit: '次'
              }, {
                key: 'lt',
                name: '小于',
                type: 'number',
                unit: '次'
              }]
          },
          invite_friends_count: {
            keys: ['propagation', 'invite_friends_count'],
            cons: [
              {
                key: 'eq',
                name: '等于',
                type: 'number',
                unit: '人'
              }, {
                key: 'gt',
                name: '大于',
                type: 'number',
                unit: '人'
              }, {
                key: 'lt',
                name: '小于',
                type: 'number',
                unit: '人'
              }]
          },
          common_device: {
            keys: ['browsing', 'common_device'],
            cons: [
              {
                key: 'eq',
                name: '是',
                type: 'select',
                unit: ''
              }]
          },
          common_browser: {
            keys: ['browsing', 'common_browser'],
            cons: [
              {
                key: 'eq',
                name: '是',
                type: 'select',
                unit: ''
              }]
          },
          real_name: {
            keys: ['user_attr', 'real_name'],
            cons: [
              {
                key: 'contain',
                name: '包含',
                type: 'text',
                unit: ''
              }, {
                key: 'not_contain',
                name: '不包含',
                type: 'text',
                unit: ''
              }, {
                key: 'eq',
                name: '是',
                type: 'text',
                unit: ''
              }, {
                key: 'neq',
                name: '不是',
                type: 'text',
                unit: ''
              }, {
                key: 'head_eq',
                name: '开头是',
                type: 'text',
                unit: ''
              }, {
                key: 'tail_eq',
                name: '结尾是',
                type: 'text',
                unit: ''
              }, {
                key: 'not_null',
                name: '不为空',
                type: '',
                unit: ''
              }, {
                key: 'is_null',
                name: '为空',
                type: '',
                unit: ''
              }]
          },
          position: {
            keys: ['user_attr', 'position'],
            cons: [
              {
                key: 'contain',
                name: '包含',
                type: 'text',
                unit: ''
              }, {
                key: 'not_contain',
                name: '不包含',
                type: 'text',
                unit: ''
              }, {
                key: 'eq',
                name: '是',
                type: 'text',
                unit: ''
              }, {
                key: 'neq',
                name: '不是',
                type: 'text',
                unit: ''
              }, {
                key: 'head_eq',
                name: '开头是',
                type: 'text',
                unit: ''
              }, {
                key: 'tail_eq',
                name: '结尾是',
                type: 'text',
                unit: ''
              }, {
                key: 'not_null',
                name: '不为空',
                type: '',
                unit: ''
              }, {
                key: 'is_null',
                name: '为空',
                type: '',
                unit: ''
              }]
          },
          email: {
            keys: ['user_attr', 'email'],
            cons: [
              {
                key: 'contain',
                name: '包含',
                type: 'text',
                unit: ''
              }, {
                key: 'not_contain',
                name: '不包含',
                type: 'text',
                unit: ''
              }, {
                key: 'eq',
                name: '是',
                type: 'text',
                unit: ''
              }, {
                key: 'neq',
                name: '不是',
                type: 'text',
                unit: ''
              }, {
                key: 'head_eq',
                name: '开头是',
                type: 'text',
                unit: ''
              }, {
                key: 'tail_eq',
                name: '结尾是',
                type: 'text',
                unit: ''
              }, {
                key: 'not_null',
                name: '不为空',
                type: '',
                unit: ''
              }, {
                key: 'is_null',
                name: '为空',
                type: '',
                unit: ''
              }]
          },
          phone: {
            keys: ['user_attr', 'phone'],
            cons: [
              {
                key: 'contain',
                name: '包含',
                type: 'number',
                unit: ''
              }, {
                key: 'not_contain',
                name: '不包含',
                type: 'number',
                unit: ''
              }, {
                key: 'eq',
                name: '是',
                type: 'number',
                unit: ''
              }, {
                key: 'neq',
                name: '不是',
                type: 'number',
                unit: ''
              }, {
                key: 'head_eq',
                name: '开头是',
                type: 'number',
                unit: ''
              }, {
                key: 'tail_eq',
                name: '结尾是',
                type: 'number',
                unit: ''
              }, {
                key: 'not_null',
                name: '不为空',
                type: '',
                unit: ''
              }, {
                key: 'is_null',
                name: '为空',
                type: '',
                unit: ''
              }]
          },
          sex: {
            keys: ['user_attr', 'sex'],
            cons: [
              {
                key: 'eq',
                name: '是',
                type: 'select',
                unit: ''
              }]
          },
          birthday: {
            keys: ['user_attr', 'birthday'],
            cons: [
              {
                key: 'eq',
                name: '是（哪一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'lt',
                name: '早于（哪一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'gt',
                name: '晚于（哪一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'is_null',
                name: '为空',
                type: '',
                unit: ''
              }, {
                key: 'not_null',
                name: '不为空',
                type: '',
                unit: ''
              }]
          },
          industry: {
            keys: ['user_attr', 'industry'],
            cons: [
              {
                key: 'eq',
                name: '是',
                type: 'select',
                unit: ''
              }
            ]
          },
          province: {
            keys: ['user_attr', 'province'],
            cons: [{
              key: 'contain',
              name: '包含',
              type: 'select',
              unit: ''
            }, {
              key: 'not_contain',
              name: '不包含',
              type: 'select',
              unit: ''
            }, {
              key: 'not_null',
              name: '不为空',
              type: '',
              unit: ''
            }, {
              key: 'is_null',
              name: '为空',
              type: '',
              unit: ''
            }]
          },
          city: {
            keys: ['user_attr', 'city'],
            cons: [{
              key: 'contain',
              name: '包含',
              type: 'select',
              unit: ''
            }, {
              key: 'not_contain',
              name: '不包含',
              type: 'select',
              unit: ''
            }, {
              key: 'not_null',
              name: '不为空',
              type: '',
              unit: ''
            }, {
              key: 'is_null',
              name: '为空',
              type: '',
              unit: ''
            }]
          },
          user_level: {
            keys: ['user_attr', 'user_level'],
            cons: [
              {
                key: 'eq',
                name: '是',
                type: 'select',
                unit: ''
              }]
          },
          first_visited_at: {
            keys: ['user_attr', 'first_visited_at'],
            cons: [
              {
                key: 'eq',
                name: '是（哪一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'lt',
                name: '早于（哪一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'gt',
                name: '晚于（哪一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'is_null',
                name: '为空',
                type: '',
                unit: ''
              }, {
                key: 'not_null',
                name: '不为空',
                type: '',
                unit: ''
              }]
          },
          last_visited_at: {
            keys: ['user_attr', 'last_visited_at'],
            cons: [
              {
                key: 'eq',
                name: '是（哪一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'lt',
                name: '早于（哪一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'gt',
                name: '晚于（哪一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'is_null',
                name: '为空',
                type: '',
                unit: ''
              }, {
                key: 'not_null',
                name: '不为空',
                type: '',
                unit: ''
              }]
          },
          created_at: {
            keys: ['other', 'created_at'],
            cons: [
              {
                key: 'eq',
                name: '固定',
                type: 'date',
                unit: ''
              }, {
                key: 'lt',
                name: '相对',
                type: 'number',
                unit: ''
              }]
          },
          tags: {
            keys: ['other', 'tags'],
            cons: [
              {
                key: 'eq',
                name: '是',
                type: 'select',
                unit: ''
              }]
          },
          groups: {
            keys: ['other', 'groups'],
            cons: [{
              key: 'eq',
              name: '是',
              type: 'select',
              unit: ''
            }]
          }
        },

        valueOption: {
          common_browser: [
            {
              key: 'Chrome',
              name: 'Chrome',
              type: 'select',
              unit: ''
            }, {
              key: 'Edge',
              name: 'Edge',
              type: 'select',
              unit: ''
            }, {
              key: 'Safari',
              name: 'Safari',
              type: 'select',
              unit: ''
            }, {
              key: 'IE',
              name: 'IE',
              type: 'select',
              unit: ''
            }, {
              key: '火狐',
              name: '火狐',
              type: 'select',
              unit: ''
            }, {
              key: '360浏览器',
              name: '360浏览器',
              type: 'select',
              unit: ''
            }, {
              key: 'QQ',
              name: 'QQ',
              type: 'select',
              unit: ''
            }],
          common_device: [
            {
              key: 'PC',
              name: 'PC',
              type: 'select',
              unit: ''
            }, {
              key: '手机-IOS',
              name: '手机-IOS',
              type: 'select',
              unit: ''
            }, {
              key: '手机-Andriod',
              name: '手机-Andriod',
              type: 'select',
              unit: ''
            }, {
              key: '*',
              name: '全部',
              type: 'select',
              unit: ''
            }
          ],
          sex: [{
            key: 'M',
            name: '男',
            type: 'select',
            unit: ''
          }, {
            key: 'W',
            name: '女',
            type: 'select',
            unit: ''
          }, {
            key: '*',
            name: '全部',
            type: 'select',
            unit: ''
          }, {
            key: 'is_null',
            name: '为空',
            type: 'select',
            unit: ''
          }
          ],
          user_level: [
            {
              key: 1,
              name: '优质用户',
              type: 'select',
              unit: ''
            }, {
              key: 2,
              name: '高价值用户',
              type: 'select',
              unit: ''
            }, {
              key: 4,
              name: '潜力用户',
              type: 'select',
              unit: ''
            }, {
              key: 3,
              name: '一般用户',
              type: 'select',
              unit: ''
            }, {
              key: 5,
              name: '流失用户',
              type: 'select',
              unit: ''
            }, {
              key: 'is_null',
              name: '为空',
              type: 'select',
              unit: ''
            }, {
              key: '*',
              name: '全部',
              type: 'select',
              unit: ''
            }],
          industry: [
            {
              key: 'IT/互联网 ',
              name: 'IT/互联网 ',
              type: 'select',
              unit: ''
            },
            {
              key: '电子/通信/硬件 ',
              name: '电子/通信/硬件 ',
              type: 'select',
              unit: ''
            },
            {
              key: '金融 ',
              name: '金融 ',
              type: 'select',
              unit: ''
            },
            {
              key: '交通/贸易/物流 ',
              name: '交通/贸易/物流 ',
              type: 'select',
              unit: ''
            },
            {
              key: '消费品 ',
              name: '消费品 ',
              type: 'select',
              unit: ''
            },
            {
              key: '能源/矿产环保',
              name: '能源/矿产环保 ',
              type: 'select',
              unit: ''
            },
            {
              key: '制药/医疗 ',
              name: '制药/医疗 ',
              type: 'select',
              unit: ''
            },
            {
              key: '专业服务 ',
              name: '专业服务 ',
              type: 'select',
              unit: ''
            },
            {
              key: '教育/培训 ',
              name: '教育/培训 ',
              type: 'select',
              unit: ''
            },
            {
              key: '广告/媒体/娱乐/出版 ',
              name: '广告/媒体/娱乐/出版 ',
              type: 'select',
              unit: ''
            },
            {
              key: '房地产/建筑 ',
              name: '房地产/建筑 ',
              type: 'select',
              unit: ''
            },
            {
              key: '服务业 ',
              name: '服务业 ',
              type: 'select',
              unit: ''
            },
            {
              key: '政府/非盈利机构/其它 ',
              name: '政府/非盈利机构/其它 ',
              type: 'select',
              unit: ''
            }],
          tags: [],
          groups: [],
          province: [],
          city: []
        }

      }
    },
    methods: {
      filVal (target) {
        if (target < 1) {
          target = 1
        }
        console.log(target)
      },
      handleItemChange (item, outInd, inInd) {
        item.conds = this.condOption[item.keys[1]].cons
        this.shadowOutD[outInd][inInd].condition = ''
        this.shadowOutD[outInd][inInd].value = ''
      },
      optionItemChange (item, outInd, inInd) {
        this.shadowOutD[outInd][inInd].value = ''
        item.conds.find((itemr) => {
          if (itemr.key === item.condition) {
            item.type = itemr.type
            item.unit = itemr.unit
          }
          item.optionValue = this.valueOption[item.keys[1]]
        })
      },
      and (ind) {
        this.shadowOutD[ind].push({
          key: '',
          condition: '',
          value: ''
        })
        this.$nextTick(() => {
          if (this.shadowOutD[ind].length > 1) {
            this.disDel = true
          }
        })
      },
      del (ind, mind) {
        // console.log(ind, mind)
        // console.log(this.shadowOutD)
        this.shadowOutD[ind].splice(mind, 1)
        if (this.shadowOutD[ind].length < 1) {
          this.shadowOutD.splice(ind, 1)
        }
        this.$nextTick(() => {
          if (this.shadowOutD && this.shadowOutD.length < 2 && this.shadowOutD[0].length === 1) {
            this.disDel = false
          } else {
            this.disDel = true
          }
        })
      },
      or () {
        this.shadowOutD.push([{
          key: '',
          condition: '',
          value: ''
        }])
        this.$nextTick(() => {
          if (this.shadowOutD.length < 2) {
            this.disDel = false
          } else {
            this.disDel = true
          }
        })
      },
      save () {
        // console.log(this.shadowOutD, 'before_save_data')
        let fulfil = true
        this.saveData = this.shadowOutD.filter((item) => {
          let _item = item.filter((inItem) => {
            if (inItem.condition !== '' || inItem.key !== '') {
              console.log(inItem)
              inItem.key = inItem.keys[1]
              if (inItem.type === 'date') {
                let d = new Date(inItem.value)
                inItem.value = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
              }
              // 此处是为了让三级输入框不为空  但是可以为null
              if (inItem.value === '') {
                fulfil = false
                this.$toast({
                  content: '输入框不能为空',
                  position: 'center'
                })
                return false
              } else {
                // delete inItem.conds
                // delete inItem.keys
                // delete inItem.type
                // delete inItem.unit
                delete inItem.optionValue
                return inItem
              }
            }
          })
          if (_item.length > 0) {
            return _item
          }
        })
        // console.log(this.saveData, '_save_data')
        if (fulfil) this.$emit('optionData', this.saveData)
      },
      analysisData () {
        this.outD.map((item, ind) => {
          item.map((item1, ind1) => {
            // item1.keys = this.condOption[item1.key].keys
            this.$set(item1, 'keys', this.condOption[item1.key].keys)
            // item1.optionValue = this.valueOption[item1.keys[1]]
            this.$set(item1, 'optionValue', this.valueOption[item1.keys[1]])
            // this.$set(item1, 'conds', this.condOption[item1.key].cons)
            item1.type = this.condOption[item1.key].cons.find((item) => item.key === item1.condition).type
            item1.unit = this.condOption[item1.key].cons.find((item) => item.key === item1.condition).unit
          })
        })

        this.shadowOutD = this.outD
      },
      getTags () {
        this.$post(groupService.ALL_TAGS)
          .then(res => {
            res.data.list.forEach((item) => {
              let obj = {
                key: item.tag_id,
                name: item.tag_name,
                type: 'select',
                unit: ''
              }
              this.valueOption.tags.push(obj)
            })
          })
      },
      getGroup () {
        this.$post(groupService.ALL_GROUPS, { type: '2' })
          .then(res => {
            res.data.list.forEach((item) => {
              let obj = {
                key: item.group_id,
                name: item.title,
                type: 'select',
                unit: ''
              }
              this.valueOption.groups.push(obj)
            })
          })
      },
      getProvince () {
        province.forEach((item) => {
          let obj = {
            key: item.name,
            name: item.name,
            type: 'select',
            unit: ''
          }
          this.valueOption.province.push(obj)
        })
      },
      getCity () {
        city.forEach((item) => {
          let obj = {
            key: item.name,
            name: item.name,
            type: 'select',
            unit: ''
          }
          this.valueOption.city.push(obj)
        })
      }
    },
    mounted () {
      this.getTags()
      this.getGroup()
      this.getProvince()
      this.getCity()
      if (this.type === 'edit') {
        this.outD = this.rule
        if (this.outD.length > 1 || (this.outD.length === 1 && this.outD[0].length > 1)) {
          this.disDel = true
        } else {
          this.disDel = false
        }
        this.analysisData()
      }
    }
  }
</script>

<style lang="scss" scoped>
  #cond-option {
    overflow: auto;
    max-height: 400px;
    /deep/ {
      ul {
        li {
          .option-box {
            background-color: #eeeeee;
            padding: 10px;
            border-radius: 4px;
            >div{
              height: 42px;
            }
            .option_title {
              color: rgba(34, 34, 34, 1);
              height: 26px;
              line-height: 26px;
            }
            div {
              margin-bottom: 10px;
              .el-cascader,
              .el-select {
                width: 130px;
                height: 40px;
              }
              .el-select .el-input__inner {
                background-color: white;
              }
              .option-value {
                display: inline-block;
                .el-input,
                .el-select,
                .el-input-number {
                  width: 150px;
                  .el-input__inner {
                    text-align: left;
                  }
                }
                i.el-input__icon {
                  height: 40px;
                  line-height: 40px;
                }
              }
              i.el-icon-delete {
                float: right;
                font-size: 16px;
                transform: translate(-4px, 12px);
                &:hover {
                  color: #FC6769;
                }
              }
            }
          }
          .orBtn {
            text-align: center;
            height: 48px;
            line-height: 48px;
          }
          .add-brn{
            &:after{
              content: '+';
              border: 1px solid #cccccc;
              color: #cccccc;
              border-radius: 50%;
              width: 18px;
              height: 18px;
              font-size: 18px;
              display: inline-block;
              text-align: center;
              line-height: 16px;
            }
            &:hover {
              background-color: #FDD43F;
            }
          }

        }
      }
    }
  }
</style>
