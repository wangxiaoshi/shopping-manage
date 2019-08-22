package com.huihong.alpha.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.Date;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Model {

    //资源编号
    private Long modelID;
    //资源名
    private String modelName;
    //上传用户编号
    private Long userID;
    //资源上传时间
    private Date uploadDate;
    //资源审核状态
    private Boolean reviewStat;
    //资源下载量
    private Integer downloadSum;

}
