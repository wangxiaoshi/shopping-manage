package com.huihong.alpha.controller;

import com.huihong.alpha.model.Permission;
import com.huihong.alpha.model.Role;
import com.huihong.alpha.model.RolePermission;
import com.huihong.alpha.model.UserRole;
import com.huihong.alpha.service.PermissionService;
import com.huihong.alpha.service.RolePermissionService;
import com.huihong.alpha.service.RoleService;
import com.huihong.alpha.service.UserRoleService;
import com.huihong.alpha.util.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class RoleController {

    @Autowired
    private RoleService roleService;
    @Autowired
    private UserRoleService userRoleService;
    @Autowired
    private RolePermissionService rolePermissionService;
    @Autowired
    private PermissionService permissionService;

    /**
     * @Description:角色列表
     * @param:  Role
     * @return: ResponseEntity<Object>
     * @throws
     */
    @PostMapping("/role/list")
    @PreAuthorize("hasAuthority('permission_browse')")
    public ResponseEntity<Object> getRoleList() {
        Map<String, Object> map = new HashMap<String, Object>();
        List<Role> list = roleService.getRoleList();
        map.put("list", list);
        return ResponseEntity.ok(map);
    }

    /**
     * @Description: 创建新角色
     * @param roleName 输入的新名字
     * @return
     */
    @PostMapping("/role")
    @PreAuthorize("hasAuthority('permission_edit')")
    public ResponseEntity<Object> createRole(@RequestBody String roleName) {
//        System.out.println("后端收到:" + roleName);
        Role role = new Role();
        role.setRoleName(roleName.replace("\"", ""));

        roleService.createRole(role);
        return ResponseEntity.ok(Constant.SUCCESS);
    }

    /**
     * @Description: 更改角色名字
     * @param role
     * @return
     */
    @PutMapping("/role")
    @PreAuthorize("hasAuthority('permission_edit')")
    public ResponseEntity<Object> updateRole(@RequestBody Role role) {
//        System.out.println("前端传来ID"+role.getRoleID());
//        System.out.println("前端传来名字"+role.getRoleName());
        //更新角色表
        roleService.updateRole(role);
        return ResponseEntity.ok(Constant.SUCCESS);
    }

    /**
     * @Description:创建用户角色对照
     * @param:  UserRole
     * @return: ResponseEntity<Object>
     * @throws
     */
    @PostMapping("/user/role")
    public ResponseEntity<Object> createUserRole(@RequestBody UserRole userRole) {
        // 校验是否已存在角色
        if (userRoleService.isExistUserRole(userRole.getUserName(), userRole.getRoleID())) {
            return new ResponseEntity<>(Constant.USER_ROLE_ERROR, HttpStatus.BAD_REQUEST);
        }
        userRoleService.createUserRole(userRole);
        return ResponseEntity.ok(Constant.SUCCESS);
    }

    /**
     * @Description:删除角色
     * @param:  roleID
     * @return: ResponseEntity<Object>
     * @throws
     */
    @DeleteMapping("/role/{roleID}")
    @PreAuthorize("hasAuthority('permission_edit')")
    public ResponseEntity<Object> deleteRole(@PathVariable("roleID") Long roleID) {
        roleService.deleteRole(roleID);
        rolePermissionService.deleteRolePermissionByRoleID(roleID);
        return ResponseEntity.ok(Constant.SUCCESS);
    }

//    @PostMapping("/role/permission/list")
//    public ResponseEntity<Object> getPermissionList() {
//        Map<String, Object> map = new HashMap<String, Object>();
//        List<Permission> list = permissionService.getPermissionList();
//        map.put("list", list);
//        return ResponseEntity.ok(map);
//    }

    @PostMapping("/role/permission/{roleID}")
    @PreAuthorize("hasAuthority('permission_browse')")
    public ResponseEntity<Object> getPermissionByRoleID(@PathVariable("roleID") Long roleID) {
        Map<String, Object> map = new HashMap<String, Object>();
        List<RolePermission> list = rolePermissionService.getPermissionByRoleID(roleID);
        map.put("list", list);
        return ResponseEntity.ok(map);
    }

    @PutMapping("/role/permission")
    @PreAuthorize("hasAuthority('permission_edit')")
    public ResponseEntity<Object> updateRolePermissionByRoleID(@RequestBody List<RolePermission> rolePermissionList) {
        Long roleID = rolePermissionList.get(0).getRoleID();
        rolePermissionService.updateRolePermission(roleID, rolePermissionList);
        return ResponseEntity.ok(Constant.SUCCESS);
    }
}
