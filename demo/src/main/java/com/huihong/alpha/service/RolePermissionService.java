package com.huihong.alpha.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.huihong.alpha.dao.RolePermissionDao;
import com.huihong.alpha.model.RolePermission;
import com.huihong.alpha.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RolePermissionService {

    @Autowired(required = false)
    private RolePermissionDao rolePermissionDao;

    /**
     * @Description:通过角色id查询角色权限
     * @param roleID
     * @return
     */
    public List<RolePermission> getPermissionByRoleID(Long roleID) {
        List<RolePermission> listOfRP = rolePermissionDao.getRolePermissionByRoleID(roleID);
//        System.out.println("dao返回: " + listOfRP.toString());
        return listOfRP;
    }

    /**
     * @Description:创建角色权限
     * @param:  RolePermission
     * @return: rolePermission    
     * @throws
     */
    public RolePermission createRolePermission(RolePermission rolePermission){
        rolePermissionDao.createRolePermission(rolePermission);
        return rolePermission;
    }


     /**
     * @Description:修改角色权限
     * @param:  RolePermission
     * @throws
     */
    public void updateRolePermission(Long roleID, List<RolePermission> rolePermissionList){
        rolePermissionDao.deleteRolePermissionByRoleID(roleID);
        for (int i = 0; i < rolePermissionList.size(); i++) {
            rolePermissionDao.createRolePermission(rolePermissionList.get(i));
        }
    }
    
     /**
     * @Description:删除角色权限
     * @param:  RolePermission
     * @throws
     */
    public void deleteRolePermissionByRoleID(Long roleID){
        rolePermissionDao.deleteRolePermissionByRoleID(roleID);
    }

    /**
     * @Description:通过角色id查询所对应的权限名列表
     * @param roleID
     * @return
     */
    public List<String> getPermissionNameListByRoleID(Long roleID) {
        return rolePermissionDao.getPermissionListByRoleID(roleID);
    }
}