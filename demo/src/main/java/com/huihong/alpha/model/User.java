package com.huihong.alpha.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.Date;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    //用户ID
    private Long userID;
    //用户名
    private String userName;
    //用户密码
    private String userPassword;
    //用户邮箱
    private String userEmail;
    //用户电话
    private String userPhone;
    //用户性别
    private Integer userGender;
    //用户分组
    private Integer group;
    //用户角色
    private Integer userRole;
    //用户生日  TODO: 日期格式
    private Date userBirthday;
    //用户注册时间
    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss") //出参
    private Date userRegTime;
    //
    private Integer uploadSum;
    //用户省份
    private String userProvince;
    //用户城市
    private String userCity;
    //用户地区
    private String userArea;

}
