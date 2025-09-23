
/**
 * 该内容由工具生成，请勿手动修改
 * 如有疑问，请联系@wangyan
 */

import { generateParams, requestUtils } from "@/utils";
import {
  isQueryRef,
  vueQuery,
  type DecorationOptions,
  type DecorationParams,
  type GetTSelect,
} from "@/utils/query";
import { useMutation, type UseMutationOptions } from "@tanstack/vue-query";


export interface ApiResponse<T = Object>  {
/**
     * 响应结果状态 true成功 false失败
     */
  success?: boolean;
/**
     * 响应结果内容
     */
  base?: BaseResponse<T>;
/**
     * 错误信息描述
     */
  info?: string;
/**
     * 错误编号
     */
  errorNo?: string;
}

export interface ApiRequest<T = Object>  {
/**
     * 报文头
     */
  pHead?: PHead;
/**
     * 报文体
     */
  pBody?: T;
}

/**
 * 类名称：PageQuery
 * ********************************
 * <p>
 * 类描述：通用分页查询对象
 *
 * @author
 * @date 下午2:24
 */
export interface PageQuery<T = Object>  {
/**
     * serialVersionUID
     */
  serialVersionUID?: string;
/**
     * 当前页
     */
  pageNum?: number;
/**
     * 每页条数
     */
  pageSize?: number;
/**
     * 动态查询条件
     */
  query?: T;
/**
     * 当前记录起始索引 默认值
     */
  DEFAULT_PAGE_NUM?: number;
/**
     * 每页显示记录数 默认值 默认查全部
     */
  DEFAULT_PAGE_SIZE?: number;
/**
     * 排序列
     */
  orderByColumn?: string;
/**
     * 排序的方向desc或者asc
     */
  isAsc?: string;
}

export interface AdBannerReqDto  {
//    private Long size;
//    private Long current;
/**名称*/
  id?: string;
/**名称*/
  title?: string;
/**关键词*/
  keyword?: string;
/**图片url*/
  fileUrl?: string;
/*终端类型0PC 1H5 2APP*/
  terminalType?: number;
/*投放位置0首页1活动搜索页2公司介绍3我们的团队4我们的服务5新闻中心首页*/
  placementType?: number;
/*状态0已生效1待生效2已过期*/
  status?: number;
/*投放开始时间*/
  timeStart?: string;
/*投放结束时间*/
  timeEnd?: string;
/*跳转url*/
  redirectUrl?: string;
/*排序*/
  sortOrder?: number;
/*创建时间开始*/
  createTimeStart?: string;
/*创建时间结束*/
  createTimeEnd?: string;
  timeType?: string;
/*0未删除1已删除*/
//    @ApiModelProperty(value = "0未删除1已删除")
//    private Integer isDeleted;
  isDefault?: number;
  ids?: Array<string>;
}

export interface AdBannerResDto  {
/**名称*/
  id?: string;
  idStr?: string;
/**名称*/
  title?: string;
/*图片url*/
  fileUrl?: string;
/*终端类型0PC 1H5 2APP*/
  terminalType?: number;
/*投放位置0首页1活动搜索页2公司介绍3我们的团队4我们的服务5新闻中心首页*/
  placementType?: number;
/*状态0已生效1待生效2已过期*/
  status?: number;
/*投放开始时间*/
  timeStart?: string;
/*投放结束时间*/
  timeEnd?: string;
  time?: string;
/*跳转url*/
  redirectUrl?: string;
/*排序*/
  sortOrder?: number;
/*创建时间*/
//    @ApiModelProperty(value = "create_time")
//    private Date createTime;
/*更新时间*/
//    @ApiModelProperty(value = "update_time")
//    private Date updateTime;
/*是否为广告默认banner(1是, 0否)*/
  isDefault?: number;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface AuthUserReqDto  {
  username?: string;
  password?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-23
 */
export interface JwtUserDto  {
  user?: SysUser;
  dataScopes?: Array<string>;
  authorities?: Array<AuthorityDto>;
}

/**
 * 分页结果封装类
 * @author Zheng Jie
 * @date 2018-11-23
 * @param <T>
 */
export interface PageResult<T = Object>  {
/**
     * 当前页号
     */
  pageNum?: number;
/**
     * 每页行数
     */
  pageSize?: number;
/**
     * 总页数
     */
  pages?: string;
/**
     * 动态的内容
     */
  content?: Array<T>;
/**
     * 总记录数
     */
  totalElements?: string;
}

export interface ContentCmsArticleListResDto  {
  id?: string;
  title?: string;
  categoryId?: string;
  categoryName?: string;
  isPinned?: number;
  isRecommended?: number;
  isDraft?: number;
  publishType?: string;
  publishTime?: string;
  scheduledTime?: string;
}

export interface ContentCmsArticleListReqDto  {
  keyword?: string;
  status?: string;
}

/**
 * 文章管理表
 * @TableName content_cms_article
 */
export interface ContentCmsArticle extends BaseEntity  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 文章标题
     */
  title?: string;
/**
     * 内容摘要
     */
  summary?: string;
/**
     * 缩略图URL
     */
  thumbnail?: string;
/**
     * 新闻分类ID
     */
  categoryId?: string;
/**
     * 新闻分类名称
     */
  categoryName?: string;
/**
     * 是否置顶：0-否，1-是
     */
  isPinned?: number;
/**
     * 是否推荐：0-否，1-是
     */
  isRecommended?: number;
/**
     * 是否草稿：0-否，1-是
     */
  isDraft?: number;
/**
     * 发布方式：立即发布immediate，定时发布scheduled
     */
  publishType?: string;
/**
     * 定时发布时间--publishType=scheduled时使用
     */
  scheduledTime?: string;
/**
     * 新闻发布时间--publishType=immediate时使用
     */
  publishTime?: string;
/**
     * 文章作者ID
     */
  authorId?: string;
/**
     * 文章作者
     */
  authorName?: string;
/**
     * 排序值
     */
  sortOrder?: number;
/**
     * 文档来源
     */
  source?: string;
/**
     * 地址跳转链接
     */
  externalLink?: string;
/**
     * 文章内容
     */
  detail?: string;
/**
     * 审核状态：待审核pending、已通过approved、已拒绝rejected
     */
  reviewStatus?: string;
}

export interface ContentCmsArticleDetailReqDto  {
  id?: string;
}

export interface ContentCmsArticleSaveReqDto  {
  id?: string;
  title?: string;
  summary?: string;
  thumbnail?: string;
  categoryId?: string;
  isPinned?: number;
  isRecommended?: number;
  isDraft?: number;
  publishType?: string;
  scheduledTime?: string;
  authorName?: string;
  sortOrder?: number;
  source?: string;
  externalLink?: string;
  detail?: string;
  publishTime?: string;
}

export interface ContentCmsArticleDeletedReqDto  {
  ids?: Array<string>;
}

/**
 * 新闻Banner管理表
 * @TableName content_cms_banner
 */
export interface ContentCmsBanner extends BaseEntity  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 背景图URL
     */
  backgroundImage?: string;
/**
     * 主标题
     */
  title?: string;
/**
     * 副标题
     */
  subtitle?: string;
/**
     * 跳转链接
     */
  linkUrl?: string;
/**
     * 排序值（数字越小越靠前）
     */
  sortOrder?: number;
/**
     * 状态：0-禁用，1-启用
     */
  status?: number;
/**
     * 新闻分类目录ID
     */
  categoryId?: string;
/**
     * 新闻分类目录名称
     */
  categoryName?: string;
/**
     * 是否是新闻首页Banner：0-否，1-是
     */
  isForNewsHome?: number;
/**
     * 展示开始时间
     */
  startTime?: string;
/**
     * 展示结束时间
     */
  endTime?: string;
}

export interface ContentCmsBannerListReqDto  {
  keyword?: string;
  status?: string;
}

export interface ContentCmsBannerDetailReqDto  {
  id?: string;
}

export interface ContentCmsBannerSaveReqDto  {
  id?: string;
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  linkUrl?: string;
  sortOrder?: number;
  status?: number;
  categoryId?: string;
  isForNewsHome?: number;
}

export interface ContentCmsBannerDeletedReqDto  {
  id?: string;
}

/**
 * 新闻分类表
 * @TableName content_cms_category
 */
export interface ContentCmsCategory extends BaseEntity  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 分类名称
     */
  name?: string;
/**
     * 父分类ID(0表示一级分类)
     */
  parentId?: string;
/**
     * 分类描述
     */
  description?: string;
/**
     * 分类缩略图
     */
  thumbnail?: string;
/**
     * 排序权重(数字越小越靠前)
     */
  sortOrder?: number;
/**
     * 状态：0-禁用，1-启用
     */
  status?: number;
/**
     * 分类下的新闻数量
     */
  articleCount?: number;
}

export interface ContentCmsCategoryListReqDto  {
  keyword?: string;
  status?: string;
}

export interface ContentCmsCategoryDetailReqDto  {
  id?: string;
}

export interface ContentCmsCategorySaveReqDto  {
  id?: string;
  name?: string;
  sortOrder?: number;
  status?: number;
}

export interface ContentCmsCategoryDeletedReqDto  {
  id?: string;
}

export interface ContentVideosReqDto  {
//    private Long size;
//    private Long current;
/**名称*/
  id?: string;
/**名称*/
  name?: string;
/*视频简介*/
  remark?: string;
/*商家id*/
  merchantId?: string;
/*商家名称*/
  merchantName?: string;
//    /*商家注册时间*/
//    @ApiModelProperty(value = "商家注册时间")
//    private Date merchantRegistTime;
//
//    /*商家认证时间*/
//    @ApiModelProperty(value = "商家认证时间")
//    private Date merchantVerifyTime;
/*0未关联1待审核2已通过3已拒绝*/
  auditStatus?: number;
/*审核原因*/
  auditDesc?: string;
//    /*审核人员id*/
//    @ApiModelProperty(value = "审核人员id")
//    private Long auditAdminId;
//
//    /*审核人员名称*/
//    @ApiModelProperty(value = "审核人员名称")
//    private String auditAdminName;
/*审核时间*/
//    @ApiModelProperty(value = "审核时间")
//    private Date auditTime;
//    /*视频时长（秒）*/
//    @ApiModelProperty(value = "视频时长（秒）")
//    private Integer durationTime;
//
//    /*文件大小（字节）*/
//    @ApiModelProperty(value = "文件大小（字节）")
//    private Integer fileSize;
//
//    /*视频分辨率*/
//    @ApiModelProperty(value = "视频分辨率")
//    private String resolutionPx;
//
//    /*视频格式*/
//    @ApiModelProperty(value = "视频格式")
//    private String format;
/*关联活动id*/
  eventId?: string;
/*排序字段*/
  sortOrder?: number;
}

export interface CustomerServiceListResDto  {
  id?: string;
  index?: number;
  nickName?: string;
  username?: string;
  phone?: string;
  email?: string;
  addTime?: string;
  status?: string;
  userId?: string;
/**
     * 客服类型：normal-普通客服, supervisor-客服主管
     */
  serviceType?: string;
/**
     * 默认最大会话数量
     */
  defaultMaxSessions?: number;
/**
     * 正在聊天的个数
     */
  currentChatCount?: number;
}

export interface CustomerServiceListReqDto  {
  nickname?: string;
  username?: string;
}

export interface CustomerServiceAddReqDto  {
  customerServiceBaseDtoList?: Array<CustomerServiceBaseDto>;
}

export interface CustomerServiceCommonReqDto  {
  id?: string;
}

export interface CustomerServiceTransferChantReqDto  {
  toCustomerUserId?: string;
/**
     * 会话ID
     */
  conversationId?: string;
  terminalType?: string;
}

export interface CustomerServiceAssignResDto  {
  id?: string;
  index?: number;
  nickName?: string;
  username?: string;
  phone?: string;
  email?: string;
  addTime?: string;
  status?: string;
  userId?: string;
/**
     * 客服类型：normal-普通客服, supervisor-客服主管
     */
  serviceType?: string;
/**
     * 默认最大会话数量
     */
  defaultMaxSessions?: number;
/**
     * 正在聊天的个数
     */
  currentChatCount?: number;
}

export interface CustomerServiceSettingAddReqDto  {
/**
     * 自动断开会话时间(分钟数)
     */
  autoDisconnectMinutes?: number;
/**
     * 会话最长持续时间(分钟数)
     */
  maxSessionDuration?: number;
/**
     * 默认最大会话数量
     */
  defaultMaxSessions?: number;
/**
     * 上班开始时间
     */
  workStartTime?: string;
/**
     * 上班结束时间
     */
  workEndTime?: string;
/**
     * 格式：1,2,3,4,5 (1-7表示周一到周日)
     */
  workDays?: string;
/**
     * 默认头像URL
     */
  defaultAvatar?: string;
/**
     * 默认昵称
     */
  defaultNickname?: string;
}

/**
 * 客服会话设置表
 *
 * @TableName customer_service_setting
 */
export interface CustomerServiceSetting extends BaseEntityWithoutDeleted  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 会话默认头像URL
     */
  defaultAvatar?: string;
/**
     * 会话默认昵称
     */
  defaultNickname?: string;
/**
     * 自动断开会话时间(分钟数)
     */
  autoDisconnectMinutes?: number;
/**
     * 会话最长持续时间(分钟数)
     */
  maxSessionDuration?: number;
/**
     * 默认最大会话数量
     */
  defaultMaxSessions?: number;
/**
     * 历史会话保存时长(天数)
     */
  historyRetentionDays?: number;
/**
     * 工作时间内自动欢迎语内容
     */
  workHoursWelcomeMsg?: string;
/**
     * 非工作时间默认欢迎语内容
     */
  nonWorkHoursWelcomeMsg?: string;
/**
     * 自动欢迎语开关
     */
  workHoursWelcomeEnabled?: boolean;
/**
     * 排队提醒内容
     */
  queueReminderMsg?: string;
/**
     * 排队提醒开关
     */
  queueReminderEnabled?: boolean;
}

export interface CustomerServiceSettingEditReqDto  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 自动断开会话时间(分钟数)
     */
  autoDisconnectMinutes?: number;
/**
     * 会话最长持续时间(分钟数)
     */
  maxSessionDuration?: number;
/**
     * 默认最大会话数量
     */
  defaultMaxSessions?: number;
/**
     * 上班开始时间
     */
  workStartTime?: string;
/**
     * 上班结束时间
     */
  workEndTime?: string;
/**
     * 格式：1,2,3,4,5 (1-7表示周一到周日)
     */
  workDays?: string;
/**
     * 默认头像URL
     */
  defaultAvatar?: string;
