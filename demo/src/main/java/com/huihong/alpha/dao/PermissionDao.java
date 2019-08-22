package com.huihong.alpha.dao;

import com.huihong.alpha.model.Permission;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface PermissionDao {

    /**
     * 
     * @Description:新增权限
     * @param:  Permission
     */
	@Insert("INSERT INTO PERMISSION" +
            "  (" +
            "    permission_id," +
            "    permission_name" +
            "  )" +
            "VALUES" +
            "  (" +
            "    #{permissionID}," +
            "    #{permissionName}" +
            "  )") 
    void createPermission(Permission permission);
    
     /**
     * 
     * @Description:修改权限
     * @param:  Permission
     */
    @Update("UPDATE PERMISSION" +
            "   SET " +
            "       permission_name = #{permissionName}" +
            " WHERE permission_id = #{permissionID}")
    void updatePermission(Permission permission);

    /**
     * 
     * @Description:删除权限
     * @param:  Permission
     */
    @Delete("DELETE FROM PERMISSION WHERE permission_id = #{permissionID}")
    void deletePermission(Long permissionID);
	
    /**
     * 
     * @Description:查询权限详情
     * @param:  Permission
     */
    @Select("SELECT permission_id,"+
            "       permission_name"+
            "  FROM PERMISSION"+
            " WHERE permission_id = #{permissionID}")
    Permission getPermission(Long permissionID);

    /**
     * 
     * @Description:查询权限列表
     * @param:  Permission
     */
    @Select("SELECT permission_id,"+
            "       permission_name"+
            "  FROM PERMISSION")
    List<Permission> getPermissionList();
    

}