package com.huihong.alpha.dao;

import com.huihong.alpha.model.Role;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface RoleDao {

    /**
     * 
     * @Description:新增角色
     * @param:  Role
     */
	@Insert("INSERT INTO ROLE" +
            "  (" +
            "    role_name" +
            "  )" +
            "VALUES" +
            "  (" +
            "    #{roleName}" +
            "  )") 
	@Options(useGeneratedKeys = true, keyProperty = "roleID", keyColumn = "role_id")
    long createRole(Role role);
    
     /**
     * 
     * @Description:修改角色
     * @param:  Role
     */
    @Update("UPDATE ROLE" +
            "   SET " +
            "       role_name = #{roleName}" +
            " WHERE role_id = #{roleID}")
    void updateRole(Role role);

    /**
     * 
     * @Description:删除角色
     * @param:  Role
     */
    @Delete("DELETE FROM ROLE WHERE role_id = #{roleID}")
    void deleteRole(Long roleID);
	
    /**
     * 
     * @Description:查询角色详情
     * @param:  Role
     */
    @Select("SELECT role_id,"+
            "       role_name"+
            "  FROM ROLE"+
            " WHERE role_id = #{roleId}")
    Role getRole(Long roleId);

    /**
     * 
     * @Description:查询角色列表
     * @param:  Role
     */
    @Select("SELECT role_id,"+
            "       role_name"+
            "  FROM ROLE")
    List<Role> getRoleList();
    
    /**
     * 
     * @Description:查询用户角色列表
     * @param:  UserRole
     */
    @Select("SELECT r.role_id,"+
            "       r.role_name"+
            "  FROM USER_ROLE ur, ROLE r" +
            " WHERE ur.role_id = r.role_id")
    List<Role> getUserRoleList();
}