/**
     * 默认昵称
     */
  defaultNickname?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface DeptListResDto  {
/**
     * ID
     */
  id?: string;
  idStr?: string;
/**
     * 上级部门
     */
  pid?: string;
  pidStr?: string;
  subCount?: number;
  userCount?: number;
/**
     * 名称
     */
  name?: string;
/**
     * 排序
     */
  deptSort?: number;
/**
     * 状态
     */
  enabled?: boolean;
/**
     * 创建者
     */
  createBy?: string;
/**
     * 更新者
     */
  updateBy?: string;
/**
     * 创建日期
     */
  createTime?: string;
/**
     * 更新时间
     */
  updateTime?: string;
  children?: Array<SysDept>;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface DeptListReqDto  {
//    @NotBlank(message = "部门名称不能为空")
  deptName?: string;
}

/**
 * 部门表
 * @TableName sys_dept
 */
export interface SysDept extends BaseEntity  {
/**
     * ID
     */
  id?: string;
/**
     * 上级部门
     */
  pid?: string;
/**
     * 子部门数目
     */
  subCount?: number;
//    @NotBlank(message = "上级部门不能为空")
/**
     * 用户数
     */
  userCount?: number;
/**
     * 名称
     */
  name?: string;
/**
     * 排序
     */
  deptSort?: number;
/**
     * 状态
     */
  enabled?: boolean;
  children?: Array<SysDept>;
  idStr?: string;
  pidStr?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface DeptSuperiorReqDto  {
  id?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface DeptAddReqDto  {
  deptName?: string;
//    @NotBlank(message = "上级部门不能为空")
  pid?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface DeptEditReqDto  {
  deptName?: string;
//    @NotBlank(message = "上级部门不能为空")
  pid?: string;
/**
     * ID
     */
  id?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface DeptDelReqDto  {
/**
     * 部门ID集合
     */
  ids?: Array<string>;
}

/**
 * 字典类型表
 * @TableName sys_dict_type
 */
export interface SysDictType  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 字典名称
     */
  dictName?: string;
/**
     * 字典类型
     */
  dictType?: string;
/**
     * 状态（0正常 1停用）
     */
  status?: string;
/**
     * 创建者
     */
  createBy?: string;
/**
     * 创建时间
     */
  createTime?: string;
/**
     * 更新者
     */
  updateBy?: string;
/**
     * 更新时间
     */
  updateTime?: string;
/**
     * 备注
     */
  remark?: string;
}

/**
 * 字典数据表
 * @TableName sys_dict_data
 */
export interface SysDictData  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 字典排序
     */
  dictSort?: number;
/**
     * 字典标签
     */
  dictLabel?: string;
/**
     * 字典键值
     */
  dictValue?: string;
/**
     * 字典类型
     */
  dictType?: string;
/**
     * 样式属性（其他样式扩展）
     */
  cssClass?: string;
/**
     * 表格回显样式
     */
  listClass?: string;
/**
     * 是否默认（Y是 N否）
     */
  isDefault?: string;
/**
     * 状态（0正常 1停用）
     */
  status?: string;
/**
     * 创建者
     */
  createBy?: string;
/**
     * 创建时间
     */
  createTime?: string;
/**
     * 更新者
     */
  updateBy?: string;
/**
     * 更新时间
     */
  updateTime?: string;
/**
     * 备注
     */
  remark?: string;
}

export interface EventCategoryReqDto  {
/**名称*/
  id?: string;
/**名称*/
  name?: string;
/*上级活动分类ID*/
  pid?: string;
/*分类级别(1一级 2二级 3三级)*/
  level?: number;
/*排序*/
  sortOrder?: number;
/*图标*/
  icon?: string;
/*状态(1启用 0禁用)*/
  status?: number;
}

/**
 * 活动分页请求DTO
 */
export interface EventPageReqDto  {
  ids?: Array<string>;
  keyword?: string;
  actCode?: string;
  status?: string;
  statusList?: Array<string>;
  publishStatus?: string;
}

/**
 * 活动分页请求DTO
 */
export interface EventReviewReqDto  {
  id?: string;
  isGroup?: boolean;
  status?: string;
  reason?: string;
}

export interface EventForceOffReqDto  {
  id?: string;
  isGroup?: boolean;
  reason?: string;
}

/**
 * 活动请求DTO
 * 用于接收前端创建或更新活动的请求数据
 */
export interface EventResDto  {
  id?: string;
  tenantId?: string;
  title?: string;
  coverImage?: string;
  actCode?: string;
  actCodeName?: string;
  currencyCode?: string;
  industryCode?: string;
  industryName?: string;
  startTime?: string;
  endTime?: string;
  continentCode?: string;
  countryCode?: string;
  provinceCode?: string;
  cityCode?: string;
  continentName?: string;
  countryName?: string;
  provinceName?: string;
  cityName?: string;
  detailAddress?: string;
  longitude?: number;
  latitude?: number;
  maxAttendees?: number;
  venueArea?: number;
  exhibitorsNum?: number;
  detailContent?: string;
  guests?: Array<EventGuest>;
  coOrganizers?: Array<EventCoOrganizer>;
  registrationForms?: Array<EventRegistrationFormResDto>;
  itineraries?: Array<EventItineraryResDto>;
  costDescriptions?: Array<EventCostDescriptionResDto>;
  childPolicies?: Array<EventChildPolicy>;
  extraCosts?: Array<EventExtraCost>;
  purchaseNote?: EventPurchaseNoteResDto;
  tickets?: Array<EventTicket>;
  currency?: SysCurrency;
}

/**
 * 活动详情请求参数
 * @author wangyong
 */
export interface EventDetailReqDto  {
  id?: string;
}

/**
 * 活动组合响应DTO
 */
export interface EventGroupResDto  {
  id?: string;
  title?: string;
  coverImage?: string;
  description?: string;
  status?: string;
  tenantId?: string;
  continentCode?: string;
  countryCode?: string;
  provinceCode?: string;
  cityCode?: string;
  continentName?: string;
  countryName?: string;
  provinceName?: string;
  cityName?: string;
  detailAddress?: string;
  longitude?: number;
  latitude?: number;
  maxAttendees?: number;
  exhibitorsNum?: number;
  detailContent?: string;
  createTime?: string;
  updateTime?: string;
  industrys?: Array<Record<string,string>>;
  industryCode?: Array<string>;
  groupSessions?: Array<EventGroupSessionResDto>;
}

/**
 * 退改模板
 *
 * @TableName event_refund_template
 */
export interface EventRefundTemplate extends BaseEntity  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 模板名称
     */
  title?: string;
/**
     * 状态（0=启用，1=禁用）
     */
  status?: number;
/**
     * 使用次数
     */
  usesNum?: number;
}

export interface EventRefundTemplateListReqDto  {
  keyword?: string;
}

export interface EventRefundTemplateResDto  {
  id?: string;
  title?: string;
  status?: number;
  refundRules?: Array<EventRefundRuleTemplateResDto>;
}

export interface EventRefundTemplateDetailReqDto  {
  id?: string;
}

export interface EventRefundTemplateReqDto  {
  id?: string;
  title?: string;
  status?: number;
  refundRules?: Array<EventRefundRuleTemplateReqDto>;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * 构建前端路由时用到
 * @author Zheng Jie
 * @date 2018-12-20
 */
export interface MenuVo  {
  name?: string;
  path?: string;
  hidden?: boolean;
  redirect?: string;
  component?: string;
  alwaysShow?: boolean;
  meta?: MenuMetaVo;
  icon?: string;
  permission?: string;
  children?: Array<MenuVo>;
}

/**
 * 系统菜单表
 * @TableName sys_menu
 */
export interface SysMenu extends BaseEntity  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 上级菜单ID
     */
  pid?: string;
/**
     * 子菜单数目
     */
  subCount?: number;
/**
     * 菜单类型
     */
  type?: number;
/**
     * 菜单标题
     */
  title?: string;
/**
     * 组件名称
     */
/*
    @TableField(value = "name")
    private String name;*/
  componentName?: string;
/**
     * 组件
     */
  component?: string;
/**
     * 排序
     */
  menuSort?: number;
/**
     * 图标
     */
  icon?: string;
/**
     * 链接地址
     */
  path?: string;
/**
     * 是否外链
     */
  iFrame?: boolean;
/**
     * 缓存
     */
  cache?: boolean;
/**
     * 隐藏
     */
  hidden?: boolean;
/**
     * 权限
     */
  permission?: string;
  children?: Array<SysMenu>;
  idStr?: string;
  pidStr?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface MenuListReqDto  {
// 菜单名称
  title?: string;
  type?: number;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface MenuDetailReqDto  {
/**
     * 主键ID
     */
  id?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface MenuAddReqDto  {
/**
     * 上级菜单ID
     */
  pid?: string;
/**
     * 菜单类型
     */
  type?: number;
/**
     * 菜单标题
     */
  title?: string;
/**
     * 图标
     */
  icon?: string;
/**
     * 排序
     */
  menuSort?: number;
/**
     * 隐藏
     */
  hidden?: boolean;
  componentName?: string;
/**
     * 是否外链
     */
  iFrame?: boolean;
/**
     * 链接地址
     */
  path?: string;
/**
     * 权限
     */
  permission?: string;
/**
     * 组件
     */
  component?: string;
/**
     * 适用类型(1-商家通用 2-企业独用 3-个人认证独有)
     */
  scopeType?: number;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface MenuEditReqDto  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 上级菜单ID
     */
  pid?: string;
/**
     * 菜单类型
     */
  type?: number;
/**
     * 菜单标题
     */
  title?: string;
/**
     * 图标
     */
  icon?: string;
/**
     * 排序
     */
  menuSort?: number;
/**
     * 隐藏
     */
  hidden?: boolean;
  componentName?: string;
/**
     * 是否外链
     */
  iFrame?: boolean;
/**
     * 链接地址
     */
  path?: string;
/**
     * 权限
     */
  permission?: string;
/**
     * 组件
     */
  component?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface MenuDelReqDto  {
/**
     * 主键ID集合
     */
  ids?: Array<string>;
}

/**
 * 平台端管理的商家菜单表
 *
 * @TableName permission_merchant_menu
 */
export interface PermissionMerchantMenu extends BaseEntity  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 上级菜单ID
     */
  pid?: string;
/**
     * 子菜单数目
     */
  subCount?: number;
/**
     * 菜单类型
     */
  type?: number;
/**
     * 菜单标题
     */
  title?: string;
/**
     * 组件名称
     */
  name?: string;
/**
     * 组件
     */
  component?: string;
/**
     * 排序
     */
  menuSort?: number;
/**
     * 图标
     */
  icon?: string;
/**
     * 链接地址
     */
  path?: string;
/**
     * 是否外链
     */
  iFrame?: boolean;
/**
     * 缓存
     */
  cache?: boolean;
/**
     * 隐藏
     */
  hidden?: boolean;
/**
     * 权限
     */
  permission?: string;
/**
     * 适用类型(1-商家通用 2-企业独用 3-个人认证独有)
     */
  scopeType?: number;
  children?: Array<PermissionMerchantMenu>;
  idStr?: string;
  pidStr?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface MerchantMenuListReqDto  {
// 菜单名称
  title?: string;
  type?: number;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface MerchantMenuDetailReqDto  {
/**
     * 主键ID
     */
  id?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface MerchantMenuAddReqDto  {
/**
     * 上级菜单ID
     */
  pid?: string;
/**
     * 菜单类型
     */
  type?: number;
/**
     * 菜单标题
     */
  title?: string;
/**
     * 图标
     */
  icon?: string;
/**
     * 排序
     */
  menuSort?: number;
/**
     * 隐藏
     */
  hidden?: boolean;
  componentName?: string;
/**
     * 是否外链
     */
  iFrame?: boolean;
/**
     * 链接地址
     */
  path?: string;
/**
     * 权限
     */
  permission?: string;
/**
     * 组件
     */
  component?: string;
/**
     * 适用类型(1-商家通用 2-企业独用 3-个人认证独有)
     */
  scopeType?: number;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface MerchantMenuEditReqDto  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 上级菜单ID
     */
  pid?: string;
/**
     * 菜单类型
     */
  type?: number;
/**
     * 菜单标题
     */
  title?: string;
/**
     * 图标
     */
  icon?: string;
/**
     * 排序
     */
  menuSort?: number;
/**
     * 隐藏
     */
  hidden?: boolean;
  componentName?: string;
/**
     * 是否外链
     */
  iFrame?: boolean;
/**
     * 链接地址
     */
  path?: string;
/**
     * 权限
     */
  permission?: string;
/**
     * 组件
     */
  component?: string;
/**
     * 适用类型(1-商家通用 2-企业独用 3-个人认证独有)
     */
  scopeType?: number;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface MerchantMenuDelReqDto  {
/**
     * 主键ID集合
     */
  ids?: Array<string>;
}

export interface NotifyTemplatesReqDto  {
//    private Long size;
//    private Long current;
/**ID*/
  id?: string;
/**名称*/
  name?: string;
/*站内信(1启用 0禁用)*/
  sendWebsite?: number;
/*邮箱(1启用 0禁用)*/
  sendMail?: number;
/*国内短信(1启用 0禁用)*/
  sendHomeSms?: number;
/*国外短信(1启用 0禁用)*/
  sendAbroadSms?: number;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * 在线用户
 * @author Zheng Jie
 */
export interface OnlineUserDto  {
  uid?: string;
  userName?: string;
  nickName?: string;
  dept?: string;
  browser?: string;
  ip?: string;
  address?: string;
  key?: string;
  loginTime?: string;
}

/**
 * 系统平台配置表
 * @TableName sys_platform_config
 */
export interface SysPlatformConfig  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 平台Logo的URL或存储路径
     */
  platformLogo?: string;
/**
     * 平台名称
     */
  platformName?: string;
/**
     * 平台描述
     */
  platformDescription?: string;
/**
     * 联系电话
     */
  contactPhone?: string;
/**
     * 联系邮箱
     */
  contactEmail?: string;
/**
     * 公司地址
     */
  companyAddress?: string;
/**
     * 版权信息
     */
  copyrightInfo?: string;
/**
     * 创建者
     */
  createBy?: string;
/**
     * 更新者
     */
  updateBy?: string;
/**
     * 创建日期
     */
  createTime?: string;
/**
     * 更新时间
     */
  updateTime?: string;
}

/**
 * 角色表
 *
 * @TableName sys_role
 */
export interface SysRole extends BaseEntity  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 名称
     */
  name?: string;
/**
     * 角色级别
     */
  level?: number;
/**
     * 描述
     */
  description?: string;
/**
     * 数据权限
     */
  dataScope?: string;
/**
     * 用户数
     */
  userCount?: number;
  menus?: Array<SysMenu>;
  depts?: Array<SysDept>;
  idStr?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface RoleListReqDto  {
/*    @NotBlank(message = "部门名称不能为空")
    @ApiModelProperty(value = "部门名称")
    private String deptName;

//    @NotBlank(message = "上级部门不能为空")
    @ApiModelProperty(value = "上级部门ID")
    private Long pid;*/
//
  name?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface RoleAddReqDto  {
/*    @NotBlank(message = "部门名称不能为空")
    @ApiModelProperty(value = "部门名称")
    private String deptName;

//    @NotBlank(message = "上级部门不能为空")
    @ApiModelProperty(value = "上级部门ID")
    private Long pid;*/
//
//private Long id;
// 角色名称
  name?: string;
// 角色描述
  description?: string;
// 角色优先级
  level?: number;
// 添加权限
  dataScope?: string;
  deptIds?: Array<string>;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface RoleEditReqDto  {
/*    @NotBlank(message = "部门名称不能为空")
    @ApiModelProperty(value = "部门名称")
    private String deptName;

//    @NotBlank(message = "上级部门不能为空")
    @ApiModelProperty(value = "上级部门ID")
    private Long pid;*/
//
  id?: string;
// 角色名称
  name?: string;
// 角色描述
  description?: string;
// 角色优先级
  level?: number;
// 添加权限
  dataScope?: string;
/*    @ApiModelProperty(value = "菜单", hidden = true)
    private Set<SysMenu> menus;*/
  deptIds?: Array<string>;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface RoleMenuEditReqDto  {
/*    @NotBlank(message = "部门名称不能为空")
    @ApiModelProperty(value = "部门名称")
    private String deptName;

//    @NotBlank(message = "上级部门不能为空")
    @ApiModelProperty(value = "上级部门ID")
    private Long pid;*/
//
  id?: string;
  dataScope?: string;
  menuIds?: Array<string>;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface RoleDelReqDto  {
/*    @NotBlank(message = "部门名称不能为空")
    @ApiModelProperty(value = "部门名称")
    private String deptName;

//    @NotBlank(message = "上级部门不能为空")
    @ApiModelProperty(value = "上级部门ID")
    private Long pid;*/
//
  ids?: Array<string>;
}

export interface SubscribeResDto  {
  serialNumber?: string;
  id?: string;
  name?: string;
  phone?: string;
  email?: string;
  suggestion?: string;
  createTime?: string;
/**
     * 订阅类型(subscribe-订阅,suggestion-建议)
     */
  type?: string;
}

export interface SubscribeReqDto  {
/*    @ApiModelProperty(value = "用户名称")
    private String name;
    @ApiModelProperty(value = "用户手机")
    private String phone;
    @ApiModelProperty(value = "用户邮箱")
    private String email;*/
  keyword?: string;
  type?: string;
}

export interface SubscribeStatisticsResDto  {
  totalSubscriptions?: string;
  newSubscriptionsLastMonth?: string;
  newSubscriptionsToday?: string;
  newSubscriptionsYesterday?: string;
  newSubscriptionsLastWeek?: string;
  newSubscriptionsThisWeek?: string;
  newSubscriptionsThisWeekPercent?: number;
  newSubscriptionsYesterdayPercent?: number;
}

export interface SubscribeSendMessageReqDto  {
  userIds?: Array<string>;
/**
     * 批量群发/全部群发
     */
  batchType?: number;
  sendType?: string;
  message?: string;
}

export interface TOrderEventPageResDto  {
  id?: string;
  orderNo?: string;
  buyerName?: string;
  buyerPhone?: string;
  totalAmount?: number;
  actualAmount?: number;
  tenantName?: string;
  paymentMethod?: number;
  status?: number;
  payTime?: string;
  createTime?: string;
  transactionId?: string;
  eventInfo?: Array<TOrderEventPageEventInfoResDto>;
}

export interface TOrderListReqDto  {
  keyword?: string;
  startTime?: string;
  endTime?: string;
}

export interface TOrderMemberPageResDto  {
  id?: string;
  orderNo?: string;
  buyerName?: string;
  buyerPhone?: string;
  createTime?: string;
  actualAmount?: number;
  memberType?: number;
}

export interface UserContactFormListResDto  {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  continentCode?: string;
  countryCode?: string;
  provinceCode?: string;
  cityCode?: string;
  location?: string;
  message?: string;
  submitTime?: string;
}

export interface UserContactFormListReqDto  {
  name?: string;
  email?: string;
  phone?: string;
}

export interface UserContactFormDetailResDto  {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  continentCode?: string;
  countryCode?: string;
  provinceCode?: string;
  cityCode?: string;
  location?: string;
  message?: string;
  submitTime?: string;
}

export interface UserContactFormDetailDto  {
  id?: string;
}

export interface UserContactFormDeletedDto  {
  id?: string;
}

export interface UserContactFormBatchDeletedDto  {
  ids?: Array<string>;
}

/**
 * 系统用户表
 * @TableName sys_user
 */
export interface SysUser extends BaseEntity  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 部门名称
     */
  deptId?: string;
/**
     * 用户名
     */
  username?: string;
/**
     * 昵称
     */
  nickName?: string;
/**
     * 性别
     */
  gender?: string;
/**
     * 手机号码
     */
  phone?: string;
/**
     * 邮箱
     */
  email?: string;
/**
     * 头像地址
     */
/*    @ApiModelProperty(value = "菜单", hidden = true)
    private Set<SysMenu> menus;*/
  avatarName?: string;
/**
     * 头像真实路径
     */
  avatarPath?: string;
/**
     * 密码
     */
  password?: string;
/**
     * 是否为admin账号
     */
  isAdmin?: boolean;
/**
     * 状态：1启用、0禁用
     */
  enabled?: boolean;
/**
     * 修改密码的时间
     */
  pwdResetTime?: string;
  dept?: SysDept;
  deptName?: string;
  roles?: Array<SysRole>;
  idStr?: string;
  deptIdStr?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface UserListReqDto  {
// 员工名称
  username?: string;
// 部门名称
/*    @ApiModelProperty(value = "部门名称")
    private String deptName;*/
  deptId?: string;
  roleId?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface UserAddReqDto  {
/*    @NotBlank(message = "部门名称不能为空")
    @ApiModelProperty(value = "部门名称")
    private String deptName;

//    @NotBlank(message = "上级部门不能为空")
    @ApiModelProperty(value = "上级部门ID")
    private Long pid;*/
  nickName?: string;
// 员工账号
/*    @ApiModelProperty(value = "角色名称")
    private String roleName;*/
  username?: string;
// 手机号
  phone?: string;
// 员工邮箱
  email?: string;
// 密码
//private String password;
// 部门ID
  deptId?: string;
// 角色ID集合
  roleIds?: Array<string>;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface UserEditReqDto  {
/*    @NotBlank(message = "部门名称不能为空")
    @ApiModelProperty(value = "部门名称")
    private String deptName;

//    @NotBlank(message = "上级部门不能为空")
    @ApiModelProperty(value = "上级部门ID")
    private Long pid;*/
// 用户ID
  id?: string;
// 员工名称
  username?: string;
  nickName?: string;
// 手机号
  phone?: string;
// 员工邮箱
  email?: string;
/*    // 密码
    @ApiModelProperty(value = "密码")
    private String password;*/
// 部门ID
  deptId?: string;
// 角色ID集合
  roleIds?: Array<string>;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface UserToggleEnabledReqDto  {
  id?: string;
  enabled?: boolean;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * 修改个人中心
 * @author Zheng Jie
 * @date 2019年7月11日13:59:49
 */
export interface UserUpdateCenterReqDto  {
  id?: string;
  phone?: string;
/**
   * 昵称
   */
  nickName?: string;
/**
     * 性别
     */
  gender?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface UserDelReqDto  {
  ids?: Array<string>;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * 修改密码的 Vo 类
 * @author Zheng Jie
 * @date 2019年7月11日13:59:49
 */
export interface UserPassReqDto  {
  oldPass?: string;
  newPass?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface UserResetPwdReqDto  {
  ids?: Array<string>;
}

export interface UserMemberListResDto  {
  id?: string;
  userId?: string;
  userName?: string;
  memberType?: number;
  sex?: number;
  companyName?: string;
  position?: string;
  phonePrefix?: string;
  phoneNumber?: string;
  socialType?: string;
  socialAccount?: string;
  socialAccountUrl?: string;
  memberStartDate?: string;
  memberEndDate?: string;
  email?: string;
  status?: number;
}

export interface UserMemberListReqDto  {
  keyword?: string;
  phoneNumber?: string;
}

export interface UserSysUserListResDto  {
  id?: string;
  nickName?: string;
  email?: string;
  phone?: string;
  totalConsumptionCount?: number;
  totalConsumptionAmount?: number;
  totalParticipationCount?: number;
  createTime?: string;
  enabled?: number;
}

export interface UserSysUserListReqDto  {
  keyword?: string;
  id?: string;
  name?: string;
  phone?: string;
  email?: string;
  startTime?: string;
  endTime?: string;
  enabled?: number;
}

export interface UserSysUserDetailResDto  {
  id?: string;
  nickName?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  loginDate?: string;
  createTime?: string;
  enabled?: number;
  numberOfParticipation?: number;
  cost?: number;
  numberOfViews?: string;
  numberOfCollections?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
export interface UserSysUserDetailReqDto  {
/**
     * 主键ID
     */
  id?: string;
}

/**
 * 用户订单历史记录响应DTO
 * 用于在管理后台展示指定用户的订单列表中的单条记录
 */
export interface UserSysUserOrderResDto  {
  id?: string;
  orderNo?: string;
  eventTitle?: Array<string>;
  payTime?: string;
  actualAmount?: number;
  status?: number;
}

export interface UserSysUserOrderReqDto  {
  userId?: string;
  keyword?: string;
}

export interface UserSysUserCollectionResDto  {
  title?: string;
  coverImage?: string;
  startTime?: string;
}

export interface UserSysUserViewHistoryResDto  {
  title?: string;
  coverImage?: string;
  startTime?: string;
}

export interface BaseResponse<T = Object>  {
/**
     * 响应结果报文头
     */
  pHead?: PHead;
/**
     * 响应结果报文内容
     */
  pBody?: T;
}

export interface PHead  {
/**
     * 机构简称
     */
  instId?: string;
/**
     * 业务类型
     */
  type?: string;
/**
     * 报文ID
     */
  msgId?: string;
/**
     * 报文时间
     */
  msgTime?: string;
/**
     * 业务平台
     */
  msgPlat?: string;
/**
     * 报文发起人
     */
  msgUser?: string;
/**
     * 客户端IP
     */
  msgIp?: string;
/**
     * 服务端IP
     */
  msgServerIp?: string;
/**
     * 安全配置号
     */
  secId?: string;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * 避免序列化问题
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface AuthorityDto  {
  authority?: string;
}

/**
 * 通用字段， is_del 根据需求自行添加
 *
 * @author Zheng Jie
 * @date 2019年10月24日20:46:32
 */
export interface BaseEntity  {
  createBy?: string;
  updateBy?: string;
  createTime?: string;
  updateTime?: string;
// 使用 MyBatis Plus 的逻辑删除注解
  isDeleted?: boolean;
}

export interface CustomerServiceBaseDto  {
  userId?: string;
  nickName?: string;
  serviceType?: string;
}

/**
 * 通用字段，不包含逻辑删除字段
 *
 * @author
 * @date
 */
export interface BaseEntityWithoutDeleted  {
  createBy?: string;
  updateBy?: string;
  createTime?: string;
  updateTime?: string;
}

/**
 * 活动嘉宾表
 * @TableName event_guest
 */
export interface EventGuest  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 关联活动ID
     */
  eventId?: string;
/**
     * 姓名
     */
  name?: string;
/**
     * 活动身份
     */
  role?: string;
/**
     * 头衔/职位
     */
  title?: string;
/**
     * 所属公司/组织
     */
  company?: string;
/**
     * 头像URL
     */
  avatarUrl?: string;
/**
     * 嘉宾简介
     */
  bio?: string;
}

/**
 * 活动协办单位表
 * @TableName event_co_organizer
 */
export interface EventCoOrganizer  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 关联活动ID
     */
  eventId?: string;
/**
     * 组织名称
     */
  orgName?: string;
/**
     * 联系人
     */
  contactPerson?: string;
/**
     * 联系电话
     */
  contactPhone?: string;
/**
     * 联系邮箱
     */
  contactEmail?: string;
/**
     * 组织简介
     */
  description?: string;
/**
     * 组织logo URL
     */
  logoUrl?: string;
/**
     * 单位类型(host:承办单位,cohost:协办单位,advisor:指导单位)
     */
  orgType?: string;
}

/**
 * 活动报名表单配置DTO
 */
export interface EventRegistrationFormResDto  {
  id?: string;
  eventId?: string;
  labelName?: string;
  labelType?: string;
  placeholder?: string;
  componentType?: string;
  sortOrder?: number;
  isRequired?: number;
  options?: Array<EventRegistrationOptionResDto>;
}

/**
 * 行程DTO
 * 用于展示活动关联的行程信息
 */
export interface EventItineraryResDto  {
  id?: string;
  title?: string;
  travelDate?: string;
  dayNumber?: number;
  componentsStatus?: Record<string, any>;
  eventAssemblies?: Array<EventAssembly>;
  eventMeals?: Array<EventMeal>;
  eventAccommodations?: Array<EventAccommodation>;
  eventAttractions?: Array<EventAttractionResDto>;
  eventExperiences?: Array<EventExperienceResDto>;
  eventTransports?: Array<EventTransport>;
  eventFreeTimes?: Array<EventFreeTime>;
  eventDismissals?: Array<EventDismissal>;
}

/**
 * 活动费用描述表
 * @TableName event_cost_description
 */
export interface EventCostDescriptionResDto  {
  id?: string;
  tenantId?: string;
  eventId?: string;
  costType?: string;
  descriptionId?: string;
  description?: string;
}

/**
 * 活动儿童政策表
 *
 * @TableName event_child_policy
 */
export interface EventChildPolicy extends BaseEntity  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 关联活动ID
     */
  eventId?: string;
/**
     * 条件类型：SINGLE_AGE(单独年龄), SINGLE_HEIGHT(单独身高),
     * AGE_AND_HEIGHT(年龄且身高), AGE_OR_HEIGHT(年龄或身高)
     */
  conditionType?: string;
/**
     * 年龄上限
     */
  ageUpperLimit?: number;
/**
     * 年龄下限
     */
  ageLowerLimit?: number;
/**
     * 身高上限
     */
  heightUpperLimit?: number;
/**
     * 身高下限
     */
  heightLowerLimit?: number;
/**
     * 补充信息
     */
  additionalInfo?: string;
}

/**
 * 活动自费项目表
 *
 * @TableName event_extra_cost
 */
export interface EventExtraCost extends BaseEntity  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 关联活动ID
     */
  eventId?: string;
/**
     * 地点
     */
  location?: string;
/**
     * 商品内容
     */
  itemContent?: string;
/**
     * 停留时间
     */
  stayDuration?: string;
/**
     * 参考价格
     */
  referencePrice?: number;
}

/**
 * 活动购买须知 DTO
 */
export interface EventPurchaseNoteResDto  {
  refundType?: string;
  partialRefund?: number;
  ruleType?: string;
  refundTemplateId?: string;
  additionalRules?: string;
  usageGuide?: string;
  precautions?: string;
  refundRules?: Array<EventRefundRule>;
}

/**
 * 活动票务主表
 * @TableName event_ticket
 */
export interface EventTicket extends BaseEntity  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 关联活动ID
     */
  eventId?: string;
/**
     * 票务名称
     */
  name?: string;
/**
     * 票种类别(standard:标准票,early_bird:早鸟票,group:团体票,free:免费票)
     */
  type?: string;
/**
     * 票价(免费票为0)
     */
  price?: number;
/**
     * 总票数
     */
  totalQuantity?: number;
/**
     * 每人限购数量(NULL表示不限购)
     */
  limitPerUser?: number;
/**
     * 团体票最低成团人数(仅团体票需要)
     */
  minGroupSize?: number;
/**
     * 开售时间
     */
  saleStartTime?: string;
/**
     * 停售时间
     */
  saleEndTime?: string;
/**
     * 是否启用(1:启用,0:禁用)
     */
  isActive?: number;
/**
     * 票种说明
     */
  description?: string;
}

/**
 * 币种信息表
 * @TableName sys_currency
 */
export interface SysCurrency  {
/**
     * 主键ID
     */
  id?: string;
/**
     * ISO 4217三位币种代码(如:CNY)
     */
  currencyCode?: string;
/**
     * 币种名称(如:人民币)
     */
  currencyName?: string;
/**
     * 币种符号(如:¥)
     */
  currencySymbol?: string;
/**
     * 状态(0-禁用,1-启用)
     */
  status?: number;
/**
     * 全局显示顺序
     */
  displayOrder?: number;
/**
     * 是否为默认币种(1是, 0否)
     */
  isDefault?: number;
/**
     * 语言代码
     */
  languageCode?: string;
/**
     * 创建者
     */
  createBy?: string;
/**
     * 创建时间
     */
  createTime?: string;
/**
     * 更新者
     */
  updateBy?: string;
/**
     * 更新时间
     */
  updateTime?: string;
/**
     * 逻辑删除标记（0-未删除，1-已删除）
     */
  isDeleted?: number;
}

export interface EventGroupSessionResDto  {
  id?: string;
  sessionType?: string;
  title?: string;
  image?: string;
  brief?: string;
  overview?: string;
  events?: Array<EventMain>;
  eventIds?: Array<string>;
}

export interface EventRefundRuleTemplateResDto  {
  id?: string;
  cancelType?: string;
  days?: number;
  timePoint?: string;
  refundType?: string;
  refundValue?: number;
}

export interface EventRefundRuleTemplateReqDto  {
  id?: string;
  cancelType?: string;
  days?: number;
  timePoint?: string;
  refundType?: string;
  refundValue?: number;
}

/*
 *  Copyright 2019-2025 Zheng Jie
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @author Zheng Jie
 * @date 2018-12-20
 */
export interface MenuMetaVo  {
  title?: string;
  icon?: string;
  noCache?: boolean;
}

export interface TOrderEventPageEventInfoResDto  {
  id?: string;
  orderNo?: string;
  eventId?: string;
  eventTitle?: string;
  eventStartTime?: string;
  eventEndTime?: string;
  eventContinentName?: string;
  eventCountryName?: string;
  eventProvinceName?: string;
  eventCityName?: string;
  eventDetailAddress?: string;
  ticketId?: string;
  ticketName?: string;
}

/**
 * 活动报名表单选项DTO
 */
export interface EventRegistrationOptionResDto  {
  optionValue?: string;
  sortOrder?: number;
}

/**
 * 行程集合时间地点表
 * @TableName event_assembly
 */
export interface EventAssembly  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 关联行程ID
     */
  itineraryId?: string;
/**
     * 对应天数
     */
  dayNumber?: number;
/**
     * 开始小时(0-23)
     */
  startHour?: number;
/**
     * 开始分钟(0-59)
     */
  startMinute?: number;
/**
     * 集合地点
     */
  location?: string;
/**
     * 展示排序
     */
  sortOrder?: number;
}

/**
 * 行程餐饮说明表
 * @TableName event_meal
 */
export interface EventMeal  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 关联行程ID
     */
  itineraryId?: string;
/**
     * 餐饮类型(breakfast:早餐,lunch:午餐,dinner:晚餐)
     */
  mealType?: string;
/**
     * 就餐餐厅
     */
  restaurant?: string;
/**
     * 备注
     */
  remarks?: string;
/**
     * 开始小时(0-23)
     */
  startHour?: number;
/**
     * 开始分钟(0-59)
     */
  startMinute?: number;
/**
     * 展示排序
     */
  sortOrder?: number;
}

/**
 * 行程住宿说明表
 * @TableName event_accommodation
 */
export interface EventAccommodation  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 关联行程ID
     */
  itineraryId?: string;
/**
     * 酒店名称(中文)
     */
  hotelNameCn?: string;
/**
     * 酒店地址
     */
  hotelAddress?: string;
/**
     * 酒店名称(英文)
     */
  hotelNameEn?: string;
/**
     * 酒店简介
     */
  hotelDescription?: string;
/**
     * 开始小时(0-23)
     */
  startHour?: number;
/**
     * 开始分钟(0-59)
     */
  startMinute?: number;
/**
     * 展示排序
     */
  sortOrder?: number;
}

/**
 * 行程景点表
 * @TableName event_attraction
 */
export interface EventAttractionResDto  {
  id?: string;
  itineraryId?: string;
  name?: string;
  visitDate?: string;
  startHour?: number;
  startMinute?: number;
  durationHours?: number;
  durationMinutes?: number;
  description?: string;
  location?: string;
  coverImage?: string;
  eventItineraryImages?: Array<EventItineraryImage>;
}

/**
 * 行程体验项目 DTO
 * 用于展示活动关联的体验项目信息，且关联行程信息
 */
export interface EventExperienceResDto  {
  id?: string;
  name?: string;
  location?: string;
  startHour?: number;
  startMinute?: number;
  durationHours?: number;
  durationMinutes?: number;
  description?: string;
  eventItineraryImages?: Array<EventItineraryImage>;
}

/**
 * 行程交通表
 * @TableName event_transport
 */
export interface EventTransport  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 关联行程ID
     */
  itineraryId?: string;
/**
     * 交通方式(flight:航班,train:火车,bus:巴士,ship:轮船)
     */
  transportType?: string;
/**
     * 开始小时(0-23)
     */
  startHour?: number;
/**
     * 开始分钟(0-59)
     */
  startMinute?: number;
/**
     * 耗时小时数
     */
  durationHours?: number;
/**
     * 耗时分钟数
     */
  durationMinutes?: number;
/**
     * 补充说明
     */
  description?: string;
/**
     * 出发地
     */
  departure?: string;
/**
     * 目的地
     */
  destination?: string;
/**
     * 展示排序
     */
  sortOrder?: number;
}

/**
 * 行程自由活动表
 * @TableName event_free_time
 */
export interface EventFreeTime  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 关联行程ID
     */
  itineraryId?: string;
/**
     * 开始小时(0-23)
     */
  startHour?: number;
/**
     * 开始分钟(0-59)
     */
  startMinute?: number;
/**
     * 持续小时数
     */
  durationHours?: number;
/**
     * 持续分钟数
     */
  durationMinutes?: number;
/**
     * 补充说明
     */
  description?: string;
/**
     * 活动建议
     */
  suggestions?: string;
/**
     * 展示排序
     */
  sortOrder?: number;
}

/**
 * 行程散团时间地点表
 * @TableName event_dismissal
 */
export interface EventDismissal  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 关联行程ID
     */
  itineraryId?: string;
/**
     * 开始小时(0-23)
     */
  startHour?: number;
/**
     * 开始分钟(0-59)
     */
  startMinute?: number;
/**
     * 持续小时数
     */
  durationHours?: number;
/**
     * 持续分钟数
     */
  durationMinutes?: number;
/**
     * 补充说明
     */
  description?: string;
/**
     * 散团地点
     */
  location?: string;
/**
     * 展示排序
     */
  sortOrder?: number;
}

/**
 * 活动退改规则表
 * @TableName event_refund_rule
 */
export interface EventRefundRule  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 活动购买须知id
     */
  noteId?: string;
/**
     * 取消类型：before_use:使用日期前，on_use:使用日期当天，after_use:使用时期后，after_booking:预定日期后
     */
  cancelType?: string;
/**
     * 天数，配合取消类型使用（如使用日期前3天）
     */
  days?: number;
/**
     * 时间点，补充时间维度（如18:00前）
     */
  timePoint?: string;
/**
     * 退款类型：fixed_amount-固定金额，percentage-百分比
     */
  refundType?: string;
/**
     * 退款数值（固定金额值或百分比值）
     */
  refundValue?: number;
}

/**
 * 活动主表
 * @TableName event_main
 */
export interface EventMain extends BaseEntity  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 活动标题
     */
  title?: string;
/**
     * 活动封面图URL
     */
  coverImage?: string;
/**
     * 活动类别代码
     */
  actCode?: string;
/**
     * 所属行业代码
     */
  industryCode?: string;
/**
     * 活动开始时间
     */
  startTime?: string;
/**
     * 活动结束时间
     */
  endTime?: string;
/**
     * 所属大洲编码
     */
  continentCode?: string;
/**
     * 国家编码
     */
  countryCode?: string;
/**
     * 省份编码
     */
  provinceCode?: string;
/**
     * 城市编码
     */
  cityCode?: string;
/**
     * 所属大洲
     */
  continentName?: string;
/**
     * 国家
     */
  countryName?: string;
/**
     * 省份
     */
  provinceName?: string;
/**
     * 城市
     */
  cityName?: string;
/**
     * 具体活动地址
     */
  detailAddress?: string;
/**
     * 经度
     */
  longitude?: number;
/**
     * 纬度
     */
  latitude?: number;
/**
     * 活动状态(字典值)
     */
  status?: string;
/**
     * 上下架状态(0:下架,1:上架)
     */
  publishStatus?: number;
/**
     * 审核拒绝原因
     */
  rejectReason?: string;
/**
     * 强制下架原因
     */
  forceOffReason?: string;
/**
     * 最大参与人数
     */
  maxAttendees?: number;
/**
     * 场地面积(平方米)
     */
  venueArea?: number;
/**
     * 展示商数量
     */
  exhibitorsNum?: number;
/**
     * 详情内容ID(关联富文本表)
     */
  detailId?: string;
/**
     * ISO 4217三位币种代码(如:CNY)
     */
  currencyCode?: string;
/**
     * 默认语言(en-US:英文)
     */
  defaultLanguage?: string;
/**
     * 是否为分组活动
     */
  isGroup?: number;
}

/**
 * 行程图片表
 * @TableName event_itinerary_image
 */
export interface EventItineraryImage  {
/**
     * 主键ID
     */
  id?: string;
/**
     * 租户id
     */
  tenantId?: string;
/**
     * 关联景点ID
     */
  attractionId?: string;
/**
     * 关联体验项目ID
     */
  experienceId?: string;
/**
     * 图片URL
     */
  imageUrl?: string;
/**
     * 排序字段
     */
  sortOrder?: number;
}




/**
 * 广告管理:banner管理列表
 * query
 */
export function queryApiAdBannerList(
  params: ApiRequest<PageQuery<AdBannerReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/adBanner/list`, generateParams(params, "post", "query"), config);
}

/**
 * 广告管理:banner管理列表
 * useQuery
 */
export function useApiAdBannerListQuery(
  params: DecorationParams<ApiRequest<PageQuery<AdBannerReqDto>>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<AdBannerReqDto>>,
    GetTSelect<ApiResponse>
  >(
    ["ApiAdBannerList"],
    () => queryApiAdBannerList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理:banner管理列表
 * useMutation
 */
export function useApiAdBannerListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<PageQuery<AdBannerReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<PageQuery<AdBannerReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<AdBannerReqDto>>) => queryApiAdBannerList(params, config),
  });
}



/**
 * 广告管理:banner管理新增
 * query
 */
export function queryApiAdBannerSave(
  params: ApiRequest<AdBannerReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/adBanner/save`, generateParams(params, "post", "query"), config);
}

/**
 * 广告管理:banner管理新增
 * useQuery
 */
export function useApiAdBannerSaveQuery(
  params: DecorationParams<ApiRequest<AdBannerReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<AdBannerReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiAdBannerSave"],
    () => queryApiAdBannerSave(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理:banner管理新增
 * useMutation
 */
export function useApiAdBannerSaveMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<AdBannerReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<AdBannerReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<AdBannerReqDto>) => queryApiAdBannerSave(params, config),
  });
}



/**
 * 广告管理:banner管理详情
 * query
 */
export function queryApiAdBannerDetail(
  params: {"id": string},
  config?: Record<string, any>
): Promise<ApiResponse<AdBannerResDto>> {
  return requestUtils.get(`/api/adBanner/detail`, generateParams(params, "get", "query"), config);
}

/**
 * 广告管理:banner管理详情
 * useQuery
 */
export function useApiAdBannerDetailQuery(
  params: DecorationParams<{"id": string}>,
  options?: DecorationOptions<ApiResponse<AdBannerResDto>, GetTSelect<ApiResponse<AdBannerResDto>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"id": string},
    GetTSelect<ApiResponse<AdBannerResDto>>
  >(
    ["ApiAdBannerDetail"],
    () => queryApiAdBannerDetail(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理:banner管理详情
 * useMutation
 */
export function useApiAdBannerDetailMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<AdBannerResDto>,
    Error,
    {"id": string},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<AdBannerResDto>,
    Error,
    {"id": string}
  >({
    ...options,
    mutationFn: (params: {"id": string}) => queryApiAdBannerDetail(params, config),
  });
}



/**
 * 广告管理:banner管理更新
 * query
 */
export function queryApiAdBannerUpdate(
  params: ApiRequest<AdBannerReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/adBanner/update`, generateParams(params, "post", "query"), config);
}

/**
 * 广告管理:banner管理更新
 * useQuery
 */
export function useApiAdBannerUpdateQuery(
  params: DecorationParams<ApiRequest<AdBannerReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<AdBannerReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiAdBannerUpdate"],
    () => queryApiAdBannerUpdate(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理:banner管理更新
 * useMutation
 */
export function useApiAdBannerUpdateMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<AdBannerReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<AdBannerReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<AdBannerReqDto>) => queryApiAdBannerUpdate(params, config),
  });
}



/**
 * 广告管理:banner管理更改状态
 * query
 */
export function queryApiAdBannerChangeStatus(
  params: ApiRequest<AdBannerReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/adBanner/changeStatus`, generateParams(params, "post", "query"), config);
}

/**
 * 广告管理:banner管理更改状态
 * useQuery
 */
export function useApiAdBannerChangeStatusQuery(
  params: DecorationParams<ApiRequest<AdBannerReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<AdBannerReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiAdBannerChangeStatus"],
    () => queryApiAdBannerChangeStatus(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理:banner管理更改状态
 * useMutation
 */
export function useApiAdBannerChangeStatusMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<AdBannerReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<AdBannerReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<AdBannerReqDto>) => queryApiAdBannerChangeStatus(params, config),
  });
}



/**
 * 广告管理:banner管理删除
 * query
 */
export function queryApiAdBannerDelete(
  params: ApiRequest<AdBannerReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/adBanner/delete`, generateParams(params, "post", "query"), config);
}

/**
 * 广告管理:banner管理删除
 * useQuery
 */
export function useApiAdBannerDeleteQuery(
  params: DecorationParams<ApiRequest<AdBannerReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<AdBannerReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiAdBannerDelete"],
    () => queryApiAdBannerDelete(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理:banner管理删除
 * useMutation
 */
export function useApiAdBannerDeleteMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<AdBannerReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<AdBannerReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<AdBannerReqDto>) => queryApiAdBannerDelete(params, config),
  });
}



/**
 * 广告管理:banner管理获取所有投放区域列表
 * query
 */
export function queryApiAdBannerPlacementAll(
  params: {},
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.get(`/api/adBanner/placement-all`, generateParams(params, "get", "query"), config);
}

/**
 * 广告管理:banner管理获取所有投放区域列表
 * useQuery
 */
export function useApiAdBannerPlacementAllQuery(
  params: DecorationParams<{}>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {},
    GetTSelect<ApiResponse>
  >(
    ["ApiAdBannerPlacementAll"],
    () => queryApiAdBannerPlacementAll(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理:banner管理获取所有投放区域列表
 * useMutation
 */
export function useApiAdBannerPlacementAllMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    {},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    {}
  >({
    ...options,
    mutationFn: (params: {}) => queryApiAdBannerPlacementAll(params, config),
  });
}



/**
 * 广告管理:banner管理获取某个投放位置的所有banner
 * query
 */
export function queryApiAdBannerBannerPlacementAll(
  params: ApiRequest<AdBannerReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/adBanner/banner-placement/all`, generateParams(params, "post", "query"), config);
}

/**
 * 广告管理:banner管理获取某个投放位置的所有banner
 * useQuery
 */
export function useApiAdBannerBannerPlacementAllQuery(
  params: DecorationParams<ApiRequest<AdBannerReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<AdBannerReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiAdBannerBannerPlacementAll"],
    () => queryApiAdBannerBannerPlacementAll(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理:banner管理获取某个投放位置的所有banner
 * useMutation
 */
export function useApiAdBannerBannerPlacementAllMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<AdBannerReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<AdBannerReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<AdBannerReqDto>) => queryApiAdBannerBannerPlacementAll(params, config),
  });
}



/**
 * 系统：系统授权接口获取用户信息
 * query
 */
export function queryApiAuthInfo(
  params: {},
  config?: Record<string, any>
): Promise<ApiResponse<JwtUserDto>> {
  return requestUtils.get(`/api/auth/info`, generateParams(params, "get", "query"), config);
}

/**
 * 系统：系统授权接口获取用户信息
 * useQuery
 */
export function useApiAuthInfoQuery(
  params: DecorationParams<{}>,
  options?: DecorationOptions<ApiResponse<JwtUserDto>, GetTSelect<ApiResponse<JwtUserDto>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {},
    GetTSelect<ApiResponse<JwtUserDto>>
  >(
    ["ApiAuthInfo"],
    () => queryApiAuthInfo(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 系统：系统授权接口获取用户信息
 * useMutation
 */
export function useApiAuthInfoMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<JwtUserDto>,
    Error,
    {},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<JwtUserDto>,
    Error,
    {}
  >({
    ...options,
    mutationFn: (params: {}) => queryApiAuthInfo(params, config),
  });
}



/**
 * 新闻管理：文章管理分页
 * query
 */
export function queryApiCmsArticlePage(
  params: ApiRequest<PageQuery<ContentCmsArticleListReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<ContentCmsArticleListResDto>>> {
  return requestUtils.post(`/api/cms-article/page`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：文章管理分页
 * useQuery
 */
export function useApiCmsArticlePageQuery(
  params: DecorationParams<ApiRequest<PageQuery<ContentCmsArticleListReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<ContentCmsArticleListResDto>>, GetTSelect<ApiResponse<PageResult<ContentCmsArticleListResDto>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<ContentCmsArticleListReqDto>>,
    GetTSelect<ApiResponse<PageResult<ContentCmsArticleListResDto>>>
  >(
    ["ApiCmsArticlePage"],
    () => queryApiCmsArticlePage(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：文章管理分页
 * useMutation
 */
export function useApiCmsArticlePageMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<ContentCmsArticleListResDto>>,
    Error,
    ApiRequest<PageQuery<ContentCmsArticleListReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<ContentCmsArticleListResDto>>,
    Error,
    ApiRequest<PageQuery<ContentCmsArticleListReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<ContentCmsArticleListReqDto>>) => queryApiCmsArticlePage(params, config),
  });
}



/**
 * 新闻管理：文章管理详情
 * query
 */
export function queryApiCmsArticleDetail(
  params: ApiRequest<ContentCmsArticleDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<ContentCmsArticle>> {
  return requestUtils.post(`/api/cms-article/detail`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：文章管理详情
 * useQuery
 */
export function useApiCmsArticleDetailQuery(
  params: DecorationParams<ApiRequest<ContentCmsArticleDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<ContentCmsArticle>, GetTSelect<ApiResponse<ContentCmsArticle>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsArticleDetailReqDto>,
    GetTSelect<ApiResponse<ContentCmsArticle>>
  >(
    ["ApiCmsArticleDetail"],
    () => queryApiCmsArticleDetail(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：文章管理详情
 * useMutation
 */
export function useApiCmsArticleDetailMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<ContentCmsArticle>,
    Error,
    ApiRequest<ContentCmsArticleDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<ContentCmsArticle>,
    Error,
    ApiRequest<ContentCmsArticleDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsArticleDetailReqDto>) => queryApiCmsArticleDetail(params, config),
  });
}



/**
 * 新闻管理：文章管理添加/编辑
 * query
 */
export function queryApiCmsArticleSave(
  params: ApiRequest<ContentCmsArticleSaveReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<ContentCmsArticle>> {
  return requestUtils.post(`/api/cms-article/save`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：文章管理添加/编辑
 * useQuery
 */
export function useApiCmsArticleSaveQuery(
  params: DecorationParams<ApiRequest<ContentCmsArticleSaveReqDto>>,
  options?: DecorationOptions<ApiResponse<ContentCmsArticle>, GetTSelect<ApiResponse<ContentCmsArticle>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsArticleSaveReqDto>,
    GetTSelect<ApiResponse<ContentCmsArticle>>
  >(
    ["ApiCmsArticleSave"],
    () => queryApiCmsArticleSave(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：文章管理添加/编辑
 * useMutation
 */
export function useApiCmsArticleSaveMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<ContentCmsArticle>,
    Error,
    ApiRequest<ContentCmsArticleSaveReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<ContentCmsArticle>,
    Error,
    ApiRequest<ContentCmsArticleSaveReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsArticleSaveReqDto>) => queryApiCmsArticleSave(params, config),
  });
}



/**
 * 新闻管理：文章管理添加
 * query
 */
export function queryApiCmsArticleAdd(
  params: ApiRequest<ContentCmsArticleSaveReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<ContentCmsArticle>> {
  return requestUtils.post(`/api/cms-article/add`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：文章管理添加
 * useQuery
 */
export function useApiCmsArticleAddQuery(
  params: DecorationParams<ApiRequest<ContentCmsArticleSaveReqDto>>,
  options?: DecorationOptions<ApiResponse<ContentCmsArticle>, GetTSelect<ApiResponse<ContentCmsArticle>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsArticleSaveReqDto>,
    GetTSelect<ApiResponse<ContentCmsArticle>>
  >(
    ["ApiCmsArticleAdd"],
    () => queryApiCmsArticleAdd(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：文章管理添加
 * useMutation
 */
export function useApiCmsArticleAddMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<ContentCmsArticle>,
    Error,
    ApiRequest<ContentCmsArticleSaveReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<ContentCmsArticle>,
    Error,
    ApiRequest<ContentCmsArticleSaveReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsArticleSaveReqDto>) => queryApiCmsArticleAdd(params, config),
  });
}



/**
 * 新闻管理：文章管理编辑
 * query
 */
export function queryApiCmsArticleEdit(
  params: ApiRequest<ContentCmsArticleSaveReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<ContentCmsArticle>> {
  return requestUtils.post(`/api/cms-article/edit`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：文章管理编辑
 * useQuery
 */
export function useApiCmsArticleEditQuery(
  params: DecorationParams<ApiRequest<ContentCmsArticleSaveReqDto>>,
  options?: DecorationOptions<ApiResponse<ContentCmsArticle>, GetTSelect<ApiResponse<ContentCmsArticle>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsArticleSaveReqDto>,
    GetTSelect<ApiResponse<ContentCmsArticle>>
  >(
    ["ApiCmsArticleEdit"],
    () => queryApiCmsArticleEdit(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：文章管理编辑
 * useMutation
 */
export function useApiCmsArticleEditMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<ContentCmsArticle>,
    Error,
    ApiRequest<ContentCmsArticleSaveReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<ContentCmsArticle>,
    Error,
    ApiRequest<ContentCmsArticleSaveReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsArticleSaveReqDto>) => queryApiCmsArticleEdit(params, config),
  });
}



/**
 * 新闻管理：文章管理删除
 * query
 */
export function queryApiCmsArticleDelete(
  params: ApiRequest<ContentCmsArticleDeletedReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/cms-article/delete`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：文章管理删除
 * useQuery
 */
export function useApiCmsArticleDeleteQuery(
  params: DecorationParams<ApiRequest<ContentCmsArticleDeletedReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsArticleDeletedReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCmsArticleDelete"],
    () => queryApiCmsArticleDelete(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：文章管理删除
 * useMutation
 */
export function useApiCmsArticleDeleteMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsArticleDeletedReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsArticleDeletedReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsArticleDeletedReqDto>) => queryApiCmsArticleDelete(params, config),
  });
}



/**
 * 新闻管理：文章管理批量删除
 * query
 */
export function queryApiCmsArticleBatchDelete(
  params: ApiRequest<ContentCmsArticleDeletedReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/cms-article/batch-delete`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：文章管理批量删除
 * useQuery
 */
export function useApiCmsArticleBatchDeleteQuery(
  params: DecorationParams<ApiRequest<ContentCmsArticleDeletedReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsArticleDeletedReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCmsArticleBatchDelete"],
    () => queryApiCmsArticleBatchDelete(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：文章管理批量删除
 * useMutation
 */
export function useApiCmsArticleBatchDeleteMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsArticleDeletedReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsArticleDeletedReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsArticleDeletedReqDto>) => queryApiCmsArticleBatchDelete(params, config),
  });
}



/**
 * 新闻管理：文章管理切换置顶状态
 * query
 */
export function queryApiCmsArticleTogglePinned(
  params: ApiRequest<ContentCmsArticleDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/cms-article/toggle-pinned`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：文章管理切换置顶状态
 * useQuery
 */
export function useApiCmsArticleTogglePinnedQuery(
  params: DecorationParams<ApiRequest<ContentCmsArticleDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsArticleDetailReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCmsArticleTogglePinned"],
    () => queryApiCmsArticleTogglePinned(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：文章管理切换置顶状态
 * useMutation
 */
export function useApiCmsArticleTogglePinnedMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsArticleDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsArticleDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsArticleDetailReqDto>) => queryApiCmsArticleTogglePinned(params, config),
  });
}



/**
 * 新闻管理：文章管理切换推荐状态
 * query
 */
export function queryApiCmsArticleToggleRecommended(
  params: ApiRequest<ContentCmsArticleDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/cms-article/toggle-recommended`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：文章管理切换推荐状态
 * useQuery
 */
export function useApiCmsArticleToggleRecommendedQuery(
  params: DecorationParams<ApiRequest<ContentCmsArticleDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsArticleDetailReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCmsArticleToggleRecommended"],
    () => queryApiCmsArticleToggleRecommended(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：文章管理切换推荐状态
 * useMutation
 */
export function useApiCmsArticleToggleRecommendedMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsArticleDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsArticleDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsArticleDetailReqDto>) => queryApiCmsArticleToggleRecommended(params, config),
  });
}



/**
 * 新闻管理：banner管理分页
 * query
 */
export function queryApiCmsBannerPage(
  params: ApiRequest<PageQuery<ContentCmsBannerListReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<ContentCmsBanner>>> {
  return requestUtils.post(`/api/cms-banner/page`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：banner管理分页
 * useQuery
 */
export function useApiCmsBannerPageQuery(
  params: DecorationParams<ApiRequest<PageQuery<ContentCmsBannerListReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<ContentCmsBanner>>, GetTSelect<ApiResponse<PageResult<ContentCmsBanner>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<ContentCmsBannerListReqDto>>,
    GetTSelect<ApiResponse<PageResult<ContentCmsBanner>>>
  >(
    ["ApiCmsBannerPage"],
    () => queryApiCmsBannerPage(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：banner管理分页
 * useMutation
 */
export function useApiCmsBannerPageMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<ContentCmsBanner>>,
    Error,
    ApiRequest<PageQuery<ContentCmsBannerListReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<ContentCmsBanner>>,
    Error,
    ApiRequest<PageQuery<ContentCmsBannerListReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<ContentCmsBannerListReqDto>>) => queryApiCmsBannerPage(params, config),
  });
}



/**
 * 新闻管理：banner管理详情
 * query
 */
export function queryApiCmsBannerDetail(
  params: ApiRequest<ContentCmsBannerDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<ContentCmsBanner>> {
  return requestUtils.post(`/api/cms-banner/detail`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：banner管理详情
 * useQuery
 */
export function useApiCmsBannerDetailQuery(
  params: DecorationParams<ApiRequest<ContentCmsBannerDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<ContentCmsBanner>, GetTSelect<ApiResponse<ContentCmsBanner>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsBannerDetailReqDto>,
    GetTSelect<ApiResponse<ContentCmsBanner>>
  >(
    ["ApiCmsBannerDetail"],
    () => queryApiCmsBannerDetail(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：banner管理详情
 * useMutation
 */
export function useApiCmsBannerDetailMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<ContentCmsBanner>,
    Error,
    ApiRequest<ContentCmsBannerDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<ContentCmsBanner>,
    Error,
    ApiRequest<ContentCmsBannerDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsBannerDetailReqDto>) => queryApiCmsBannerDetail(params, config),
  });
}



/**
 * 新闻管理：banner管理添加/编辑
 * query
 */
export function queryApiCmsBannerSave(
  params: ApiRequest<ContentCmsBannerSaveReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<ContentCmsBanner>> {
  return requestUtils.post(`/api/cms-banner/save`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：banner管理添加/编辑
 * useQuery
 */
export function useApiCmsBannerSaveQuery(
  params: DecorationParams<ApiRequest<ContentCmsBannerSaveReqDto>>,
  options?: DecorationOptions<ApiResponse<ContentCmsBanner>, GetTSelect<ApiResponse<ContentCmsBanner>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsBannerSaveReqDto>,
    GetTSelect<ApiResponse<ContentCmsBanner>>
  >(
    ["ApiCmsBannerSave"],
    () => queryApiCmsBannerSave(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：banner管理添加/编辑
 * useMutation
 */
export function useApiCmsBannerSaveMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<ContentCmsBanner>,
    Error,
    ApiRequest<ContentCmsBannerSaveReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<ContentCmsBanner>,
    Error,
    ApiRequest<ContentCmsBannerSaveReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsBannerSaveReqDto>) => queryApiCmsBannerSave(params, config),
  });
}



/**
 * 新闻管理：banner管理删除
 * query
 */
export function queryApiCmsBannerDelete(
  params: ApiRequest<ContentCmsBannerDeletedReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/cms-banner/delete`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：banner管理删除
 * useQuery
 */
export function useApiCmsBannerDeleteQuery(
  params: DecorationParams<ApiRequest<ContentCmsBannerDeletedReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsBannerDeletedReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCmsBannerDelete"],
    () => queryApiCmsBannerDelete(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：banner管理删除
 * useMutation
 */
export function useApiCmsBannerDeleteMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsBannerDeletedReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsBannerDeletedReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsBannerDeletedReqDto>) => queryApiCmsBannerDelete(params, config),
  });
}



/**
 * 新闻管理：banner管理切换状态
 * query
 */
export function queryApiCmsBannerToggleStatus(
  params: ApiRequest<ContentCmsBannerDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/cms-banner/toggle-status`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：banner管理切换状态
 * useQuery
 */
export function useApiCmsBannerToggleStatusQuery(
  params: DecorationParams<ApiRequest<ContentCmsBannerDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsBannerDetailReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCmsBannerToggleStatus"],
    () => queryApiCmsBannerToggleStatus(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：banner管理切换状态
 * useMutation
 */
export function useApiCmsBannerToggleStatusMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsBannerDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsBannerDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsBannerDetailReqDto>) => queryApiCmsBannerToggleStatus(params, config),
  });
}



/**
 * 新闻管理：分类管理分页
 * query
 */
export function queryApiCmsCategoryPage(
  params: ApiRequest<PageQuery<ContentCmsCategoryListReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<ContentCmsCategory>>> {
  return requestUtils.post(`/api/cms-category/page`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：分类管理分页
 * useQuery
 */
export function useApiCmsCategoryPageQuery(
  params: DecorationParams<ApiRequest<PageQuery<ContentCmsCategoryListReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<ContentCmsCategory>>, GetTSelect<ApiResponse<PageResult<ContentCmsCategory>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<ContentCmsCategoryListReqDto>>,
    GetTSelect<ApiResponse<PageResult<ContentCmsCategory>>>
  >(
    ["ApiCmsCategoryPage"],
    () => queryApiCmsCategoryPage(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：分类管理分页
 * useMutation
 */
export function useApiCmsCategoryPageMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<ContentCmsCategory>>,
    Error,
    ApiRequest<PageQuery<ContentCmsCategoryListReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<ContentCmsCategory>>,
    Error,
    ApiRequest<PageQuery<ContentCmsCategoryListReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<ContentCmsCategoryListReqDto>>) => queryApiCmsCategoryPage(params, config),
  });
}



/**
 * 新闻管理：分类管理所有状态为启用的分类
 * query
 */
export function queryApiCmsCategoryValidList(
  params: ApiRequest<ContentCmsCategoryListReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<Array<ContentCmsCategory>>> {
  return requestUtils.post(`/api/cms-category/valid-list`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：分类管理所有状态为启用的分类
 * useQuery
 */
export function useApiCmsCategoryValidListQuery(
  params: DecorationParams<ApiRequest<ContentCmsCategoryListReqDto>>,
  options?: DecorationOptions<ApiResponse<Array<ContentCmsCategory>>, GetTSelect<ApiResponse<Array<ContentCmsCategory>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsCategoryListReqDto>,
    GetTSelect<ApiResponse<Array<ContentCmsCategory>>>
  >(
    ["ApiCmsCategoryValidList"],
    () => queryApiCmsCategoryValidList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：分类管理所有状态为启用的分类
 * useMutation
 */
export function useApiCmsCategoryValidListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Array<ContentCmsCategory>>,
    Error,
    ApiRequest<ContentCmsCategoryListReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Array<ContentCmsCategory>>,
    Error,
    ApiRequest<ContentCmsCategoryListReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsCategoryListReqDto>) => queryApiCmsCategoryValidList(params, config),
  });
}



/**
 * 新闻管理：分类管理详情
 * query
 */
export function queryApiCmsCategoryDetail(
  params: ApiRequest<ContentCmsCategoryDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<ContentCmsCategory>> {
  return requestUtils.post(`/api/cms-category/detail`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：分类管理详情
 * useQuery
 */
export function useApiCmsCategoryDetailQuery(
  params: DecorationParams<ApiRequest<ContentCmsCategoryDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<ContentCmsCategory>, GetTSelect<ApiResponse<ContentCmsCategory>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsCategoryDetailReqDto>,
    GetTSelect<ApiResponse<ContentCmsCategory>>
  >(
    ["ApiCmsCategoryDetail"],
    () => queryApiCmsCategoryDetail(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：分类管理详情
 * useMutation
 */
export function useApiCmsCategoryDetailMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<ContentCmsCategory>,
    Error,
    ApiRequest<ContentCmsCategoryDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<ContentCmsCategory>,
    Error,
    ApiRequest<ContentCmsCategoryDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsCategoryDetailReqDto>) => queryApiCmsCategoryDetail(params, config),
  });
}



/**
 * 新闻管理：分类管理添加/编辑
 * query
 */
export function queryApiCmsCategorySave(
  params: ApiRequest<ContentCmsCategorySaveReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<ContentCmsCategory>> {
  return requestUtils.post(`/api/cms-category/save`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：分类管理添加/编辑
 * useQuery
 */
export function useApiCmsCategorySaveQuery(
  params: DecorationParams<ApiRequest<ContentCmsCategorySaveReqDto>>,
  options?: DecorationOptions<ApiResponse<ContentCmsCategory>, GetTSelect<ApiResponse<ContentCmsCategory>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsCategorySaveReqDto>,
    GetTSelect<ApiResponse<ContentCmsCategory>>
  >(
    ["ApiCmsCategorySave"],
    () => queryApiCmsCategorySave(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：分类管理添加/编辑
 * useMutation
 */
export function useApiCmsCategorySaveMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<ContentCmsCategory>,
    Error,
    ApiRequest<ContentCmsCategorySaveReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<ContentCmsCategory>,
    Error,
    ApiRequest<ContentCmsCategorySaveReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsCategorySaveReqDto>) => queryApiCmsCategorySave(params, config),
  });
}



/**
 * 新闻管理：分类管理删除
 * query
 */
export function queryApiCmsCategoryDelete(
  params: ApiRequest<ContentCmsCategoryDeletedReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/cms-category/delete`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：分类管理删除
 * useQuery
 */
export function useApiCmsCategoryDeleteQuery(
  params: DecorationParams<ApiRequest<ContentCmsCategoryDeletedReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsCategoryDeletedReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCmsCategoryDelete"],
    () => queryApiCmsCategoryDelete(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：分类管理删除
 * useMutation
 */
export function useApiCmsCategoryDeleteMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsCategoryDeletedReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsCategoryDeletedReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsCategoryDeletedReqDto>) => queryApiCmsCategoryDelete(params, config),
  });
}



/**
 * 新闻管理：分类管理切换状态
 * query
 */
export function queryApiCmsCategoryToggleStatus(
  params: ApiRequest<ContentCmsCategoryDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/cms-category/toggle-status`, generateParams(params, "post", "query"), config);
}

/**
 * 新闻管理：分类管理切换状态
 * useQuery
 */
export function useApiCmsCategoryToggleStatusQuery(
  params: DecorationParams<ApiRequest<ContentCmsCategoryDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentCmsCategoryDetailReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCmsCategoryToggleStatus"],
    () => queryApiCmsCategoryToggleStatus(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 新闻管理：分类管理切换状态
 * useMutation
 */
export function useApiCmsCategoryToggleStatusMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsCategoryDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<ContentCmsCategoryDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentCmsCategoryDetailReqDto>) => queryApiCmsCategoryToggleStatus(params, config),
  });
}



/**
 * 内容管理-视频管理列表
 * query
 */
export function queryApiContentVideosList(
  params: ApiRequest<PageQuery<ContentVideosReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/contentVideos/list`, generateParams(params, "post", "query"), config);
}

/**
 * 内容管理-视频管理列表
 * useQuery
 */
export function useApiContentVideosListQuery(
  params: DecorationParams<ApiRequest<PageQuery<ContentVideosReqDto>>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<ContentVideosReqDto>>,
    GetTSelect<ApiResponse>
  >(
    ["ApiContentVideosList"],
    () => queryApiContentVideosList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 内容管理-视频管理列表
 * useMutation
 */
export function useApiContentVideosListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<PageQuery<ContentVideosReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<PageQuery<ContentVideosReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<ContentVideosReqDto>>) => queryApiContentVideosList(params, config),
  });
}



/**
 * 内容管理-视频管理视频详情
 * query
 */
export function queryApiContentVideosDetailId(
  params: {"id": string},
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.get(`/api/contentVideos/detail/${params.id}`, generateParams(params, "get", "path"), config);
}

/**
 * 内容管理-视频管理视频详情
 * useQuery
 */
export function useApiContentVideosDetailIdQuery(
  params: DecorationParams<{"id": string}>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"id": string},
    GetTSelect<ApiResponse>
  >(
    ["ApiContentVideosDetailId"],
    () => queryApiContentVideosDetailId(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 内容管理-视频管理视频详情
 * useMutation
 */
export function useApiContentVideosDetailIdMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    {"id": string},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    {"id": string}
  >({
    ...options,
    mutationFn: (params: {"id": string}) => queryApiContentVideosDetailId(params, config),
  });
}



/**
 * 内容管理-视频管理修改排序
 * query
 */
export function queryApiContentVideosChangeOrder(
  params: ApiRequest<ContentVideosReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/contentVideos/change-order`, generateParams(params, "post", "query"), config);
}

/**
 * 内容管理-视频管理修改排序
 * useQuery
 */
export function useApiContentVideosChangeOrderQuery(
  params: DecorationParams<ApiRequest<ContentVideosReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentVideosReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiContentVideosChangeOrder"],
    () => queryApiContentVideosChangeOrder(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 内容管理-视频管理修改排序
 * useMutation
 */
export function useApiContentVideosChangeOrderMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<ContentVideosReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<ContentVideosReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentVideosReqDto>) => queryApiContentVideosChangeOrder(params, config),
  });
}



/**
 * 内容管理-视频管理审核视频
 * query
 */
export function queryApiContentVideosAudit(
  params: ApiRequest<ContentVideosReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/contentVideos/audit`, generateParams(params, "post", "query"), config);
}

/**
 * 内容管理-视频管理审核视频
 * useQuery
 */
export function useApiContentVideosAuditQuery(
  params: DecorationParams<ApiRequest<ContentVideosReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<ContentVideosReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiContentVideosAudit"],
    () => queryApiContentVideosAudit(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 内容管理-视频管理审核视频
 * useMutation
 */
export function useApiContentVideosAuditMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<ContentVideosReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<ContentVideosReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<ContentVideosReqDto>) => queryApiContentVideosAudit(params, config),
  });
}



/**
 * 客服管理：客服管理查看客服列表
 * query
 */
export function queryApiCustomerServiceManagementList(
  params: ApiRequest<PageQuery<CustomerServiceListReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<CustomerServiceListResDto>>> {
  return requestUtils.post(`/api/customer-service/management/list`, generateParams(params, "post", "query"), config);
}

/**
 * 客服管理：客服管理查看客服列表
 * useQuery
 */
export function useApiCustomerServiceManagementListQuery(
  params: DecorationParams<ApiRequest<PageQuery<CustomerServiceListReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<CustomerServiceListResDto>>, GetTSelect<ApiResponse<PageResult<CustomerServiceListResDto>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<CustomerServiceListReqDto>>,
    GetTSelect<ApiResponse<PageResult<CustomerServiceListResDto>>>
  >(
    ["ApiCustomerServiceManagementList"],
    () => queryApiCustomerServiceManagementList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 客服管理：客服管理查看客服列表
 * useMutation
 */
export function useApiCustomerServiceManagementListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<CustomerServiceListResDto>>,
    Error,
    ApiRequest<PageQuery<CustomerServiceListReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<CustomerServiceListResDto>>,
    Error,
    ApiRequest<PageQuery<CustomerServiceListReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<CustomerServiceListReqDto>>) => queryApiCustomerServiceManagementList(params, config),
  });
}



/**
 * 客服管理：客服管理新增客服信息
 * query
 */
export function queryApiCustomerServiceManagementAdd(
  params: ApiRequest<CustomerServiceAddReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/customer-service/management/add`, generateParams(params, "post", "query"), config);
}

/**
 * 客服管理：客服管理新增客服信息
 * useQuery
 */
export function useApiCustomerServiceManagementAddQuery(
  params: DecorationParams<ApiRequest<CustomerServiceAddReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<CustomerServiceAddReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCustomerServiceManagementAdd"],
    () => queryApiCustomerServiceManagementAdd(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 客服管理：客服管理新增客服信息
 * useMutation
 */
export function useApiCustomerServiceManagementAddMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<CustomerServiceAddReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<CustomerServiceAddReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<CustomerServiceAddReqDto>) => queryApiCustomerServiceManagementAdd(params, config),
  });
}



/**
 * 客服管理：客服管理删除客服信息
 * query
 */
export function queryApiCustomerServiceManagementDel(
  params: ApiRequest<CustomerServiceCommonReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.del(`/api/customer-service/management/del`, generateParams(params, "del", "query"), config);
}

/**
 * 客服管理：客服管理删除客服信息
 * useQuery
 */
export function useApiCustomerServiceManagementDelQuery(
  params: DecorationParams<ApiRequest<CustomerServiceCommonReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<CustomerServiceCommonReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCustomerServiceManagementDel"],
    () => queryApiCustomerServiceManagementDel(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 客服管理：客服管理删除客服信息
 * useMutation
 */
export function useApiCustomerServiceManagementDelMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<CustomerServiceCommonReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<CustomerServiceCommonReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<CustomerServiceCommonReqDto>) => queryApiCustomerServiceManagementDel(params, config),
  });
}



/**
 * 客服管理：客服管理结束会话
 * query
 */
export function queryApiCustomerServiceManagementEndChat(
  params: ApiRequest<CustomerServiceCommonReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/customer-service/management/end-chat`, generateParams(params, "post", "query"), config);
}

/**
 * 客服管理：客服管理结束会话
 * useQuery
 */
export function useApiCustomerServiceManagementEndChatQuery(
  params: DecorationParams<ApiRequest<CustomerServiceCommonReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<CustomerServiceCommonReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCustomerServiceManagementEndChat"],
    () => queryApiCustomerServiceManagementEndChat(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 客服管理：客服管理结束会话
 * useMutation
 */
export function useApiCustomerServiceManagementEndChatMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<CustomerServiceCommonReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<CustomerServiceCommonReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<CustomerServiceCommonReqDto>) => queryApiCustomerServiceManagementEndChat(params, config),
  });
}



/**
 * 客服管理：客服管理转接会话
 * query
 */
export function queryApiCustomerServiceManagementTransferChat(
  params: ApiRequest<CustomerServiceTransferChantReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/customer-service/management/transfer-chat`, generateParams(params, "post", "query"), config);
}

/**
 * 客服管理：客服管理转接会话
 * useQuery
 */
export function useApiCustomerServiceManagementTransferChatQuery(
  params: DecorationParams<ApiRequest<CustomerServiceTransferChantReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<CustomerServiceTransferChantReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCustomerServiceManagementTransferChat"],
    () => queryApiCustomerServiceManagementTransferChat(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 客服管理：客服管理转接会话
 * useMutation
 */
export function useApiCustomerServiceManagementTransferChatMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<CustomerServiceTransferChantReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<CustomerServiceTransferChantReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<CustomerServiceTransferChantReqDto>) => queryApiCustomerServiceManagementTransferChat(params, config),
  });
}



/**
 * 客服管理：客服管理分配客服
 * query
 */
export function queryApiCustomerServiceManagementAssign(
  params: {},
  config?: Record<string, any>
): Promise<ApiResponse<CustomerServiceAssignResDto>> {
  return requestUtils.get(`/api/customer-service/management/assign`, generateParams(params, "get", "query"), config);
}

/**
 * 客服管理：客服管理分配客服
 * useQuery
 */
export function useApiCustomerServiceManagementAssignQuery(
  params: DecorationParams<{}>,
  options?: DecorationOptions<ApiResponse<CustomerServiceAssignResDto>, GetTSelect<ApiResponse<CustomerServiceAssignResDto>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {},
    GetTSelect<ApiResponse<CustomerServiceAssignResDto>>
  >(
    ["ApiCustomerServiceManagementAssign"],
    () => queryApiCustomerServiceManagementAssign(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 客服管理：客服管理分配客服
 * useMutation
 */
export function useApiCustomerServiceManagementAssignMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<CustomerServiceAssignResDto>,
    Error,
    {},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<CustomerServiceAssignResDto>,
    Error,
    {}
  >({
    ...options,
    mutationFn: (params: {}) => queryApiCustomerServiceManagementAssign(params, config),
  });
}



/**
 * 客服管理：会话设置新增客服会话设置
 * query
 */
export function queryApiCustomerServiceChatSettingAdd(
  params: ApiRequest<CustomerServiceSettingAddReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/customer-service/chatSetting/add`, generateParams(params, "post", "query"), config);
}

/**
 * 客服管理：会话设置新增客服会话设置
 * useQuery
 */
export function useApiCustomerServiceChatSettingAddQuery(
  params: DecorationParams<ApiRequest<CustomerServiceSettingAddReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<CustomerServiceSettingAddReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCustomerServiceChatSettingAdd"],
    () => queryApiCustomerServiceChatSettingAdd(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 客服管理：会话设置新增客服会话设置
 * useMutation
 */
export function useApiCustomerServiceChatSettingAddMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<CustomerServiceSettingAddReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<CustomerServiceSettingAddReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<CustomerServiceSettingAddReqDto>) => queryApiCustomerServiceChatSettingAdd(params, config),
  });
}



/**
 * 客服管理：会话设置编辑客服会话设置
 * query
 */
export function queryApiCustomerServiceChatSettingEdit(
  params: ApiRequest<CustomerServiceSettingEditReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/customer-service/chatSetting/edit`, generateParams(params, "post", "query"), config);
}

/**
 * 客服管理：会话设置编辑客服会话设置
 * useQuery
 */
export function useApiCustomerServiceChatSettingEditQuery(
  params: DecorationParams<ApiRequest<CustomerServiceSettingEditReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<CustomerServiceSettingEditReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiCustomerServiceChatSettingEdit"],
    () => queryApiCustomerServiceChatSettingEdit(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 客服管理：会话设置编辑客服会话设置
 * useMutation
 */
export function useApiCustomerServiceChatSettingEditMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<CustomerServiceSettingEditReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<CustomerServiceSettingEditReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<CustomerServiceSettingEditReqDto>) => queryApiCustomerServiceChatSettingEdit(params, config),
  });
}



/**
 * 权限管理：部门管理查询部门
 * query
 */
export function queryApiDeptList(
  params: ApiRequest<DeptListReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<Array<DeptListResDto>>> {
  return requestUtils.post(`/api/dept/list`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：部门管理查询部门
 * useQuery
 */
export function useApiDeptListQuery(
  params: DecorationParams<ApiRequest<DeptListReqDto>>,
  options?: DecorationOptions<ApiResponse<Array<DeptListResDto>>, GetTSelect<ApiResponse<Array<DeptListResDto>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<DeptListReqDto>,
    GetTSelect<ApiResponse<Array<DeptListResDto>>>
  >(
    ["ApiDeptList"],
    () => queryApiDeptList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：部门管理查询部门
 * useMutation
 */
export function useApiDeptListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Array<DeptListResDto>>,
    Error,
    ApiRequest<DeptListReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Array<DeptListResDto>>,
    Error,
    ApiRequest<DeptListReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<DeptListReqDto>) => queryApiDeptList(params, config),
  });
}



/**
 * 权限管理：部门管理查询部门:根据ID获取同级与上级数据
 * query
 */
export function queryApiDeptSuperior(
  params: ApiRequest<DeptSuperiorReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<SysDept>> {
  return requestUtils.post(`/api/dept/superior`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：部门管理查询部门:根据ID获取同级与上级数据
 * useQuery
 */
export function useApiDeptSuperiorQuery(
  params: DecorationParams<ApiRequest<DeptSuperiorReqDto>>,
  options?: DecorationOptions<ApiResponse<SysDept>, GetTSelect<ApiResponse<SysDept>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<DeptSuperiorReqDto>,
    GetTSelect<ApiResponse<SysDept>>
  >(
    ["ApiDeptSuperior"],
    () => queryApiDeptSuperior(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：部门管理查询部门:根据ID获取同级与上级数据
 * useMutation
 */
export function useApiDeptSuperiorMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<SysDept>,
    Error,
    ApiRequest<DeptSuperiorReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<SysDept>,
    Error,
    ApiRequest<DeptSuperiorReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<DeptSuperiorReqDto>) => queryApiDeptSuperior(params, config),
  });
}



/**
 * 权限管理：部门管理获取所有部门（pid为null）
 * query
 */
export function queryApiDeptRoot(
  params: {},
  config?: Record<string, any>
): Promise<ApiResponse<Array<SysDept>>> {
  return requestUtils.get(`/api/dept/root`, generateParams(params, "get", "query"), config);
}

/**
 * 权限管理：部门管理获取所有部门（pid为null）
 * useQuery
 */
export function useApiDeptRootQuery(
  params: DecorationParams<{}>,
  options?: DecorationOptions<ApiResponse<Array<SysDept>>, GetTSelect<ApiResponse<Array<SysDept>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {},
    GetTSelect<ApiResponse<Array<SysDept>>>
  >(
    ["ApiDeptRoot"],
    () => queryApiDeptRoot(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：部门管理获取所有部门（pid为null）
 * useMutation
 */
export function useApiDeptRootMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Array<SysDept>>,
    Error,
    {},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Array<SysDept>>,
    Error,
    {}
  >({
    ...options,
    mutationFn: (params: {}) => queryApiDeptRoot(params, config),
  });
}



/**
 * 权限管理：部门管理获取所有非顶级部门
 * query
 */
export function queryApiDeptAll(
  params: {},
  config?: Record<string, any>
): Promise<ApiResponse<Array<SysDept>>> {
  return requestUtils.get(`/api/dept/all`, generateParams(params, "get", "query"), config);
}

/**
 * 权限管理：部门管理获取所有非顶级部门
 * useQuery
 */
export function useApiDeptAllQuery(
  params: DecorationParams<{}>,
  options?: DecorationOptions<ApiResponse<Array<SysDept>>, GetTSelect<ApiResponse<Array<SysDept>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {},
    GetTSelect<ApiResponse<Array<SysDept>>>
  >(
    ["ApiDeptAll"],
    () => queryApiDeptAll(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：部门管理获取所有非顶级部门
 * useMutation
 */
export function useApiDeptAllMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Array<SysDept>>,
    Error,
    {},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Array<SysDept>>,
    Error,
    {}
  >({
    ...options,
    mutationFn: (params: {}) => queryApiDeptAll(params, config),
  });
}



/**
 * 权限管理：部门管理新增部门
 * query
 */
export function queryApiDeptAdd(
  params: ApiRequest<DeptAddReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/dept/add`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：部门管理新增部门
 * useQuery
 */
export function useApiDeptAddQuery(
  params: DecorationParams<ApiRequest<DeptAddReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<DeptAddReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiDeptAdd"],
    () => queryApiDeptAdd(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：部门管理新增部门
 * useMutation
 */
export function useApiDeptAddMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<DeptAddReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<DeptAddReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<DeptAddReqDto>) => queryApiDeptAdd(params, config),
  });
}



/**
 * 权限管理：部门管理修改部门
 * query
 */
export function queryApiDeptEdit(
  params: ApiRequest<DeptEditReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/dept/edit`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：部门管理修改部门
 * useQuery
 */
export function useApiDeptEditQuery(
  params: DecorationParams<ApiRequest<DeptEditReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<DeptEditReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiDeptEdit"],
    () => queryApiDeptEdit(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：部门管理修改部门
 * useMutation
 */
export function useApiDeptEditMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<DeptEditReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<DeptEditReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<DeptEditReqDto>) => queryApiDeptEdit(params, config),
  });
}



/**
 * 权限管理：部门管理删除部门
 * query
 */
export function queryApiDeptDel(
  params: ApiRequest<DeptDelReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/dept/del`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：部门管理删除部门
 * useQuery
 */
export function useApiDeptDelQuery(
  params: DecorationParams<ApiRequest<DeptDelReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<DeptDelReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiDeptDel"],
    () => queryApiDeptDel(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：部门管理删除部门
 * useMutation
 */
export function useApiDeptDelMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<DeptDelReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<DeptDelReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<DeptDelReqDto>) => queryApiDeptDel(params, config),
  });
}



/**
 * 系统-系统设置：系统参数查询字典类型
 * query
 */
export function queryApiDictTypeAll(
  params: {},
  config?: Record<string, any>
): Promise<ApiResponse<Array<SysDictType>>> {
  return requestUtils.get(`/api/dict/type/all`, generateParams(params, "get", "query"), config);
}

/**
 * 系统-系统设置：系统参数查询字典类型
 * useQuery
 */
export function useApiDictTypeAllQuery(
  params: DecorationParams<{}>,
  options?: DecorationOptions<ApiResponse<Array<SysDictType>>, GetTSelect<ApiResponse<Array<SysDictType>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {},
    GetTSelect<ApiResponse<Array<SysDictType>>>
  >(
    ["ApiDictTypeAll"],
    () => queryApiDictTypeAll(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 系统-系统设置：系统参数查询字典类型
 * useMutation
 */
export function useApiDictTypeAllMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Array<SysDictType>>,
    Error,
    {},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Array<SysDictType>>,
    Error,
    {}
  >({
    ...options,
    mutationFn: (params: {}) => queryApiDictTypeAll(params, config),
  });
}



/**
 * 系统-系统设置：系统参数查询字典类型对应的字典数据
 * query
 */
export function queryApiDictTypeDictType(
  params: {"dictType": string},
  config?: Record<string, any>
): Promise<ApiResponse<Array<SysDictData>>> {
  return requestUtils.get(`/api/dict/type/${params.dictType}`, generateParams(params, "get", "path"), config);
}

/**
 * 系统-系统设置：系统参数查询字典类型对应的字典数据
 * useQuery
 */
export function useApiDictTypeDictTypeQuery(
  params: DecorationParams<{"dictType": string}>,
  options?: DecorationOptions<ApiResponse<Array<SysDictData>>, GetTSelect<ApiResponse<Array<SysDictData>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"dictType": string},
    GetTSelect<ApiResponse<Array<SysDictData>>>
  >(
    ["ApiDictTypeDictType"],
    () => queryApiDictTypeDictType(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 系统-系统设置：系统参数查询字典类型对应的字典数据
 * useMutation
 */
export function useApiDictTypeDictTypeMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Array<SysDictData>>,
    Error,
    {"dictType": string},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Array<SysDictData>>,
    Error,
    {"dictType": string}
  >({
    ...options,
    mutationFn: (params: {"dictType": string}) => queryApiDictTypeDictType(params, config),
  });
}



/**
 * 系统-系统设置：系统参数新增字典类型
 * query
 */
export function queryApiDictTypeAdd(
  params: SysDictType,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/dict/type/add`, generateParams(params, "post", "query"), config);
}

/**
 * 系统-系统设置：系统参数新增字典类型
 * useQuery
 */
export function useApiDictTypeAddQuery(
  params: DecorationParams<SysDictType>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    SysDictType,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiDictTypeAdd"],
    () => queryApiDictTypeAdd(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 系统-系统设置：系统参数新增字典类型
 * useMutation
 */
export function useApiDictTypeAddMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    SysDictType,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    SysDictType
  >({
    ...options,
    mutationFn: (params: SysDictType) => queryApiDictTypeAdd(params, config),
  });
}



/**
 * 系统-系统设置：系统参数新增字典数据
 * query
 */
export function queryApiDictDataAdd(
  params: SysDictData,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/dict/data/add`, generateParams(params, "post", "query"), config);
}

/**
 * 系统-系统设置：系统参数新增字典数据
 * useQuery
 */
export function useApiDictDataAddQuery(
  params: DecorationParams<SysDictData>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    SysDictData,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiDictDataAdd"],
    () => queryApiDictDataAdd(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 系统-系统设置：系统参数新增字典数据
 * useMutation
 */
export function useApiDictDataAddMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    SysDictData,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    SysDictData
  >({
    ...options,
    mutationFn: (params: SysDictData) => queryApiDictDataAdd(params, config),
  });
}



/**
 * 系统-系统设置：系统参数修改字典类型
 * query
 */
export function queryApiDictTypeEdit(
  params: SysDictType,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.put(`/api/dict/type/edit`, generateParams(params, "put", "query"), config);
}

/**
 * 系统-系统设置：系统参数修改字典类型
 * useQuery
 */
export function useApiDictTypeEditQuery(
  params: DecorationParams<SysDictType>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    SysDictType,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiDictTypeEdit"],
    () => queryApiDictTypeEdit(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 系统-系统设置：系统参数修改字典类型
 * useMutation
 */
export function useApiDictTypeEditMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    SysDictType,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    SysDictType
  >({
    ...options,
    mutationFn: (params: SysDictType) => queryApiDictTypeEdit(params, config),
  });
}



/**
 * 系统-系统设置：系统参数修改字典数据
 * query
 */
export function queryApiDictDataEdit(
  params: SysDictData,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.put(`/api/dict/data/edit`, generateParams(params, "put", "query"), config);
}

/**
 * 系统-系统设置：系统参数修改字典数据
 * useQuery
 */
export function useApiDictDataEditQuery(
  params: DecorationParams<SysDictData>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    SysDictData,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiDictDataEdit"],
    () => queryApiDictDataEdit(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 系统-系统设置：系统参数修改字典数据
 * useMutation
 */
export function useApiDictDataEditMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    SysDictData,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    SysDictData
  >({
    ...options,
    mutationFn: (params: SysDictData) => queryApiDictDataEdit(params, config),
  });
}



/**
 * 活动管理-活动类目列表
 * query
 */
export function queryApiEventActCategoryList(
  params: ApiRequest<PageQuery<EventCategoryReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/eventActCategory/list`, generateParams(params, "post", "query"), config);
}

/**
 * 活动管理-活动类目列表
 * useQuery
 */
export function useApiEventActCategoryListQuery(
  params: DecorationParams<ApiRequest<PageQuery<EventCategoryReqDto>>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<EventCategoryReqDto>>,
    GetTSelect<ApiResponse>
  >(
    ["ApiEventActCategoryList"],
    () => queryApiEventActCategoryList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理-活动类目列表
 * useMutation
 */
export function useApiEventActCategoryListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<PageQuery<EventCategoryReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<PageQuery<EventCategoryReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<EventCategoryReqDto>>) => queryApiEventActCategoryList(params, config),
  });
}



/**
 * 活动管理-活动类目新增活动分类
 * query
 */
export function queryApiEventActCategorySave(
  params: ApiRequest<EventCategoryReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/eventActCategory/save`, generateParams(params, "post", "query"), config);
}

/**
 * 活动管理-活动类目新增活动分类
 * useQuery
 */
export function useApiEventActCategorySaveQuery(
  params: DecorationParams<ApiRequest<EventCategoryReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventCategoryReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiEventActCategorySave"],
    () => queryApiEventActCategorySave(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理-活动类目新增活动分类
 * useMutation
 */
export function useApiEventActCategorySaveMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<EventCategoryReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<EventCategoryReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventCategoryReqDto>) => queryApiEventActCategorySave(params, config),
  });
}



/**
 * 活动管理-活动类目活动分类详情
 * query
 */
export function queryApiEventActCategoryEditId(
  params: {"id": string},
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.get(`/api/eventActCategory/edit/${params.id}`, generateParams(params, "get", "path"), config);
}

/**
 * 活动管理-活动类目活动分类详情
 * useQuery
 */
export function useApiEventActCategoryEditIdQuery(
  params: DecorationParams<{"id": string}>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"id": string},
    GetTSelect<ApiResponse>
  >(
    ["ApiEventActCategoryEditId"],
    () => queryApiEventActCategoryEditId(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理-活动类目活动分类详情
 * useMutation
 */
export function useApiEventActCategoryEditIdMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    {"id": string},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    {"id": string}
  >({
    ...options,
    mutationFn: (params: {"id": string}) => queryApiEventActCategoryEditId(params, config),
  });
}



/**
 * 活动管理-活动类目更新活动分类
 * query
 */
export function queryApiEventActCategoryUpdate(
  params: ApiRequest<EventCategoryReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/eventActCategory/update`, generateParams(params, "post", "query"), config);
}

/**
 * 活动管理-活动类目更新活动分类
 * useQuery
 */
export function useApiEventActCategoryUpdateQuery(
  params: DecorationParams<ApiRequest<EventCategoryReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventCategoryReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiEventActCategoryUpdate"],
    () => queryApiEventActCategoryUpdate(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理-活动类目更新活动分类
 * useMutation
 */
export function useApiEventActCategoryUpdateMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<EventCategoryReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<EventCategoryReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventCategoryReqDto>) => queryApiEventActCategoryUpdate(params, config),
  });
}



/**
 * 活动管理-活动类目更改状态
 * query
 */
export function queryApiEventActCategoryChangeStatus(
  params: ApiRequest<EventCategoryReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/eventActCategory/changeStatus`, generateParams(params, "post", "query"), config);
}

/**
 * 活动管理-活动类目更改状态
 * useQuery
 */
export function useApiEventActCategoryChangeStatusQuery(
  params: DecorationParams<ApiRequest<EventCategoryReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventCategoryReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiEventActCategoryChangeStatus"],
    () => queryApiEventActCategoryChangeStatus(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理-活动类目更改状态
 * useMutation
 */
export function useApiEventActCategoryChangeStatusMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<EventCategoryReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<EventCategoryReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventCategoryReqDto>) => queryApiEventActCategoryChangeStatus(params, config),
  });
}



/**
 * 活动管理-活动类目删除活动分类
 * query
 */
export function queryApiEventActCategoryDeleteIds(
  params: {"ids": string},
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.get(`/api/eventActCategory/delete/${params.ids}`, generateParams(params, "get", "path"), config);
}

/**
 * 活动管理-活动类目删除活动分类
 * useQuery
 */
export function useApiEventActCategoryDeleteIdsQuery(
  params: DecorationParams<{"ids": string}>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"ids": string},
    GetTSelect<ApiResponse>
  >(
    ["ApiEventActCategoryDeleteIds"],
    () => queryApiEventActCategoryDeleteIds(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理-活动类目删除活动分类
 * useMutation
 */
export function useApiEventActCategoryDeleteIdsMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    {"ids": string},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    {"ids": string}
  >({
    ...options,
    mutationFn: (params: {"ids": string}) => queryApiEventActCategoryDeleteIds(params, config),
  });
}



/**
 * 活动管理：活动列表分页查询活动
 * query
 */
export function queryApiEventList(
  params: ApiRequest<PageQuery<EventPageReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<Record<string,Record<string, any>>>> {
  return requestUtils.post(`/api/event/list`, generateParams(params, "post", "query"), config);
}

/**
 * 活动管理：活动列表分页查询活动
 * useQuery
 */
export function useApiEventListQuery(
  params: DecorationParams<ApiRequest<PageQuery<EventPageReqDto>>>,
  options?: DecorationOptions<ApiResponse<Record<string,Record<string, any>>>, GetTSelect<ApiResponse<Record<string,Record<string, any>>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<EventPageReqDto>>,
    GetTSelect<ApiResponse<Record<string,Record<string, any>>>>
  >(
    ["ApiEventList"],
    () => queryApiEventList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理：活动列表分页查询活动
 * useMutation
 */
export function useApiEventListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Record<string,Record<string, any>>>,
    Error,
    ApiRequest<PageQuery<EventPageReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Record<string,Record<string, any>>>,
    Error,
    ApiRequest<PageQuery<EventPageReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<EventPageReqDto>>) => queryApiEventList(params, config),
  });
}



/**
 * 活动管理：活动列表审核活动
 * query
 */
export function queryApiEventReview(
  params: ApiRequest<EventReviewReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/event/review`, generateParams(params, "post", "query"), config);
}

/**
 * 活动管理：活动列表审核活动
 * useQuery
 */
export function useApiEventReviewQuery(
  params: DecorationParams<ApiRequest<EventReviewReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventReviewReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiEventReview"],
    () => queryApiEventReview(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理：活动列表审核活动
 * useMutation
 */
export function useApiEventReviewMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<EventReviewReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<EventReviewReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventReviewReqDto>) => queryApiEventReview(params, config),
  });
}



/**
 * 活动管理：活动列表强制下架
 * query
 */
export function queryApiEventDelisting(
  params: ApiRequest<EventForceOffReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/event/delisting`, generateParams(params, "post", "query"), config);
}

/**
 * 活动管理：活动列表强制下架
 * useQuery
 */
export function useApiEventDelistingQuery(
  params: DecorationParams<ApiRequest<EventForceOffReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventForceOffReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiEventDelisting"],
    () => queryApiEventDelisting(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理：活动列表强制下架
 * useMutation
 */
export function useApiEventDelistingMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<EventForceOffReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<EventForceOffReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventForceOffReqDto>) => queryApiEventDelisting(params, config),
  });
}



/**
 * 活动管理：活动列表活动详情
 * query
 */
export function queryApiEventDetail(
  params: ApiRequest<EventDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<EventResDto>> {
  return requestUtils.post(`/api/event/detail`, generateParams(params, "post", "query"), config);
}

/**
 * 活动管理：活动列表活动详情
 * useQuery
 */
export function useApiEventDetailQuery(
  params: DecorationParams<ApiRequest<EventDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<EventResDto>, GetTSelect<ApiResponse<EventResDto>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventDetailReqDto>,
    GetTSelect<ApiResponse<EventResDto>>
  >(
    ["ApiEventDetail"],
    () => queryApiEventDetail(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理：活动列表活动详情
 * useMutation
 */
export function useApiEventDetailMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<EventResDto>,
    Error,
    ApiRequest<EventDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<EventResDto>,
    Error,
    ApiRequest<EventDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventDetailReqDto>) => queryApiEventDetail(params, config),
  });
}



/**
 * 活动管理：活动列表组合活动详情
 * query
 */
export function queryApiEventGroupDetail(
  params: ApiRequest<EventDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<EventGroupResDto>> {
  return requestUtils.post(`/api/event/group-detail`, generateParams(params, "post", "query"), config);
}

/**
 * 活动管理：活动列表组合活动详情
 * useQuery
 */
export function useApiEventGroupDetailQuery(
  params: DecorationParams<ApiRequest<EventDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<EventGroupResDto>, GetTSelect<ApiResponse<EventGroupResDto>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventDetailReqDto>,
    GetTSelect<ApiResponse<EventGroupResDto>>
  >(
    ["ApiEventGroupDetail"],
    () => queryApiEventGroupDetail(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理：活动列表组合活动详情
 * useMutation
 */
export function useApiEventGroupDetailMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<EventGroupResDto>,
    Error,
    ApiRequest<EventDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<EventGroupResDto>,
    Error,
    ApiRequest<EventDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventDetailReqDto>) => queryApiEventGroupDetail(params, config),
  });
}



/**
 * 活动管理-行业类目列表
 * query
 */
export function queryApiEventIndustryCategoryList(
  params: ApiRequest<PageQuery<EventCategoryReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/eventIndustryCategory/list`, generateParams(params, "post", "query"), config);
}

/**
 * 活动管理-行业类目列表
 * useQuery
 */
export function useApiEventIndustryCategoryListQuery(
  params: DecorationParams<ApiRequest<PageQuery<EventCategoryReqDto>>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<EventCategoryReqDto>>,
    GetTSelect<ApiResponse>
  >(
    ["ApiEventIndustryCategoryList"],
    () => queryApiEventIndustryCategoryList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理-行业类目列表
 * useMutation
 */
export function useApiEventIndustryCategoryListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<PageQuery<EventCategoryReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<PageQuery<EventCategoryReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<EventCategoryReqDto>>) => queryApiEventIndustryCategoryList(params, config),
  });
}



/**
 * 活动管理-行业类目新增行业类目
 * query
 */
export function queryApiEventIndustryCategorySave(
  params: ApiRequest<EventCategoryReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/eventIndustryCategory/save`, generateParams(params, "post", "query"), config);
}

/**
 * 活动管理-行业类目新增行业类目
 * useQuery
 */
export function useApiEventIndustryCategorySaveQuery(
  params: DecorationParams<ApiRequest<EventCategoryReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventCategoryReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiEventIndustryCategorySave"],
    () => queryApiEventIndustryCategorySave(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理-行业类目新增行业类目
 * useMutation
 */
export function useApiEventIndustryCategorySaveMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<EventCategoryReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<EventCategoryReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventCategoryReqDto>) => queryApiEventIndustryCategorySave(params, config),
  });
}



/**
 * 活动管理-行业类目编辑行业类目
 * query
 */
export function queryApiEventIndustryCategoryEditId(
  params: {"id": string},
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.get(`/api/eventIndustryCategory/edit/${params.id}`, generateParams(params, "get", "path"), config);
}

/**
 * 活动管理-行业类目编辑行业类目
 * useQuery
 */
export function useApiEventIndustryCategoryEditIdQuery(
  params: DecorationParams<{"id": string}>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"id": string},
    GetTSelect<ApiResponse>
  >(
    ["ApiEventIndustryCategoryEditId"],
    () => queryApiEventIndustryCategoryEditId(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理-行业类目编辑行业类目
 * useMutation
 */
export function useApiEventIndustryCategoryEditIdMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    {"id": string},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    {"id": string}
  >({
    ...options,
    mutationFn: (params: {"id": string}) => queryApiEventIndustryCategoryEditId(params, config),
  });
}



/**
 * 活动管理-行业类目更新行业类目
 * query
 */
export function queryApiEventIndustryCategoryUpdate(
  params: ApiRequest<EventCategoryReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/eventIndustryCategory/update`, generateParams(params, "post", "query"), config);
}

/**
 * 活动管理-行业类目更新行业类目
 * useQuery
 */
export function useApiEventIndustryCategoryUpdateQuery(
  params: DecorationParams<ApiRequest<EventCategoryReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventCategoryReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiEventIndustryCategoryUpdate"],
    () => queryApiEventIndustryCategoryUpdate(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理-行业类目更新行业类目
 * useMutation
 */
export function useApiEventIndustryCategoryUpdateMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<EventCategoryReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<EventCategoryReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventCategoryReqDto>) => queryApiEventIndustryCategoryUpdate(params, config),
  });
}



