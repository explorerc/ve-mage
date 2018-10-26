<template>
  <div id="cond-option">
    <ul>
      <li v-for="(outli,ind) in shadowOutD ">

        <div class="option-box">
          <p class="option_title">筛选条件</p>
          <div v-for="(m ,mind) in outli">
            <el-cascader v-model="m.keys" :options="options" :props="props" :show-all-levels="false"
                         @change="handleItemChange(m,ind,mind)"></el-cascader>

            <el-select v-model="m.condition" value-key="name" placeholder="请选择" @change="optionItemChange(m,ind,mind)">
              <el-option
                v-for="(itemr,indexr) in m.conds"
                :key="indexr.name"
                :label="itemr.name"
                :value="itemr.key">
              </el-option>
            </el-select>


            <div class="option-value">
              <el-select v-model="m.value" v-if="m.type == 'select'" placeholder="请选择">
                <el-option
                  v-for="(itemr,indexr) in m.optionValue"
                  :key="indexr.key"
                  :label="itemr.name"
                  :value="itemr.key">
                </el-option>
              </el-select>

              <el-input v-if="m.type == 'number' ||m.type == 'text' "
                        v-model="m.value"
                        :type="m.type" placeholder="请输入内容"></el-input>

              <el-date-picker
                v-else-if="m.type == 'date' "
                v-model="m.value"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
              {{m.unit}}
            </div>
            <i class="el-icon-delete" @click="del(ind,mind)" v-show="disDel"></i>
          </div>
          <el-button size="mini" @click="and(ind)">AND</el-button>
        </div>
        <div class="orBtn">
          <el-button size="mini" @click="or">OR</el-button>
        </div>
      </li>

    </ul>
    <!--<button @click="save">save</button>-->
  </div>
</template>

