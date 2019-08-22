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
public class Corporate {
    //企业
    private Long corporateID;
    //企业名字
    private String corporateName;
    //企业法人
    private String corporateLegalPerson;
    //企业电话
    private String corporatePhone;
    //企业经营范围
    private String corporateBusiScope;
    //企业成立时间
    @JsonFormat(timezone = "GMT+8")
    private Date corporateCreateTime;
    //企业在网站注册时间
    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    private Date corporateRegTime;
    //企业省份
    private String corporateProvince;
    //企业城市
    private String corporateCity;
    //企业地区
    private String corporateArea;

}