/**
 * 活动管理-行业类目更改状态
 * query
 */
export function queryApiEventIndustryCategoryChangeStatus(
  params: ApiRequest<EventCategoryReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/eventIndustryCategory/changeStatus`, generateParams(params, "post", "query"), config);
}

/**
 * 活动管理-行业类目更改状态
 * useQuery
 */
export function useApiEventIndustryCategoryChangeStatusQuery(
  params: DecorationParams<ApiRequest<EventCategoryReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventCategoryReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiEventIndustryCategoryChangeStatus"],
    () => queryApiEventIndustryCategoryChangeStatus(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理-行业类目更改状态
 * useMutation
 */
export function useApiEventIndustryCategoryChangeStatusMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<EventCategoryReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<EventCategoryReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventCategoryReqDto>) => queryApiEventIndustryCategoryChangeStatus(params, config),
  });
}



/**
 * 活动管理-行业类目删除行业类目
 * query
 */
export function queryApiEventIndustryCategoryDeleteIds(
  params: {"ids": string},
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.get(`/api/eventIndustryCategory/delete/${params.ids}`, generateParams(params, "get", "path"), config);
}

/**
 * 活动管理-行业类目删除行业类目
 * useQuery
 */
export function useApiEventIndustryCategoryDeleteIdsQuery(
  params: DecorationParams<{"ids": string}>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"ids": string},
    GetTSelect<ApiResponse>
  >(
    ["ApiEventIndustryCategoryDeleteIds"],
    () => queryApiEventIndustryCategoryDeleteIds(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动管理-行业类目删除行业类目
 * useMutation
 */
export function useApiEventIndustryCategoryDeleteIdsMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    {"ids": string},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    {"ids": string}
  >({
    ...options,
    mutationFn: (params: {"ids": string}) => queryApiEventIndustryCategoryDeleteIds(params, config),
  });
}



/**
 * __comment__
 * query
 */
export function queryApiEventIndustryCategoryMultipartFormData(
  params: any | undefined,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/eventIndustryCategory/multipart/form-data`, generateParams(params, "post", "query"), config);
}

