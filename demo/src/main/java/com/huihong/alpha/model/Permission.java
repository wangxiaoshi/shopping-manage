package com.huihong.alpha.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Permission {

    // 权限id
    private Long permissionID;
    // 权限名
    private String permissionName;
    
}