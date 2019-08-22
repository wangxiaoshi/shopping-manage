package com.huihong.alpha.util;

public class Constant {

	public static final String SUCCESS = "{}";

	public static final String JG_PUSH_CONN_ALERT_ERROR = "极光推送alert链接错误";

	public static final String JG_PUSH_REQ_ALERT_ERROR = "极光推送alert请求错误";

	public static final String JG_PUSH_CONN_MESSAGE_ERROR = "极光推送message链接错误";

	public static final String JG_PUSH_REQ_MESSAGE_ERROR = "极光推送message请求错误";

	public static final String USER_NOT_EXIST_ERROR = "用户不存在";
	public static final String USERNAME_EXIST_ERROR = "用户名已存在";
	public static final String NICKNAME_EXIST_ERROR = "昵称已存在";
	public static final String PHONE_EXIST_ERROR = "手机号已存在";
	public static final String CLUB_NAME_EXIST_ERROR = "俱乐部名称已存在";
	public static final String PROMOTION_CODE_ERROR = "推广码无效";
	public static final String USER_ATTENTION_ERROR = "用户已关注该用户";
	public static final String USER_FRIENDS_ERROR = "与该用户已成为好友";
	public static final String FRIEND_APPLY_ERROR = "已发过好友申请";
	public static final String USER_BLICK_LIST_ERROR = "该用户已拉入黑名单";
	public static final String USER_CLUB_ERROR = "用户已加入该俱乐部";
	public static final String CLUB_APPLY_ERROR = "已发过加入俱乐部申请";
	public static final String CLUB_LEAGUE_ERROR = "与该俱乐部已成为联盟";
	public static final String LEAGUE_APPLY_ERROR = "已发过联盟申请";
	public static final String ACCOUNT_MONEY_ERROR = "账户余额不足";
	public static final String USER_ROLE_ERROR = "已存在该角色";
	public static final String CAN_NOT_WITHDRAW_ERROR = "此接口不支持提现";
	public static final String ADVERTISING_TITLE_ERROR = "广告标题已存在";
	public static final String CARD_NO_EXIST_ERROR = "银行卡号已存在";
	public static final String SMS_CODE_ERROR = "短信验证码错误";

	public static final String POST = "post";

	public static final String USERNAME = "username";

	public static final Integer GROUP_MENBER_MUBER_MIN = 666;
	public static final Integer GROUP_MENBER_MUBER_MIDDLE = 1188;
	public static final Integer GROUP_MENBER_MUBER_MAX = 2000;

	public static final String JG_USER_STAT_URL = "https://api.im.jpush.cn/v1/users/userstat";
	
	public static final String WECHAT_ACCESS_TOKEN = "https://api.weixin.qq.com/sns/oauth2/access_token?appid={appid}&secret={secret}&code={code}&grant_type=authorization_code";

	public static final String WECHAT_USERINFO = "https://api.weixin.qq.com/sns/userinfo?access_token={accessToken}&openid={openid}";

	public static final String WEIBO_ACCESS_TOKEN = "https://api.weibo.com/oauth2/access_token";

	public static final String QQ_ACCESS_TOKEN = "https://graph.qq.com/oauth2.0/token?grant_type=authorization_code&client_id={qqClientId}&client_secret={qqClientSecret}&code={code}&redirect_uri={redirectUri}";

	public static final String QQ_OPENID = "https://graph.qq.com/oauth2.0/me?access_token={accessToken}";

	public static final String GET_WECHAT_OPENID_ERROR = "获取微信openid出错";

	public static final String ALIPAY_GATEWAY_URL = "https://openapi.alipay.com/gateway.do";
	//public static final String ALIPAY_GATEWAY_URL = "https://openapi.alipaydev.com/gateway.do";
	
	public static final String ALIPAY_LOGIN_API_NAME = "com.alipay.account.auth";

	public static final String ALIPAY_LOGIN_AUTH_TYPE = "AUTHACCOUNT";

	public static final String ALIPAY_LOGIN_BIZ_TYPE = "openservice";

	public static final String ALIPAY_LOGIN_METHOD = "alipay.open.auth.sdk.code.get";

	public static final String ALIPAY_LOGIN_PRODUCT_ID = "APP_FAST_LOGIN";

	public static final String ALIPAY_LOGIN_SCOPE = "kuaijie";

	public static final String ALIPAY_LOGIN_TARGET_ID = "20141225xxxx";

	public static final String ALIPAY_LOGIN_APP_NAME = "funx";

	public static final String ALIPAY_LOGIN_SIGN_TYPE = "RSA";
}