/**
 * __comment__
 * useQuery
 */
export function useApiEventIndustryCategoryMultipartFormDataQuery(
  params: DecorationParams<any | undefined>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    any | undefined,
    GetTSelect<ApiResponse>
  >(
    ["ApiEventIndustryCategoryMultipartFormData"],
    () => queryApiEventIndustryCategoryMultipartFormData(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * __comment__
 * useMutation
 */
export function useApiEventIndustryCategoryMultipartFormDataMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    any | undefined,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    any | undefined
  >({
    ...options,
    mutationFn: (params: any | undefined) => queryApiEventIndustryCategoryMultipartFormData(params, config),
  });
}



/**
 * 活动：退改模板管理查询退改模板列表
 * query
 */
export function queryApiEventRefundTemplateList(
  params: ApiRequest<PageQuery<EventRefundTemplateListReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<EventRefundTemplate>>> {
  return requestUtils.post(`/api/event-refund-template/list`, generateParams(params, "post", "query"), config);
}

/**
 * 活动：退改模板管理查询退改模板列表
 * useQuery
 */
export function useApiEventRefundTemplateListQuery(
  params: DecorationParams<ApiRequest<PageQuery<EventRefundTemplateListReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<EventRefundTemplate>>, GetTSelect<ApiResponse<PageResult<EventRefundTemplate>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<EventRefundTemplateListReqDto>>,
    GetTSelect<ApiResponse<PageResult<EventRefundTemplate>>>
  >(
    ["ApiEventRefundTemplateList"],
    () => queryApiEventRefundTemplateList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动：退改模板管理查询退改模板列表
 * useMutation
 */
export function useApiEventRefundTemplateListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<EventRefundTemplate>>,
    Error,
    ApiRequest<PageQuery<EventRefundTemplateListReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<EventRefundTemplate>>,
    Error,
    ApiRequest<PageQuery<EventRefundTemplateListReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<EventRefundTemplateListReqDto>>) => queryApiEventRefundTemplateList(params, config),
  });
}



/**
 * 活动：退改模板管理查询退改模板详情
 * query
 */
export function queryApiEventRefundTemplateDetail(
  params: ApiRequest<EventRefundTemplateDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<EventRefundTemplateResDto>> {
  return requestUtils.post(`/api/event-refund-template/detail`, generateParams(params, "post", "query"), config);
}

/**
 * 活动：退改模板管理查询退改模板详情
 * useQuery
 */
export function useApiEventRefundTemplateDetailQuery(
  params: DecorationParams<ApiRequest<EventRefundTemplateDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<EventRefundTemplateResDto>, GetTSelect<ApiResponse<EventRefundTemplateResDto>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventRefundTemplateDetailReqDto>,
    GetTSelect<ApiResponse<EventRefundTemplateResDto>>
  >(
    ["ApiEventRefundTemplateDetail"],
    () => queryApiEventRefundTemplateDetail(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动：退改模板管理查询退改模板详情
 * useMutation
 */
export function useApiEventRefundTemplateDetailMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<EventRefundTemplateResDto>,
    Error,
    ApiRequest<EventRefundTemplateDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<EventRefundTemplateResDto>,
    Error,
    ApiRequest<EventRefundTemplateDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventRefundTemplateDetailReqDto>) => queryApiEventRefundTemplateDetail(params, config),
  });
}



/**
 * 活动：退改模板管理新增退改模板
 * query
 */
export function queryApiEventRefundTemplateAdd(
  params: ApiRequest<EventRefundTemplateReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/event-refund-template/add`, generateParams(params, "post", "query"), config);
}

/**
 * 活动：退改模板管理新增退改模板
 * useQuery
 */
export function useApiEventRefundTemplateAddQuery(
  params: DecorationParams<ApiRequest<EventRefundTemplateReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventRefundTemplateReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiEventRefundTemplateAdd"],
    () => queryApiEventRefundTemplateAdd(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动：退改模板管理新增退改模板
 * useMutation
 */
export function useApiEventRefundTemplateAddMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<EventRefundTemplateReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<EventRefundTemplateReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventRefundTemplateReqDto>) => queryApiEventRefundTemplateAdd(params, config),
  });
}



/**
 * 活动：退改模板管理修改退改模板
 * query
 */
export function queryApiEventRefundTemplateEdit(
  params: ApiRequest<EventRefundTemplateReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/event-refund-template/edit`, generateParams(params, "post", "query"), config);
}

