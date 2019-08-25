package com.huihong.alpha.dao;

import com.huihong.alpha.model.RolePermission;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface RolePermissionDao {

    /**
     * 
     * @Description:新增角色权限
     * @param:  RolePermission
     */
	@Insert("INSERT INTO ROLE_PERMISSION" +
            "  (" +
            "    role_id," +
            "    permission_id" +
            "  )" +
            "VALUES" +
            "  (" +
            "    #{roleID}," +
            "    #{permissionID}" +
            "  )") 
    void createRolePermission(RolePermission rolePermission);
    
//     /**
//     *
//     * @Description:修改角色权限
//     * @param:  RolePermission
//     */
//    @Update("UPDATE ROLE_PERMISSION" +
//            "   SET " +
//            " WHERE role_id = #{roleId} AND permission_id = #{permissionId}")
//    void updateRolePermission(RolePermission rolePermission);

//    /**
//     *
//     * @Description:删除角色权限
//     * @param:  RolePermission
//     */
//    @Delete("DELETE FROM ROLE_PERMISSION WHERE role_id = #{roleId} AND permission_id = #{permissionId}")
//    void deleteRolePermission(String roleId, String permissionId);
	
    /**
     * TODO:使用中
     * @Description:根据角色id查询指定角色权限
     * @param:  RolePermission
     */
    @Select("SELECT permission_id "+
            "  FROM ROLE_PERMISSION "+
            " WHERE role_id = #{roleID}")
    List<RolePermission> getRolePermissionByRoleID(Long roleID);

    /**
     * TODO: 使用中
     * @Description:根据角色id查询指定角色的权限名字列表, 以便userDetailService使用
     * @param roleID
     * @return
     */
    @Select("SELECT p.permission_name " +
            "  FROM ROLE_PERMISSION rp, PERMISSION p " +
            " WHERE rp.role_id = #{roleID} AND rp.permission_id = p.permission_id ")
    List<String> getPermissionListByRoleID(Long roleID);


    /**
     * TODO:使用中
     * @Description:通过角色id删除该角色所有权限
     * @param roleID
     */
    @Delete("DELETE FROM ROLE_PERMISSION " +
            "WHERE role_id = #{roleID}")
    void deleteRolePermissionByRoleID(Long roleID);

}