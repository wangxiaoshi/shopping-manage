package com.huihong.alpha.service;

import com.huihong.alpha.dao.RoleDao;
import com.huihong.alpha.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    @Autowired(required = false)
    private RoleDao roleDao;

    /**
     * @Description:创建角色
     * @param:  Role
     * @return: role    
     * @throws
     */
    public Role createRole(Role role){
//        System.out.println("Service收到名字:" + role.getRoleName());
        roleDao.createRole(role);
        return role;
    }

     /**
     * @Description:修改角色
     * @param:  Role
     * @throws
     */
    public void updateRole(Role role){
        roleDao.updateRole(role);
    }
    
     /**
     * @Description:删除角色
     * @param:  Role
     * @throws
     */
    public void deleteRole(Long roleID){
        roleDao.deleteRole(roleID);
    }

    /**
     * @Description:角色详情
     * @param:  Role
     * @throws
     */
    public Role getRole(Long roleId){
        return roleDao.getRole(roleId);
    }

    /**
     * @Description:角色列表
     * @param:  Page<Role>
     * @return: Page<Role>
     * @throws
     */
    public List<Role> getRoleList(){
        return roleDao.getRoleList();
    }

    /**
     * @Description:用户角色列表
     * @param:  Page<UserRole>
     * @return: Page<UserRole>
     * @throws
     */
    public List<Role> getUserRoleList(String username){
        return roleDao.getUserRoleList();
    }

}