/**
 * 活动：退改模板管理修改退改模板
 * useQuery
 */
export function useApiEventRefundTemplateEditQuery(
  params: DecorationParams<ApiRequest<EventRefundTemplateReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventRefundTemplateReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiEventRefundTemplateEdit"],
    () => queryApiEventRefundTemplateEdit(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动：退改模板管理修改退改模板
 * useMutation
 */
export function useApiEventRefundTemplateEditMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<EventRefundTemplateReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<EventRefundTemplateReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventRefundTemplateReqDto>) => queryApiEventRefundTemplateEdit(params, config),
  });
}



/**
 * 活动：退改模板管理切换模板状态
 * query
 */
export function queryApiEventRefundTemplateToggleStatus(
  params: ApiRequest<EventRefundTemplateDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/event-refund-template/toggle-status`, generateParams(params, "post", "query"), config);
}

/**
 * 活动：退改模板管理切换模板状态
 * useQuery
 */
export function useApiEventRefundTemplateToggleStatusQuery(
  params: DecorationParams<ApiRequest<EventRefundTemplateDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventRefundTemplateDetailReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiEventRefundTemplateToggleStatus"],
    () => queryApiEventRefundTemplateToggleStatus(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动：退改模板管理切换模板状态
 * useMutation
 */
export function useApiEventRefundTemplateToggleStatusMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<EventRefundTemplateDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<EventRefundTemplateDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventRefundTemplateDetailReqDto>) => queryApiEventRefundTemplateToggleStatus(params, config),
  });
}



/**
 * 活动：退改模板管理删除退改模板
 * query
 */
export function queryApiEventRefundTemplateDelete(
  params: ApiRequest<EventRefundTemplateDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/event-refund-template/delete`, generateParams(params, "post", "query"), config);
}

