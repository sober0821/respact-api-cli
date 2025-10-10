export interface ApiResponse<T = Object> {
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

export interface PageData<T = Object> {
  /**
   * 查询数据列表
   */
  content?: Array<T>;
  /**
   * 总数
   */
  totalElements?: number;
  /**
   * 每页显示条数，默认 10
   */
  pageSize?: number;
  /**
   * 当前页
   */
  pageNum?: number;
}

export interface AdBannerResDto {
  /**名称*/
  id?: number;
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

export interface ApiRequest<T = Object> {
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
export interface PageQuery<T = Object> {
  /**
   * serialVersionUID
   */
  serialVersionUID?: number;
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

export interface AdBannerReqDto {
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
export interface AuthUserReqDto {
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
export interface JwtUserDto {
  user?: SysUser;
  dataScopes?: Array<number>;
  authorities?: Array<AuthorityDto>;
}

/**
 * 分页结果封装类
 * @author Zheng Jie
 * @date 2018-11-23
 * @param <T>
 */
export interface PageResult<T = Object> {
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
  pages?: number;
  /**
   * 动态的内容
   */
  content?: Array<T>;
  /**
   * 总记录数
   */
  totalElements?: number;
}

export interface ContentCmsArticleListResDto {
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

export interface ContentCmsArticleListReqDto {
  keyword?: string;
  status?: string;
}

/**
 * 文章管理表
 * @TableName content_cms_article
 */
export interface ContentCmsArticle extends BaseEntity {
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

export interface ContentCmsArticleDetailReqDto {
  id?: string;
}

export interface ContentCmsArticleSaveReqDto {
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

export interface ContentCmsArticleDeletedReqDto {
  ids?: Array<string>;
}

/**
 * 新闻Banner管理表
 * @TableName content_cms_banner
 */
export interface ContentCmsBanner extends BaseEntity {
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

export interface ContentCmsBannerListReqDto {
  keyword?: string;
  status?: string;
}

export interface ContentCmsBannerDetailReqDto {
  id?: string;
}

export interface ContentCmsBannerSaveReqDto {
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

export interface ContentCmsBannerDeletedReqDto {
  id?: string;
}

/**
 * 新闻分类表
 * @TableName content_cms_category
 */
export interface ContentCmsCategory extends BaseEntity {
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

export interface ContentCmsCategoryListReqDto {
  keyword?: string;
  status?: string;
}

export interface ContentCmsCategoryDetailReqDto {
  id?: string;
}

export interface ContentCmsCategorySaveReqDto {
  id?: string;
  name?: string;
  sortOrder?: number;
  status?: number;
}

export interface ContentCmsCategoryDeletedReqDto {
  id?: string;
}

export interface ContentVideosResDto {
  /**名称*/
  id?: number;
  idStr?: string;
  /**名称*/
  name?: string;
  /*视频简介*/
  remark?: string;
  /*视频状态0处理中1成功2失败*/
  uploadStatus?: number;
  /*视频上传失败原因*/
  uploadFailDesc?: string;
  /*商家名称*/
  merchantName?: string;
  /*商家注册时间*/
  merchantRegistTime?: string;
  /*商家认证时间*/
  merchantVerifyTime?: string;
  /*0未关联1待审核2已通过3已拒绝*/
  auditStatus?: number;
  /*视频时长（秒）*/
  durationTime?: number;
  /*文件大小（字节）*/
  fileSize?: number;
  /*视频分辨率*/
  resolutionPx?: string;
  /*视频格式*/
  format?: string;
  /*保存后文件地址*/
  fileUrl?: string;
  /*保存后缩略图地址*/
  thumbnailUrl?: string;
  /*创建日期*/
  createTime?: string;
  createTimeStr?: string;
  /*关联活动id*/
  eventId?: number;
  /*关联活动名称 - 详情页使用*/
  eventName?: string;
  /*访问权限类别 0公开访问1仅限购票者2仅限vip会员*/
  accessPermissionFlag?: number;
  /*关联演讲者id 多个用逗号分隔*/
  eventGuestIds?: string;
  /*排序字段*/
  sortOrder?: number;
  /*关联演讲者id集合*/
  eventGuestIdsList?: Array<string>;
  /*关联演讲者名称集合 - 详情页使用*/
  eventGuestNamesList?: Array<string>;
}

export interface ContentVideosReqDto {
  //    private Long size;
  //    private Long current;
  /**名称*/
  id?: string;
  /**名称*/
  name?: string;
  /*视频简介*/
  remark?: string;
  /*商家id*/
  merchantId?: number;
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

export interface CustomerServiceListResDto {
  id?: string;
  index?: string;
  customerServiceNickName?: string;
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

export interface CustomerServiceListReqDto {
  customerServiceNickName?: string;
  username?: string;
}

/**
 * 客服信息表
 * @TableName customer_service_info
 */
export interface CustomerServiceInfo extends BaseEntityWithoutDeleted {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 账号
   */
  customerServiceNickName?: string;
  /**
   * 用户ID
   */
  userId?: number;
  /**
   * 客服类型：normal-普通客服, supervisor-客服主管
   */
  serviceType?: string;
  /**
   * 正在聊天的个数
   */
  currentChatCount?: number;
  username?: string;
  nickName?: string;
  phone?: string;
  email?: string;
}

export interface CustomerServiceAddReqDto {
  customerServiceBaseDtoList?: Array<CustomerServiceBaseDto>;
}

export interface CustomerServiceUpdateReqDto {
  id?: string;
  //    @NotBlank(message = "客服昵称不能为空")
  customerServiceNickName?: string;
  //    @NotBlank(message = "客服类型不能为空")
  serviceType?: string;
}

export interface CustomerServiceCommonReqDto {
  id?: string;
}

export interface CustomerServiceEndChatReqDto {
  /**
   * 会话ID
   */
  conversationId?: string;
}

export interface CustomerServiceTransferChantReqDto {
  toCustomerUserId?: string;
  /**
   * 会话ID
   */
  conversationId?: string;
  terminalType?: string;
}

export interface CustomerServiceAssignResDto {
  customerServiceNickName?: string;
  avatar?: string;
  userId?: string;
  operationType?: string;
}

export interface CustomerServiceAssignChatReqDto {
  userId?: string;
  terminalType?: string;
}

export interface CustomerServiceSettingAddReqDto {
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

/**
 * 客服会话设置表
 *
 * @TableName customer_service_setting
 */
export interface CustomerServiceSetting extends BaseEntityWithoutDeleted {
  /**
   * 主键ID
   */
  id?: number;
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
   * 用户端会话显示天数
   */
  clientSessionDisplayDays?: number;
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
  workStartTime?: string;
  workEndTime?: string;
  workDays?: string;
  workStartTimeStr?: string;
  workEndTimeStr?: string;
}

export interface CustomerServiceSettingEditReqDto {
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
  workStartTimeStr?: string;
  /**
   * 上班结束时间
   */
  workEndTimeStr?: string;
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
  /**
   * 历史会话保存时长(天数)
   */
  historyRetentionDays?: number;
  /**
   * 用户端会话显示天数
   */
  clientSessionDisplayDays?: number;
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
export interface DeptListResDto {
  /**
   * ID
   */
  id?: number;
  idStr?: string;
  /**
   * 上级部门
   */
  pid?: number;
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
export interface DeptListReqDto {
  //    @NotBlank(message = "部门名称不能为空")
  deptName?: string;
}

/**
 * 部门表
 * @TableName sys_dept
 */
export interface SysDept extends BaseEntity {
  /**
   * ID
   */
  id?: number;
  /**
   * 上级部门
   */
  pid?: number;
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
export interface DeptSuperiorReqDto {
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
export interface DeptAddReqDto {
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
export interface DeptEditReqDto {
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
export interface DeptDelReqDto {
  /**
   * 部门ID集合
   */
  ids?: Array<string>;
}

/**
 * 字典类型表
 * @TableName sys_dict_type
 */
export interface SysDictType {
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
export interface SysDictData {
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

export interface EventCategoryResDto {
  /**ID*/
  id?: number;
  idStr?: string;
  /**名称*/
  name?: string;
  /*上级活动分类ID*/
  pid?: number;
  /*分类级别(1一级 2二级 3三级)*/
  level?: number;
  /*排序*/
  sortOrder?: number;
  /*图标*/
  icon?: string;
  /*状态(1启用 0禁用)*/
  status?: number;
  childList?: Array<EventCategoryResDto>;
  iconUrl?: string;
}

export interface EventCategoryReqDto {
  /**名称*/
  id?: string;
  /**名称*/
  name?: string;
  /*上级活动分类ID*/
  pid?: number;
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
export interface EventPageReqDto {
  ids?: Array<number>;
  keyword?: string;
  actCode?: string;
  status?: string;
  statusList?: Array<string>;
  publishStatus?: string;
}

/**
 * 活动分页请求DTO
 */
export interface EventReviewReqDto {
  id?: string;
  isGroup?: boolean;
  status?: string;
  reason?: string;
}

export interface EventForceOffReqDto {
  id?: string;
  isGroup?: boolean;
  reason?: string;
}

/**
 * 活动请求DTO
 * 用于接收前端创建或更新活动的请求数据
 */
export interface EventResDto {
  id?: number;
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
export interface EventDetailReqDto {
  id?: string;
}

/**
 * 活动组合响应DTO
 */
export interface EventGroupResDto {
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
  industrys?: Array<Record<string, string>>;
  industryCode?: Array<string>;
  groupSessions?: Array<EventGroupSessionResDto>;
}

/**
 * 退改模板
 *
 * @TableName event_refund_template
 */
export interface EventRefundTemplate extends BaseEntity {
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

export interface EventRefundTemplateListReqDto {
  keyword?: string;
}

export interface EventRefundTemplateResDto {
  id?: string;
  title?: string;
  status?: number;
  refundRules?: Array<EventRefundRuleTemplateResDto>;
}

export interface EventRefundTemplateDetailReqDto {
  id?: string;
}

export interface EventRefundTemplateReqDto {
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
export interface MenuVo {
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
export interface SysMenu extends BaseEntity {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 上级菜单ID
   */
  pid?: number;
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
export interface MenuListReqDto {
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
export interface MenuDetailReqDto {
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
export interface MenuAddReqDto {
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
export interface MenuEditReqDto {
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
export interface MenuDelReqDto {
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
export interface PermissionMerchantMenu extends BaseEntity {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 上级菜单ID
   */
  pid?: number;
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
export interface MerchantMenuListReqDto {
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
export interface MerchantMenuDetailReqDto {
  /**
   * 主键ID
   */
  id?: string;
}

/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface MerchantMenuAddReqDto {
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
  /**
   * 菜单组件名称
   */
  name?: string;
  /**
   * 组件
   */
  component?: string;
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
   * 适用类型(1-商家通用 2-企业独用 3-个人认证独有)
   */
  scopeType?: number;
}

/**
 * @author Zheng Jie
 * @date 2018-11-30
 */
export interface MerchantMenuEditReqDto {
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
  /**
   * 菜单组件名称
   */
  name?: string;
  /**
   * 组件
   */
  component?: string;
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
export interface MerchantMenuDelReqDto {
  /**
   * 主键ID集合
   */
  ids?: Array<string>;
}

export interface NotifyTemplatesResDto {
  /**ID*/
  id?: number;
  idStr?: string;
  /**名称*/
  name?: string;
  /*说明*/
  remark?: string;
  /*站内信模版*/
  template?: string;
  /*状态(1启用 0禁用)*/
  status?: number;
  /*站内信(1启用 0禁用)*/
  sendWebsite?: number;
  /*邮箱(1启用 0禁用)*/
  sendMail?: number;
  /*国内短信(1启用 0禁用)*/
  sendHomeSms?: number;
  /*国外短信(1启用 0禁用)*/
  sendAbroadSms?: number;
  /*标识*/
  flag?: string;
}

export interface NotifyTemplatesReqDto {
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
export interface OnlineUserDto {
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
export interface SysPlatformConfig {
  /**
   * 主键ID
   */
  id?: number;
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
export interface SysRole extends BaseEntity {
  /**
   * 主键ID
   */
  id?: number;
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
export interface RoleListReqDto {
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
export interface RoleAddReqDto {
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
export interface RoleEditReqDto {
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
export interface RoleMenuEditReqDto {
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
export interface RoleDelReqDto {
  /*    @NotBlank(message = "部门名称不能为空")
    @ApiModelProperty(value = "部门名称")
    private String deptName;

//    @NotBlank(message = "上级部门不能为空")
    @ApiModelProperty(value = "上级部门ID")
    private Long pid;*/
  //
  ids?: Array<string>;
}

export interface SubscribeResDto {
  serialNumber?: number;
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

export interface SubscribeReqDto {
  /*    @ApiModelProperty(value = "用户名称")
    private String name;
    @ApiModelProperty(value = "用户手机")
    private String phone;
    @ApiModelProperty(value = "用户邮箱")
    private String email;*/
  keyword?: string;
  type?: string;
}

export interface SubscribeStatisticsResDto {
  totalSubscriptions?: number;
  newSubscriptionsLastMonth?: number;
  newSubscriptionsToday?: number;
  newSubscriptionsYesterday?: number;
  newSubscriptionsLastWeek?: number;
  newSubscriptionsThisWeek?: number;
  newSubscriptionsThisWeekPercent?: number;
  newSubscriptionsYesterdayPercent?: number;
}

export interface SubscribeSendMessageReqDto {
  userIds?: Array<string>;
  /**
   * 批量群发/全部群发
   */
  batchType?: number;
  sendType?: string;
  message?: string;
}

export interface TOrderEventPageResDto {
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

export interface TOrderListReqDto {
  keyword?: string;
  startTime?: string;
  endTime?: string;
}

export interface TOrderMemberPageResDto {
  id?: string;
  orderNo?: string;
  buyerName?: string;
  buyerPhone?: string;
  createTime?: string;
  actualAmount?: number;
  memberType?: number;
}

export interface UserContactFormListResDto {
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

export interface UserContactFormListReqDto {
  name?: string;
  email?: string;
  phone?: string;
}

export interface UserContactFormDetailResDto {
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

export interface UserContactFormDetailDto {
  id?: string;
}

export interface UserContactFormDeletedDto {
  id?: string;
}

export interface UserContactFormBatchDeletedDto {
  ids?: Array<string>;
}

/**
 * 系统用户表
 * @TableName sys_user
 */
export interface SysUser extends BaseEntity {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 部门名称
   */
  deptId?: number;
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
export interface UserListReqDto {
  // 员工名称
  username?: string;
  // 部门名称
  /*    @ApiModelProperty(value = "部门名称")
    private String deptName;*/
  deptId?: string;
  roleId?: string;
  // 角色名称
  roleName?: string;
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
export interface UserAddReqDto {
  /*    @NotBlank(message = "部门名称不能为空")
    @ApiModelProperty(value = "部门名称")
    private String deptName;

//    @NotBlank(message = "上级部门不能为空")
    @ApiModelProperty(value = "上级部门ID")
    private Long pid;*/
  nickName?: string;
  // 员工账号
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
export interface UserEditReqDto {
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
export interface UserToggleEnabledReqDto {
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
export interface UserUpdateCenterReqDto {
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
export interface UserDelReqDto {
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
export interface UserPassReqDto {
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
export interface UserResetPwdReqDto {
  ids?: Array<string>;
}

export interface UserMemberListResDto {
  id?: string;
  userId?: number;
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

export interface UserMemberListReqDto {
  keyword?: string;
  phoneNumber?: string;
}

export interface UserSysUserListResDto {
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

export interface UserSysUserListReqDto {
  keyword?: string;
  id?: number;
  name?: string;
  phone?: string;
  email?: string;
  startTime?: string;
  endTime?: string;
  enabled?: number;
}

export interface UserSysUserDetailResDto {
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
  numberOfViews?: number;
  numberOfCollections?: number;
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
export interface UserSysUserDetailReqDto {
  /**
   * 主键ID
   */
  id?: string;
}

/**
 * 用户订单历史记录响应DTO
 * 用于在管理后台展示指定用户的订单列表中的单条记录
 */
export interface UserSysUserOrderResDto {
  id?: string;
  orderNo?: string;
  eventTitle?: Array<string>;
  payTime?: string;
  actualAmount?: number;
  status?: number;
}

export interface UserSysUserOrderReqDto {
  userId?: string;
  keyword?: string;
}

export interface UserSysUserCollectionResDto {
  title?: string;
  coverImage?: string;
  startTime?: string;
}

export interface UserSysUserViewHistoryResDto {
  title?: string;
  coverImage?: string;
  startTime?: string;
}

export interface BaseResponse<T = Object> {
  /**
   * 响应结果报文头
   */
  pHead?: PHead;
  /**
   * 响应结果报文内容
   */
  pBody?: T;
}

export interface PHead {
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
export interface AuthorityDto {
  authority?: string;
}

/**
 * 通用字段， is_del 根据需求自行添加
 *
 * @author Zheng Jie
 * @date 2019年10月24日20:46:32
 */
export interface BaseEntity {
  createBy?: string;
  updateBy?: string;
  createTime?: string;
  updateTime?: string;
  // 使用 MyBatis Plus 的逻辑删除注解
  isDeleted?: boolean;
}

/**
 * 通用字段，不包含逻辑删除字段
 *
 * @author
 * @date
 */
export interface BaseEntityWithoutDeleted {
  createBy?: string;
  updateBy?: string;
  createTime?: string;
  updateTime?: string;
}

export interface CustomerServiceBaseDto {
  userId?: string;
  customerServiceNickName?: string;
  serviceType?: string;
}

/**
 * 活动嘉宾表
 * @TableName event_guest
 */
export interface EventGuest {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 关联活动ID
   */
  eventId?: number;
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
export interface EventCoOrganizer {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 关联活动ID
   */
  eventId?: number;
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
export interface EventRegistrationFormResDto {
  id?: number;
  eventId?: number;
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
export interface EventItineraryResDto {
  id?: number;
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
export interface EventCostDescriptionResDto {
  id?: number;
  tenantId?: string;
  eventId?: number;
  costType?: string;
  descriptionId?: number;
  description?: string;
}

/**
 * 活动儿童政策表
 *
 * @TableName event_child_policy
 */
export interface EventChildPolicy extends BaseEntity {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 关联活动ID
   */
  eventId?: number;
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
export interface EventExtraCost extends BaseEntity {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 关联活动ID
   */
  eventId?: number;
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
export interface EventPurchaseNoteResDto {
  refundType?: string;
  partialRefund?: number;
  ruleType?: string;
  refundTemplateId?: number;
  additionalRules?: string;
  usageGuide?: string;
  precautions?: string;
  refundRules?: Array<EventRefundRule>;
}

/**
 * 活动票务主表
 * @TableName event_ticket
 */
export interface EventTicket extends BaseEntity {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 关联活动ID
   */
  eventId?: number;
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
export interface SysCurrency {
  /**
   * 主键ID
   */
  id?: number;
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

export interface EventGroupSessionResDto {
  id?: number;
  sessionType?: string;
  title?: string;
  image?: string;
  brief?: string;
  overview?: string;
  events?: Array<EventMain>;
  eventIds?: Array<string>;
}

export interface EventRefundRuleTemplateResDto {
  id?: string;
  cancelType?: string;
  days?: number;
  timePoint?: string;
  refundType?: string;
  refundValue?: number;
}

export interface EventRefundRuleTemplateReqDto {
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
export interface MenuMetaVo {
  title?: string;
  icon?: string;
  noCache?: boolean;
}

export interface TOrderEventPageEventInfoResDto {
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
export interface EventRegistrationOptionResDto {
  optionValue?: string;
  sortOrder?: number;
}

/**
 * 行程集合时间地点表
 * @TableName event_assembly
 */
export interface EventAssembly {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 关联行程ID
   */
  itineraryId?: number;
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
export interface EventMeal {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 关联行程ID
   */
  itineraryId?: number;
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
export interface EventAccommodation {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 关联行程ID
   */
  itineraryId?: number;
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
export interface EventAttractionResDto {
  id?: number;
  itineraryId?: number;
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
export interface EventExperienceResDto {
  id?: number;
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
export interface EventTransport {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 关联行程ID
   */
  itineraryId?: number;
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
export interface EventFreeTime {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 关联行程ID
   */
  itineraryId?: number;
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
export interface EventDismissal {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 关联行程ID
   */
  itineraryId?: number;
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
export interface EventRefundRule {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 活动购买须知id
   */
  noteId?: number;
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
export interface EventMain extends BaseEntity {
  /**
   * 主键ID
   */
  id?: number;
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
  detailId?: number;
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
export interface EventItineraryImage {
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 关联景点ID
   */
  attractionId?: number;
  /**
   * 关联体验项目ID
   */
  experienceId?: number;
  /**
   * 图片URL
   */
  imageUrl?: string;
  /**
   * 排序字段
   */
  sortOrder?: number;
}

const apiContent = [
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/adBanner",
        },
      },
      {
        typeName: "Api",
        config: {
          tags: "广告管理:banner管理",
        },
      },
    ],
    className: "AdBannerController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "列表",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:banner)",
            },
          },
        ],
        result: "ApiResponse<PageData<AdBannerResDto>>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<PageQuery<AdBannerReqDto>>",
            name: "req",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "新增",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/save",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:banner:add)",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<AdBannerReqDto>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "详情",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/detail",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:banner:detail)",
            },
          },
        ],
        result: "ApiResponse<AdBannerResDto>",
        params: [
          {
            modifiers: ["RequestParam", "NotBlank"],
            type: "string",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "更新",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/update",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:banner:edit)",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<AdBannerReqDto>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Deprecated",
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "更改状态",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/changeStatus",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:banner:toggle_status)",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<AdBannerReqDto>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "删除",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/delete",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:banner:del)",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<AdBannerReqDto>",
            name: "req",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "获取所有投放区域列表",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/placement-all",
            },
          },
        ],
        result: "ApiResponse<Array<Record<string,Record<string, any>>>>",
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "获取某个投放位置的所有banner",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/banner-placement/all",
            },
          },
        ],
        result: "ApiResponse<Array<AdBannerResDto>>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<AdBannerReqDto>",
            name: "req",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/auth",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "系统：系统授权接口",
        },
      },
    ],
    className: "AuthController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "用户登录",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "登录授权",
            },
          },
          {
            typeName: "AnonymousPostMapping",
            config: {
              value: "/login",
            },
          },
          {
            typeName: "SkipSign",
          },
        ],
        result: "ApiResponse<Record<string, any>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<AuthUserReqDto>",
            name: "authUser",
          },
          {
            modifiers: [],
            type: "undefined | any",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "获取用户信息",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/info",
            },
          },
        ],
        result: "ApiResponse<JwtUserDto>",
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "退出登录",
            },
          },
          {
            typeName: "AnonymousDeleteMapping",
            config: {
              value: "/logout",
            },
          },
        ],
        result: "ApiResponse<Record<string, any>>",
        params: [
          {
            modifiers: [],
            type: "undefined | any",
            name: "request",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "Api",
        config: {
          tags: "新闻管理：文章管理",
        },
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/cms-article",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
    ],
    className: "ContentCmsArticleController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "分页",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/page",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:article)",
            },
          },
        ],
        result: "ApiResponse<PageResult<ContentCmsArticleListResDto>>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<PageQuery<ContentCmsArticleListReqDto>>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "详情",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/detail",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:article:detail)",
            },
          },
        ],
        result: "ApiResponse<ContentCmsArticle>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsArticleDetailReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "添加/编辑",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/save",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:article:save)",
            },
          },
        ],
        result: "ApiResponse<ContentCmsArticle>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsArticleSaveReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "添加",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/add",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:article:add)",
            },
          },
        ],
        result: "ApiResponse<ContentCmsArticle>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsArticleSaveReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "编辑",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/edit",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:article:edit)",
            },
          },
        ],
        result: "ApiResponse<ContentCmsArticle>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsArticleSaveReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "删除",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/delete",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:article:del)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsArticleDeletedReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "批量删除",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/batch-delete",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:article:batch:del)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsArticleDeletedReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "切换置顶状态",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/toggle-pinned",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:article:toggle_status)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsArticleDetailReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "切换推荐状态",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/toggle-recommended",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:article:toggle_status)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsArticleDetailReqDto>",
            name: "dto",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "Api",
        config: {
          tags: "新闻管理：banner管理",
        },
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/cms-banner",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
    ],
    className: "ContentCmsBannerController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "分页",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/page",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:banner)",
            },
          },
        ],
        result: "ApiResponse<PageResult<ContentCmsBanner>>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<PageQuery<ContentCmsBannerListReqDto>>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "详情",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/detail",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:banner:detail)",
            },
          },
        ],
        result: "ApiResponse<ContentCmsBanner>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsBannerDetailReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "添加/编辑",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/save",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:banner:save)",
            },
          },
        ],
        result: "ApiResponse<ContentCmsBanner>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsBannerSaveReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "删除",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/delete",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:banner:del)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsBannerDeletedReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "切换状态",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/toggle-status",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:banner:toggle_status)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsBannerDetailReqDto>",
            name: "dto",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "Api",
        config: {
          tags: "新闻管理：分类管理",
        },
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/cms-category",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
    ],
    className: "ContentCmsCategoryController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "分页",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/page",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:category)",
            },
          },
        ],
        result: "ApiResponse<PageResult<ContentCmsCategory>>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<PageQuery<ContentCmsCategoryListReqDto>>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "所有状态为启用的分类",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/valid-list",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:category)",
            },
          },
        ],
        result: "ApiResponse<Array<ContentCmsCategory>>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsCategoryListReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "详情",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/detail",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:category:detail)",
            },
          },
        ],
        result: "ApiResponse<ContentCmsCategory>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsCategoryDetailReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "添加/编辑",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/save",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:category:save)",
            },
          },
        ],
        result: "ApiResponse<ContentCmsCategory>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsCategorySaveReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "删除",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/delete",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:category:del)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsCategoryDeletedReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "切换状态",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/toggle-status",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(news:category:toggle_status)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<ContentCmsCategoryDetailReqDto>",
            name: "dto",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/contentVideos",
        },
      },
      {
        typeName: "Api",
        config: {
          tags: "内容管理-视频管理",
        },
      },
    ],
    className: "ContentVideosController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "列表",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
        ],
        result: "ApiResponse<PageData<ContentVideosResDto>>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<PageQuery<ContentVideosReqDto>>",
            name: "req",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "视频详情",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/detail/{id}",
            },
          },
        ],
        result: "ApiResponse<ContentVideosResDto>",
        params: [
          {
            modifiers: ["PathVariable"],
            type: "string",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "修改排序",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/change-order",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<ContentVideosReqDto>",
            name: "req",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "审核视频",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/audit",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<ContentVideosReqDto>",
            name: "req",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/customer-service/management",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "客服管理：客服管理",
        },
      },
    ],
    className: "CustomerServiceManagementController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查看客服列表",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(customer-service:management)",
            },
          },
        ],
        result: "ApiResponse<PageResult<CustomerServiceListResDto>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<PageQuery<CustomerServiceListReqDto>>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "根据ID获取客服信息",
            },
          },
          {
            typeName: "GetMapping",
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(customer-service:management:detail)",
            },
          },
        ],
        result: "ApiResponse<CustomerServiceInfo>",
        params: [
          {
            modifiers: ["RequestParam"],
            type: "string",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "新增客服信息",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/add",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(customer-service:management:add)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<CustomerServiceAddReqDto>",
            name: "customerServiceAddReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "修改客服信息",
            },
          },
          {
            typeName: "PutMapping",
            config: {
              value: "/edit",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(customer-service:management:edit)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<CustomerServiceUpdateReqDto>",
            name: "updateReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "删除客服信息",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/del",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(customer-service:management:del)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<CustomerServiceCommonReqDto>",
            name: "customerServiceDelReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "结束会话",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/end-chat",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(customer-service:management:end-chat)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<CustomerServiceEndChatReqDto>",
            name: "endChatSessionReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "转接会话",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/transfer-chat",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(customer-service:management:transfer-chat)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<CustomerServiceTransferChantReqDto>",
            name: "transferChatSessionReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "分配客服",
            },
          },
          {
            typeName: "AnonymousPostMapping",
            config: {
              value: "/assign",
            },
          },
        ],
        result: "ApiResponse<CustomerServiceAssignResDto>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<CustomerServiceAssignChatReqDto>",
            name: "assignChatReqDto",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/customer-service/chatSetting",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "客服管理：会话设置",
        },
      },
    ],
    className: "CustomerServiceSettingController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "新增客服会话设置",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/add",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<CustomerServiceSettingAddReqDto>",
            name: "settingDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查看客服会话设置",
            },
          },
          {
            typeName: "GetMapping",
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(customer-service:chat:setting)",
            },
          },
        ],
        result: "ApiResponse<CustomerServiceSetting>",
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "编辑客服会话设置",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/edit",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(customer-service:chat:setting:edit)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<CustomerServiceSettingEditReqDto>",
            name: "settingDto",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "RestController",
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "权限管理：部门管理",
        },
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/dept",
        },
      },
    ],
    className: "DeptController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询部门",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:department)",
            },
          },
        ],
        result: "ApiResponse<Array<DeptListResDto>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<DeptListReqDto>",
            name: "deptListReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询部门:根据ID获取同级与上级数据",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/superior",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:department)",
            },
          },
        ],
        result: "ApiResponse<SysDept>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<DeptSuperiorReqDto>",
            name: "apiRequest",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "根据ID获取部门信息",
            },
          },
          {
            typeName: "GetMapping",
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:department:detail)",
            },
          },
        ],
        result: "ApiResponse<SysDept>",
        params: [
          {
            modifiers: ["RequestParam"],
            type: "string",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "获取所有部门（pid为null）",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/root",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:department)",
            },
          },
        ],
        result: "ApiResponse<Array<SysDept>>",
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "获取所有非顶级部门",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/all",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:department)",
            },
          },
        ],
        result: "ApiResponse<Array<SysDept>>",
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "新增部门",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "新增部门",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/add",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:department:add)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<DeptAddReqDto>",
            name: "resources",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "修改部门",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "修改部门",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/edit",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:department:edit)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<DeptEditReqDto>",
            name: "resources",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "删除部门",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "删除部门",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/del",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:department:del)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<DeptDelReqDto>",
            name: "deptDelReqDto",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/dict",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "系统-系统设置：系统参数",
        },
      },
    ],
    className: "DictController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询字典类型",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/type/all",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(dict:list)",
            },
          },
        ],
        result: "ApiResponse<Array<SysDictType>>",
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询字典类型对应的字典数据",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/type/{dictType}",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(dict:list)",
            },
          },
        ],
        result: "ApiResponse<Array<SysDictData>>",
        params: [
          {
            modifiers: ["PathVariable"],
            type: "string",
            name: "dictType",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "新增字典类型",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "新增字典类型",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/type/add",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(dict:add)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "SysDictType",
            name: "dictType",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "新增字典数据",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "新增字典数据",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/data/add",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(dict:add)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "SysDictData",
            name: "dictData",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "修改字典类型",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "修改字典类型",
            },
          },
          {
            typeName: "PutMapping",
            config: {
              value: "/type/edit",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(dict:edit)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "SysDictType",
            name: "dictType",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "修改字典数据",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "修改字典数据",
            },
          },
          {
            typeName: "PutMapping",
            config: {
              value: "/data/edit",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(dict:edit)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "SysDictData",
            name: "dictData",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/eventActCategory",
        },
      },
      {
        typeName: "Api",
        config: {
          tags: "活动管理-活动类目",
        },
      },
    ],
    className: "EventActCategoryController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "列表",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:category)",
            },
          },
        ],
        result: "ApiResponse<PageData<EventCategoryResDto>>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<PageQuery<EventCategoryReqDto>>",
            name: "req",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "新增活动分类",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "新增活动分类",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/save",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:category:add)",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<EventCategoryReqDto>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "活动分类详情",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/edit/{id}",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:category:detail)",
            },
          },
        ],
        result: "ApiResponse<EventCategoryResDto>",
        params: [
          {
            modifiers: ["PathVariable"],
            type: "string",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "更新活动分类",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "更新活动分类",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/update",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:category:edit)",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<EventCategoryReqDto>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "更改状态",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "更改状态",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/changeStatus",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:category:toggle_status)",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<EventCategoryReqDto>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "删除活动分类",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "删除活动分类",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/delete/{ids}",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:category:del)",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["PathVariable"],
            type: "string",
            name: "ids",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/event",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "活动管理：活动列表",
        },
      },
    ],
    className: "EventController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "分页查询活动",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:list)",
            },
          },
        ],
        result: "ApiResponse<Record<string,Record<string, any>>>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<PageQuery<EventPageReqDto>>",
            name: "pageQuery",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "审核活动",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/review",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:list:audit)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<EventReviewReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "强制下架",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/delisting",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:list:toggle_status)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<EventForceOffReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "活动详情",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/detail",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:list:detail)",
            },
          },
        ],
        result: "ApiResponse<EventResDto>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<EventDetailReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "组合活动详情",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/group-detail",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:list:detail)",
            },
          },
        ],
        result: "ApiResponse<EventGroupResDto>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<EventDetailReqDto>",
            name: "dto",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/eventIndustryCategory",
        },
      },
      {
        typeName: "Api",
        config: {
          tags: "活动管理-行业类目",
        },
      },
    ],
    className: "EventIndustryCategoryController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "列表",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:industry)",
            },
          },
        ],
        result: "ApiResponse<PageData<EventCategoryResDto>>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<PageQuery<EventCategoryReqDto>>",
            name: "req",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "新增行业类目",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "新增行业类目",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/save",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:industry:add)",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<EventCategoryReqDto>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "编辑行业类目",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/edit/{id}",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:industry:detail)",
            },
          },
        ],
        result: "ApiResponse<EventCategoryResDto>",
        params: [
          {
            modifiers: ["PathVariable"],
            type: "string",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "更新行业类目",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "更新行业类目",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/update",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:industry:edit)",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<EventCategoryReqDto>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "更改状态",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "更改状态",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/changeStatus",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:industry:toggle_status)",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<EventCategoryReqDto>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "删除行业类目",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "删除行业类目",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/delete/{ids}",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:industry:del)",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["PathVariable"],
            type: "string",
            name: "ids",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "PostMapping",
            config: {
              value: "/excel-upload",
              consumes: "multipart/form-data",
            },
          },
        ],
        result: "ApiResponse<number>",
        params: [
          {
            modifiers: [],
            type: "undefined | any",
            name: "request",
          },
          {
            modifiers: ["RequestParam"],
            type: "undefined | any",
            name: "files",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/event-refund-template",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "活动：退改模板管理",
        },
      },
    ],
    className: "EventRefundTemplateController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询退改模板列表",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:refund:template)",
            },
          },
        ],
        result: "ApiResponse<PageResult<EventRefundTemplate>>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<PageQuery<EventRefundTemplateListReqDto>>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询退改模板详情",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/detail",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:refund:template:detail)",
            },
          },
        ],
        result: "ApiResponse<EventRefundTemplateResDto>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<EventRefundTemplateDetailReqDto>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "新增退改模板",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/add",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:refund:template:add)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<EventRefundTemplateReqDto>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "修改退改模板",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/edit",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:refund:template:edit)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<EventRefundTemplateReqDto>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "切换模板状态",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/toggle-status",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:refund:template:toggle_status)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<EventRefundTemplateDetailReqDto>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "删除退改模板",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/delete",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(event:refund:template:del)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<EventRefundTemplateDetailReqDto>",
            name: "request",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "RestController",
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "权限管理：权限规则",
        },
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/menus",
        },
      },
    ],
    className: "MenuController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "PostMapping",
            config: {
              value: "/build",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "获取前端所需菜单",
            },
          },
        ],
        result: "ApiResponse<Array<MenuVo>>",
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "返回上级类目",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/lazy",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:rule)",
            },
          },
        ],
        result: "ApiResponse<Array<SysMenu>>",
        params: [
          {
            modifiers: ["RequestParam"],
            type: "string",
            name: "pid",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "返回全部的菜单",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:rule)",
            },
          },
        ],
        result: "ApiResponse<Array<SysMenu>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<MenuListReqDto>",
            name: "menuListReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询菜单:根据ID获取",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/detail",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:rule:detail)",
            },
          },
        ],
        result: "ApiResponse<SysMenu>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<MenuDetailReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "新增菜单",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/add",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:rule:add)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<MenuAddReqDto>",
            name: "menuAddReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "修改菜单",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/edit",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:rule:edit)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<MenuEditReqDto>",
            name: "menuEditReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "删除菜单",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "删除菜单",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/del",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:rule:del)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<MenuDelReqDto>",
            name: "menuDelReqDto",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "RestController",
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "权限管理：主办方菜单管理",
        },
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/merchant-menus",
        },
      },
    ],
    className: "MerchantMenuController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "返回上级类目",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/lazy",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:sponsor:rule)",
            },
          },
        ],
        result: "ApiResponse<Array<PermissionMerchantMenu>>",
        params: [
          {
            modifiers: ["RequestParam"],
            type: "string",
            name: "pid",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "返回全部的商家菜单",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:sponsor:rule)",
            },
          },
        ],
        result: "ApiResponse<Array<PermissionMerchantMenu>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<MerchantMenuListReqDto>",
            name: "menuListReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询商家菜单:根据ID获取",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/detail",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:sponsor:rule:detail)",
            },
          },
        ],
        result: "ApiResponse<PermissionMerchantMenu>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<MerchantMenuDetailReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "新增商家菜单",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/add",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:sponsor:rule:add)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<MerchantMenuAddReqDto>",
            name: "menuAddReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "修改商家菜单",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/edit",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:sponsor:rule:edit)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<MerchantMenuEditReqDto>",
            name: "menuEditReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "删除商家菜单",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "删除商家菜单",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/del",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:sponsor:rule:del)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<MerchantMenuDelReqDto>",
            name: "menuDelReqDto",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Api",
        config: {
          tags: "商家通知信息",
        },
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/notifyMerchantMessages",
        },
      },
    ],
    className: "NotifyMerchantMessagesController",
  },
  {
    classModifiers: [
      {
        typeName: "Api",
        config: {
          tags: "通知管理-模版",
        },
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/notifyTemplates",
        },
      },
    ],
    className: "NotifyTemplatesController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "列表",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
        ],
        result: "ApiResponse<PageData<NotifyTemplatesResDto>>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<PageQuery<NotifyTemplatesReqDto>>",
            name: "req",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "通知模版详情",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/edit/{id}",
            },
          },
        ],
        result: "ApiResponse<NotifyTemplatesResDto>",
        params: [
          {
            modifiers: ["PathVariable"],
            type: "string",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "更改发送通知方式状态",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/changeStatus",
            },
          },
        ],
        result: "ApiResponse<boolean>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<NotifyTemplatesReqDto>",
            name: "req",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "RestController",
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/auth/online",
        },
      },
      {
        typeName: "Api",
        config: {
          tags: "系统：在线用户管理",
        },
      },
    ],
    className: "OnlineController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询在线用户",
            },
          },
          {
            typeName: "GetMapping",
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check()",
            },
          },
        ],
        result: "Partial<PageResult<OnlineUserDto>>",
        params: [
          {
            modifiers: [],
            type: "string",
            name: "username",
          },
          {
            modifiers: [],
            type: "undefined | any",
            name: "pageable",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "导出数据",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/download",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check()",
            },
          },
        ],
        result: "void",
        params: [
          {
            modifiers: [],
            type: "undefined | any",
            name: "response",
          },
          {
            modifiers: [],
            type: "string",
            name: "username",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "踢出用户",
            },
          },
          {
            typeName: "DeleteMapping",
            config: {
              value: "/del",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check()",
            },
          },
        ],
        result: "Partial<Record<string, any>>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "Array<string>",
            name: "keys",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/platform/config",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "系统-系统设置-基础设置",
        },
      },
    ],
    className: "PlatformConfigController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "获取平台配置列表",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/list",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(platform_config:list)",
            },
          },
        ],
        result: "ApiResponse<Array<SysPlatformConfig>>",
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "根据ID查询平台配置",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/{id}",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(platform_config:list)",
            },
          },
        ],
        result: "ApiResponse<SysPlatformConfig>",
        params: [
          {
            modifiers: ["PathVariable"],
            type: "number",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "新增平台配置",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "新增平台配置",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/add",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(platform_config:add)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<SysPlatformConfig>",
            name: "config",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "修改平台配置",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "修改平台配置",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/edit",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(platform_config:edit)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<SysPlatformConfig>",
            name: "config",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/region",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "系统：区域数据初始化接口",
        },
      },
    ],
    className: "RegionInitController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "AnonymousGetMapping",
            config: {
              value: "/init/by/amp",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "使用高德地图初始化国家下的省份和城市",
            },
          },
        ],
        result: "ApiResponse<string>",
        params: [
          {
            modifiers: ["RequestParam"],
            type: "string",
            name: "countryName",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "RestController",
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "权限管理：角色管理",
        },
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/roles",
        },
      },
    ],
    className: "RoleController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "获取单个role",
            },
          },
          {
            typeName: "GetMapping",
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:role:detail)",
            },
          },
        ],
        result: "ApiResponse<SysRole>",
        params: [
          {
            modifiers: ["RequestParam"],
            type: "string",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "返回全部的角色",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/all",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:role)",
            },
          },
        ],
        result: "ApiResponse<Array<SysRole>>",
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询角色",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:role)",
            },
          },
        ],
        result: "ApiResponse<PageResult<SysRole>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<PageQuery<RoleListReqDto>>",
            name: "roleListReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "新增角色",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "新增角色",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/add",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:role:add)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<RoleAddReqDto>",
            name: "roleAddReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "修改角色",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "修改角色",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/edit",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:role:edit)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<RoleEditReqDto>",
            name: "roleEditReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "修改角色菜单",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "修改角色菜单",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/menu",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:role:assign)",
            },
          },
        ],
        result: "ApiResponse<Record<string, any>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<RoleMenuEditReqDto>",
            name: "roleMenuEditReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "删除角色",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "删除角色",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/del",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:role:del)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<RoleDelReqDto>",
            name: "roleDelReqDto",
          },
        ],
      },
      {
        result: "number",
        params: [
          {
            modifiers: [],
            type: "number",
            name: "level",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/subscribe",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "广告管理:用户订阅管理",
        },
      },
    ],
    className: "SubscribeController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "分页查询订阅用户",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:subscription)",
            },
          },
        ],
        result: "ApiResponse<PageResult<SubscribeResDto>>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "ApiRequest<PageQuery<SubscribeReqDto>>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "删除订阅记录",
            },
          },
          {
            typeName: "DeleteMapping",
            config: {
              value: "/delete/{id}",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:subscription:del)",
            },
          },
        ],
        result: "ApiResponse<string>",
        params: [
          {
            modifiers: ["PathVariable"],
            type: "string",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "订阅详情",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/detail",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:subscription:detail)",
            },
          },
        ],
        result: "ApiResponse<SubscribeResDto>",
        params: [
          {
            modifiers: ["RequestParam", "NotBlank"],
            type: "string",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "订阅统计信息",
            },
          },
          {
            typeName: "GetMapping",
            config: {
              value: "/statistics",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:subscription)",
            },
          },
        ],
        result: "ApiResponse<SubscribeStatisticsResDto>",
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "批量发送消息给订阅用户",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/send/message",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:subscription:batch:send)",
            },
          },
        ],
        result: "ApiResponse<string>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<SubscribeSendMessageReqDto>",
            name: "request",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Slf4j",
      },
      {
        typeName: "Api",
        config: {
          tags: "订单：订单管理",
        },
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/order",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
    ],
    className: "TOrderController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "活动订单分页",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/event-page",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(order:event:order)",
            },
          },
        ],
        result: "ApiResponse<PageResult<TOrderEventPageResDto>>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<PageQuery<TOrderListReqDto>>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "SkipSign",
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "活动订单导出",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/event-export",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(order:event:order:export)",
            },
          },
        ],
        result: "void",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<TOrderListReqDto>",
            name: "request",
          },
          {
            modifiers: [],
            type: "undefined | any",
            name: "response",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "订阅订单分页",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/member-page",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(order:member:subscription)",
            },
          },
        ],
        result: "ApiResponse<PageResult<TOrderMemberPageResDto>>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<PageQuery<TOrderListReqDto>>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "订阅订单导出",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/member-export",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(order:member:subscription:export)",
            },
          },
        ],
        result: "void",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<TOrderListReqDto>",
            name: "request",
          },
          {
            modifiers: [],
            type: "undefined | any",
            name: "response",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Api",
        config: {
          tags: "广告管理：联系我们",
        },
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/contact-form",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
    ],
    className: "UserContactFormController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "分页查询表单记录",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/page",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:contact)",
            },
          },
        ],
        result: "ApiResponse<PageResult<UserContactFormListResDto>>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<PageQuery<UserContactFormListReqDto>>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询表单记录",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/detail",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:contact:detail)",
            },
          },
        ],
        result: "ApiResponse<UserContactFormDetailResDto>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<UserContactFormDetailDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "删除表单记录",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/delete",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:contact:del)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<UserContactFormDeletedDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "批量删除表单记录",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/batch-delete",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:contact:batch:del)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<UserContactFormBatchDeletedDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "导出",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/export",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(advertise:contact:export)",
            },
          },
        ],
        result: "void",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<UserContactFormListReqDto>",
            name: "dto",
          },
          {
            modifiers: [],
            type: "undefined | any",
            name: "response",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "Api",
        config: {
          tags: "权限管理：员工管理",
        },
      },
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/users",
        },
      },
      {
        typeName: "RequiredArgsConstructor",
      },
    ],
    className: "UserController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "用户详情",
            },
          },
          {
            typeName: "GetMapping",
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:employee:detail)",
            },
          },
        ],
        result: "ApiResponse<SysUser>",
        params: [
          {
            modifiers: ["RequestParam"],
            type: "string",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询用户",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/list",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:employee)",
            },
          },
        ],
        result: "ApiResponse<PageResult<SysUser>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<PageQuery<UserListReqDto>>",
            name: "pageQuery",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "新增员工",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "新增员工",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/add",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:employee:add)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<UserAddReqDto>",
            name: "userAddReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "修改用户",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "修改用户",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/edit",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:employee:edit)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<UserEditReqDto>",
            name: "userEditReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "修改用户启用状态",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "修改用户启用状态",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/toggleEnabled",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:employee:toggle_status)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<UserToggleEnabledReqDto>",
            name: "userToggleEnabledReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "修改用户：个人中心",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "修改用户：个人中心",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "center",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<UserUpdateCenterReqDto>",
            name: "userUpdateCenterReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "Log",
            config: {
              value: "删除用户",
            },
          },
          {
            typeName: "ApiOperation",
            config: {
              value: "删除用户",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/del",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:employee:del)",
            },
          },
        ],
        result: "ApiResponse<Record<string, any>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<UserDelReqDto>",
            name: "userDelReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "修改密码",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/updatePass",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<UserPassReqDto>",
            name: "userPassReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "重置密码",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(permission:employee:reset)",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/resetPwd",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<UserResetPwdReqDto>",
            name: "userResetPwdReqDto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "修改头像",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/updateAvatar",
            },
          },
          {
            typeName: "SkipSign",
          },
        ],
        result: "ApiResponse<Record<string,string>>",
        params: [
          {
            modifiers: ["RequestParam"],
            type: "undefined | any",
            name: "avatar",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "RestController",
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "会员管理：会员列表",
        },
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/user-member",
        },
      },
    ],
    className: "UserMemberController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "分页",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/page",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(member:list)",
            },
          },
        ],
        result: "ApiResponse<PageResult<UserMemberListResDto>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<PageQuery<UserMemberListReqDto>>",
            name: "pageQuery",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "导出",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/export",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(member:list:export)",
            },
          },
        ],
        result: "void",
        params: [
          {
            modifiers: ["Valid", "RequestBody"],
            type: "ApiRequest<UserMemberListReqDto>",
            name: "request",
          },
          {
            modifiers: [],
            type: "undefined | any",
            name: "response",
          },
        ],
      },
    ],
  },
  {
    classModifiers: [
      {
        typeName: "RestController",
      },
      {
        typeName: "RequiredArgsConstructor",
      },
      {
        typeName: "Api",
        config: {
          tags: "用户管理：用户列表",
        },
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/user-sys-user",
        },
      },
    ],
    className: "UserSysUserController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "分页查询用户",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/page",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(user:list)",
            },
          },
        ],
        result: "ApiResponse<PageResult<UserSysUserListResDto>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<PageQuery<UserSysUserListReqDto>>",
            name: "pageQuery",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "导出",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/export",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(user:list:export)",
            },
          },
        ],
        result: "void",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<UserSysUserListReqDto>",
            name: "dto",
          },
          {
            modifiers: [],
            type: "undefined | any",
            name: "response",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询用户详情",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/detail",
            },
          },
        ],
        result: "ApiResponse<UserSysUserDetailResDto>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<UserSysUserDetailReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "用户状态切换",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/toggle-status",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(user:list:toggle_status)",
            },
          },
        ],
        result: "ApiResponse<void>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<UserSysUserDetailReqDto>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "分页查询用户订单历史",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/detail/orders",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(user:list:detail)",
            },
          },
        ],
        result: "ApiResponse<PageResult<UserSysUserOrderResDto>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<PageQuery<UserSysUserOrderReqDto>>",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "分页查询用户收藏会议",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/detail/collections",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(user:list:detail)",
            },
          },
        ],
        result: "ApiResponse<PageResult<UserSysUserCollectionResDto>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<PageQuery<UserSysUserDetailReqDto>>",
            name: "dto",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "ApiOperation",
            config: {
              value: "查询用户浏览历史--最多返回四个",
            },
          },
          {
            typeName: "PostMapping",
            config: {
              value: "/detail/view-history",
            },
          },
          {
            typeName: "PreAuthorize",
            config: {
              value: "@el.check(user:list:detail)",
            },
          },
        ],
        result: "ApiResponse<PageResult<UserSysUserViewHistoryResDto>>",
        params: [
          {
            modifiers: ["Validated", "RequestBody"],
            type: "ApiRequest<UserSysUserDetailReqDto>",
            name: "dto",
          },
        ],
      },
    ],
  },
];
