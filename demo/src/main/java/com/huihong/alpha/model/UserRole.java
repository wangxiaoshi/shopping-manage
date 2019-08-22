package com.huihong.alpha.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;


@AllArgsConstructor
@Setter
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserRole {


    // 用户名
//    @NotEmpty(groups = { Insert.class }, message = "用户名不能为空")
    private String userName;
    // 角色id
//    @NotNull(groups = { Insert.class }, message = "角色id不能为空")
    private Long roleID;
    
}