package com.huihong.alpha.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Role {

    // 角色id
    private Long roleID;
    // 角色名
    private String roleName;

}