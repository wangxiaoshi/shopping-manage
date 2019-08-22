package com.huihong.alpha.service;

import com.huihong.alpha.dao.UserRoleDao;
import com.huihong.alpha.model.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRoleService {

    @Autowired(required = false)
    private UserRoleDao userRoleDao;

    /**
     * @Description:创建用户角色
     * @param:  UserRole
     * @return: userRole    
     * @throws
     */
    public UserRole createUserRole(UserRole userRole) {
        userRoleDao.createUserRole(userRole);
        return userRole;
    }

    /**
    * @Description:修改用户角色
    * @param:  UserRole
    * @throws
    */
    public void updateUserRole(UserRole userRole) {
        userRoleDao.updateUserRole(userRole);
    }

    /**
    * @Description:删除用户角色
    * @param:  UserRole
    * @throws
    */
    public void deleteUserRole(String username) {
        userRoleDao.deleteUserRole(username);
    }

    /**
     * @Description:用户角色详情
     * @param:  UserRole
     * @throws
     */
    public UserRole getUserRole(String username, Long roleId) {
        return userRoleDao.getUserRole(username, roleId);
    }

    /**
    * <b>Description:</b><br> 校验用户是否已存在角色
    * @param username
    * @param roleId
    * @return
    * @Note
    * <b>Author:</b> yehan
    * <br><b>Date:</b> 2019年8月8日 下午3:37:05
    */
    public boolean isExistUserRole(String username, Long roleId) {
        return userRoleDao.isExistUserRole(username, roleId) > 0 ? true : false;
    }

    public Long getRoleByUserName(String userName) {
        return userRoleDao.getRoleByUserName(userName);
    }
}