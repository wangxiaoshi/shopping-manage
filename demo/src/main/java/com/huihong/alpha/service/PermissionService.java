package com.huihong.alpha.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.huihong.alpha.dao.PermissionDao;
import com.huihong.alpha.model.Permission;
import com.huihong.alpha.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PermissionService {

    @Autowired(required = false)
    private PermissionDao permissionDao;

    /**
     * @Description:创建权限
     * @param:  Permission
     * @return: permission    
     * @throws
     */
    public Permission createPermission(Permission permission){
        permissionDao.createPermission(permission);
        return permission;
    }

     /**
     * @Description:修改权限
     * @param:  Permission
     * @throws
     */
    public void updatePermission(Permission permission){
        permissionDao.updatePermission(permission);
    }
    
     /**
     * @Description:删除权限
     * @param:  Permission
     * @throws
     */
    public void deletePermission(Long permissionId){
        permissionDao.deletePermission(permissionId);
    }

    /**
     * @Description:权限详情
     * @param:  Permission
     * @throws
     */
    public Permission getPermission(Long permissionId){
        return permissionDao.getPermission(permissionId);
    }

    /**
     * @Description:权限列表
     * @param:  Page<Permission>
     * @return: Page<Permission>
     * @throws
     */
    public List<Permission> getPermissionList(){
        return permissionDao.getPermissionList();
    }

}