<script>
  import groupService from 'src/api/user_group'

  export default {
    props: ['type', 'rule'],
    data () {
      return {
        disDel: true,
        saveData: [],
        props: {
          value: 'key',
          label: 'name'
        },
        outD: [
          /* [
            {
              condition: 'eq',
              key: 'common_browser',
              value: 'Safari',
            },
            {
              condition: 'gt',
              key: 'invite_friends_count',
              value: '5',
            }
          ], */
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
        options: [{
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
                name: '等于',
                type: 'select',
                unit: ''
              }]
          },
          common_browser: {
            keys: ['browsing', 'common_browser'],
            cons: [
              {
                key: 'eq',
                name: '等于',
                type: 'select',
                unit: ''
              }]
          },
          real_name:
            {
              keys: ['user_attr', 'real_name'],
              cons:
                [{
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
                  type: 'text',
                  unit: ''
                }, {
                  key: 'is_null',
                  name: '为空',
                  type: 'text',
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
                type: 'text',
                unit: ''
              }, {
                key: 'is_null',
                name: '为空',
                type: 'text',
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
                type: 'text',
                unit: ''
              }, {
                key: 'is_null',
                name: '为空',
                type: 'text',
                unit: ''
              }]
          },
          phone: {
            keys: ['user_attr', 'phone'],
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
                type: 'text',
                unit: ''
              }, {
                key: 'is_null',
                name: '为空',
                type: 'text',
                unit: ''
              }]
          },
          sex: {
            keys: ['user_attr', 'sex'],
            cons: [
              {
                key: 'eq',
                name: '等于',
                type: 'select',
                unit: ''
              }]
          },
          birthday: {
            keys: ['user_attr', 'birthday'],
            cons: [
              {
                key: 'eq',
                name: '是（那一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'gt',
                name: '早于（那一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'lt',
                name: '晚于（那一天）',
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
                key: 'contain',
                name: '包含',
                type: 'cascader ',
                unit: ''
              }, {
                key: 'not_contain',
                name: '不包含',
                type: 'cascader',
                unit: ''
              }, {
                key: 'eq',
                name: '是',
                type: 'cascader',
                unit: ''
              }, {
                key: 'neq',
                name: '不是',
                type: 'cascader',
                unit: ''
              }, {
                key: 'head_eq',
                name: '开头是',
                type: 'cascader',
                unit: ''
              }, {
                key: 'tail_eq',
                name: '结尾是',
                type: 'cascader',
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
          province: {
            keys: ['user_attr', 'province'],
            cons: [{
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
              key: 'not_null',
              name: '不为空',
              type: 'text',
              unit: ''
            }, {
              key: 'is_null',
              name: '为空',
              type: 'text',
              unit: ''
            }]
          },
          city: {
            keys: ['user_attr', 'city'],
            cons: [{
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
              key: 'not_null',
              name: '不为空',
              type: 'text',
              unit: ''
            }, {
              key: 'is_null',
              name: '为空',
              type: 'text',
              unit: ''
            }]
          },
          user_level: {
            keys: ['user_attr', 'user_level'],
            cons: [
              {
                key: 'eq',
                name: '等于',
                type: 'select',
                unit: ''
              }]
          },
          first_visited_at: {
            keys: ['user_attr', 'first_visited_at'],
            cons: [
              {
                key: 'eq',
                name: '是（那一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'gt',
                name: '早于（那一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'lt',
                name: '晚于（那一天）',
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
                name: '是（那一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'gt',
                name: '早于（那一天）',
                type: 'date',
                unit: ''
              }, {
                key: 'lt',
                name: '晚于（那一天）',
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
                key: '固定',
                name: '固定',
                type: 'date',
                unit: ''
              }, {
                key: '相对',
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
                name: '等于',
                type: 'select',
                unit: ''
              }]
          },
          groups: {
            keys: ['other', 'groups'],
            cons: [{
              key: 'eq',
              name: '等于',
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
              key: '全部',
              name: '全部',
              type: 'select',
              unit: ''
            }
          ],
          sex: [{
            key: '男',
            name: '男',
            type: 'select',
            unit: ''
          }, {
            key: '女',
            name: '女',
            type: 'select',
            unit: ''
          }, {
            key: '全部',
            name: '全部',
            type: 'select',
            unit: ''
          }, {
            key: '为空',
            name: '为空',
            type: 'select',
            unit: ''
          }
          ],
          user_level: [
            {
              key: '优质用户',
              name: '优质用户',
              type: 'select',
              unit: ''
            }, {
              key: '高价值用户',
              name: '高价值用户',
              type: 'select',
              unit: ''
            }, {
              key: '潜力用户',
              name: '潜力用户',
              type: 'select',
              unit: ''
            }, {
              key: '一般用户',
              name: '一般用户',
              type: 'select',
              unit: ''
            }, {
              key: '流失用户',
              name: '流失用户',
              type: 'select',
              unit: ''
            }, {
              key: '为空',
              name: '为空',
              type: 'select',
              unit: ''
            }, {
              key: '全部',
              name: '全部',
              type: 'select',
              unit: ''
            }],
          tags: [],
          groups: []
        }

      }
    },
    methods: {
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
      },
      del (ind, mind) {
        console.log(ind, mind)
        this.shadowOutD[ind].splice(mind, 1)
        if (this.shadowOutD[ind].length < 1) {
          this.shadowOutD.splice(ind, 1)
        }
        if (this.shadowOutD.length === 1) {
          this.disDel = false
        } else {
          this.disDel = true
        }
      },
      or () {
        this.shadowOutD.push([{
          key: '',
          condition: '',
          value: ''
        }])

        console.log(this.shadowOutD.length)
        if (this.shadowOutD.length < 2) {
          this.disDel = false
        } else {
          this.disDel = true
        }
      },
      save () {
        console.log(this.shadowOutD, 'before_save_data')
        this.saveData = this.shadowOutD.filter((item) => {
          let _item = item.filter((inItem) => {
            if (inItem.condition !== '' || inItem.key !== '') {
              console.log(inItem)
              inItem.key = inItem.keys[1]
              if (inItem.type === 'date') {
                let d = new Date(inItem.value)
                inItem.value = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
              }
              delete inItem.conds
              delete inItem.keys
              delete inItem.type
              delete inItem.unit
              delete inItem.optionValue
              return inItem
            }
          })
          // console.log('1111111', _item)
          if (_item.length > 0) {
            return _item
          }
        })
        console.log(this.shadowOutD, 'this.shadowOutD')
        console.log(this.saveData, '_save_data')
        this.$emit('optionData', this.saveData)
      },
      analysisData () {
        this.outD.map((item) => {
          item.map((item1) => {
            item1.keys = this.condOption[item1.key].keys
            item1.optionValue = this.valueOption[item1.keys[1]]
            this.$set(item1, 'conds', this.condOption[item1.key].cons)
            // this.$set(item1, 'keys', this.condOption[item1.key].keys);
            // this.conds= this.condOption[item1.key].cons
            // console.log(this.condOption[item1.key].cons);
            item1.type = this.condOption[item1.key].cons.find((item) => item.key === item1.condition).type
          })
        })
        this.shadowOutD = this.outD
      },
      clearRule () {
        this.outD = [
          [
            {
              condition: '',
              key: '',
              value: ''
            }
          ]
        ]
        this.shadowOutD = [
          [
            {
              condition: '',
              key: '',
              value: ''
            }
          ]
        ]
      },
      getTags () {
        this.$post(groupService.ALL_TAGS)
          .then(res => {
            console.log(res)
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
        this.$post(groupService.ALL_GROUPS, { type: '2,3' })
          .then(res => {
            console.log(res)
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
      }
    },
    created () {
      this.getTags()
      this.getGroup()
    },
    mounted () {
      if (this.type === 'edit') {
        this.outD = this.rule
        console.log(this.outD)
        this.analysisData()
      }
    }
  }
</script>

<style lang="scss">
  #cond-option {
    overflow: auto;
    max-height: 400px;
    ul {
      li {
        .option-box {
          background-color: #ccc;
          padding: 10px;
          .option_title {
            color: rgba(34, 34, 34, 1);
            height: 26px;
            line-height: 26px;
          }
          div {
            margin-bottom: 10px;
            .el-cascader, .el-select {
              width: 150px;
              height: 40px;
            }
            .el-select .el-input__inner {
              background-color: white;
            }
            .option-value {
              display: inline-block;
              .el-input, .el-select {
                width: 120px;
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
            }
          }
        }
        .orBtn {
          text-align: center;
          height: 48px;
          line-height: 48px;
        }

      }
    }
  }

</style>
