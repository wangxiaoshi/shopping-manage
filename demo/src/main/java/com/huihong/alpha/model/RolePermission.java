package com.huihong.alpha.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RolePermission {

    //表id
    private Long rolePermissionID;
    // 角色id
    private Long roleID;
    // 权限id
    private Long permissionID;
    
}