/**
 * 活动：退改模板管理删除退改模板
 * useQuery
 */
export function useApiEventRefundTemplateDeleteQuery(
  params: DecorationParams<ApiRequest<EventRefundTemplateDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<EventRefundTemplateDetailReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiEventRefundTemplateDelete"],
    () => queryApiEventRefundTemplateDelete(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 活动：退改模板管理删除退改模板
 * useMutation
 */
export function useApiEventRefundTemplateDeleteMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<EventRefundTemplateDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<EventRefundTemplateDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<EventRefundTemplateDetailReqDto>) => queryApiEventRefundTemplateDelete(params, config),
  });
}



/**
 * 权限管理：权限规则获取前端所需菜单
 * query
 */
export function queryApiMenusBuild(
  params: void,
  config?: Record<string, any>
): Promise<ApiResponse<Array<MenuVo>>> {
  return requestUtils.post(`/api/menus/build`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：权限规则获取前端所需菜单
 * useQuery
 */
export function useApiMenusBuildQuery(
  params: DecorationParams<void>,
  options?: DecorationOptions<ApiResponse<Array<MenuVo>>, GetTSelect<ApiResponse<Array<MenuVo>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    void,
    GetTSelect<ApiResponse<Array<MenuVo>>>
  >(
    ["ApiMenusBuild"],
    () => queryApiMenusBuild(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：权限规则获取前端所需菜单
 * useMutation
 */
export function useApiMenusBuildMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Array<MenuVo>>,
    Error,
    void,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Array<MenuVo>>,
    Error,
    void
  >({
    ...options,
    mutationFn: (params: void) => queryApiMenusBuild(params, config),
  });
}



/**
 * 权限管理：权限规则返回上级类目
 * query
 */
export function queryApiMenusLazy(
  params: {"pid": string},
  config?: Record<string, any>
): Promise<ApiResponse<Array<SysMenu>>> {
  return requestUtils.get(`/api/menus/lazy`, generateParams(params, "get", "query"), config);
}

/**
 * 权限管理：权限规则返回上级类目
 * useQuery
 */
export function useApiMenusLazyQuery(
  params: DecorationParams<{"pid": string}>,
  options?: DecorationOptions<ApiResponse<Array<SysMenu>>, GetTSelect<ApiResponse<Array<SysMenu>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"pid": string},
    GetTSelect<ApiResponse<Array<SysMenu>>>
  >(
    ["ApiMenusLazy"],
    () => queryApiMenusLazy(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：权限规则返回上级类目
 * useMutation
 */
export function useApiMenusLazyMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Array<SysMenu>>,
    Error,
    {"pid": string},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Array<SysMenu>>,
    Error,
    {"pid": string}
  >({
    ...options,
    mutationFn: (params: {"pid": string}) => queryApiMenusLazy(params, config),
  });
}



/**
 * 权限管理：权限规则返回全部的菜单
 * query
 */
export function queryApiMenusList(
  params: ApiRequest<MenuListReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<Array<SysMenu>>> {
  return requestUtils.post(`/api/menus/list`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：权限规则返回全部的菜单
 * useQuery
 */
export function useApiMenusListQuery(
  params: DecorationParams<ApiRequest<MenuListReqDto>>,
  options?: DecorationOptions<ApiResponse<Array<SysMenu>>, GetTSelect<ApiResponse<Array<SysMenu>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<MenuListReqDto>,
    GetTSelect<ApiResponse<Array<SysMenu>>>
  >(
    ["ApiMenusList"],
    () => queryApiMenusList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：权限规则返回全部的菜单
 * useMutation
 */
export function useApiMenusListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Array<SysMenu>>,
    Error,
    ApiRequest<MenuListReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Array<SysMenu>>,
    Error,
    ApiRequest<MenuListReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<MenuListReqDto>) => queryApiMenusList(params, config),
  });
}



/**
 * 权限管理：权限规则查询菜单:根据ID获取
 * query
 */
export function queryApiMenusDetail(
  params: ApiRequest<MenuDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<SysMenu>> {
  return requestUtils.post(`/api/menus/detail`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：权限规则查询菜单:根据ID获取
 * useQuery
 */
export function useApiMenusDetailQuery(
  params: DecorationParams<ApiRequest<MenuDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<SysMenu>, GetTSelect<ApiResponse<SysMenu>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<MenuDetailReqDto>,
    GetTSelect<ApiResponse<SysMenu>>
  >(
    ["ApiMenusDetail"],
    () => queryApiMenusDetail(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：权限规则查询菜单:根据ID获取
 * useMutation
 */
export function useApiMenusDetailMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<SysMenu>,
    Error,
    ApiRequest<MenuDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<SysMenu>,
    Error,
    ApiRequest<MenuDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<MenuDetailReqDto>) => queryApiMenusDetail(params, config),
  });
}



/**
 * 权限管理：权限规则新增菜单
 * query
 */
export function queryApiMenusAdd(
  params: ApiRequest<MenuAddReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/menus/add`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：权限规则新增菜单
 * useQuery
 */
export function useApiMenusAddQuery(
  params: DecorationParams<ApiRequest<MenuAddReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<MenuAddReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiMenusAdd"],
    () => queryApiMenusAdd(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：权限规则新增菜单
 * useMutation
 */
export function useApiMenusAddMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<MenuAddReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<MenuAddReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<MenuAddReqDto>) => queryApiMenusAdd(params, config),
  });
}



/**
 * 权限管理：权限规则修改菜单
 * query
 */
export function queryApiMenusEdit(
  params: ApiRequest<MenuEditReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/menus/edit`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：权限规则修改菜单
 * useQuery
 */
export function useApiMenusEditQuery(
  params: DecorationParams<ApiRequest<MenuEditReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<MenuEditReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiMenusEdit"],
    () => queryApiMenusEdit(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：权限规则修改菜单
 * useMutation
 */
export function useApiMenusEditMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<MenuEditReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<MenuEditReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<MenuEditReqDto>) => queryApiMenusEdit(params, config),
  });
}



/**
 * 权限管理：权限规则删除菜单
 * query
 */
export function queryApiMenusDel(
  params: ApiRequest<MenuDelReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/menus/del`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：权限规则删除菜单
 * useQuery
 */
export function useApiMenusDelQuery(
  params: DecorationParams<ApiRequest<MenuDelReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<MenuDelReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiMenusDel"],
    () => queryApiMenusDel(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：权限规则删除菜单
 * useMutation
 */
export function useApiMenusDelMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<MenuDelReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<MenuDelReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<MenuDelReqDto>) => queryApiMenusDel(params, config),
  });
}



/**
 * 权限管理：主办方菜单管理返回上级类目
 * query
 */
export function queryApiMerchantMenusLazy(
  params: {"pid": string},
  config?: Record<string, any>
): Promise<ApiResponse<Array<PermissionMerchantMenu>>> {
  return requestUtils.get(`/api/merchant-menus/lazy`, generateParams(params, "get", "query"), config);
}

/**
 * 权限管理：主办方菜单管理返回上级类目
 * useQuery
 */
export function useApiMerchantMenusLazyQuery(
  params: DecorationParams<{"pid": string}>,
  options?: DecorationOptions<ApiResponse<Array<PermissionMerchantMenu>>, GetTSelect<ApiResponse<Array<PermissionMerchantMenu>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"pid": string},
    GetTSelect<ApiResponse<Array<PermissionMerchantMenu>>>
  >(
    ["ApiMerchantMenusLazy"],
    () => queryApiMerchantMenusLazy(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：主办方菜单管理返回上级类目
 * useMutation
 */
export function useApiMerchantMenusLazyMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Array<PermissionMerchantMenu>>,
    Error,
    {"pid": string},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Array<PermissionMerchantMenu>>,
    Error,
    {"pid": string}
  >({
    ...options,
    mutationFn: (params: {"pid": string}) => queryApiMerchantMenusLazy(params, config),
  });
}



/**
 * 权限管理：主办方菜单管理返回全部的商家菜单
 * query
 */
export function queryApiMerchantMenusList(
  params: ApiRequest<MerchantMenuListReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<Array<PermissionMerchantMenu>>> {
  return requestUtils.post(`/api/merchant-menus/list`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：主办方菜单管理返回全部的商家菜单
 * useQuery
 */
export function useApiMerchantMenusListQuery(
  params: DecorationParams<ApiRequest<MerchantMenuListReqDto>>,
  options?: DecorationOptions<ApiResponse<Array<PermissionMerchantMenu>>, GetTSelect<ApiResponse<Array<PermissionMerchantMenu>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<MerchantMenuListReqDto>,
    GetTSelect<ApiResponse<Array<PermissionMerchantMenu>>>
  >(
    ["ApiMerchantMenusList"],
    () => queryApiMerchantMenusList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：主办方菜单管理返回全部的商家菜单
 * useMutation
 */
export function useApiMerchantMenusListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Array<PermissionMerchantMenu>>,
    Error,
    ApiRequest<MerchantMenuListReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Array<PermissionMerchantMenu>>,
    Error,
    ApiRequest<MerchantMenuListReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<MerchantMenuListReqDto>) => queryApiMerchantMenusList(params, config),
  });
}



/**
 * 权限管理：主办方菜单管理查询商家菜单:根据ID获取
 * query
 */
export function queryApiMerchantMenusDetail(
  params: ApiRequest<MerchantMenuDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<PermissionMerchantMenu>> {
  return requestUtils.post(`/api/merchant-menus/detail`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：主办方菜单管理查询商家菜单:根据ID获取
 * useQuery
 */
export function useApiMerchantMenusDetailQuery(
  params: DecorationParams<ApiRequest<MerchantMenuDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<PermissionMerchantMenu>, GetTSelect<ApiResponse<PermissionMerchantMenu>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<MerchantMenuDetailReqDto>,
    GetTSelect<ApiResponse<PermissionMerchantMenu>>
  >(
    ["ApiMerchantMenusDetail"],
    () => queryApiMerchantMenusDetail(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：主办方菜单管理查询商家菜单:根据ID获取
 * useMutation
 */
export function useApiMerchantMenusDetailMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PermissionMerchantMenu>,
    Error,
    ApiRequest<MerchantMenuDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PermissionMerchantMenu>,
    Error,
    ApiRequest<MerchantMenuDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<MerchantMenuDetailReqDto>) => queryApiMerchantMenusDetail(params, config),
  });
}



/**
 * 权限管理：主办方菜单管理新增商家菜单
 * query
 */
export function queryApiMerchantMenusAdd(
  params: ApiRequest<MerchantMenuAddReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/merchant-menus/add`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：主办方菜单管理新增商家菜单
 * useQuery
 */
export function useApiMerchantMenusAddQuery(
  params: DecorationParams<ApiRequest<MerchantMenuAddReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<MerchantMenuAddReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiMerchantMenusAdd"],
    () => queryApiMerchantMenusAdd(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：主办方菜单管理新增商家菜单
 * useMutation
 */
export function useApiMerchantMenusAddMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<MerchantMenuAddReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<MerchantMenuAddReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<MerchantMenuAddReqDto>) => queryApiMerchantMenusAdd(params, config),
  });
}



/**
 * 权限管理：主办方菜单管理修改商家菜单
 * query
 */
export function queryApiMerchantMenusEdit(
  params: ApiRequest<MerchantMenuEditReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/merchant-menus/edit`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：主办方菜单管理修改商家菜单
 * useQuery
 */
export function useApiMerchantMenusEditQuery(
  params: DecorationParams<ApiRequest<MerchantMenuEditReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<MerchantMenuEditReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiMerchantMenusEdit"],
    () => queryApiMerchantMenusEdit(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：主办方菜单管理修改商家菜单
 * useMutation
 */
export function useApiMerchantMenusEditMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<MerchantMenuEditReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<MerchantMenuEditReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<MerchantMenuEditReqDto>) => queryApiMerchantMenusEdit(params, config),
  });
}



/**
 * 权限管理：主办方菜单管理删除商家菜单
 * query
 */
export function queryApiMerchantMenusDel(
  params: ApiRequest<MerchantMenuDelReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/merchant-menus/del`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：主办方菜单管理删除商家菜单
 * useQuery
 */
export function useApiMerchantMenusDelQuery(
  params: DecorationParams<ApiRequest<MerchantMenuDelReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<MerchantMenuDelReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiMerchantMenusDel"],
    () => queryApiMerchantMenusDel(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：主办方菜单管理删除商家菜单
 * useMutation
 */
export function useApiMerchantMenusDelMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<MerchantMenuDelReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<MerchantMenuDelReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<MerchantMenuDelReqDto>) => queryApiMerchantMenusDel(params, config),
  });
}



/**
 * 通知管理-模版列表
 * query
 */
export function queryApiNotifyTemplatesList(
  params: ApiRequest<PageQuery<NotifyTemplatesReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/notifyTemplates/list`, generateParams(params, "post", "query"), config);
}

/**
 * 通知管理-模版列表
 * useQuery
 */
export function useApiNotifyTemplatesListQuery(
  params: DecorationParams<ApiRequest<PageQuery<NotifyTemplatesReqDto>>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<NotifyTemplatesReqDto>>,
    GetTSelect<ApiResponse>
  >(
    ["ApiNotifyTemplatesList"],
    () => queryApiNotifyTemplatesList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 通知管理-模版列表
 * useMutation
 */
export function useApiNotifyTemplatesListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<PageQuery<NotifyTemplatesReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<PageQuery<NotifyTemplatesReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<NotifyTemplatesReqDto>>) => queryApiNotifyTemplatesList(params, config),
  });
}



/**
 * 通知管理-模版通知模版详情
 * query
 */
export function queryApiNotifyTemplatesEditId(
  params: {"id": string},
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.get(`/api/notifyTemplates/edit/${params.id}`, generateParams(params, "get", "path"), config);
}

/**
 * 通知管理-模版通知模版详情
 * useQuery
 */
export function useApiNotifyTemplatesEditIdQuery(
  params: DecorationParams<{"id": string}>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"id": string},
    GetTSelect<ApiResponse>
  >(
    ["ApiNotifyTemplatesEditId"],
    () => queryApiNotifyTemplatesEditId(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 通知管理-模版通知模版详情
 * useMutation
 */
export function useApiNotifyTemplatesEditIdMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    {"id": string},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    {"id": string}
  >({
    ...options,
    mutationFn: (params: {"id": string}) => queryApiNotifyTemplatesEditId(params, config),
  });
}



/**
 * 通知管理-模版更改发送通知方式状态
 * query
 */
export function queryApiNotifyTemplatesChangeStatus(
  params: ApiRequest<NotifyTemplatesReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse> {
  return requestUtils.post(`/api/notifyTemplates/changeStatus`, generateParams(params, "post", "query"), config);
}

/**
 * 通知管理-模版更改发送通知方式状态
 * useQuery
 */
export function useApiNotifyTemplatesChangeStatusQuery(
  params: DecorationParams<ApiRequest<NotifyTemplatesReqDto>>,
  options?: DecorationOptions<ApiResponse, GetTSelect<ApiResponse>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<NotifyTemplatesReqDto>,
    GetTSelect<ApiResponse>
  >(
    ["ApiNotifyTemplatesChangeStatus"],
    () => queryApiNotifyTemplatesChangeStatus(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 通知管理-模版更改发送通知方式状态
 * useMutation
 */
export function useApiNotifyTemplatesChangeStatusMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse,
    Error,
    ApiRequest<NotifyTemplatesReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse,
    Error,
    ApiRequest<NotifyTemplatesReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<NotifyTemplatesReqDto>) => queryApiNotifyTemplatesChangeStatus(params, config),
  });
}



/**
 * 系统：在线用户管理导出数据
 * query
 */
export function queryAuthOnlineDownload(
  params: {"response": any | undefined; "username": string},
  config?: Record<string, any>
): Promise<void> {
  return requestUtils.get(`/auth/online/download`, generateParams(params, "get", "query"), config);
}

/**
 * 系统：在线用户管理导出数据
 * useQuery
 */
export function useAuthOnlineDownloadQuery(
  params: DecorationParams<{"response": any | undefined; "username": string}>,
  options?: DecorationOptions<void, GetTSelect<void>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"response": any | undefined; "username": string},
    GetTSelect<void>
  >(
    ["AuthOnlineDownload"],
    () => queryAuthOnlineDownload(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 系统：在线用户管理导出数据
 * useMutation
 */
export function useAuthOnlineDownloadMutation(
  options?: Partial<UseMutationOptions<
    void,
    Error,
    {"response": any | undefined; "username": string},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    void,
    Error,
    {"response": any | undefined; "username": string}
  >({
    ...options,
    mutationFn: (params: {"response": any | undefined; "username": string}) => queryAuthOnlineDownload(params, config),
  });
}



/**
 * 系统-系统设置-基础设置获取平台配置列表
 * query
 */
export function queryApiPlatformConfigList(
  params: {},
  config?: Record<string, any>
): Promise<ApiResponse<Array<SysPlatformConfig>>> {
  return requestUtils.get(`/api/platform/config/list`, generateParams(params, "get", "query"), config);
}

/**
 * 系统-系统设置-基础设置获取平台配置列表
 * useQuery
 */
export function useApiPlatformConfigListQuery(
  params: DecorationParams<{}>,
  options?: DecorationOptions<ApiResponse<Array<SysPlatformConfig>>, GetTSelect<ApiResponse<Array<SysPlatformConfig>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {},
    GetTSelect<ApiResponse<Array<SysPlatformConfig>>>
  >(
    ["ApiPlatformConfigList"],
    () => queryApiPlatformConfigList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 系统-系统设置-基础设置获取平台配置列表
 * useMutation
 */
export function useApiPlatformConfigListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Array<SysPlatformConfig>>,
    Error,
    {},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Array<SysPlatformConfig>>,
    Error,
    {}
  >({
    ...options,
    mutationFn: (params: {}) => queryApiPlatformConfigList(params, config),
  });
}



/**
 * 系统-系统设置-基础设置根据ID查询平台配置
 * query
 */
export function queryApiPlatformConfigId(
  params: {"id": string},
  config?: Record<string, any>
): Promise<ApiResponse<SysPlatformConfig>> {
  return requestUtils.get(`/api/platform/config/${params.id}`, generateParams(params, "get", "path"), config);
}

/**
 * 系统-系统设置-基础设置根据ID查询平台配置
 * useQuery
 */
export function useApiPlatformConfigIdQuery(
  params: DecorationParams<{"id": string}>,
  options?: DecorationOptions<ApiResponse<SysPlatformConfig>, GetTSelect<ApiResponse<SysPlatformConfig>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"id": string},
    GetTSelect<ApiResponse<SysPlatformConfig>>
  >(
    ["ApiPlatformConfigId"],
    () => queryApiPlatformConfigId(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 系统-系统设置-基础设置根据ID查询平台配置
 * useMutation
 */
export function useApiPlatformConfigIdMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<SysPlatformConfig>,
    Error,
    {"id": string},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<SysPlatformConfig>,
    Error,
    {"id": string}
  >({
    ...options,
    mutationFn: (params: {"id": string}) => queryApiPlatformConfigId(params, config),
  });
}



/**
 * 系统-系统设置-基础设置新增平台配置
 * query
 */
export function queryApiPlatformConfigAdd(
  params: ApiRequest<SysPlatformConfig>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/platform/config/add`, generateParams(params, "post", "query"), config);
}

/**
 * 系统-系统设置-基础设置新增平台配置
 * useQuery
 */
export function useApiPlatformConfigAddQuery(
  params: DecorationParams<ApiRequest<SysPlatformConfig>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<SysPlatformConfig>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiPlatformConfigAdd"],
    () => queryApiPlatformConfigAdd(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 系统-系统设置-基础设置新增平台配置
 * useMutation
 */
export function useApiPlatformConfigAddMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<SysPlatformConfig>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<SysPlatformConfig>
  >({
    ...options,
    mutationFn: (params: ApiRequest<SysPlatformConfig>) => queryApiPlatformConfigAdd(params, config),
  });
}



/**
 * 系统-系统设置-基础设置修改平台配置
 * query
 */
export function queryApiPlatformConfigEdit(
  params: ApiRequest<SysPlatformConfig>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/platform/config/edit`, generateParams(params, "post", "query"), config);
}

/**
 * 系统-系统设置-基础设置修改平台配置
 * useQuery
 */
export function useApiPlatformConfigEditQuery(
  params: DecorationParams<ApiRequest<SysPlatformConfig>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<SysPlatformConfig>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiPlatformConfigEdit"],
    () => queryApiPlatformConfigEdit(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 系统-系统设置-基础设置修改平台配置
 * useMutation
 */
export function useApiPlatformConfigEditMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<SysPlatformConfig>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<SysPlatformConfig>
  >({
    ...options,
    mutationFn: (params: ApiRequest<SysPlatformConfig>) => queryApiPlatformConfigEdit(params, config),
  });
}



/**
 * 权限管理：角色管理返回全部的角色
 * query
 */
export function queryApiRolesAll(
  params: {},
  config?: Record<string, any>
): Promise<ApiResponse<Array<SysRole>>> {
  return requestUtils.get(`/api/roles/all`, generateParams(params, "get", "query"), config);
}

/**
 * 权限管理：角色管理返回全部的角色
 * useQuery
 */
export function useApiRolesAllQuery(
  params: DecorationParams<{}>,
  options?: DecorationOptions<ApiResponse<Array<SysRole>>, GetTSelect<ApiResponse<Array<SysRole>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {},
    GetTSelect<ApiResponse<Array<SysRole>>>
  >(
    ["ApiRolesAll"],
    () => queryApiRolesAll(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：角色管理返回全部的角色
 * useMutation
 */
export function useApiRolesAllMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Array<SysRole>>,
    Error,
    {},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Array<SysRole>>,
    Error,
    {}
  >({
    ...options,
    mutationFn: (params: {}) => queryApiRolesAll(params, config),
  });
}



/**
 * 权限管理：角色管理查询角色
 * query
 */
export function queryApiRolesList(
  params: ApiRequest<PageQuery<RoleListReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<SysRole>>> {
  return requestUtils.post(`/api/roles/list`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：角色管理查询角色
 * useQuery
 */
export function useApiRolesListQuery(
  params: DecorationParams<ApiRequest<PageQuery<RoleListReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<SysRole>>, GetTSelect<ApiResponse<PageResult<SysRole>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<RoleListReqDto>>,
    GetTSelect<ApiResponse<PageResult<SysRole>>>
  >(
    ["ApiRolesList"],
    () => queryApiRolesList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：角色管理查询角色
 * useMutation
 */
export function useApiRolesListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<SysRole>>,
    Error,
    ApiRequest<PageQuery<RoleListReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<SysRole>>,
    Error,
    ApiRequest<PageQuery<RoleListReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<RoleListReqDto>>) => queryApiRolesList(params, config),
  });
}



/**
 * 权限管理：角色管理新增角色
 * query
 */
export function queryApiRolesAdd(
  params: ApiRequest<RoleAddReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/roles/add`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：角色管理新增角色
 * useQuery
 */
export function useApiRolesAddQuery(
  params: DecorationParams<ApiRequest<RoleAddReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<RoleAddReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiRolesAdd"],
    () => queryApiRolesAdd(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：角色管理新增角色
 * useMutation
 */
export function useApiRolesAddMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<RoleAddReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<RoleAddReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<RoleAddReqDto>) => queryApiRolesAdd(params, config),
  });
}



/**
 * 权限管理：角色管理修改角色
 * query
 */
export function queryApiRolesEdit(
  params: ApiRequest<RoleEditReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/roles/edit`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：角色管理修改角色
 * useQuery
 */
export function useApiRolesEditQuery(
  params: DecorationParams<ApiRequest<RoleEditReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<RoleEditReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiRolesEdit"],
    () => queryApiRolesEdit(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：角色管理修改角色
 * useMutation
 */
export function useApiRolesEditMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<RoleEditReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<RoleEditReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<RoleEditReqDto>) => queryApiRolesEdit(params, config),
  });
}



/**
 * 权限管理：角色管理修改角色菜单
 * query
 */
export function queryApiRolesMenu(
  params: ApiRequest<RoleMenuEditReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<Record<string, any>>> {
  return requestUtils.post(`/api/roles/menu`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：角色管理修改角色菜单
 * useQuery
 */
export function useApiRolesMenuQuery(
  params: DecorationParams<ApiRequest<RoleMenuEditReqDto>>,
  options?: DecorationOptions<ApiResponse<Record<string, any>>, GetTSelect<ApiResponse<Record<string, any>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<RoleMenuEditReqDto>,
    GetTSelect<ApiResponse<Record<string, any>>>
  >(
    ["ApiRolesMenu"],
    () => queryApiRolesMenu(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：角色管理修改角色菜单
 * useMutation
 */
export function useApiRolesMenuMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Record<string, any>>,
    Error,
    ApiRequest<RoleMenuEditReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Record<string, any>>,
    Error,
    ApiRequest<RoleMenuEditReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<RoleMenuEditReqDto>) => queryApiRolesMenu(params, config),
  });
}



/**
 * 权限管理：角色管理删除角色
 * query
 */
export function queryApiRolesDel(
  params: ApiRequest<RoleDelReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/roles/del`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：角色管理删除角色
 * useQuery
 */
export function useApiRolesDelQuery(
  params: DecorationParams<ApiRequest<RoleDelReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<RoleDelReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiRolesDel"],
    () => queryApiRolesDel(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：角色管理删除角色
 * useMutation
 */
export function useApiRolesDelMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<RoleDelReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<RoleDelReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<RoleDelReqDto>) => queryApiRolesDel(params, config),
  });
}



/**
 * 广告管理:用户订阅管理分页查询订阅用户
 * query
 */
export function queryApiSubscribeList(
  params: ApiRequest<PageQuery<SubscribeReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<SubscribeResDto>>> {
  return requestUtils.post(`/api/subscribe/list`, generateParams(params, "post", "query"), config);
}

/**
 * 广告管理:用户订阅管理分页查询订阅用户
 * useQuery
 */
export function useApiSubscribeListQuery(
  params: DecorationParams<ApiRequest<PageQuery<SubscribeReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<SubscribeResDto>>, GetTSelect<ApiResponse<PageResult<SubscribeResDto>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<SubscribeReqDto>>,
    GetTSelect<ApiResponse<PageResult<SubscribeResDto>>>
  >(
    ["ApiSubscribeList"],
    () => queryApiSubscribeList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理:用户订阅管理分页查询订阅用户
 * useMutation
 */
export function useApiSubscribeListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<SubscribeResDto>>,
    Error,
    ApiRequest<PageQuery<SubscribeReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<SubscribeResDto>>,
    Error,
    ApiRequest<PageQuery<SubscribeReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<SubscribeReqDto>>) => queryApiSubscribeList(params, config),
  });
}



/**
 * 广告管理:用户订阅管理删除订阅记录
 * query
 */
export function queryApiSubscribeDeleteId(
  params: string,
  config?: Record<string, any>
): Promise<ApiResponse<string>> {
  return requestUtils.del(`/api/subscribe/delete/{id}`, generateParams(params, "del", "query"), config);
}

/**
 * 广告管理:用户订阅管理删除订阅记录
 * useQuery
 */
export function useApiSubscribeDeleteIdQuery(
  params: DecorationParams<string>,
  options?: DecorationOptions<ApiResponse<string>, GetTSelect<ApiResponse<string>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    string,
    GetTSelect<ApiResponse<string>>
  >(
    ["ApiSubscribeDeleteId"],
    () => queryApiSubscribeDeleteId(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理:用户订阅管理删除订阅记录
 * useMutation
 */
export function useApiSubscribeDeleteIdMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<string>,
    Error,
    string,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<string>,
    Error,
    string
  >({
    ...options,
    mutationFn: (params: string) => queryApiSubscribeDeleteId(params, config),
  });
}



/**
 * 广告管理:用户订阅管理订阅详情
 * query
 */
export function queryApiSubscribeDetail(
  params: {"id": string},
  config?: Record<string, any>
): Promise<ApiResponse<SubscribeResDto>> {
  return requestUtils.get(`/api/subscribe/detail`, generateParams(params, "get", "query"), config);
}

/**
 * 广告管理:用户订阅管理订阅详情
 * useQuery
 */
export function useApiSubscribeDetailQuery(
  params: DecorationParams<{"id": string}>,
  options?: DecorationOptions<ApiResponse<SubscribeResDto>, GetTSelect<ApiResponse<SubscribeResDto>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"id": string},
    GetTSelect<ApiResponse<SubscribeResDto>>
  >(
    ["ApiSubscribeDetail"],
    () => queryApiSubscribeDetail(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理:用户订阅管理订阅详情
 * useMutation
 */
export function useApiSubscribeDetailMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<SubscribeResDto>,
    Error,
    {"id": string},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<SubscribeResDto>,
    Error,
    {"id": string}
  >({
    ...options,
    mutationFn: (params: {"id": string}) => queryApiSubscribeDetail(params, config),
  });
}



/**
 * 广告管理:用户订阅管理订阅统计信息
 * query
 */
export function queryApiSubscribeStatistics(
  params: {},
  config?: Record<string, any>
): Promise<ApiResponse<SubscribeStatisticsResDto>> {
  return requestUtils.get(`/api/subscribe/statistics`, generateParams(params, "get", "query"), config);
}

/**
 * 广告管理:用户订阅管理订阅统计信息
 * useQuery
 */
export function useApiSubscribeStatisticsQuery(
  params: DecorationParams<{}>,
  options?: DecorationOptions<ApiResponse<SubscribeStatisticsResDto>, GetTSelect<ApiResponse<SubscribeStatisticsResDto>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {},
    GetTSelect<ApiResponse<SubscribeStatisticsResDto>>
  >(
    ["ApiSubscribeStatistics"],
    () => queryApiSubscribeStatistics(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理:用户订阅管理订阅统计信息
 * useMutation
 */
export function useApiSubscribeStatisticsMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<SubscribeStatisticsResDto>,
    Error,
    {},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<SubscribeStatisticsResDto>,
    Error,
    {}
  >({
    ...options,
    mutationFn: (params: {}) => queryApiSubscribeStatistics(params, config),
  });
}



/**
 * 广告管理:用户订阅管理批量发送消息给订阅用户
 * query
 */
export function queryApiSubscribeSendMessage(
  params: ApiRequest<SubscribeSendMessageReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<string>> {
  return requestUtils.post(`/api/subscribe/send/message`, generateParams(params, "post", "query"), config);
}

/**
 * 广告管理:用户订阅管理批量发送消息给订阅用户
 * useQuery
 */
export function useApiSubscribeSendMessageQuery(
  params: DecorationParams<ApiRequest<SubscribeSendMessageReqDto>>,
  options?: DecorationOptions<ApiResponse<string>, GetTSelect<ApiResponse<string>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<SubscribeSendMessageReqDto>,
    GetTSelect<ApiResponse<string>>
  >(
    ["ApiSubscribeSendMessage"],
    () => queryApiSubscribeSendMessage(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理:用户订阅管理批量发送消息给订阅用户
 * useMutation
 */
export function useApiSubscribeSendMessageMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<string>,
    Error,
    ApiRequest<SubscribeSendMessageReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<string>,
    Error,
    ApiRequest<SubscribeSendMessageReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<SubscribeSendMessageReqDto>) => queryApiSubscribeSendMessage(params, config),
  });
}



/**
 * 订单：订单管理活动订单分页
 * query
 */
export function queryApiOrderEventPage(
  params: ApiRequest<PageQuery<TOrderListReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<TOrderEventPageResDto>>> {
  return requestUtils.post(`/api/order/event-page`, generateParams(params, "post", "query"), config);
}

/**
 * 订单：订单管理活动订单分页
 * useQuery
 */
export function useApiOrderEventPageQuery(
  params: DecorationParams<ApiRequest<PageQuery<TOrderListReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<TOrderEventPageResDto>>, GetTSelect<ApiResponse<PageResult<TOrderEventPageResDto>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<TOrderListReqDto>>,
    GetTSelect<ApiResponse<PageResult<TOrderEventPageResDto>>>
  >(
    ["ApiOrderEventPage"],
    () => queryApiOrderEventPage(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 订单：订单管理活动订单分页
 * useMutation
 */
export function useApiOrderEventPageMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<TOrderEventPageResDto>>,
    Error,
    ApiRequest<PageQuery<TOrderListReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<TOrderEventPageResDto>>,
    Error,
    ApiRequest<PageQuery<TOrderListReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<TOrderListReqDto>>) => queryApiOrderEventPage(params, config),
  });
}



/**
 * 订单：订单管理活动订单导出
 * query
 */
export function queryApiOrderEventExport(
  params: ApiRequest<TOrderListReqDto>,
  config?: Record<string, any>
): Promise<void> {
  return requestUtils.post(`/api/order/event-export`, generateParams(params, "post", "query"), config);
}

/**
 * 订单：订单管理活动订单导出
 * useQuery
 */
export function useApiOrderEventExportQuery(
  params: DecorationParams<ApiRequest<TOrderListReqDto>>,
  options?: DecorationOptions<void, GetTSelect<void>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<TOrderListReqDto>,
    GetTSelect<void>
  >(
    ["ApiOrderEventExport"],
    () => queryApiOrderEventExport(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 订单：订单管理活动订单导出
 * useMutation
 */
export function useApiOrderEventExportMutation(
  options?: Partial<UseMutationOptions<
    void,
    Error,
    ApiRequest<TOrderListReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    void,
    Error,
    ApiRequest<TOrderListReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<TOrderListReqDto>) => queryApiOrderEventExport(params, config),
  });
}



/**
 * 订单：订单管理订阅订单分页
 * query
 */
export function queryApiOrderMemberPage(
  params: ApiRequest<PageQuery<TOrderListReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<TOrderMemberPageResDto>>> {
  return requestUtils.post(`/api/order/member-page`, generateParams(params, "post", "query"), config);
}

/**
 * 订单：订单管理订阅订单分页
 * useQuery
 */
export function useApiOrderMemberPageQuery(
  params: DecorationParams<ApiRequest<PageQuery<TOrderListReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<TOrderMemberPageResDto>>, GetTSelect<ApiResponse<PageResult<TOrderMemberPageResDto>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<TOrderListReqDto>>,
    GetTSelect<ApiResponse<PageResult<TOrderMemberPageResDto>>>
  >(
    ["ApiOrderMemberPage"],
    () => queryApiOrderMemberPage(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 订单：订单管理订阅订单分页
 * useMutation
 */
export function useApiOrderMemberPageMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<TOrderMemberPageResDto>>,
    Error,
    ApiRequest<PageQuery<TOrderListReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<TOrderMemberPageResDto>>,
    Error,
    ApiRequest<PageQuery<TOrderListReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<TOrderListReqDto>>) => queryApiOrderMemberPage(params, config),
  });
}



/**
 * 订单：订单管理订阅订单导出
 * query
 */
export function queryApiOrderMemberExport(
  params: ApiRequest<TOrderListReqDto>,
  config?: Record<string, any>
): Promise<void> {
  return requestUtils.post(`/api/order/member-export`, generateParams(params, "post", "query"), config);
}

/**
 * 订单：订单管理订阅订单导出
 * useQuery
 */
export function useApiOrderMemberExportQuery(
  params: DecorationParams<ApiRequest<TOrderListReqDto>>,
  options?: DecorationOptions<void, GetTSelect<void>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<TOrderListReqDto>,
    GetTSelect<void>
  >(
    ["ApiOrderMemberExport"],
    () => queryApiOrderMemberExport(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 订单：订单管理订阅订单导出
 * useMutation
 */
export function useApiOrderMemberExportMutation(
  options?: Partial<UseMutationOptions<
    void,
    Error,
    ApiRequest<TOrderListReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    void,
    Error,
    ApiRequest<TOrderListReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<TOrderListReqDto>) => queryApiOrderMemberExport(params, config),
  });
}



/**
 * 广告管理：联系我们分页查询表单记录
 * query
 */
export function queryApiContactFormPage(
  params: ApiRequest<PageQuery<UserContactFormListReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<UserContactFormListResDto>>> {
  return requestUtils.post(`/api/contact-form/page`, generateParams(params, "post", "query"), config);
}

/**
 * 广告管理：联系我们分页查询表单记录
 * useQuery
 */
export function useApiContactFormPageQuery(
  params: DecorationParams<ApiRequest<PageQuery<UserContactFormListReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<UserContactFormListResDto>>, GetTSelect<ApiResponse<PageResult<UserContactFormListResDto>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<UserContactFormListReqDto>>,
    GetTSelect<ApiResponse<PageResult<UserContactFormListResDto>>>
  >(
    ["ApiContactFormPage"],
    () => queryApiContactFormPage(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理：联系我们分页查询表单记录
 * useMutation
 */
export function useApiContactFormPageMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<UserContactFormListResDto>>,
    Error,
    ApiRequest<PageQuery<UserContactFormListReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<UserContactFormListResDto>>,
    Error,
    ApiRequest<PageQuery<UserContactFormListReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<UserContactFormListReqDto>>) => queryApiContactFormPage(params, config),
  });
}



/**
 * 广告管理：联系我们查询表单记录
 * query
 */
export function queryApiContactFormDetail(
  params: ApiRequest<UserContactFormDetailDto>,
  config?: Record<string, any>
): Promise<ApiResponse<UserContactFormDetailResDto>> {
  return requestUtils.post(`/api/contact-form/detail`, generateParams(params, "post", "query"), config);
}

/**
 * 广告管理：联系我们查询表单记录
 * useQuery
 */
export function useApiContactFormDetailQuery(
  params: DecorationParams<ApiRequest<UserContactFormDetailDto>>,
  options?: DecorationOptions<ApiResponse<UserContactFormDetailResDto>, GetTSelect<ApiResponse<UserContactFormDetailResDto>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserContactFormDetailDto>,
    GetTSelect<ApiResponse<UserContactFormDetailResDto>>
  >(
    ["ApiContactFormDetail"],
    () => queryApiContactFormDetail(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理：联系我们查询表单记录
 * useMutation
 */
export function useApiContactFormDetailMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<UserContactFormDetailResDto>,
    Error,
    ApiRequest<UserContactFormDetailDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<UserContactFormDetailResDto>,
    Error,
    ApiRequest<UserContactFormDetailDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserContactFormDetailDto>) => queryApiContactFormDetail(params, config),
  });
}



/**
 * 广告管理：联系我们删除表单记录
 * query
 */
export function queryApiContactFormDelete(
  params: ApiRequest<UserContactFormDeletedDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/contact-form/delete`, generateParams(params, "post", "query"), config);
}

/**
 * 广告管理：联系我们删除表单记录
 * useQuery
 */
export function useApiContactFormDeleteQuery(
  params: DecorationParams<ApiRequest<UserContactFormDeletedDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserContactFormDeletedDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiContactFormDelete"],
    () => queryApiContactFormDelete(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理：联系我们删除表单记录
 * useMutation
 */
export function useApiContactFormDeleteMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<UserContactFormDeletedDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<UserContactFormDeletedDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserContactFormDeletedDto>) => queryApiContactFormDelete(params, config),
  });
}



/**
 * 广告管理：联系我们批量删除表单记录
 * query
 */
export function queryApiContactFormBatchDelete(
  params: ApiRequest<UserContactFormBatchDeletedDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/contact-form/batch-delete`, generateParams(params, "post", "query"), config);
}

/**
 * 广告管理：联系我们批量删除表单记录
 * useQuery
 */
export function useApiContactFormBatchDeleteQuery(
  params: DecorationParams<ApiRequest<UserContactFormBatchDeletedDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserContactFormBatchDeletedDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiContactFormBatchDelete"],
    () => queryApiContactFormBatchDelete(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理：联系我们批量删除表单记录
 * useMutation
 */
export function useApiContactFormBatchDeleteMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<UserContactFormBatchDeletedDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<UserContactFormBatchDeletedDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserContactFormBatchDeletedDto>) => queryApiContactFormBatchDelete(params, config),
  });
}



/**
 * 广告管理：联系我们导出
 * query
 */
export function queryApiContactFormExport(
  params: ApiRequest<UserContactFormListReqDto>,
  config?: Record<string, any>
): Promise<void> {
  return requestUtils.post(`/api/contact-form/export`, generateParams(params, "post", "query"), config);
}

/**
 * 广告管理：联系我们导出
 * useQuery
 */
export function useApiContactFormExportQuery(
  params: DecorationParams<ApiRequest<UserContactFormListReqDto>>,
  options?: DecorationOptions<void, GetTSelect<void>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserContactFormListReqDto>,
    GetTSelect<void>
  >(
    ["ApiContactFormExport"],
    () => queryApiContactFormExport(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 广告管理：联系我们导出
 * useMutation
 */
export function useApiContactFormExportMutation(
  options?: Partial<UseMutationOptions<
    void,
    Error,
    ApiRequest<UserContactFormListReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    void,
    Error,
    ApiRequest<UserContactFormListReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserContactFormListReqDto>) => queryApiContactFormExport(params, config),
  });
}



/**
 * 权限管理：员工管理查询用户
 * query
 */
export function queryApiUsersList(
  params: ApiRequest<PageQuery<UserListReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<SysUser>>> {
  return requestUtils.post(`/api/users/list`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：员工管理查询用户
 * useQuery
 */
export function useApiUsersListQuery(
  params: DecorationParams<ApiRequest<PageQuery<UserListReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<SysUser>>, GetTSelect<ApiResponse<PageResult<SysUser>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<UserListReqDto>>,
    GetTSelect<ApiResponse<PageResult<SysUser>>>
  >(
    ["ApiUsersList"],
    () => queryApiUsersList(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：员工管理查询用户
 * useMutation
 */
export function useApiUsersListMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<SysUser>>,
    Error,
    ApiRequest<PageQuery<UserListReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<SysUser>>,
    Error,
    ApiRequest<PageQuery<UserListReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<UserListReqDto>>) => queryApiUsersList(params, config),
  });
}



/**
 * 权限管理：员工管理新增员工
 * query
 */
export function queryApiUsersAdd(
  params: ApiRequest<UserAddReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/users/add`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：员工管理新增员工
 * useQuery
 */
export function useApiUsersAddQuery(
  params: DecorationParams<ApiRequest<UserAddReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserAddReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiUsersAdd"],
    () => queryApiUsersAdd(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：员工管理新增员工
 * useMutation
 */
export function useApiUsersAddMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<UserAddReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<UserAddReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserAddReqDto>) => queryApiUsersAdd(params, config),
  });
}



/**
 * 权限管理：员工管理修改用户
 * query
 */
export function queryApiUsersEdit(
  params: ApiRequest<UserEditReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/users/edit`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：员工管理修改用户
 * useQuery
 */
export function useApiUsersEditQuery(
  params: DecorationParams<ApiRequest<UserEditReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserEditReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiUsersEdit"],
    () => queryApiUsersEdit(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：员工管理修改用户
 * useMutation
 */
export function useApiUsersEditMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<UserEditReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<UserEditReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserEditReqDto>) => queryApiUsersEdit(params, config),
  });
}



/**
 * 权限管理：员工管理修改用户启用状态
 * query
 */
export function queryApiUsersToggleEnabled(
  params: ApiRequest<UserToggleEnabledReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/users/toggleEnabled`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：员工管理修改用户启用状态
 * useQuery
 */
export function useApiUsersToggleEnabledQuery(
  params: DecorationParams<ApiRequest<UserToggleEnabledReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserToggleEnabledReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiUsersToggleEnabled"],
    () => queryApiUsersToggleEnabled(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：员工管理修改用户启用状态
 * useMutation
 */
export function useApiUsersToggleEnabledMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<UserToggleEnabledReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<UserToggleEnabledReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserToggleEnabledReqDto>) => queryApiUsersToggleEnabled(params, config),
  });
}



/**
 * 权限管理：员工管理修改用户：个人中心
 * query
 */
export function queryApiUsersCenter(
  params: ApiRequest<UserUpdateCenterReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/users/center`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：员工管理修改用户：个人中心
 * useQuery
 */
export function useApiUsersCenterQuery(
  params: DecorationParams<ApiRequest<UserUpdateCenterReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserUpdateCenterReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiUsersCenter"],
    () => queryApiUsersCenter(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：员工管理修改用户：个人中心
 * useMutation
 */
export function useApiUsersCenterMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<UserUpdateCenterReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<UserUpdateCenterReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserUpdateCenterReqDto>) => queryApiUsersCenter(params, config),
  });
}



/**
 * 权限管理：员工管理删除用户
 * query
 */
export function queryApiUsersDel(
  params: ApiRequest<UserDelReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<Record<string, any>>> {
  return requestUtils.post(`/api/users/del`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：员工管理删除用户
 * useQuery
 */
export function useApiUsersDelQuery(
  params: DecorationParams<ApiRequest<UserDelReqDto>>,
  options?: DecorationOptions<ApiResponse<Record<string, any>>, GetTSelect<ApiResponse<Record<string, any>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserDelReqDto>,
    GetTSelect<ApiResponse<Record<string, any>>>
  >(
    ["ApiUsersDel"],
    () => queryApiUsersDel(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：员工管理删除用户
 * useMutation
 */
export function useApiUsersDelMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Record<string, any>>,
    Error,
    ApiRequest<UserDelReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Record<string, any>>,
    Error,
    ApiRequest<UserDelReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserDelReqDto>) => queryApiUsersDel(params, config),
  });
}



/**
 * 权限管理：员工管理修改密码
 * query
 */
export function queryApiUsersUpdatePass(
  params: ApiRequest<UserPassReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/users/updatePass`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：员工管理修改密码
 * useQuery
 */
export function useApiUsersUpdatePassQuery(
  params: DecorationParams<ApiRequest<UserPassReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserPassReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiUsersUpdatePass"],
    () => queryApiUsersUpdatePass(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：员工管理修改密码
 * useMutation
 */
export function useApiUsersUpdatePassMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<UserPassReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<UserPassReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserPassReqDto>) => queryApiUsersUpdatePass(params, config),
  });
}



/**
 * 权限管理：员工管理重置密码
 * query
 */
export function queryApiUsersResetPwd(
  params: ApiRequest<UserResetPwdReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/users/resetPwd`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：员工管理重置密码
 * useQuery
 */
export function useApiUsersResetPwdQuery(
  params: DecorationParams<ApiRequest<UserResetPwdReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserResetPwdReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiUsersResetPwd"],
    () => queryApiUsersResetPwd(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：员工管理重置密码
 * useMutation
 */
export function useApiUsersResetPwdMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<UserResetPwdReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<UserResetPwdReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserResetPwdReqDto>) => queryApiUsersResetPwd(params, config),
  });
}



/**
 * 权限管理：员工管理修改头像
 * query
 */
export function queryApiUsersUpdateAvatar(
  params: any | undefined,
  config?: Record<string, any>
): Promise<ApiResponse<Record<string,string>>> {
  return requestUtils.post(`/api/users/updateAvatar`, generateParams(params, "post", "query"), config);
}

/**
 * 权限管理：员工管理修改头像
 * useQuery
 */
export function useApiUsersUpdateAvatarQuery(
  params: DecorationParams<any | undefined>,
  options?: DecorationOptions<ApiResponse<Record<string,string>>, GetTSelect<ApiResponse<Record<string,string>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    any | undefined,
    GetTSelect<ApiResponse<Record<string,string>>>
  >(
    ["ApiUsersUpdateAvatar"],
    () => queryApiUsersUpdateAvatar(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 权限管理：员工管理修改头像
 * useMutation
 */
export function useApiUsersUpdateAvatarMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<Record<string,string>>,
    Error,
    any | undefined,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<Record<string,string>>,
    Error,
    any | undefined
  >({
    ...options,
    mutationFn: (params: any | undefined) => queryApiUsersUpdateAvatar(params, config),
  });
}



/**
 * 会员管理：会员列表分页
 * query
 */
export function queryApiUserMemberPage(
  params: ApiRequest<PageQuery<UserMemberListReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<UserMemberListResDto>>> {
  return requestUtils.post(`/api/user-member/page`, generateParams(params, "post", "query"), config);
}

/**
 * 会员管理：会员列表分页
 * useQuery
 */
export function useApiUserMemberPageQuery(
  params: DecorationParams<ApiRequest<PageQuery<UserMemberListReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<UserMemberListResDto>>, GetTSelect<ApiResponse<PageResult<UserMemberListResDto>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<UserMemberListReqDto>>,
    GetTSelect<ApiResponse<PageResult<UserMemberListResDto>>>
  >(
    ["ApiUserMemberPage"],
    () => queryApiUserMemberPage(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 会员管理：会员列表分页
 * useMutation
 */
export function useApiUserMemberPageMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<UserMemberListResDto>>,
    Error,
    ApiRequest<PageQuery<UserMemberListReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<UserMemberListResDto>>,
    Error,
    ApiRequest<PageQuery<UserMemberListReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<UserMemberListReqDto>>) => queryApiUserMemberPage(params, config),
  });
}



/**
 * 会员管理：会员列表导出
 * query
 */
export function queryApiUserMemberExport(
  params: {"dto": UserMemberListReqDto; "response": any | undefined},
  config?: Record<string, any>
): Promise<void> {
  return requestUtils.get(`/api/user-member/export`, generateParams(params, "get", "query"), config);
}

/**
 * 会员管理：会员列表导出
 * useQuery
 */
export function useApiUserMemberExportQuery(
  params: DecorationParams<{"dto": UserMemberListReqDto; "response": any | undefined}>,
  options?: DecorationOptions<void, GetTSelect<void>>,
  config?: Record<string, any>
) {
  return vueQuery<
    {"dto": UserMemberListReqDto; "response": any | undefined},
    GetTSelect<void>
  >(
    ["ApiUserMemberExport"],
    () => queryApiUserMemberExport(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 会员管理：会员列表导出
 * useMutation
 */
export function useApiUserMemberExportMutation(
  options?: Partial<UseMutationOptions<
    void,
    Error,
    {"dto": UserMemberListReqDto; "response": any | undefined},
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    void,
    Error,
    {"dto": UserMemberListReqDto; "response": any | undefined}
  >({
    ...options,
    mutationFn: (params: {"dto": UserMemberListReqDto; "response": any | undefined}) => queryApiUserMemberExport(params, config),
  });
}



/**
 * 用户管理：用户列表分页查询用户
 * query
 */
export function queryApiUserSysUserPage(
  params: ApiRequest<PageQuery<UserSysUserListReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<UserSysUserListResDto>>> {
  return requestUtils.post(`/api/user-sys-user/page`, generateParams(params, "post", "query"), config);
}

/**
 * 用户管理：用户列表分页查询用户
 * useQuery
 */
export function useApiUserSysUserPageQuery(
  params: DecorationParams<ApiRequest<PageQuery<UserSysUserListReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<UserSysUserListResDto>>, GetTSelect<ApiResponse<PageResult<UserSysUserListResDto>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<UserSysUserListReqDto>>,
    GetTSelect<ApiResponse<PageResult<UserSysUserListResDto>>>
  >(
    ["ApiUserSysUserPage"],
    () => queryApiUserSysUserPage(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 用户管理：用户列表分页查询用户
 * useMutation
 */
export function useApiUserSysUserPageMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<UserSysUserListResDto>>,
    Error,
    ApiRequest<PageQuery<UserSysUserListReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<UserSysUserListResDto>>,
    Error,
    ApiRequest<PageQuery<UserSysUserListReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<UserSysUserListReqDto>>) => queryApiUserSysUserPage(params, config),
  });
}



/**
 * 用户管理：用户列表导出
 * query
 */
export function queryApiUserSysUserExport(
  params: ApiRequest<UserSysUserListReqDto>,
  config?: Record<string, any>
): Promise<void> {
  return requestUtils.post(`/api/user-sys-user/export`, generateParams(params, "post", "query"), config);
}

/**
 * 用户管理：用户列表导出
 * useQuery
 */
export function useApiUserSysUserExportQuery(
  params: DecorationParams<ApiRequest<UserSysUserListReqDto>>,
  options?: DecorationOptions<void, GetTSelect<void>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserSysUserListReqDto>,
    GetTSelect<void>
  >(
    ["ApiUserSysUserExport"],
    () => queryApiUserSysUserExport(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 用户管理：用户列表导出
 * useMutation
 */
export function useApiUserSysUserExportMutation(
  options?: Partial<UseMutationOptions<
    void,
    Error,
    ApiRequest<UserSysUserListReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    void,
    Error,
    ApiRequest<UserSysUserListReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserSysUserListReqDto>) => queryApiUserSysUserExport(params, config),
  });
}



/**
 * 用户管理：用户列表查询用户详情
 * query
 */
export function queryApiUserSysUserDetail(
  params: ApiRequest<UserSysUserDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<UserSysUserDetailResDto>> {
  return requestUtils.post(`/api/user-sys-user/detail`, generateParams(params, "post", "query"), config);
}

/**
 * 用户管理：用户列表查询用户详情
 * useQuery
 */
export function useApiUserSysUserDetailQuery(
  params: DecorationParams<ApiRequest<UserSysUserDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<UserSysUserDetailResDto>, GetTSelect<ApiResponse<UserSysUserDetailResDto>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserSysUserDetailReqDto>,
    GetTSelect<ApiResponse<UserSysUserDetailResDto>>
  >(
    ["ApiUserSysUserDetail"],
    () => queryApiUserSysUserDetail(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 用户管理：用户列表查询用户详情
 * useMutation
 */
export function useApiUserSysUserDetailMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<UserSysUserDetailResDto>,
    Error,
    ApiRequest<UserSysUserDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<UserSysUserDetailResDto>,
    Error,
    ApiRequest<UserSysUserDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserSysUserDetailReqDto>) => queryApiUserSysUserDetail(params, config),
  });
}



/**
 * 用户管理：用户列表用户状态切换
 * query
 */
export function queryApiUserSysUserToggleStatus(
  params: ApiRequest<UserSysUserDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<void>> {
  return requestUtils.post(`/api/user-sys-user/toggle-status`, generateParams(params, "post", "query"), config);
}

/**
 * 用户管理：用户列表用户状态切换
 * useQuery
 */
export function useApiUserSysUserToggleStatusQuery(
  params: DecorationParams<ApiRequest<UserSysUserDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<void>, GetTSelect<ApiResponse<void>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserSysUserDetailReqDto>,
    GetTSelect<ApiResponse<void>>
  >(
    ["ApiUserSysUserToggleStatus"],
    () => queryApiUserSysUserToggleStatus(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 用户管理：用户列表用户状态切换
 * useMutation
 */
export function useApiUserSysUserToggleStatusMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<void>,
    Error,
    ApiRequest<UserSysUserDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<void>,
    Error,
    ApiRequest<UserSysUserDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserSysUserDetailReqDto>) => queryApiUserSysUserToggleStatus(params, config),
  });
}



/**
 * 用户管理：用户列表分页查询用户订单历史
 * query
 */
export function queryApiUserSysUserDetailOrders(
  params: ApiRequest<PageQuery<UserSysUserOrderReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<UserSysUserOrderResDto>>> {
  return requestUtils.post(`/api/user-sys-user/detail/orders`, generateParams(params, "post", "query"), config);
}

/**
 * 用户管理：用户列表分页查询用户订单历史
 * useQuery
 */
export function useApiUserSysUserDetailOrdersQuery(
  params: DecorationParams<ApiRequest<PageQuery<UserSysUserOrderReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<UserSysUserOrderResDto>>, GetTSelect<ApiResponse<PageResult<UserSysUserOrderResDto>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<UserSysUserOrderReqDto>>,
    GetTSelect<ApiResponse<PageResult<UserSysUserOrderResDto>>>
  >(
    ["ApiUserSysUserDetailOrders"],
    () => queryApiUserSysUserDetailOrders(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 用户管理：用户列表分页查询用户订单历史
 * useMutation
 */
export function useApiUserSysUserDetailOrdersMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<UserSysUserOrderResDto>>,
    Error,
    ApiRequest<PageQuery<UserSysUserOrderReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<UserSysUserOrderResDto>>,
    Error,
    ApiRequest<PageQuery<UserSysUserOrderReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<UserSysUserOrderReqDto>>) => queryApiUserSysUserDetailOrders(params, config),
  });
}



/**
 * 用户管理：用户列表分页查询用户收藏会议
 * query
 */
export function queryApiUserSysUserDetailCollections(
  params: ApiRequest<PageQuery<UserSysUserDetailReqDto>>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<UserSysUserCollectionResDto>>> {
  return requestUtils.post(`/api/user-sys-user/detail/collections`, generateParams(params, "post", "query"), config);
}

/**
 * 用户管理：用户列表分页查询用户收藏会议
 * useQuery
 */
export function useApiUserSysUserDetailCollectionsQuery(
  params: DecorationParams<ApiRequest<PageQuery<UserSysUserDetailReqDto>>>,
  options?: DecorationOptions<ApiResponse<PageResult<UserSysUserCollectionResDto>>, GetTSelect<ApiResponse<PageResult<UserSysUserCollectionResDto>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<PageQuery<UserSysUserDetailReqDto>>,
    GetTSelect<ApiResponse<PageResult<UserSysUserCollectionResDto>>>
  >(
    ["ApiUserSysUserDetailCollections"],
    () => queryApiUserSysUserDetailCollections(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 用户管理：用户列表分页查询用户收藏会议
 * useMutation
 */
export function useApiUserSysUserDetailCollectionsMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<UserSysUserCollectionResDto>>,
    Error,
    ApiRequest<PageQuery<UserSysUserDetailReqDto>>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<UserSysUserCollectionResDto>>,
    Error,
    ApiRequest<PageQuery<UserSysUserDetailReqDto>>
  >({
    ...options,
    mutationFn: (params: ApiRequest<PageQuery<UserSysUserDetailReqDto>>) => queryApiUserSysUserDetailCollections(params, config),
  });
}



/**
 * 用户管理：用户列表查询用户浏览历史--最多返回四个
 * query
 */
export function queryApiUserSysUserDetailViewHistory(
  params: ApiRequest<UserSysUserDetailReqDto>,
  config?: Record<string, any>
): Promise<ApiResponse<PageResult<UserSysUserViewHistoryResDto>>> {
  return requestUtils.post(`/api/user-sys-user/detail/view-history`, generateParams(params, "post", "query"), config);
}

/**
 * 用户管理：用户列表查询用户浏览历史--最多返回四个
 * useQuery
 */
export function useApiUserSysUserDetailViewHistoryQuery(
  params: DecorationParams<ApiRequest<UserSysUserDetailReqDto>>,
  options?: DecorationOptions<ApiResponse<PageResult<UserSysUserViewHistoryResDto>>, GetTSelect<ApiResponse<PageResult<UserSysUserViewHistoryResDto>>>>,
  config?: Record<string, any>
) {
  return vueQuery<
    ApiRequest<UserSysUserDetailReqDto>,
    GetTSelect<ApiResponse<PageResult<UserSysUserViewHistoryResDto>>>
  >(
    ["ApiUserSysUserDetailViewHistory"],
    () => queryApiUserSysUserDetailViewHistory(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * 用户管理：用户列表查询用户浏览历史--最多返回四个
 * useMutation
 */
export function useApiUserSysUserDetailViewHistoryMutation(
  options?: Partial<UseMutationOptions<
    ApiResponse<PageResult<UserSysUserViewHistoryResDto>>,
    Error,
    ApiRequest<UserSysUserDetailReqDto>,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    ApiResponse<PageResult<UserSysUserViewHistoryResDto>>,
    Error,
    ApiRequest<UserSysUserDetailReqDto>
  >({
    ...options,
    mutationFn: (params: ApiRequest<UserSysUserDetailReqDto>) => queryApiUserSysUserDetailViewHistory(params, config),
  });
}


